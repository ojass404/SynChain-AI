What SynChain AI Does ?

SynChain AI is an end-to-end agentic AI platform that autonomously handles the full B2B procurement cycle:

1) Accepts demand in any format: typed text, uploaded PDF invoice, voice note (WhatsApp/audio file), or product image
2) Parses and structures the demand using multi-modal AI (Whisper for voice, ViT + OCR for documents/images, LLM for text)
3)Discovers and scores vendors using a TF/Keras ML model from a vendor database
4) Runs RAG (Retrieval-Augmented Generation) compliance checks against GST policy docs and company procurement rules
5) Generates professional RFQ emails using a fine-tuned LLM (LoRA on Mistral-7B)
6) Sends RFQs via email (Mailtrap) and WhatsApp (Meta Cloud API)
7) Runs an RL-based negotiation agent (PPO via Stable Baselines3) for multi-round price negotiation
8) Generates a PDF Purchase Order (ReportLab) and routes for human approval if above threshold
9) Sends WhatsApp notifications to the procurement team throughout the process
10) Shows everything in a real-time React dashboard with WebSocket agent feed
