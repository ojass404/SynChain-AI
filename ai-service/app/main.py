"""
SynChain AI Microservice — Simplified working version.
Runs on port 8001.
"""
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional, List, Dict, Any
import random
import re

app = FastAPI(title="SynChain AI Service", version="1.0.0")

# ============================================================
# Mock Vendor Data (no CSV needed)
# ============================================================
VENDORS = [
    {
        "id": "v001", "name": "Mumbai Electronics Co.", "category": "electronics",
        "email": "sales@mumbaielect.com", "phone": "9876543210",
        "gstin": "27AABC1234Z1", "city": "Mumbai", "state": "Maharashtra",
        "rating": 4.2, "delivery_sla_days": 3, "avg_price_index": 1.05,
        "on_time_rate": 0.92, "quality_score": 0.88, "is_msme": True, "is_verified": True,
    },
    {
        "id": "v002", "name": "SteelTech Industries", "category": "raw_material",
        "email": "orders@steeltech.com", "phone": "9876543211",
        "gstin": "27BBBC5678Z2", "city": "Pune", "state": "Maharashtra",
        "rating": 3.8, "delivery_sla_days": 5, "avg_price_index": 0.95,
        "on_time_rate": 0.85, "quality_score": 0.82, "is_msme": False, "is_verified": True,
    },
    {
        "id": "v003", "name": "OfficeMax Solutions", "category": "office_supplies",
        "email": "info@officemax.com", "phone": "9876543212",
        "gstin": "29CCCC9012Z3", "city": "Bangalore", "state": "Karnataka",
        "rating": 4.5, "delivery_sla_days": 2, "avg_price_index": 1.10,
        "on_time_rate": 0.95, "quality_score": 0.90, "is_msme": True, "is_verified": True,
    },
    {
        "id": "v004", "name": "Delhi Construction Supply", "category": "construction",
        "email": "supply@delhiconst.com", "phone": "9876543213",
        "gstin": "07DDDD3456Z4", "city": "Delhi", "state": "Delhi",
        "rating": 3.5, "delivery_sla_days": 7, "avg_price_index": 0.85,
        "on_time_rate": 0.78, "quality_score": 0.75, "is_msme": False, "is_verified": False,
    },
    {
        "id": "v005", "name": "Chennai Logistics Hub", "category": "logistics",
        "email": "book@chennailog.com", "phone": "9876543214",
        "gstin": "33EEEE7890Z5", "city": "Chennai", "state": "Tamil Nadu",
        "rating": 4.0, "delivery_sla_days": 1, "avg_price_index": 1.15,
        "on_time_rate": 0.90, "quality_score": 0.85, "is_msme": True, "is_verified": True,
    },
    {
        "id": "v006", "name": "Ahmedabad Textile Co.", "category": "raw_material",
        "email": "info@ahmtextile.com", "phone": "9876543215",
        "gstin": "24FFFF1234Z6", "city": "Ahmedabad", "state": "Gujarat",
        "rating": 4.1, "delivery_sla_days": 4, "avg_price_index": 0.92,
        "on_time_rate": 0.88, "quality_score": 0.86, "is_msme": True, "is_verified": True,
    },
    {
        "id": "v007", "name": "Surat Diamond Tools", "category": "industrial_machinery",
        "email": "sales@suratdiamond.com", "phone": "9876543216",
        "gstin": "24GGGG5678Z7", "city": "Surat", "state": "Gujarat",
        "rating": 4.3, "delivery_sla_days": 6, "avg_price_index": 1.20,
        "on_time_rate": 0.91, "quality_score": 0.89, "is_msme": False, "is_verified": True,
    },
    {
        "id": "v008", "name": "Nagpur Safety Equipment", "category": "safety_equipment",
        "email": "orders@nagpursafety.com", "phone": "9876543217",
        "gstin": "27HHHH9012Z8", "city": "Nagpur", "state": "Maharashtra",
        "rating": 3.9, "delivery_sla_days": 3, "avg_price_index": 0.98,
        "on_time_rate": 0.87, "quality_score": 0.83, "is_msme": True, "is_verified": False,
    },
    {
        "id": "v009", "name": "Bangalore IT Hardware", "category": "electronics",
        "email": "sales@blrithardware.com", "phone": "9876543218",
        "gstin": "29IIII3456Z9", "city": "Bangalore", "state": "Karnataka",
        "rating": 4.6, "delivery_sla_days": 2, "avg_price_index": 1.08,
        "on_time_rate": 0.94, "quality_score": 0.92, "is_msme": False, "is_verified": True,
    },
    {
        "id": "v010", "name": "Pune Packaging Solutions", "category": "packaging",
        "email": "info@punepackaging.com", "phone": "9876543219",
        "gstin": "27JJJJ7890Z0", "city": "Pune", "state": "Maharashtra",
        "rating": 3.7, "delivery_sla_days": 4, "avg_price_index": 0.88,
        "on_time_rate": 0.82, "quality_score": 0.79, "is_msme": True, "is_verified": True,
    },
]

