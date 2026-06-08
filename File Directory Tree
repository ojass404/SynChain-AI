synchain-ai/
├── backend/                          # FastAPI + Celery backend
│   ├── app/
│   │   ├── __init__.py
│   │   ├── config.py                 # Pydantic settings + env vars
│   │   ├── database.py               # Async SQLAlchemy + session
│   │   ├── main.py                   # FastAPI app, routers, middleware
│   │   ├── models/
│   │   │   ├── __init__.py
│   │   │   └── all_models.py         # All SQLAlchemy ORM models
│   │   ├── schemas/
│   │   │   ├── __init__.py
│   │   │   ├── procurement.py
│   │   │   ├── vendor.py
│   │   │   └── project.py
│   │   ├── routers/
│   │   │   ├── __init__.py
│   │   │   ├── procurement.py
│   │   │   ├── vendors.py
│   │   │   ├── rfqs.py
│   │   │   ├── approvals.py
│   │   │   ├── analytics.py
│   │   │   └── whatsapp.py
│   │   ├── services/
│   │   │   ├── __init__.py
│   │   │   ├── ai_client.py
│   │   │   ├── email_service.py
│   │   │   ├── pdf_service.py
│   │   │   └── whatsapp_service.py
│   │   ├── tasks/
│   │   │   └── celery_tasks.py
│   │   ├── websocket/
│   │   │   └── agent_feed.py
│   │   └── utils/                    # helpers, logging
│   ├── alembic/                      # migrations (optional)
│   ├── requirements.txt
│   ├── Dockerfile
│   └── .env.example
├── ai-service/                       # AI/ML FastAPI microservice (port 8001)
│   ├── main.py
│   ├── agents/
│   │   └── procurement_agent.py
│   ├── multimodal/
│   │   ├── whisper_parser.py
│   │   ├── ocr_parser.py
│   │   ├── vision_parser.py
│   │   └── sam_matcher.py
│   ├── rag/
│   │   ├── vector_store.py
│   │   ├── compliance_rag.py
│   │   └── vendor_rag.py
│   ├── ml_models/
│   │   ├── vendor_scorer.py
│   │   ├── rl_negotiator.py
│   │   └── intent_classifier.py
│   ├── fine_tuning/
│   │   ├── prepare_dataset.py
│   │   └── train_lora.py
│   ├── data/
│   │   └── vendors.csv
│   ├── models/                       # saved .keras, .zip PPO, lora adapter
│   ├── requirements.txt
│   ├── Dockerfile
│   ├── .env.example
│   └── data/policy_docs/             # GST + company policy .txt files
├── frontend/                         # React + TS + Vite
│   ├── src/
│   │   ├── types/
│   │   │   └── index.ts
│   │   ├── api/
│   │   │   └── client.ts
│   │   ├── hooks/
│   │   │   ├── useWebSocket.ts
│   │   │   └── useProcurement.ts
│   │   ├── components/
│   │   │   ├── Layout.tsx
│   │   │   ├── AgentFeed.tsx
│   │   │   ├── KanbanCard.tsx
│   │   │   └── UploadZone.tsx
│   │   ├── pages/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── NewProcurement.tsx
│   │   │   ├── RFQInbox.tsx
│   │   │   ├── SupplierComparison.tsx
│   │   │   ├── VendorExplorer.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Approvals.tsx
│   │   │   ├── WhatsAppHub.tsx
│   │   │   └── Analytics.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   ├── public/
│   ├── package.json
│   ├── tailwind.config.js
│   ├── vite.config.ts
│   └── tsconfig.json
├── notebooks/                        # 5 Jupyter notebooks
│   ├── 01_data_pipeline.ipynb
│   ├── 02_rag_demo.ipynb
│   ├── 03_fine_tuning.ipynb
│   ├── 04_rl_negotiation.ipynb
│   └── 05_multimodal_demo.ipynb
├── .github/
│   └── workflows/
│       ├── backend-deploy.yml
│       ├── frontend-deploy.yml
│       └── ai-service-deploy.yml
├── docker-compose.yml
├── README.md
├── .gitignore (root)
└── LICENSE
