"""Analytics router."""
from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select, func
from app.database import get_db
from app.models.all_models import ProcurementRequest, Vendor, ProcurementStatus

router = APIRouter()


@router.get("/summary")
async def get_summary(days: int = Query(30), db: AsyncSession = Depends(get_db)):
    """Dashboard KPI summary."""
    cutoff = func.now() - func.make_interval(days=days)
    
    total = await db.scalar(select(func.count(ProcurementRequest.id)).where(ProcurementRequest.created_at >= cutoff))
    completed = await db.scalar(select(func.count(ProcurementRequest.id)).where(ProcurementRequest.status == ProcurementStatus.completed, ProcurementRequest.created_at >= cutoff))
    active = await db.scalar(select(func.count(ProcurementRequest.id)).where(~ProcurementRequest.status.in_([ProcurementStatus.completed, ProcurementStatus.failed]), ProcurementRequest.created_at >= cutoff))
    
    savings = await db.scalar(select(func.coalesce(func.sum(ProcurementRequest.budget_inr - ProcurementRequest.final_price_inr), 0)).where(ProcurementRequest.final_price_inr.isnot(None), ProcurementRequest.created_at >= cutoff))
    spend = await db.scalar(select(func.coalesce(func.sum(ProcurementRequest.final_price_inr), 0)).where(ProcurementRequest.status == ProcurementStatus.completed, ProcurementRequest.created_at >= cutoff))
    avg_disc = await db.scalar(select(func.avg(ProcurementRequest.discount_achieved_pct)).where(ProcurementRequest.discount_achieved_pct.isnot(None), ProcurementRequest.created_at >= cutoff))
    
    return {
        "total_procurements": total or 0,
        "active_procurements": active or 0,
        "completed": completed or 0,
        "total_spend_inr": round(spend or 0, 2),
        "total_savings_inr": round(savings or 0, 2),
        "avg_discount_pct": round(avg_disc or 0, 2),
    }


@router.get("/vendors/scores")
async def get_vendor_scores(limit: int = Query(10), db: AsyncSession = Depends(get_db)):
    """Vendor leaderboard."""
    result = await db.execute(select(Vendor).order_by(Vendor.ml_score.desc()).limit(limit))
    vendors = result.scalars().all()
    return [{"vendor_name": v.name, "category": v.category, "ml_score": v.ml_score, "on_time_rate": v.on_time_rate, "quality_score": v.quality_score} for v in vendors]


@router.get("/savings-timeline")
async def get_savings_timeline(days: int = Query(7), db: AsyncSession = Depends(get_db)):
    """Weekly savings."""
    return []  # Simplified for demo