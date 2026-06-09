"""Project schemas."""
from datetime import datetime
from typing import Optional
from uuid import UUID
from pydantic import BaseModel, Field


class ProjectCreate(BaseModel):
    name: str = Field(..., min_length=1)
    description: Optional[str] = None
    total_budget_inr: float = Field(default=0, ge=0)


class ProjectResponse(BaseModel):
    id: UUID
    name: str
    description: Optional[str] = None
    created_by: Optional[UUID] = None
    status: str
    total_budget_inr: float
    total_spent_inr: float
    procurement_count: int = 0
    created_at: datetime
    completed_at: Optional[datetime] = None

    class Config:
        from_attributes = True