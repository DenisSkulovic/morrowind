import os
import subprocess
from config import ROLE

if ROLE == "server":
    subprocess.run(["python3", "-m", "app.api.server"])
elif ROLE == "worker":
    provider = os.getenv("PROVIDER", "openai").lower()
    if provider == "openai":
        subprocess.run(["python3", "-m", "app.worker.worker_openai"])
    else:
        raise ValueError(f"Unsupported worker provider: {provider}")
else:
    raise ValueError(f"Unsupported role: {ROLE}")
