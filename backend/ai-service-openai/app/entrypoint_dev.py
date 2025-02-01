import subprocess
import time
from aio_pika import connect_robust
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import asyncio
from config import ROLE, RABBITMQ_URL, DATABASE_URL


role_to_command = {
    "server": ["python3", "-m", "app.api.server"],
    "worker": ["python3", "-m", "app.worker.worker_openai"],
}


class ReloadHandler(FileSystemEventHandler):
    def __init__(self, process_cmd):
        self.process_cmd = process_cmd
        self.process = None
        self.start_process()

    def start_process(self):
        print(f"[entrypoint_dev.py ReloadHandler start_process] Starting process", flush=True)
        if self.process:
            print(f"[entrypoint_dev.py ReloadHandler start_process] Terminating existing process", flush=True)
            self.process.terminate()
        print(f"[entrypoint_dev.py ReloadHandler start_process] Starting new process", flush=True)
        self.process = subprocess.Popen(self.process_cmd)

    def on_modified(self, event):
        if event.src_path.endswith(".py"):
            print(f"[entrypoint_dev.py ReloadHandler on_modified] File changed: {event.src_path}. Restarting process...", flush=True)
            self.start_process()


async def wait_for_rabbitmq(rabbitmq_url, timeout=30):
    print("[entrypoint_dev.py wait_for_rabbitmq] Waiting for RabbitMQ...", flush=True)
    start_time = time.time()
    while True:
        try:
            connection = await connect_robust(rabbitmq_url)
            await connection.close()
            print("[entrypoint_dev.py wait_for_rabbitmq] RabbitMQ is ready.", flush=True)
            break
        except Exception as e:
            if time.time() - start_time > timeout:
                print(f"[entrypoint_dev.py wait_for_rabbitmq] Timeout waiting for RabbitMQ: {e}", flush=True)
                raise RuntimeError("RabbitMQ did not become ready in time.")
            print(f"[entrypoint_dev.py wait_for_rabbitmq] Waiting for RabbitMQ... ({e})", flush=True)
            time.sleep(2)


def main():
    print("[entrypoint_dev.py main] Starting main...", flush=True)
    print(f"[entrypoint_dev.py main] RabbitMQ URL: {RABBITMQ_URL}", flush=True)
    print(f"[entrypoint_dev.py main] Role: {ROLE}", flush=True)

    if ROLE not in role_to_command:
        raise ValueError(f"[entrypoint_dev.py main] Unsupported role: {ROLE}")
    
    if ROLE == "server":
        print(f"[entrypoint_dev.py main] Database URL: {DATABASE_URL}", flush=True)
        from api.rate_limit.db.migrations import generate_migration_if_schema_changed, run_alembic_migrations
        from api.rate_limit.db.initialize_db import initialize_db
        print(f"[entrypoint_dev.py main] Generating migrations", flush=True)
        asyncio.run(generate_migration_if_schema_changed())
        print(f"[entrypoint_dev.py main] Running migrations", flush=True)
        asyncio.run(run_alembic_migrations())
        print(f"[entrypoint_dev.py main] Initializing database", flush=True)
        asyncio.run(initialize_db())
        print(f"[entrypoint_dev.py main] --- Database initialized", flush=True)

    # Wait for RabbitMQ or other dependencies
    print(f"[entrypoint_dev.py main] Waiting for RabbitMQ", flush=True)
    asyncio.run(wait_for_rabbitmq(RABBITMQ_URL))
    print(f"[entrypoint_dev.py main] --- RabbitMQ is ready", flush=True)

    # Start auto-reload with watchdog
    print(f"[entrypoint_dev.py main] Starting auto-reload with watchdog", flush=True)
    handler = ReloadHandler(role_to_command[ROLE])
    observer = Observer()
    observer.schedule(handler, path=".", recursive=True)
    print(f"[entrypoint_dev.py main] --- Auto-reload scheduled", flush=True)

    print(f"[entrypoint_dev.py main] Starting {ROLE} with auto-reload...", flush=True)
    observer.start()
    print(f"[entrypoint_dev.py main] --- Observer started", flush=True)
    try:
        print(f"[entrypoint_dev.py main] --- Joining {ROLE} observer", flush=True)
        observer.join()
    except KeyboardInterrupt:
        print(f"[entrypoint_dev.py main] --- Stopping {ROLE} observer", flush=True)
        observer.stop()
    print(f"[entrypoint_dev.py main] --- Terminating {ROLE} process", flush=True)
    handler.process.terminate()
    print(f"[entrypoint_dev.py main] --- {ROLE} process terminated", flush=True)


if __name__ == "__main__":
    main()
