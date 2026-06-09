"""PDF generation service (simplified for demo)."""
import io
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER
from datetime import datetime


class PDFService:
    NAVY = HexColor("#1a1a2e")
    PURPLE = HexColor("#7F77DD")
    TEAL = HexColor("#1D9E75")

    async def generate_po_pdf(self, po_number, vendor_name, vendor_email, vendor_gstin, vendor_address,
                              item_name, quantity, unit, unit_price_inr, total_price_inr,
                              gst_pct, gst_amount_inr, grand_total_inr, delivery_date=None) -> str:
        """Generate PO PDF and return as base64 (demo) or upload to Cloudinary."""
        buffer = io.BytesIO()
        doc = SimpleDocTemplate(buffer, pagesize=A4)
        styles = getSampleStyleSheet()
        story = []

        title_style = ParagraphStyle('Title', parent=styles['Heading1'], fontSize=18, textColor=self.NAVY, alignment=TA_CENTER)
        story.append(Paragraph("SynChain AI — Purchase Order", title_style))
        story.append(Spacer(1, 20))
        story.append(Paragraph(f"<b>PO Number:</b> {po_number}", styles['Normal']))
        story.append(Paragraph(f"<b>Date:</b> {datetime.now().strftime('%d %B %Y')}", styles['Normal']))
        story.append(Paragraph(f"<b>Vendor:</b> {vendor_name}", styles['Normal']))
        story.append(Spacer(1, 20))

        items = [["Item", "Qty", "Unit Price", "Total"]]
        items.append([item_name, str(quantity), f"₹{unit_price_inr:,.2f}", f"₹{total_price_inr:,.2f}"])
        t = Table(items, colWidths=[200, 60, 100, 100])
        t.setStyle(TableStyle([('BACKGROUND', (0, 0), (-1, 0), self.NAVY), ('TEXTCOLOR', (0, 0), (-1, 0), HexColor("#FFFFFF")), ('GRID', (0, 0), (-1, -1), 0.5, HexColor("#ccc"))]))
        story.append(t)
        story.append(Spacer(1, 10))
        story.append(Paragraph(f"<b>GST ({gst_pct}%):</b> ₹{gst_amount_inr:,.2f}", styles['Normal']))
        story.append(Paragraph(f"<b>Grand Total:</b> ₹{grand_total_inr:,.2f}", styles['Normal']))

        doc.build(story)
        pdf_bytes = buffer.getvalue()
        buffer.close()
        
        # For demo, return as data URL
        import base64
        b64 = base64.b64encode(pdf_bytes).decode()
        return f"data:application/pdf;base64,{b64}"