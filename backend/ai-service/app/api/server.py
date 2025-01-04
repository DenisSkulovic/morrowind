import grpc
import os
from concurrent import futures
from redis import Redis
from dotenv import load_dotenv

import ai_service_openai_v1_pb2_grpc as openai_v1_grpc
from services.ai_service_openai_v1 import AiServiceOpenAIv1Handler

# Load environment variables from .env
load_dotenv()

# Registry to map service names to handler implementations
SERVICE_REGISTRY = {}

# List of services to be registered. Add more services here.
services = [
    { "name": "AiServiceOpenAIv1", "handler": AiServiceOpenAIv1Handler }
]


def register_service(service_name, handler_class):
    """Registers a gRPC service handler."""
    SERVICE_REGISTRY[service_name] = handler_class


class RequestRouter(grpc.ServerInterceptor):
    """Routes requests to the appropriate service based on the gRPC service name."""

    def intercept_service(self, continuation, handler_call_details):
        # Extract the service name from the request path
        service_name = handler_call_details.method.split("/")[1]

        # Check if the service is registered
        if service_name in SERVICE_REGISTRY:
            handler = SERVICE_REGISTRY[service_name]
            return handler.intercept_service(continuation, handler_call_details)
        else:
            raise grpc.RpcError(grpc.StatusCode.UNIMPLEMENTED, f"Service {service_name} not implemented.")



def serve():
    server = grpc.server(
        futures.ThreadPoolExecutor(max_workers=10),
        interceptors=[RequestRouter()]
    )

    for service in services:
        # Register handler in the registry
        register_service(service["name"], service["handler"])
        # Add the handler to the server
        pb2_grpc.add_AiServiceOpenAIv1Servicer_to_server(SERVICE_REGISTRY[service["name"]], server)


    # Get port from environment variable
    port = int(os.getenv("GRPC_SERVER_PORT"x))

    # Bind to port and start the server
    server.add_insecure_port(f"[::]:{port}")
    server.start()
    print(f"Server started on port {port}")
    server.wait_for_termination()


if __name__ == "__main__":
    serve()