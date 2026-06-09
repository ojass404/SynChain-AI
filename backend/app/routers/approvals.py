"""Approvals router."""
import uuid
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func
from sqlalchemy.orm import selectinload
from app.database import get_db
from app.models.all_models import PurchaseOrder, POStatus

router = APIRouter()


@router.get("/")
async def list_approvals(status: str = "pending", db: AsyncSession = Depends(get_db)):
    """List pending approvals."""
    query = select(PurchaseOrder).options(
        selectinload(PurchaseOrder.vendor), selectinload(PurchaseOrder.procurement)
    ).order_by(PurchaseOrder.created_at.desc())
    
    if status == "pending":
        query = query.where(PurchaseOrder.status == POStatus.pending_approval)
    
    result = await db.execute(query)
    pos = result.scalars().all()
    return [
        {
            "id": str(po.id), "po_number": po.po_number,
            "vendor_name": po.vendor.name if po.vendor else None,
            "item_name": po.item_name, "grand_total_inr": po.grand_total_inr,
            "status": po.status.value, "pdf_url": po.pdf_url,
            "above_threshold": po.grand_total_inr >= 50000,
        }
        for po in pos
    ]


@router.post("/{po_id}/approve")
async def approve_po(po_id: str, db: AsyncSession = Depends(get_db)):
    """Approve a PO."""
    query = select(PurchaseOrder).where(PurchaseOrder.id == uuid.UUID(po_id))
    result = await db.execute(query)
    po = result.scalar_one_or_none()
    if not po:
        raise HTTPException(status_code=404, detail="PO not found")
    po.status = POStatus.approved
    po.approved_at = func.now()
    await db.commit()
    return {"message": "Approved", "po_number": po.po_number}


@router.post("/{po_id}/reject")
async def reject_po(po_id: str, reason: str = "", db: AsyncSession = Depends(get_db)):
    """Reject a PO."""
    query = select(PurchaseOrder).where(PurchaseOrder.id == uuid.UUID(po_id))
    result = await db.execute(query)
    po = result.scalar_one_or_none()
    if not po:
        raise HTTPException(status_code=404, detail="PO not found")
    po.status = POStatus.rejected
    po.rejection_reason = reason
    await db.commit()
    return {"message": "Rejected", "po_number": po.po_number}