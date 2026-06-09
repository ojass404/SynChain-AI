"""All SQLAlchemy ORM models."""
import uuid
from datetime import datetime, date
from typing import Optional, List
from sqlalchemy import Column, String, Text, Integer, Float, Date, DateTime, Boolean, ForeignKey, Enum, JSON
from sqlalchemy.dialects.postgresql import UUID, JSONB
from sqlalchemy.orm import relationship, Mapped, mapped_column
from sqlalchemy import text
from app.database import Base
import enum


class ProcurementStatus(str, enum.Enum):
    pending = "pending"; parsing = "parsing"; vendor_search = "vendor_search"
    rfq_sent = "rfq_sent"; negotiating = "negotiating"; compliance_check = "compliance_check"
    po_generated = "po_generated"; awaiting_approval = "awaiting_approval"
    approved = "approved"; rejected = "rejected"; completed = "completed"; failed = "failed"

class InputType(str, enum.Enum):
    email = "email"; pdf = "pdf"; voice = "voice"; text = "text"; image = "image"; whatsapp = "whatsapp"

class RFQStatus(str, enum.Enum):
    sent = "sent"; responded = "responded"; expired = "expired"; selected = "selected"

class RFQChannel(str, enum.Enum):
    email = "email"; whatsapp = "whatsapp"; both = "both"

class POStatus(str, enum.Enum):
    draft = "draft"; pending_approval = "pending_approval"; approved = "approved"
    rejected = "rejected"; sent = "sent"

class AgentLogLevel(str, enum.Enum):
    info = "info"; success = "success"; warning = "warning"; error = "error"

class WADirection(str, enum.Enum):
    inbound = "inbound"; outbound = "outbound"

class WAMessageType(str, enum.Enum):
    text = "text"; audio = "audio"; image = "image"; document = "document"

class WAStatus(str, enum.Enum):
    sent = "sent"; delivered = "delivered"; read = "read"; failed = "failed"

class ProjectStatus(str, enum.Enum):
    active = "active"; completed = "completed"; paused = "paused"

class UserRole(str, enum.Enum):
    manager = "manager"; admin = "admin"; viewer = "viewer"

class ResponseTimeScore(str, enum.Enum):
    fast = "fast"; average = "average"; slow = "slow"; unknown = "unknown"


class User(Base):
    __tablename__ = "users"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = Column(String(255), unique=True, nullable=False)
    name = Column(String(255), nullable=False)
    role = Column(Enum(UserRole), default=UserRole.viewer)
    created_at = Column(DateTime(timezone=True), server_default=text("NOW()"))
    
    procurement_requests = relationship("ProcurementRequest", back_populates="creator", foreign_keys="ProcurementRequest.created_by")
    vendor_notes = relationship("VendorNote", back_populates="added_by_user")
    projects = relationship("Project", back_populates="creator_user")


class Vendor(Base):
    __tablename__ = "vendors"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    category = Column(String(100), nullable=False)
    email = Column(String(255))
    phone = Column(String(20))
    whatsapp_number = Column(String(20))
    gstin = Column(String(15))
    city = Column(String(100))
    state = Column(String(100))
    rating = Column(Float, default=0)
    delivery_sla_days = Column(Integer, default=7)
    avg_price_index = Column(Float, default=1.0)
    on_time_rate = Column(Float, default=0)
    quality_score = Column(Float, default=0)
    is_msme = Column(Boolean, default=False)
    is_verified = Column(Boolean, default=False)
    ml_score = Column(Float, default=0)
    response_time_score = Column(Enum(ResponseTimeScore), default=ResponseTimeScore.unknown)
    avg_response_hours = Column(Float)
    total_rfqs_received = Column(Integer, default=0)
    total_rfqs_responded = Column(Integer, default=0)
    created_at = Column(DateTime(timezone=True), server_default=text("NOW()"))
    updated_at = Column(DateTime(timezone=True), server_default=text("NOW()"))
    
    rfqs = relationship("RFQ", back_populates="vendor")
    purchase_orders = relationship("PurchaseOrder", back_populates="vendor")
    notes = relationship("VendorNote", back_populates="vendor")
    whatsapp_messages = relationship("WhatsAppMessage", back_populates="vendor")


