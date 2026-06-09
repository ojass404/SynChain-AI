"""Procurement router."""
import uuid
from typing import Optional
from fastapi import APIRouter, Depends, UploadFile, File, Form, HTTPException, Query, BackgroundTasks
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, desc
from sqlalchemy.orm import selectinload
from app.database import get_db
from app.models.all_models import ProcurementRequest, RFQ, NegotiationRound, PurchaseOrder, AgentLog, Vendor, Project, ProcurementStatus, InputType
from app.schemas.procurement import ProcurementResponse, ProcurementDetail
from app.tasks.celery_tasks import run_procurement_pipeline

router = APIRouter()


@router.post("/", response_model=ProcurementResponse, status_code=201)
async def create_procurement(
    background_tasks: BackgroundTasks,
    input_type: InputType = Form(InputType.text),
    raw_text: Optional[str] = Form(None),
    item_name: Optional[str] = Form(None),
    quantity: Optional[float] = Form(None),
    unit: Optional[str] = Form(None),
    budget_inr: Optional[float] = Form(None),
    deadline: Optional[str] = Form(None),
    preferred_category: Optional[str] = Form(None),
    project_id: Optional[str] = Form(None),
    whatsapp_number: Optional[str] = Form(None),
    file: Optional[UploadFile] = File(None),
    db: AsyncSession = Depends(get_db),
):
    """Create a new procurement request."""
    raw_input_url = None
    
    if file and file.filename:
        # For demo, just store the filename
        raw_input_url = f"uploaded://{file.filename}"
        if file.content_type:
            if "pdf" in file.content_type:
                input_type = InputType.pdf
            elif "image" in file.content_type:
                input_type = InputType.image
            elif "audio" in file.content_type:
                input_type = InputType.voice

    procurement = ProcurementRequest(
        id=uuid.uuid4(),
        status=ProcurementStatus.pending,
        input_type=input_type,
        raw_input_url=raw_input_url,
        raw_text=raw_text,
        item_name=item_name,
        quantity=quantity,
        unit=unit,
        budget_inr=budget_inr,
        deadline=deadline,
        preferred_category=preferred_category,
        project_id=uuid.UUID(project_id) if project_id else None,
        whatsapp_requester_number=whatsapp_number,
    )
    db.add(procurement)
    await db.commit()
    await db.refresh(procurement)

    # Kick off Celery task
    background_tasks.add_task(run_procurement_pipeline.delay, str(procurement.id))

    return procurement


@router.get("/", response_model=list[ProcurementResponse])
async def list_procurements(
    status: Optional[str] = Query(None),
    project_id: Optional[str] = Query(None),
    limit: int = Query(20, ge=1, le=100),
    offset: int = Query(0, ge=0),
    db: AsyncSession = Depends(get_db),
):
    """List procurement requests."""
    query = select(ProcurementRequest).order_by(desc(ProcurementRequest.created_at))
    if status:
        query = query.where(ProcurementRequest.status == status)
    if project_id:
        query = query.where(ProcurementRequest.project_id == uuid.UUID(project_id))
    query = query.offset(offset).limit(limit)
    result = await db.execute(query)
    return result.scalars().all()


@router.get("/{procurement_id}", response_model=ProcurementDetail)
async def get_procurement(procurement_id: str, db: AsyncSession = Depends(get_db)):
    """Get procurement detail."""
    query = (
        select(ProcurementRequest)
        .options(
            selectinload(ProcurementRequest.rfqs),
            selectinload(ProcurementRequest.purchase_orders),
            selectinload(ProcurementRequest.agent_logs),
            selectinload(ProcurementRequest.selected_vendor),
            selectinload(ProcurementRequest.project),
        )
        .where(ProcurementRequest.id == uuid.UUID(procurement_id))
    )
    result = await db.execute(query)
    procurement = result.scalar_one_or_none()
    if not procurement:
        raise HTTPException(status_code=404, detail="Procurement not found")
    return procurement


@router.delete("/{procurement_id}")
async def cancel_procurement(procurement_id: str, db: AsyncSession = Depends(get_db)):
    """Cancel a pending procurement."""
    query = select(ProcurementRequest).where(ProcurementRequest.id == uuid.UUID(procurement_id))
    result = await db.execute(query)
    procurement = result.scalar_one_or_none()
    if not procurement:
        raise HTTPException(status_code=404, detail="Not found")
    procurement.status = ProcurementStatus.failed
    await db.commit()
    return {"message": "Cancelled"}