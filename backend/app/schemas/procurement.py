"""Procurement schemas."""
from datetime import datetime, date
from typing import Optional
from uuid import UUID
from pydantic import BaseModel, Field
from app.models.all_models import ProcurementStatus, InputType


class ProcurementCreate(BaseModel):
    project_id: Optional[UUID] = None
    input_type: InputType = InputType.text
    raw_text: Optional[str] = None
    item_name: Optional[str] = None
    item_description: Optional[str] = None
    quantity: Optional[float] = Field(default=None, gt=0)
    unit: Optional[str] = None
    budget_inr: Optional[float] = Field(default=None, gt=0)
    deadline: Optional[date] = None
    preferred_category: Optional[str] = None
    special_requirements: Optional[str] = None
    whatsapp_requester_number: Optional[str] = None


class ProcurementResponse(BaseModel):
    id: UUID
    created_by: Optional[UUID] = None
    project_id: Optional[UUID] = None
    status: ProcurementStatus
    input_type: InputType
    raw_input_url: Optional[str] = None
    raw_text: Optional[str] = None
    item_name: Optional[str] = None
    item_description: Optional[str] = None
    quantity: Optional[float] = None
    unit: Optional[str] = None
    budget_inr: Optional[float] = None
    deadline: Optional[date] = None
    preferred_category: Optional[str] = None
    special_requirements: Optional[str] = None
    selected_vendor_id: Optional[UUID] = None
    final_price_inr: Optional[float] = None
    discount_achieved_pct: Optional[float] = None
    compliance_status: Optional[str] = None
    compliance_notes: Optional[str] = None
    whatsapp_requester_number: Optional[str] = None
    created_at: datetime
    completed_at: Optional[datetime] = None

    class Config:
        from_attributes = True


class AgentLogSummary(BaseModel):
    id: UUID
    step: str
    message: str
    level: str
    timestamp: datetime
    class Config:
        from_attributes = True


class ProcurementDetail(ProcurementResponse):
    rfqs: list = []
    negotiation_rounds: list = []
    purchase_orders: list = []
    agent_logs: list[AgentLogSummary] = []
    project_name: Optional[str] = None
    vendor_name: Optional[str] = None