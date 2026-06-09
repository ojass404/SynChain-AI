"""Vendor schemas."""
from datetime import datetime
from typing import Optional
from uuid import UUID
from pydantic import BaseModel, Field


class VendorCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=255)
    category: str
    email: Optional[str] = None
    phone: Optional[str] = None
    gstin: Optional[str] = None
    city: Optional[str] = None
    state: Optional[str] = None
    rating: float = Field(default=0, ge=0, le=5)
    is_msme: bool = False
    is_verified: bool = False


class VendorResponse(BaseModel):
    id: UUID
    name: str
    category: str
    email: Optional[str] = None
    phone: Optional[str] = None
    whatsapp_number: Optional[str] = None
    gstin: Optional[str] = None
    city: Optional[str] = None
    state: Optional[str] = None
    rating: float
    delivery_sla_days: int
    avg_price_index: float
    on_time_rate: float
    quality_score: float
    is_msme: bool
    is_verified: bool
    ml_score: float
    response_time_score: str
    avg_response_hours: Optional[float] = None
    total_rfqs_received: int
    total_rfqs_responded: int
    created_at: datetime

    class Config:
        from_attributes = True


class VendorNoteCreate(BaseModel):
    note: str = Field(..., min_length=1)


class VendorNoteResponse(BaseModel):
    id: UUID
    vendor_id: UUID
    added_by: Optional[UUID] = None
    added_by_name: Optional[str] = None
    note: str
    created_at: datetime

    class Config:
        from_attributes = True


class VendorDetail(VendorResponse):
    notes: list[VendorNoteResponse] = []
    recent_purchase_orders: list = []
    recent_rfqs: list = []