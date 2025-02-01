import asyncio
import json
import aio_pika
from app.config import RABBITMQ_URL, WORKER_QUEUE, OPENAI_API_KEY
from openai import OpenAI

client = OpenAI(api_key=OPENAI_API_KEY)

async def process_task(task):
    print(f"[worker_openai.py process_task] Processing task: {task}", flush=True)
    request_id = task["requestId"]
    options = task["options"]

    completion = client.chat.completions.create(
        model=options["model"],
        messages=[{"role": "user", "content": task["prompt"]}],
        temperature=options["temperature"],
        max_tokens=options["maxTokens"],
        stream=True,
    )

    total_input_tokens = 0
    total_output_tokens = 0

    for chunk in completion:
        print(f"[worker_openai.py process_task] Chunk received: {chunk}", flush=True)

        if chunk.usage:
            total_input_tokens = chunk.usage.prompt_tokens  # Input tokens (only received in first chunk)
            total_output_tokens += chunk.usage.completion_tokens  # Sum output tokens from streamed chunks

        if chunk.choices and chunk.choices[0].delta.content:
            content = chunk.choices[0].delta.content
            yield content, total_input_tokens, total_output_tokens

    print(f"[worker_openai.py process_task] Final token usage: Input = {total_input_tokens}, Output = {total_output_tokens}")


async def process_message(message: aio_pika.IncomingMessage):
    print(f"[worker_openai.py process_message] Processing message", flush=True)
    task = json.loads(message.body)
    request_id = task["requestId"]
    user_id = task["user_id"]
    model = task["options"]["model"]

    try:
        total_input_tokens, total_output_tokens = 0, 0
        rabbitmq_connection = await aio_pika.connect_robust(RABBITMQ_URL)

        async with rabbitmq_connection.channel() as channel:
            async for content, input_tokens, output_tokens in process_task(task):
                message_body = json.dumps({"content": content, "total_tokens": output_tokens}).encode()
                await channel.default_exchange.publish(
                    aio_pika.Message(body=message_body),
                    routing_key=f"result_{request_id}"
                )
                total_input_tokens = input_tokens  # Set input tokens once (from first chunk)
                total_output_tokens += output_tokens  # Sum up output tokens

            await channel.default_exchange.publish(
                aio_pika.Message(body=b"__END__"),
                routing_key=f"result_{request_id}"
            )
        
        # Update token usage after request finishes
        await RateLimiter.update_usage(user_id, model, total_input_tokens, total_output_tokens)

    except Exception as e:
        print(f"[worker_openai.py process_message] Error processing task {request_id}: {e}", flush=True)
    finally:
        await message.ack()


async def main():
    print(f"[worker_openai.py main] Starting worker", flush=True)
    connection = await aio_pika.connect_robust(RABBITMQ_URL)
    print(f"[worker_openai.py main] Connection established", flush=True)
    async with connection.channel() as channel:
        print(f"[worker_openai.py main] Channel opened", flush=True)
        queue = await channel.declare_queue(WORKER_QUEUE)
        print(f"[worker_openai.py main] Queue declared", flush=True)
        await queue.consume(process_message)
        print(f"[worker_openai.py main] Worker started for queue {WORKER_QUEUE}", flush=True)
        await asyncio.Future()

if __name__ == "__main__":
    asyncio.run(main())