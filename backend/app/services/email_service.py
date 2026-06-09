"""Email service using Mailtrap (dev) or SMTP."""
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from app.config import settings


class EmailService:
    def __init__(self):
        self.host = settings.MAILTRAP_HOST
        self.port = settings.MAILTRAP_PORT
        self.username = settings.MAILTRAP_USER
        self.password = settings.MAILTRAP_PASS

    async def send(self, to_email: str, subject: str, body: str, from_email: str = "procurement@synchain.ai") -> bool:
        """Send email via Mailtrap SMTP."""
        if not self.username:
            print(f"[EMAIL SIMULATED] To: {to_email}, Subject: {subject}")
            return True

        msg = MIMEMultipart()
        msg["From"] = from_email
        msg["To"] = to_email
        msg["Subject"] = subject
        msg.attach(MIMEText(body, "plain", "utf-8"))

        try:
            with smtplib.SMTP(self.host, self.port) as server:
                server.starttls()
                server.login(self.username, self.password)
                server.sendmail(from_email, to_email, msg.as_string())
            return True
        except Exception as e:
            print(f"Email failed: {e}")
            return False