import asyncio
from aio_pika import connect_robust

class RabbitMQClient:
    def __init__(self, url):
        self.url = url

    async def connect(self):
        self.connection = await connect_robust(self.url)
        self.channel = await self.connection.channel()
        return self

    async def publish(self, queue, message):
        await self.channel.default_exchange.publish(
            message, routing_key=queue
        )

    async def consume(self, queue_name, callback):
        queue = await self.channel.declare_queue(queue_name)
        await queue.consume(callback)

    async def close(self):
        await self.connection.close()