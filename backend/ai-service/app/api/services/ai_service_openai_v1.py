import grpc
import os
from concurrent import futures
from redis.asyncio import Redis

import ai_service_openai_v1_pb2_grpc as pb2_grpc
import ai_service_openai_v1_pb2 as pb2

redis_host = os.getenv("REDIS_HOST", "localhost")
redis_port = os.getenv("REDIS_PORT", 6379)
openai_api_key = os.getenv("OPENAI_API_KEY")

# Redis connection for queue and result storage
redis_client = Redis(host=redis_host, port=redis_port, decode_responses=True)

class AiServiceOpenAIv1Handler(pb2_grpc.AiServiceOpenAIv1Servicer):

    async def ProcessRequest(self, request, context):
        request_id = request.requestId
        # Store task in Redis queue
        task = {
            "requestId": request_id,
            "prompt": request.prompt,
            "metadata": {
                "timestamp": request.metadata.timestamp,
                "useCase": request.metadata.useCase,
                "context": request.metadata.context,
            },
            "options": {
                "model": request.options.model,
                "temperature": request.options.temperature,
                "maxTokens": request.options.maxTokens,
                "timeout": request.options.timeout,
            },
        }
        await redis_client.rpush("ai_task_queue", task)
        
        # Create metadata for response
        metadata = pb2.AiResponseMetadata(
            timestamp=request.metadata.timestamp,
            useCase=request.metadata.useCase,
            context=request.metadata.context
        )

        # Respond to client with queued status
        response = pb2.AiResponse(
            requestId=request_id,
            success=True,
            status="queued",
            metadata=metadata
        )
        return response

    async def CheckStatus(self, request, context):
        result = await redis_client.hgetall(f"ai_result:{request.requestId}")
        if not result:
            return pb2.CheckStatusResponse(
                requestId=request.requestId,
                status="unknown",
                errorMessage="Task not found",
            )

        # Create metadata for response
        metadata = pb2.AiResponseMetadata(
            timestamp=int(result.get("timestamp", 0)),
            useCase=result.get("useCase", ""),
            context=result.get("context", "")
        )

        # Determine if this is the last response
        isLast = True if result.get("status") == "completed" else False

        return pb2.CheckStatusResponse(
            requestId=result["requestId"],
            status=result["status"],
            output=result.get("output", ""),
            errorMessage=result.get("errorMessage", ""),
            metadata=metadata,
            isLast=isLast
        )

    async def Interrupt(self, request, context):
        interrupted = await redis_client.set(f"interrupt:{request.requestId}", "true")
        return pb2.InterruptResponse(
            requestId=request.requestId,
            success=bool(interrupted),
            status="interrupted" if interrupted else "not_found",
            message="Task interruption requested" if interrupted else "Task not found"
        )
