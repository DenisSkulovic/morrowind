import grpc
import asyncio
from app.proto.ai_service_pb2_grpc import add_AiServiceServicer_to_server
from app.api.handlers.handler_openai import OpenAIHandler
from config import RABBITMQ_URL, PROVIDER, PORT

def serve():
    async def start_server():
        server = grpc.aio.server()
        if PROVIDER == "openai":
            add_AiServiceServicer_to_server(OpenAIHandler(RABBITMQ_URL), server)
        else:
            raise ValueError(f"Unsupported provider: {PROVIDER}")

        server.add_insecure_port(f"[::]:{PORT}")
        print(f"API service started on port {PORT}")
        await server.start()
        await server.wait_for_termination()

    asyncio.run(start_server())

if __name__ == "__main__":
    serve()