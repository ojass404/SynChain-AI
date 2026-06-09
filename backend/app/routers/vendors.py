"""Vendor router."""
import uuid
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, desc
from sqlalchemy.orm import selectinload
from app.database import get_db
from app.models.all_models import Vendor, VendorNote, PurchaseOrder, RFQ
from app.schemas.vendor import VendorResponse, VendorDetail, VendorNoteCreate, VendorNoteResponse

router = APIRouter()


@router.get("/", response_model=list[VendorResponse])
async def list_vendors(
    category: Optional[str] = Query(None),
    city: Optional[str] = Query(None),
    limit: int = Query(20, ge=1, le=100),
    offset: int = Query(0, ge=0),
    db: AsyncSession = Depends(get_db),
):
    """List vendors with filters."""
    query = select(Vendor).order_by(desc(Vendor.ml_score))
    if category:
        query = query.where(Vendor.category.ilike(f"%{category}%"))
    if city:
        query = query.where(Vendor.city.ilike(f"%{city}%"))
    query = query.offset(offset).limit(limit)
    result = await db.execute(query)
    return result.scalars().all()


@router.get("/{vendor_id}", response_model=VendorDetail)
async def get_vendor(vendor_id: str, db: AsyncSession = Depends(get_db)):
    """Get vendor detail."""
    query = select(Vendor).options(selectinload(Vendor.notes)).where(Vendor.id == uuid.UUID(vendor_id))
    result = await db.execute(query)
    vendor = result.scalar_one_or_none()
    if not vendor:
        raise HTTPException(status_code=404, detail="Vendor not found")
    return vendor


@router.post("/{vendor_id}/notes", response_model=VendorNoteResponse, status_code=201)
async def add_vendor_note(vendor_id: str, note_data: VendorNoteCreate, db: AsyncSession = Depends(get_db)):
    """Add a note to a vendor."""
    note = VendorNote(vendor_id=uuid.UUID(vendor_id), note=note_data.note)
    db.add(note)
    await db.commit()
    await db.refresh(note)
    return note


@router.get("/{vendor_id}/notes", response_model=list[VendorNoteResponse])
async def list_vendor_notes(vendor_id: str, db: AsyncSession = Depends(get_db)):
    """List vendor notes."""
    query = select(VendorNote).where(VendorNote.vendor_id == uuid.UUID(vendor_id)).order_by(desc(VendorNote.created_at))
    result = await db.execute(query)
    return result.scalars().all()


@router.delete("/{vendor_id}/notes/{note_id}")
async def delete_vendor_note(vendor_id: str, note_id: str, db: AsyncSession = Depends(get_db)):
    """Delete a vendor note."""
    query = select(VendorNote).where(VendorNote.id == uuid.UUID(note_id), VendorNote.vendor_id == uuid.UUID(vendor_id))
    result = await db.execute(query)
    note = result.scalar_one_or_none()
    if not note:
        raise HTTPException(status_code=404, detail="Note not found")
    await db.delete(note)
    await db.commit()
    return {"message": "Deleted"}