import grpc
import asyncio
from ai_service_openai_v1_pb2_grpc import add_AiServiceOpenAIv1Servicer_to_server
from ai_service_rate_limiting_pb2_grpc import add_RateLimitServiceServicer_to_server
from app.api.handlers.handler_rate_limit import RateLimitHandler
from app.api.handlers.handler_openai import OpenAIHandler
from app.config import RABBITMQ_URL, PROVIDER, PORT

async def start_server():
    print(f"[server.py] Starting server", flush=True)
    server = grpc.aio.server()
    print(f"[server.py] Server created", flush=True)
    if PROVIDER == "openai":
        print(f"[server.py] Adding OpenAI handler to server", flush=True)
        add_AiServiceOpenAIv1Servicer_to_server(OpenAIHandler(RABBITMQ_URL), server)
    else:
        raise ValueError(f"Unsupported provider: {PROVIDER}")

    # Add rate limiting service
    print(f"[server.py] Adding rate limiting service to server", flush=True)
    add_RateLimitServiceServicer_to_server(RateLimitHandler(), server)

    print(f"[server.py] Adding insecure port to server", flush=True)
    server.add_insecure_port(f"[::]:{PORT}")
    print(f"[server.py] API service started on port {PORT}", flush=True)
    await server.start()
    print(f"[server.py] Server started", flush=True)
    await server.wait_for_termination()
    print(f"[server.py] Server terminated", flush=True)

def serve():
    print(f"[server.py] serve called", flush=True)
    print(f"[server.py] Starting server...", flush=True)
    asyncio.run(start_server())

if __name__ == "__main__":
    serve()