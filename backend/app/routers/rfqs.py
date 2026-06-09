"""RFQ router."""
import uuid
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, desc, func
from sqlalchemy.orm import selectinload
from app.database import get_db
from app.models.all_models import RFQ, RFQStatus, Vendor, ProcurementRequest

router = APIRouter()


@router.get("/")
async def list_rfqs(
    status: Optional[str] = Query(None),
    procurement_id: Optional[str] = Query(None),
    limit: int = Query(20),
    offset: int = Query(0),
    db: AsyncSession = Depends(get_db),
):
    """RFQ inbox."""
    query = select(RFQ).options(selectinload(RFQ.vendor)).order_by(desc(RFQ.created_at))
    if status:
        query = query.where(RFQ.status == status)
    if procurement_id:
        query = query.where(RFQ.procurement_id == uuid.UUID(procurement_id))
    query = query.offset(offset).limit(limit)
    result = await db.execute(query)
    rfqs = result.scalars().all()
    return [
        {
            "id": str(r.id), "procurement_id": str(r.procurement_id),
            "vendor_id": str(r.vendor_id), "vendor_name": r.vendor.name if r.vendor else None,
            "channel": r.channel.value, "status": r.status.value,
            "quoted_price_inr": r.quoted_price_inr, "sent_at": r.sent_at,
        }
        for r in rfqs
    ]


@router.get("/compare/{procurement_id}")
async def compare_vendors(procurement_id: str, db: AsyncSession = Depends(get_db)):
    """Compare vendors for a procurement."""
    rfq_query = (
        select(RFQ).options(selectinload(RFQ.vendor))
        .where(RFQ.procurement_id == uuid.UUID(procurement_id))
        .limit(5)
    )
    rfq_result = await db.execute(rfq_query)
    rfqs = rfq_result.scalars().all()
    
    vendors = []
    for rfq in rfqs:
        if rfq.vendor:
            vendors.append({
                "vendor_id": str(rfq.vendor.id),
                "vendor_name": rfq.vendor.name,
                "vendor_category": rfq.vendor.category,
                "quoted_price_inr": rfq.quoted_price_inr,
                "quoted_delivery_days": rfq.quoted_delivery_days,
                "ml_score": rfq.vendor.ml_score,
                "is_msme": rfq.vendor.is_msme,
                "is_verified": rfq.vendor.is_verified,
                "rfq_status": rfq.status.value,
                "channel": rfq.channel.value,
            })
    
    return {"procurement_id": procurement_id, "vendors": vendors}