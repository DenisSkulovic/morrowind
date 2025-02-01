import os

# ============================================================
# RabbitMQ Connection Settings
RABBITMQ_HOST = os.getenv("RABBITMQ_HOST", "localhost")
RABBITMQ_PORT = os.getenv("RABBITMQ_PORT", "5672")
RABBITMQ_USER = os.getenv("RABBITMQ_USER", "guest")
RABBITMQ_PASSWORD = os.getenv("RABBITMQ_PASSWORD", "guest")
if not RABBITMQ_HOST or not RABBITMQ_PORT or not RABBITMQ_USER or not RABBITMQ_PASSWORD:
    raise ValueError("RABBITMQ_HOST, RABBITMQ_PORT, RABBITMQ_USER, or RABBITMQ_PASSWORD env variable is not set")
RABBITMQ_URL = f"amqp://{RABBITMQ_USER}:{RABBITMQ_PASSWORD}@{RABBITMQ_HOST}:{RABBITMQ_PORT}/"

# ============================================================
# Provider Settings
PROVIDER = os.getenv("PROVIDER")
if not PROVIDER:
    raise ValueError("PROVIDER env variable is not set")
if PROVIDER not in ["openai"]: # TODO: Add more providers here if needed
    raise ValueError("PROVIDER env variable must be 'openai'")

# ============================================================
# Worker Queue
WORKER_QUEUE = f"ai_tasks_{PROVIDER}"

# ============================================================
# API Settings
PORT = os.getenv("PORT", "50051")
if not PORT:
    raise ValueError("PORT env variable is not set")

# ============================================================
# Role Settings
ROLE = os.getenv("ROLE", "server").lower()
if ROLE not in ["server", "worker"]:
    raise ValueError("ROLE env variable must be either 'server' or 'worker'")


# ============================================================
# OpenAI Settings
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
if ROLE == "worker" and not OPENAI_API_KEY:
    raise ValueError("OPENAI_API_KEY env variable is not set")


# ============================================================
# Rate Limit DB Settings
POSTGRES_USER = os.getenv("POSTGRES_USER")
POSTGRES_PASSWORD = os.getenv("POSTGRES_PASSWORD")
POSTGRES_PORT = os.getenv("POSTGRES_PORT")
POSTGRES_DB = os.getenv("POSTGRES_DB")
POSTGRES_HOST = os.getenv("POSTGRES_HOST")
if ROLE == "server" and (not POSTGRES_USER or not POSTGRES_PASSWORD or not POSTGRES_PORT or not POSTGRES_DB or not POSTGRES_HOST):
    raise ValueError("POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_DB, or POSTGRES_HOST env variable is not set")
DATABASE_URL = f'postgresql+asyncpg://{POSTGRES_USER}:{POSTGRES_PASSWORD}@{POSTGRES_HOST}:{POSTGRES_PORT}/{POSTGRES_DB}'
