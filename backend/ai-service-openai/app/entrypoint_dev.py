import os
import subprocess
import time
from aio_pika import connect_robust
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import asyncio



class ReloadHandler(FileSystemEventHandler):
    def __init__(self, process_cmd):
        self.process_cmd = process_cmd
        self.process = None
        self.start_process()

    def start_process(self):
        print(f"Starting process", flush=True)
        if self.process:
            print(f"Terminating existing process", flush=True)
            self.process.terminate()
        print(f"Starting new process", flush=True)
        self.process = subprocess.Popen(self.process_cmd)

    def on_modified(self, event):
        if event.src_path.endswith(".py"):
            print(f"File changed: {event.src_path}. Restarting process...", flush=True)
            self.start_process()


async def wait_for_rabbitmq(rabbitmq_url, timeout=30):
    print("Waiting for RabbitMQ...", flush=True)
    start_time = time.time()
    while True:
        try:
            connection = await connect_robust(rabbitmq_url)
            await connection.close()
            print("RabbitMQ is ready.", flush=True)
            break
        except Exception as e:
            if time.time() - start_time > timeout:
                print(f"Timeout waiting for RabbitMQ: {e}", flush=True)
                raise RuntimeError("RabbitMQ did not become ready in time.")
            print(f"Waiting for RabbitMQ... ({e})", flush=True)
            time.sleep(2)


def main():
    print("Starting main...", flush=True)
    rabbitmq_user = os.getenv('RABBITMQ_USER', 'guest')
    rabbitmq_password = os.getenv('RABBITMQ_PASSWORD', 'guest')
    rabbitmq_host = os.getenv('RABBITMQ_HOST', 'ai-service-rabbitmq')
    rabbitmq_port = os.getenv('RABBITMQ_PORT', '5672')
    rabbitmq_url = f"amqp://{rabbitmq_user}:{rabbitmq_password}@{rabbitmq_host}:{rabbitmq_port}/"
    print(f"RabbitMQ URL: {rabbitmq_url}", flush=True)
    role = os.getenv("ROLE", "server")
    print(f"Role: {role}", flush=True)

    role_to_command = {
        "server": ["python3", "-m", "app.api.server"],
        "worker": ["python3", "-m", "app.worker.worker_openai"],
    }

    if role not in role_to_command:
        raise ValueError(f"Unsupported role: {role}")

    # Wait for RabbitMQ or other dependencies
    asyncio.run(wait_for_rabbitmq(rabbitmq_url))

    # Start auto-reload with watchdog
    handler = ReloadHandler(role_to_command[role])
    print(f"Handler created", flush=True)
    observer = Observer()
    print(f"Observer created", flush=True)
    observer.schedule(handler, path=".", recursive=True)
    print(f"Observer scheduled", flush=True)

    print(f"Starting {role} with auto-reload...", flush=True)
    observer.start()
    print(f"Observer started", flush=True)
    try:
        print(f"Joining {role} observer", flush=True)
        observer.join()
    except KeyboardInterrupt:
        print(f"Stopping {role} observer", flush=True)
        observer.stop()
    print(f"Terminating {role} process", flush=True)
    handler.process.terminate()
    print(f"{role} process terminated", flush=True)


if __name__ == "__main__":
    main()