class Project(Base):
    __tablename__ = "projects"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name = Column(String(255), nullable=False)
    description = Column(Text)
    created_by = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="SET NULL"))
    status = Column(Enum(ProjectStatus), default=ProjectStatus.active)
    total_budget_inr = Column(Float, default=0)
    total_spent_inr = Column(Float, default=0)
    created_at = Column(DateTime(timezone=True), server_default=text("NOW()"))
    completed_at = Column(DateTime(timezone=True))
    
    creator_user = relationship("User", back_populates="projects")
    procurement_requests = relationship("ProcurementRequest", back_populates="project")


class ProcurementRequest(Base):
    __tablename__ = "procurement_requests"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    created_by = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="SET NULL"))
    project_id = Column(UUID(as_uuid=True), ForeignKey("projects.id", ondelete="SET NULL"))
    status = Column(Enum(ProcurementStatus), default=ProcurementStatus.pending)
    input_type = Column(Enum(InputType), default=InputType.text)
    raw_input_url = Column(Text)
    raw_text = Column(Text)
    item_name = Column(String(255))
    item_description = Column(Text)
    quantity = Column(Float)
    unit = Column(String(50))
    budget_inr = Column(Float)
    deadline = Column(Date)
    preferred_category = Column(String(100))
    special_requirements = Column(Text)
    selected_vendor_id = Column(UUID(as_uuid=True), ForeignKey("vendors.id", ondelete="SET NULL"))
    final_price_inr = Column(Float)
    discount_achieved_pct = Column(Float)
    compliance_status = Column(String(50))
    compliance_notes = Column(Text)
    whatsapp_requester_number = Column(String(20))
    created_at = Column(DateTime(timezone=True), server_default=text("NOW()"))
    completed_at = Column(DateTime(timezone=True))
    
    creator = relationship("User", back_populates="procurement_requests", foreign_keys=[created_by])
    project = relationship("Project", back_populates="procurement_requests")
    selected_vendor = relationship("Vendor", foreign_keys=[selected_vendor_id])
    rfqs = relationship("RFQ", back_populates="procurement")
    purchase_orders = relationship("PurchaseOrder", back_populates="procurement")
    agent_logs = relationship("AgentLog", back_populates="procurement")
    whatsapp_messages = relationship("WhatsAppMessage", back_populates="procurement")


class RFQ(Base):
    __tablename__ = "rfqs"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    procurement_id = Column(UUID(as_uuid=True), ForeignKey("procurement_requests.id", ondelete="CASCADE"), nullable=False)
    vendor_id = Column(UUID(as_uuid=True), ForeignKey("vendors.id", ondelete="CASCADE"), nullable=False)
    email_subject = Column(String(500))
    email_body = Column(Text)
    sent_at = Column(DateTime(timezone=True))
    response_received_at = Column(DateTime(timezone=True))
    response_time_hours = Column(Float)
    quoted_price_inr = Column(Float)
    quoted_delivery_days = Column(Integer)
    vendor_response_text = Column(Text)
    channel = Column(Enum(RFQChannel), default=RFQChannel.email)
    status = Column(Enum(RFQStatus), default=RFQStatus.sent)
    whatsapp_thread_id = Column(String(255))
    created_at = Column(DateTime(timezone=True), server_default=text("NOW()"))
    
    procurement = relationship("ProcurementRequest", back_populates="rfqs")
    vendor = relationship("Vendor", back_populates="rfqs")
    negotiation_rounds = relationship("NegotiationRound", back_populates="rfq")


