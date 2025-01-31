import json
import asyncio
import aio_pika
from ai_service_common_pb2 import AiResponse, InterruptResponse, CheckStatusResponse, AiTaskStatusEnumDTO
from ai_service_openai_v1_pb2_grpc import AiServiceOpenAIv1Servicer
from app.config import WORKER_QUEUE

class OpenAIHandler(AiServiceOpenAIv1Servicer):
    def __init__(self, rabbitmq_url):
        self.rabbitmq_url = rabbitmq_url
        self.active_requests = {}  # Track active requests for interruption

    async def ProcessPrompt(self, request, context):
        """Handles a single-response AI processing request, collecting all chunks before returning."""
        print(f"Processing single response request: {request}", flush=True)

        user_id = context.peer()
        model = request.options.model
        tokens_requested = request.options.maxTokens
        if not await RateLimiter.allow_request(user_id, model, tokens_requested):
            return AiResponse(output="Rate limit exceeded", isLast=True)

        task = {
            "requestId": request.requestId,
            "prompt": request.prompt,
            "options": {
                "model": request.options.model,
                "temperature": request.options.temperature,
                "maxTokens": request.options.maxTokens,
            },
        }

        await self.push_task(task)

        full_response = []
        total_tokens_used = 0
        async for content, total_tokens in self.consume_results(task["requestId"]):
            print(f"Appending chunk: {content}", flush=True)
            full_response.append(content)
            total_tokens_used += total_tokens

        final_output = "".join(full_response)

        print(f"Final output: {final_output}", flush=True)
        return AiResponse(output=final_output, isLast=True)


    async def StreamProcessPrompt(self, request, context):
        """Handles streaming AI responses for a given prompt."""
        print(f"Processing streaming request: {request}", flush=True)

        task = {
            "requestId": request.requestId,
            "prompt": request.prompt,
            "options": {
                "model": request.options.model,
                "temperature": request.options.temperature,
                "maxTokens": request.options.maxTokens,
            },
        }

        self.active_requests[request.requestId] = True
        await self.push_task(task)

        async for content, total_tokens in self.consume_results(task["requestId"]):
            if not self.active_requests.get(request.requestId, False):
                print(f"Request {request.requestId} was interrupted, stopping streaming.", flush=True)
                break
            yield AiResponse(output=content, isLast=False)

        yield AiResponse(output="", isLast=True)  # Indicate end of stream
        del self.active_requests[request.requestId]  # Clean up request

    async def Interrupt(self, request, context):
        """Interrupts an active request."""
        print(f"Interrupt request received for ID: {request.requestId}", flush=True)

        if request.requestId in self.active_requests:
            self.active_requests[request.requestId] = False  # Mark as interrupted
            return InterruptResponse(requestId=request.requestId, success=True, status="interrupted", message="Request was interrupted.")
        else:
            return InterruptResponse(requestId=request.requestId, success=False, status="not_found", message="Request ID not found or already completed.")

    async def CheckStatus(self, request, context):
        """Checks the status of a request."""
        print(f"Checking status for request ID: {request.requestId}", flush=True)

        if request.requestId in self.active_requests:
            return CheckStatusResponse(status=AiTaskStatusEnumDTO.PROCESSING)
        else:
            return CheckStatusResponse(status=AiTaskStatusEnumDTO.COMPLETED)

    async def push_task(self, task):
        """Pushes a task to RabbitMQ for processing with more logging."""
        print(f"Pushing task to RabbitMQ: {task}", flush=True)

        try:
            connection = await aio_pika.connect_robust(self.rabbitmq_url)
            print(f"Connection established: {connection}", flush=True)

            async with connection.channel() as channel:
                print(f"Channel opened: {channel}", flush=True)
                message_body = json.dumps(task).encode()
                print(f"Preparing to send message: {message_body}", flush=True)

                # 🚨 ADD AWAIT TO PUBLISH! 🚨
                await channel.default_exchange.publish(
                    aio_pika.Message(body=message_body),
                    routing_key=WORKER_QUEUE
                )
                print(f"✅ Task pushed successfully to {WORKER_QUEUE}", flush=True)
        
        except Exception as e:
            print(f"❌ ERROR pushing task to RabbitMQ: {e}", flush=True)

    async def consume_results(self, request_id):
        """Streams responses from the RabbitMQ result queue."""
        print(f"Consuming results for request ID: {request_id}", flush=True)
        connection = await aio_pika.connect_robust(self.rabbitmq_url)

        async with connection.channel() as channel:
            queue = await channel.declare_queue(f"result_{request_id}", auto_delete=True)

            async for message in queue.iterator():
                async with message.process():
                    decoded_message = json.loads(message.body.decode())
                    if decoded_message == "__END__":
                        print(f"End of stream for request ID: {request_id}", flush=True)
                        break
                    content = decoded_message["content"]
                    total_tokens = decoded_message["total_tokens"]
                    print(f"Yielding chunk: {content}; total_tokens: {total_tokens}", flush=True)
                    yield content, total_tokens



