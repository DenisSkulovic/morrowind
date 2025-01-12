import asyncio
import json
from app.config import PROVIDER
from aio_pika import connect_robust, IncomingMessage
from app.config import RABBITMQ_URL, WORKER_QUEUE, OPENAI_API_KEY
import openai

openai.api_key = OPENAI_API_KEY

async def process_task(task):
    request_id = task["requestId"]
    options = task["options"]

    response = openai.ChatCompletion.create(
        model=options["model"],
        messages=[{"role": "user", "content": task["prompt"]}],
        temperature=options["temperature"],
        max_tokens=options["maxTokens"],
        stream=True,
    )

    for chunk in response:
        yield chunk["choices"][0]["text"]


async def process_message(message: IncomingMessage):
    task = json.loads(message.body)
    request_id = task["requestId"]

    try:
        # Process task using OpenAI API
        connection = await connect_robust(RABBITMQ_URL)
        async with connection.channel() as channel:
            async for chunk in process_task(task):
                await channel.default_exchange.publish(
                    chunk.encode(), routing_key=f"result_{request_id}"
                )

            # Signal completion
            await channel.default_exchange.publish(
                b"__END__", routing_key=f"result_{request_id}"
            )
    except Exception as e:
        print(f"Error processing task {request_id}: {e}")
    finally:
        await message.ack()

async def main():
    connection = await connect_robust(RABBITMQ_URL)
    async with connection.channel() as channel:
        queue = await channel.declare_queue(WORKER_QUEUE)
        await queue.consume(process_message)
        print(f"Worker started for queue {WORKER_QUEUE}")
        await asyncio.Future()

if __name__ == "__main__":
    asyncio.run(main())