"""WebSocket agent feed."""
import json
import uuid
from datetime import datetime
from typing import Dict, Set
from fastapi import APIRouter, WebSocket, WebSocketDisconnect

router = APIRouter()


class ConnectionManager:
    def __init__(self):
        self.connections: Dict[str, Set[WebSocket]] = {}

    async def connect(self, procurement_id: str, ws: WebSocket):
        await ws.accept()
        if procurement_id not in self.connections:
            self.connections[procurement_id] = set()
        self.connections[procurement_id].add(ws)

    def disconnect(self, procurement_id: str, ws: WebSocket):
        if procurement_id in self.connections:
            self.connections[procurement_id].discard(ws)

    async def emit_log(self, procurement_id: str, step: str, message: str, level: str = "info", metadata: dict = None):
        if procurement_id not in self.connections:
            return
        log_entry = {
            "id": str(uuid.uuid4()),
            "procurement_id": procurement_id,
            "step": step,
            "message": message,
            "level": level,
            "metadata": metadata or {},
            "timestamp": datetime.utcnow().isoformat(),
        }
        payload = json.dumps(log_entry, default=str)
        dead = set()
        for ws in self.connections[procurement_id]:
            try:
                await ws.send_text(payload)
            except Exception:
                dead.add(ws)
        for ws in dead:
            self.disconnect(procurement_id, ws)


manager = ConnectionManager()


@router.websocket("/{procurement_id}")
async def websocket_feed(websocket: WebSocket, procurement_id: str):
    await manager.connect(procurement_id, websocket)
    try:
        while True:
            await websocket.receive_text()
    except WebSocketDisconnect:
        manager.disconnect(procurement_id, websocket)