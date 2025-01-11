import json
from aio_pika import connect_robust
from app.proto.ai_service_pb2 import AiResponse
from app.proto.ai_service_pb2_grpc import AiServiceServicer
from config import WORKER_QUEUE

class OpenAIHandler(AiServiceServicer):
    def __init__(self, rabbitmq_url):
        self.rabbitmq_url = rabbitmq_url

    async def ProcessRequest(self, request, context):
        task = {
            "requestId": request.requestId,
            "prompt": request.prompt,
            "options": {
                "model": request.options.model,
                "temperature": request.options.temperature,
                "maxTokens": request.options.maxTokens,
            },
        }

        # Push task to RabbitMQ
        await self.push_task(task)

        # Stream results from the results queue
        async for chunk in self.consume_results(task["requestId"]):
            yield AiResponse(requestId=task["requestId"], output=chunk)

    async def push_task(self, task):
        connection = await connect_robust(self.rabbitmq_url)
        async with connection.channel() as channel:
            await channel.default_exchange.publish(
                json.dumps(task).encode(),
                routing_key=WORKER_QUEUE
            )

    async def consume_results(self, request_id):
        connection = await connect_robust(self.rabbitmq_url)
        async with connection.channel() as channel:
            queue = await channel.declare_queue(f"result_{request_id}", auto_delete=True)
            async for message in queue.iterator():
                if message.body == b"__END__":
                    break
                yield message.body.decode()
