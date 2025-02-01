import os
import subprocess
import asyncio
from config import ROLE, PROVIDER
from api.rate_limit.db.migrations import run_alembic_migrations

if ROLE == "server":
    print(f"[entrypoint.py] Running Alembic migrations...", flush=True)
    asyncio.run(run_alembic_migrations())
    print(f"[entrypoint.py] Alembic migrations completed!", flush=True)
    print(f"[entrypoint.py] Starting server...", flush=True)
    subprocess.run(["python3", "-m", "app.api.server"])
elif ROLE == "worker":
    if PROVIDER == "openai":
        print(f"[entrypoint.py] Starting worker...", flush=True)
        subprocess.run(["python3", "-m", "app.worker.worker_openai"])
    else:
        raise ValueError(f"Unsupported worker provider: {PROVIDER}")
else:
    raise ValueError(f"Unsupported role: {ROLE}")
