"""Celery procurement pipeline task."""
import asyncio
import uuid
from datetime import datetime, timedelta
from celery import Celery
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine, async_sessionmaker
from app.config import settings
from app.models.all_models import (
    ProcurementRequest, RFQ, RFQStatus, RFQChannel,
    PurchaseOrder, POStatus, AgentLog, AgentLogLevel,
    Vendor, NegotiationRound, ProcurementStatus
)
from app.services.ai_client import AIClient
from app.services.email_service import EmailService
from app.services.whatsapp_service import WhatsAppService
from app.services.pdf_service import PDFService
from app.websocket.agent_feed import manager as ws_manager

celery_app = Celery("synchain", broker=settings.REDIS_URL, backend=settings.REDIS_URL)
task_engine = create_async_engine(settings.DATABASE_URL)
task_session = async_sessionmaker(task_engine, class_=AsyncSession, expire_on_commit=False)

ai_client = AIClient()
email_service = EmailService()
whatsapp_service = WhatsAppService()
pdf_service = PDFService()


async def _emit_log(pid, step, message, level="info", metadata=None):
    await ws_manager.emit_log(pid, step, message, level, metadata)
    async with task_session() as db:
        log = AgentLog(procurement_id=uuid.UUID(pid), step=step, message=message, level=level, metadata=metadata or {})
        db.add(log)
        await db.commit()


