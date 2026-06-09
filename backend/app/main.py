"""FastAPI application entry point."""
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import settings
from app.database import init_db
from app.routers import procurement, vendors, rfqs, approvals, analytics, projects
from app.websocket.agent_feed import router as ws_router


@asynccontextmanager
async def lifespan(app: FastAPI):
    await init_db()
    yield

app = FastAPI(title=settings.APP_NAME, version=settings.VERSION, lifespan=lifespan)

app.add_middleware(CORSMiddleware, allow_origins=settings.CORS_ORIGINS, allow_credentials=True,
                   allow_methods=["*"], allow_headers=["*"])

app.include_router(procurement.router, prefix="/api/v1/procurements", tags=["Procurements"])
app.include_router(vendors.router, prefix="/api/v1/vendors", tags=["Vendors"])
app.include_router(rfqs.router, prefix="/api/v1/rfqs", tags=["RFQs"])
app.include_router(approvals.router, prefix="/api/v1/approvals", tags=["Approvals"])
app.include_router(analytics.router, prefix="/api/v1/analytics", tags=["Analytics"])
app.include_router(projects.router, prefix="/api/v1/projects", tags=["Projects"])
app.include_router(ws_router, prefix="/ws", tags=["WebSocket"])


@app.get("/health")
async def health():
    return {"status": "healthy", "service": settings.APP_NAME}