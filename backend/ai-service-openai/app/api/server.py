import grpc
import asyncio
from ai_service_openai_v1_pb2_grpc import add_AiServiceOpenAIv1Servicer_to_server
from ai_service_rate_limiting_pb2_grpc import add_UserPolicyServiceServicer_to_server
from app.api.handlers.user_policy_service import UserPolicyService
from app.api.handlers.handler_openai import OpenAIHandler
from app.config import RABBITMQ_URL, PROVIDER, PORT

def serve():
    print(f"server.py serve called")
    async def start_server():
        print(f"Starting server", flush=True)
        server = grpc.aio.server()
        print(f"Server created", flush=True)
        if PROVIDER == "openai":
            print(f"Adding OpenAI handler to server", flush=True)
            add_AiServiceOpenAIv1Servicer_to_server(OpenAIHandler(RABBITMQ_URL), server)
        else:
            raise ValueError(f"Unsupported provider: {PROVIDER}")

        # Add rate limiting service
        print(f"Adding rate limiting service to server", flush=True)
        add_UserPolicyServiceServicer_to_server(UserPolicyService(), server)

        print(f"Adding insecure port to server", flush=True)
        server.add_insecure_port(f"[::]:{PORT}")
        print(f"API service started on port {PORT}", flush=True)
        await server.start()
        print(f"Server started", flush=True)
        await server.wait_for_termination()
        print(f"Server terminated", flush=True)

    asyncio.run(start_server())

if __name__ == "__main__":
    serve()