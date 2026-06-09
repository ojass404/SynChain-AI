"""WhatsApp Cloud API service."""
import httpx
from app.config import settings


class WhatsAppService:
    def __init__(self):
        self.base_url = "https://graph.facebook.com/v21.0"
        self.phone_id = settings.WHATSAPP_PHONE_ID
        self.token = settings.WHATSAPP_TOKEN

    async def send_message(self, to: str, body: str) -> dict:
        """Send WhatsApp message."""
        if not self.token:
            print(f"[WHATSAPP SIMULATED] To: {to}, Body: {body[:100]}...")
            return {"messages": [{"id": "simulated"}]}

        async with httpx.AsyncClient() as client:
            resp = await client.post(
                f"{self.base_url}/{self.phone_id}/messages",
                json={"messaging_product": "whatsapp", "to": to, "type": "text", "text": {"body": body}},
                headers={"Authorization": f"Bearer {self.token}", "Content-Type": "application/json"},
            )
            resp.raise_for_status()
            return resp.json()

    async def send_procurement_update(self, to: str, step: str, message: str) -> dict:
        """Send procurement status update."""
        emojis = {"parsing": "🔍", "vendor_search": "🏪", "rfq_sent": "📧", "negotiating": "🤝", "completed": "🎉"}
        emoji = emojis.get(step, "ℹ️")
        return await self.send_message(to, f"{emoji} *{step.replace('_', ' ').title()}*\n\n{message}\n\n_SynChain AI_")

    def parse_vendor_quote_from_text(self, text: str) -> dict:
        """Extract price and delivery from vendor reply."""
        import re
        result = {"quoted_price": None, "delivery_days": None, "raw_text": text}
        price_match = re.search(r'₹\s*([\d,]+(?:\.\d{1,2})?)', text)
        if price_match:
            result["quoted_price"] = float(price_match.group(1).replace(",", ""))
        day_match = re.search(r'(\d+)\s*(?:days?|d)', text.lower())
        if day_match:
            result["delivery_days"] = int(day_match.group(1))
        return result