COMPLIANCE_RULES = {
    "restricted_categories": ["hazardous_chemicals", "weapons", "narcotics"],
    "budget_threshold": 100000,
    "gst_rate": 18.0,
    "msme_preference": True,
}


# ============================================================
# Request/Response Models
# ============================================================
class ParseRequest(BaseModel):
    text: Optional[str] = None
    pdf_url: Optional[str] = None
    audio_url: Optional[str] = None
    image_url: Optional[str] = None
    language: Optional[str] = "english"


class VendorDiscoveryRequest(BaseModel):
    category: str
    item_name: str
    budget: float
    top_k: int = 5


class ComplianceCheckRequest(BaseModel):
    vendor_id: str
    item: str
    budget: float
    category: Optional[str] = None


class RFQGenerateRequest(BaseModel):
    vendor: Dict[str, Any]
    requirement: Dict[str, Any]
    budget: float
    deadline: str
    language: Optional[str] = "english"


class VendorSimulateRequest(BaseModel):
    vendor: Dict[str, Any]
    requirement: Dict[str, Any]
    budget: float


class NegotiateRequest(BaseModel):
    initial_quote: float
    budget: float
    vendor_profile: Dict[str, Any]


# ============================================================
# Helper Functions
# ============================================================
def _extract_from_text(text: str) -> dict:
    """Extract procurement details from raw text using regex."""
    result = {
        "item_name": text.strip()[:100],
        "quantity": 1,
        "unit": "units",
        "budget": None,
        "category": "other",
    }

    # Extract budget
    budget_match = re.search(r'(?:₹|Rs\.?|INR|budget[:\s]*)\s*([\d,]+)', text, re.IGNORECASE)
    if budget_match:
        result["budget"] = float(budget_match.group(1).replace(",", ""))

    # Extract quantity
    qty_match = re.search(r'(\d+)\s*(boxes|pieces|units|kg|liters|pcs|nos)', text, re.IGNORECASE)
    if qty_match:
        result["quantity"] = float(qty_match.group(1))
        result["unit"] = qty_match.group(2).lower()

    # Detect category
    category_keywords = {
        "electronics": ["electronic", "computer", "laptop", "phone", "circuit", "hardware", "cable"],
        "raw_material": ["steel", "cement", "wood", "metal", "chemical", "plastic", "rubber"],
        "office_supplies": ["paper", "pen", "stationery", "printer", "ink", "toner", "notebook"],
        "construction": ["brick", "sand", "tile", "pipe", "paint", "concrete"],
        "packaging": ["box", "carton", "bubble wrap", "tape", "packaging"],
        "safety_equipment": ["helmet", "gloves", "safety", "mask", "goggles"],
        "logistics": ["transport", "delivery", "shipping", "courier", "freight"],
    }

    text_lower = text.lower()
    for cat, keywords in category_keywords.items():
        if any(kw in text_lower for kw in keywords):
            result["category"] = cat
            break

    return result


def _score_vendor(vendor: dict, category: str, budget: float) -> float:
    """Score a vendor based on multiple factors."""
    score = 0.0

    # Category match (30%)
    if category.lower() in vendor["category"].lower():
        score += 0.30
    elif "other" in category.lower():
        score += 0.15

    # Rating (30%)
    score += (vendor.get("rating", 0) / 5.0) * 0.30

    # Price competitiveness (20%)
    price_index = vendor.get("avg_price_index", 1.0)
    score += (1.0 / max(price_index, 0.5)) * 0.20

    # Quality + Reliability (20%)
    quality = vendor.get("quality_score", 0)
    on_time = vendor.get("on_time_rate", 0)
    score += ((quality + on_time) / 2) * 0.20

    return round(min(score, 1.0), 4)


