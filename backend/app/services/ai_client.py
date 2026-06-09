"""Async AI service client."""
import httpx
from app.config import settings


class AIClient:
    def __init__(self):
        self.base_url = settings.AI_SERVICE_URL.rstrip("/")
        self.timeout = httpx.Timeout(120.0)

    async def parse_demand(self, text=None, pdf_url=None, audio_url=None, image_url=None):
        async with httpx.AsyncClient(timeout=self.timeout) as client:
            payload = {}
            if text: payload["text"] = text
            if pdf_url: payload["pdf_url"] = pdf_url
            if audio_url: payload["audio_url"] = audio_url
            if image_url: payload["image_url"] = image_url
            resp = await client.post(f"{self.base_url}/parse", json=payload)
            resp.raise_for_status()
            return resp.json()

    async def discover_vendors(self, category, item_name, budget, top_k=5):
        async with httpx.AsyncClient(timeout=self.timeout) as client:
            payload = {"category": category, "item_name": item_name, "budget": budget, "top_k": top_k}
            resp = await client.post(f"{self.base_url}/vendors/discover", json=payload)
            resp.raise_for_status()
            return resp.json().get("vendors", [])

    async def check_compliance(self, vendor_id, item, budget):
        async with httpx.AsyncClient(timeout=self.timeout) as client:
            payload = {"vendor_id": vendor_id, "item": item, "budget": budget}
            resp = await client.post(f"{self.base_url}/compliance/check", json=payload)
            resp.raise_for_status()
            return resp.json()

    async def generate_rfq(self, vendor, requirement, budget, deadline):
        async with httpx.AsyncClient(timeout=self.timeout) as client:
            payload = {"vendor": vendor, "requirement": requirement, "budget": budget, "deadline": deadline}
            resp = await client.post(f"{self.base_url}/rfq/generate", json=payload)
            resp.raise_for_status()
            return resp.json()

    async def simulate_vendor_response(self, vendor, requirement, budget):
        async with httpx.AsyncClient(timeout=self.timeout) as client:
            payload = {"vendor": vendor, "requirement": requirement, "budget": budget}
            resp = await client.post(f"{self.base_url}/vendors/simulate-response", json=payload)
            resp.raise_for_status()
            return resp.json()

    async def negotiate(self, initial_quote, budget, vendor_profile):
        async with httpx.AsyncClient(timeout=self.timeout) as client:
            payload = {"initial_quote": initial_quote, "budget": budget, "vendor_profile": vendor_profile}
            resp = await client.post(f"{self.base_url}/negotiate", json=payload)
            resp.raise_for_status()
            return resp.json()