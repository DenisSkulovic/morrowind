import time
import json
from redis.asyncio import Redis
from celery import Celery
import openai

# Configure Celery
celery_app = Celery('worker', broker='redis://localhost:6379/0')

# Redis connection for task/result storage
redis_client = Redis(host='localhost', port=6379, decode_responses=True)

# OpenAI API configuration
openai.api_key = "your_openai_api_key"

@celery_app.task
async def process_task(task_data):
    request_id = task_data["requestId"]

    # Check for interruption flag
    if await redis_client.get(f"interrupt:{request_id}"):
        await redis_client.hmset(f"ai_result:{request_id}", {
            "status": "interrupted",
            "errorMessage": "Task interrupted by user"
        })
        return

    try:
        # Call OpenAI API
        response = openai.Completion.create(
            model=task_data["options"]["model"],
            prompt=task_data["prompt"],
            temperature=float(task_data["options"]["temperature"]),
            max_tokens=int(task_data["options"]["maxTokens"])
        )
        result = response["choices"][0]["text"]

        # Store the result in Redis
        await redis_client.hmset(f"ai_result:{request_id}", {
            "requestId": request_id,
            "status": "completed",
            "output": result,
            "timestamp": task_data["metadata"]["timestamp"],
            "useCase": task_data["metadata"]["useCase"],
            "context": task_data["metadata"]["context"]
        })

    except Exception as e:
        # Handle and store errors
        await redis_client.hmset(f"ai_result:{request_id}", {
            "requestId": request_id,
            "status": "failed",
            "errorMessage": str(e),
            "timestamp": task_data["metadata"]["timestamp"],
            "useCase": task_data["metadata"]["useCase"],
            "context": task_data["metadata"]["context"]
        })

if __name__ == "__main__":
    while True:
        # Poll Redis queue
        task_json = await redis_client.lpop("ai_task_queue")
        if task_json:
            task_data = json.loads(task_json)
            process_task.delay(task_data)
        else:
            time.sleep(1)