def _simulate_negotiation(initial_quote: float, budget: float, flexibility: float) -> dict:
    """Simulate multi-round negotiation."""
    rounds = []
    current_price = initial_quote
    max_rounds = random.randint(1, 3)

    for i in range(max_rounds):
        discount = random.uniform(0.03, 0.12) * flexibility
        counter = current_price * (1 - discount)

        rounds.append({
            "round": i + 1,
            "action": "counter_offer",
            "vendor_price": round(current_price, 2),
            "our_offer": round(counter, 2),
        })

        # Vendor accepts or counters
        if random.random() < 0.6:  # 60% chance they accept
            current_price = counter
            break
        else:
            current_price = counter * (1 + random.uniform(0.01, 0.05))

    discount_pct = round((initial_quote - current_price) / initial_quote, 4)

    return {
        "initial_quote": initial_quote,
        "final_price": round(current_price, 2),
        "discount_pct": discount_pct,
        "discount_amount": round(initial_quote - current_price, 2),
        "rounds_taken": len(rounds),
        "rounds": rounds,
    }


# ============================================================
# Endpoints
# ============================================================
@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "service": "SynChain AI Service",
        "vendors_loaded": len(VENDORS),
    }


@app.post("/parse")
async def parse_demand(request: ParseRequest):
    """Parse demand from text, PDF, audio, or image."""
    try:
        raw_text = request.text or ""

        # In production, would handle PDF/audio/image here
        if request.pdf_url:
            raw_text = f"[PDF content from: {request.pdf_url}] {raw_text}"
        elif request.audio_url:
            raw_text = f"[Audio transcribed from: {request.audio_url}] {raw_text}"
        elif request.image_url:
            raw_text = f"[Image analyzed from: {request.image_url}] {raw_text}"

        if not raw_text.strip():
            raise HTTPException(status_code=400, detail="No input provided")

        result = _extract_from_text(raw_text)

        return {
            "source_type": "text",
            "raw_text": raw_text,
            **result,
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Parse error: {str(e)}")


@app.post("/vendors/discover")
async def discover_vendors(request: VendorDiscoveryRequest):
    """Discover and score vendors."""
    try:
        scored = []
        for vendor in VENDORS:
            ml_score = _score_vendor(vendor, request.category, request.budget)
            scored.append({
                **vendor,
                "ml_score": ml_score,
                "composite_score": ml_score,
            })

        # Sort by score
        scored.sort(key=lambda v: v["ml_score"], reverse=True)

        return {
            "vendors": scored[:request.top_k],
            "total_found": len(scored),
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Vendor discovery error: {str(e)}")


@app.post("/compliance/check")
async def check_compliance(request: ComplianceCheckRequest):
    """Run compliance check."""
    try:
        issues = []
        recommendations = []

        # Find vendor
        vendor = next((v for v in VENDORS if v["id"] == request.vendor_id), None)

        # Check GST verification
        if vendor and not vendor.get("is_verified"):
            issues.append({
                "type": "gst_verification",
                "severity": "warning",
                "message": f"Vendor {vendor['name']} GST is not verified",
            })
            recommendations.append("Verify vendor GSTIN before proceeding")

        # Check budget threshold
        if request.budget > COMPLIANCE_RULES["budget_threshold"]:
            issues.append({
                "type": "budget_threshold",
                "severity": "warning",
                "message": f"Budget ₹{request.budget:,.2f} exceeds ₹{COMPLIANCE_RULES['budget_threshold']:,} threshold",
            })
            recommendations.append("Route for senior management approval")

        # Check restricted categories
        if request.category and request.category.lower() in COMPLIANCE_RULES["restricted_categories"]:
            issues.append({
                "type": "restricted_category",
                "severity": "error",
                "message": f"Category '{request.category}' is restricted",
            })
            recommendations.append("Obtain special clearance")

        # MSME preference
        if vendor and vendor.get("is_msme"):
            recommendations.append("Apply MSME price preference (up to 15%)")

        # Determine status
        has_errors = any(i["severity"] == "error" for i in issues)
        status = "flagged" if has_errors else ("warning" if issues else "passed")

        return {
            "status": status,
            "vendor_id": request.vendor_id,
            "vendor_name": vendor["name"] if vendor else "Unknown",
            "item": request.item,
            "budget": request.budget,
            "issues": issues,
            "recommendations": recommendations,
            "gst_applicable": True,
            "gst_rate": COMPLIANCE_RULES["gst_rate"],
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Compliance error: {str(e)}")


@app.post("/rfq/generate")
async def generate_rfq(request: RFQGenerateRequest):
    """Generate professional RFQ email."""
    try:
        vendor_name = request.vendor.get("name", "Valued Supplier")
        item = request.requirement.get("item_name", "the item")
        qty = request.requirement.get("quantity", 1)
        unit = request.requirement.get("unit", "units")
        desc = request.requirement.get("item_description", "")

        subject = f"RFQ: {item} — Ref: SC-{random.randint(1000, 9999)}"

        body = f"""Dear {vendor_name},

Greetings from SynChain AI!

We are writing to request your best quotation for the following requirement:

━━━━━━━━━━━━━━━━━━━━━━━━━
Item: {item}
Description: {desc if desc else 'As per industry standards'}
Quantity: {qty} {unit}
Budget Range: ₹{request.budget:,.2f}
Response Deadline: {request.deadline}
━━━━━━━━━━━━━━━━━━━━━━━━━

Please include in your quotation:
1. Unit price and total price
2. Delivery timeline
3. GST details (HSN/SAC code)
4. Payment terms
5. Warranty/guarantee (if applicable)

Kindly send your response at your earliest convenience.

Warm regards,
SynChain AI
Autonomous Procurement Agent
"""

        return {"subject": subject, "body": body}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"RFQ generation error: {str(e)}")


@app.post("/vendors/simulate-response")
async def simulate_vendor_response(request: VendorSimulateRequest):
    """Simulate vendor quotation response."""
    try:
        price_index = float(request.vendor.get("avg_price_index", 1.0))
        vendor_name = request.vendor.get("name", "Vendor")

        # Calculate realistic price
        base_price = request.budget * random.uniform(0.80, 0.95)
        quoted_price = base_price * price_index * random.uniform(0.95, 1.05)
        delivery_days = random.randint(3, 14)

        response_templates = [
            f"Dear Sir,\n\nThank you for your RFQ. We are pleased to quote ₹{quoted_price:,.2f} for the specified quantity. Delivery within {delivery_days} working days. GST extra as applicable.\n\nRegards,\n{vendor_name}",
            f"Namaste,\n\nAs per your request, our best price is ₹{quoted_price:,.2f}. We can deliver in {delivery_days} days from PO date. GST at 18%.\n\nThank you,\n{vendor_name}",
            f"Hello,\n\nWe can supply at ₹{quoted_price:,.2f} — delivery {delivery_days} days. Let us know if any clarification needed.\n\nBest regards,\n{vendor_name}",
        ]

        return {
            "vendor_name": vendor_name,
            "quoted_price": round(quoted_price, 2),
            "delivery_days": delivery_days,
            "response_text": random.choice(response_templates),
            "gst_included": False,
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Simulation error: {str(e)}")


@app.post("/negotiate")
async def negotiate_price(request: NegotiateRequest):
    """Run RL-based price negotiation."""
    try:
        # Estimate vendor flexibility from profile
        rating = float(request.vendor_profile.get("rating", 3)) / 5.0
        price_idx = float(request.vendor_profile.get("avg_price_index", 1.0))
        on_time = float(request.vendor_profile.get("on_time_rate", 0.8))
        flexibility = (rating * 0.4 + (1.0 / max(price_idx, 0.5)) * 0.3 + on_time * 0.3)
        flexibility = min(max(flexibility, 0.2), 0.9)

        result = _simulate_negotiation(
            initial_quote=request.initial_quote,
            budget=request.budget,
            flexibility=flexibility,
        )
        result["vendor_flexibility_estimated"] = round(flexibility, 4)

        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Negotiation error: {str(e)}")


# ============================================================
# Startup Message
# ============================================================
@app.on_event("startup")
async def startup():
    print(f"🚀 SynChain AI Service started with {len(VENDORS)} vendors loaded")
    print("📋 Endpoints: /parse, /vendors/discover, /compliance/check, /rfq/generate, /vendors/simulate-response, /negotiate")