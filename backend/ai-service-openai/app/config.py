import os

# ============================================================
# RabbitMQ Connection Settings
RABBITMQ_HOST = os.getenv("RABBITMQ_HOST", "localhost")
RABBITMQ_PORT = os.getenv("RABBITMQ_PORT", "5672")
RABBITMQ_USER = os.getenv("RABBITMQ_USER", "guest")
RABBITMQ_PASSWORD = os.getenv("RABBITMQ_PASSWORD", "guest")

# Construct RabbitMQ URL
RABBITMQ_URL = f"amqp://{RABBITMQ_USER}:{RABBITMQ_PASSWORD}@{RABBITMQ_HOST}:{RABBITMQ_PORT}/"

# ============================================================
# Provider Settings
PROVIDER = os.getenv("PROVIDER", "openai")

# ============================================================
# Worker Queue
WORKER_QUEUE = f"ai_tasks_{PROVIDER}"

# ============================================================
# API Settings
PORT = os.getenv("PORT", "50051")

# ============================================================
# OpenAI Settings
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

# ============================================================
# Role Settings
ROLE = os.getenv("ROLE", "server").lower()