class NegotiationRound(Base):
    __tablename__ = "negotiation_rounds"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    rfq_id = Column(UUID(as_uuid=True), ForeignKey("rfqs.id", ondelete="CASCADE"), nullable=False)
    round_number = Column(Integer, nullable=False)
    our_offer_inr = Column(Float)
    vendor_counter_inr = Column(Float)
    rl_action = Column(String(50))
    rl_reward = Column(Float)
    timestamp = Column(DateTime(timezone=True), server_default=text("NOW()"))
    
    rfq = relationship("RFQ", back_populates="negotiation_rounds")


class PurchaseOrder(Base):
    __tablename__ = "purchase_orders"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    procurement_id = Column(UUID(as_uuid=True), ForeignKey("procurement_requests.id", ondelete="CASCADE"), nullable=False)
    po_number = Column(String(50), unique=True, nullable=False)
    vendor_id = Column(UUID(as_uuid=True), ForeignKey("vendors.id", ondelete="RESTRICT"), nullable=False)
    item_name = Column(String(255), nullable=False)
    quantity = Column(Float, nullable=False)
    unit = Column(String(50), nullable=False)
    unit_price_inr = Column(Float, nullable=False)
    total_price_inr = Column(Float, nullable=False)
    gst_pct = Column(Float, default=18.0)
    gst_amount_inr = Column(Float)
    grand_total_inr = Column(Float, nullable=False)
    delivery_date = Column(Date)
    terms_and_conditions = Column(Text)
    pdf_url = Column(Text)
    status = Column(Enum(POStatus), default=POStatus.draft)
    approved_by = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="SET NULL"))
    approved_at = Column(DateTime(timezone=True))
    rejection_reason = Column(Text)
    created_at = Column(DateTime(timezone=True), server_default=text("NOW()"))
    
    procurement = relationship("ProcurementRequest", back_populates="purchase_orders")
    vendor = relationship("Vendor", back_populates="purchase_orders")
    approver = relationship("User", foreign_keys=[approved_by])


class AgentLog(Base):
    __tablename__ = "agent_logs"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    procurement_id = Column(UUID(as_uuid=True), ForeignKey("procurement_requests.id", ondelete="CASCADE"), nullable=False)
    step = Column(String(100), nullable=False)
    message = Column(Text, nullable=False)
    level = Column(Enum(AgentLogLevel), default=AgentLogLevel.info)
    metadata = Column(JSONB, default={})
    timestamp = Column(DateTime(timezone=True), server_default=text("NOW()"))
    
    procurement = relationship("ProcurementRequest", back_populates="agent_logs")


class VendorNote(Base):
    __tablename__ = "vendor_notes"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    vendor_id = Column(UUID(as_uuid=True), ForeignKey("vendors.id", ondelete="CASCADE"), nullable=False)
    added_by = Column(UUID(as_uuid=True), ForeignKey("users.id", ondelete="SET NULL"))
    note = Column(Text, nullable=False)
    created_at = Column(DateTime(timezone=True), server_default=text("NOW()"))
    
    vendor = relationship("Vendor", back_populates="notes")
    added_by_user = relationship("User", back_populates="vendor_notes")


class WhatsAppMessage(Base):
    __tablename__ = "whatsapp_messages"
    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    procurement_id = Column(UUID(as_uuid=True), ForeignKey("procurement_requests.id", ondelete="SET NULL"))
    vendor_id = Column(UUID(as_uuid=True), ForeignKey("vendors.id", ondelete="SET NULL"))
    direction = Column(Enum(WADirection), nullable=False)
    from_number = Column(String(20), nullable=False)
    to_number = Column(String(20), nullable=False)
    message_type = Column(Enum(WAMessageType), default=WAMessageType.text)
    message_body = Column(Text)
    media_url = Column(Text)
    wa_message_id = Column(String(255))
    status = Column(Enum(WAStatus), default=WAStatus.sent)
    is_ai_generated = Column(Boolean, default=False)
    created_at = Column(DateTime(timezone=True), server_default=text("NOW()"))
    
    procurement = relationship("ProcurementRequest", back_populates="whatsapp_messages")
    vendor = relationship("Vendor", back_populates="whatsapp_messages")