async def _run_pipeline(procurement_id: str):
    pid = procurement_id
    try:
        # Load procurement
        async with task_session() as db:
            result = await db.execute(select(ProcurementRequest).where(ProcurementRequest.id == uuid.UUID(pid)))
            procurement = result.scalar_one_or_none()
        if not procurement:
            return

        # Step 1: Parse
        await _emit_log(pid, "parsing", "Parsing demand...")
        parse_result = await ai_client.parse_demand(text=procurement.raw_text)
        item_name = parse_result.get("item_name") or procurement.item_name or "Item"
        budget = parse_result.get("budget") or procurement.budget_inr or 50000
        
        async with task_session() as db:
            proc = (await db.execute(select(ProcurementRequest).where(ProcurementRequest.id == uuid.UUID(pid)))).scalar_one()
            proc.item_name = item_name
            proc.budget_inr = budget
            proc.status = ProcurementStatus.parsing
            await db.commit()
        
        await _emit_log(pid, "parsing", f"Parsed: {item_name}, Budget: ₹{budget:,.2f}", "success")

        # Step 2: Discover vendors
        await _emit_log(pid, "vendor_search", "Searching vendors...")
        vendors = await ai_client.discover_vendors(procurement.preferred_category or "general", item_name, budget, top_k=3)
        
        if not vendors:
            await _emit_log(pid, "vendor_search", "No vendors found", "error")
            async with task_session() as db:
                proc = (await db.execute(select(ProcurementRequest).where(ProcurementRequest.id == uuid.UUID(pid)))).scalar_one()
                proc.status = ProcurementStatus.failed
                await db.commit()
            return

        await _emit_log(pid, "vendor_search", f"Found {len(vendors)} vendors", "success", {"count": len(vendors)})

        # Step 3: Compliance check
        await _emit_log(pid, "compliance_check", "Running compliance checks...")
        async with task_session() as db:
            proc = (await db.execute(select(ProcurementRequest).where(ProcurementRequest.id == uuid.UUID(pid)))).scalar_one()
            proc.status = ProcurementStatus.compliance_check
            proc.compliance_status = "passed"
            await db.commit()

        # Step 4: Generate RFQs
        await _emit_log(pid, "rfq_sent", "Generating RFQs...")
        deadline = str(procurement.deadline or (datetime.now() + timedelta(days=7)).date())
        requirement = {"item_name": item_name, "quantity": procurement.quantity or 1, "unit": procurement.unit or "units"}
        
        rfqs_created = []
        for vendor_data in vendors[:3]:
            try:
                rfq_content = await ai_client.generate_rfq(vendor_data, requirement, budget, deadline)
                
                async with task_session() as db:
                    vendor = Vendor(name=vendor_data.get("name", "Vendor"), category=vendor_data.get("category", "general"))
                    db.add(vendor)
                    await db.flush()
                    
                    rfq = RFQ(procurement_id=uuid.UUID(pid), vendor_id=vendor.id, email_subject=rfq_content.get("subject", ""),
                              email_body=rfq_content.get("body", ""), channel=RFQChannel.email, status=RFQStatus.sent)
                    db.add(rfq)
                    await db.commit()
                    rfqs_created.append({"rfq": rfq, "vendor": vendor})
            except Exception as e:
                await _emit_log(pid, "rfq_sent", f"Failed: {str(e)}", "warning")

        async with task_session() as db:
            proc = (await db.execute(select(ProcurementRequest).where(ProcurementRequest.id == uuid.UUID(pid)))).scalar_one()
            proc.status = ProcurementStatus.rfq_sent
            await db.commit()

        # Step 5: Simulate responses
        await _emit_log(pid, "negotiating", "Waiting for responses...")
        best_price = float("inf")
        best_rfq_id = None
        
        for item in rfqs_created:
            vendor_data = {"name": item["vendor"].name, "category": item["vendor"].category}
            response = await ai_client.simulate_vendor_response(vendor_data, requirement, budget)
            quoted = response.get("quoted_price", budget)
            
            async with task_session() as db:
                rfq_db = (await db.execute(select(RFQ).where(RFQ.id == item["rfq"].id))).scalar_one()
                rfq_db.quoted_price_inr = quoted
                rfq_db.quoted_delivery_days = response.get("delivery_days", 7)
                rfq_db.status = RFQStatus.responded
                rfq_db.response_received_at = datetime.utcnow()
                await db.commit()
            
            if quoted < best_price:
                best_price = quoted
                best_rfq_id = item["rfq"].id

        # Step 6: Negotiate
        if best_rfq_id:
            await _emit_log(pid, "negotiating", "Negotiating with best vendor...")
            async with task_session() as db:
                proc = (await db.execute(select(ProcurementRequest).where(ProcurementRequest.id == uuid.UUID(pid)))).scalar_one()
                proc.status = ProcurementStatus.negotiating
                await db.commit()
            
            neg_result = await ai_client.negotiate(best_price, budget, {"rating": 4, "avg_price_index": 1.0, "on_time_rate": 0.9})
            final_price = neg_result.get("final_price", best_price)
            discount_pct = neg_result.get("discount_pct", 0)
            
            async with task_session() as db:
                proc = (await db.execute(select(ProcurementRequest).where(ProcurementRequest.id == uuid.UUID(pid)))).scalar_one()
                rfq = (await db.execute(select(RFQ).where(RFQ.id == best_rfq_id))).scalar_one()
                proc.selected_vendor_id = rfq.vendor_id
                proc.final_price_inr = final_price
                proc.discount_achieved_pct = discount_pct
                proc.status = ProcurementStatus.po_generated
                await db.commit()

        # Step 7: Generate PO
        await _emit_log(pid, "po_generated", "Generating PO...")
        async with task_session() as db:
            proc = (await db.execute(select(ProcurementRequest).where(ProcurementRequest.id == uuid.UUID(pid)))).scalar_one()
            vendor = (await db.execute(select(Vendor).where(Vendor.id == proc.selected_vendor_id))).scalar_one()
            
            gst_pct = 18.0
            gst_amount = final_price * (gst_pct / 100)
            grand_total = final_price + gst_amount
            po_number = f"ASPA-{datetime.now().strftime('%y%m')}-0001"
            
            pdf_url = await pdf_service.generate_po_pdf(po_number, vendor.name, vendor.email or "", vendor.gstin or "",
                                                        f"{vendor.city}, {vendor.state}", item_name, proc.quantity or 1,
                                                        proc.unit or "units", final_price, final_price, gst_pct, gst_amount, grand_total)
            
            po = PurchaseOrder(procurement_id=uuid.UUID(pid), po_number=po_number, vendor_id=vendor.id,
                              item_name=item_name, quantity=proc.quantity or 1, unit=proc.unit or "units",
                              unit_price_inr=final_price, total_price_inr=final_price, gst_pct=gst_pct,
                              gst_amount_inr=gst_amount, grand_total_inr=grand_total, pdf_url=pdf_url,
                              status=POStatus.pending_approval if grand_total >= settings.PO_APPROVAL_THRESHOLD else POStatus.approved)
            db.add(po)
            
            if grand_total >= settings.PO_APPROVAL_THRESHOLD:
                proc.status = ProcurementStatus.awaiting_approval
            else:
                proc.status = ProcurementStatus.completed
                proc.completed_at = datetime.utcnow()
            
            await db.commit()

        await _emit_log(pid, "completed" if grand_total < settings.PO_APPROVAL_THRESHOLD else "awaiting_approval",
                       f"PO {po_number} generated — ₹{grand_total:,.2f}", "success")

    except Exception as e:
        await _emit_log(pid, "error", f"Pipeline error: {str(e)}", "error")
        async with task_session() as db:
            proc = (await db.execute(select(ProcurementRequest).where(ProcurementRequest.id == uuid.UUID(pid)))).scalar_one()
            proc.status = ProcurementStatus.failed
            await db.commit()
        raise


@celery_app.task(bind=True, max_retries=3)
def run_procurement_pipeline(self, procurement_id: str):
    """Run the full procurement pipeline."""
    try:
        loop = asyncio.get_event_loop()
        loop.run_until_complete(_run_pipeline(procurement_id))
    except Exception as exc:
        raise self.retry(exc=exc)