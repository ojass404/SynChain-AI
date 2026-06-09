# SynChain AI 🚀

Autonomous Supply Chain Procurement Agent for Indian SMBs

## Quick Start

```bash
# Clone & enter project
cd synchain-ai

# Copy environment files
cp .env.example .env

# Start all services
docker-compose up -d

# Initialize database
docker exec -i synchain-postgres psql -U postgres -d synchain < backend/init.sql

# Access services:
# Frontend:    http://localhost:5173
# Backend API: http://localhost:8000/docs
# AI Service:  http://localhost:8001/docs

HOW ALL PIECES CONNECT:

USER → Frontend (React) → Backend (FastAPI) → AI Service (FastAPI)
                ↕                ↕                    ↕
           WebSocket        PostgreSQL            ML Models
                            Redis (Celery)        Vendor CSV
                            Cloudinary            Policy Docs
                            Mailtrap              FAISS Index
                            WhatsApp API
