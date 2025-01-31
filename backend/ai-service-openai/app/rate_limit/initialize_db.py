import asyncio
from sqlalchemy.ext.asyncio import AsyncSession
from models import AsyncSessionLocal, Policy, User

# predefined policies for initial development. Clearly this needs to be done via admin endpoints and such. Later.
policies = [
    {"name": "Admin", "model": "gpt-4o-mini", "input_token_limit": 999999999, "output_token_limit": 999999999, "period": "monthly"},
    {"name": "Admin", "model": "gpt-4o", "input_token_limit": 999999999, "output_token_limit": 999999999, "period": "monthly"},
    {"name": "Admin", "model": "gpt-4", "input_token_limit": 999999999, "output_token_limit": 999999999, "period": "monthly"},
    {"name": "Admin", "model": "gpt-3.5-turbo", "input_token_limit": 999999999, "output_token_limit": 999999999, "period": "monthly"},

    {"name": "Basic", "model": "gpt-3.5-turbo", "input_token_limit": 50000, "output_token_limit": 50000, "period": "monthly"},
    {"name": "Basic", "model": "gpt-4o-mini", "input_token_limit": 50000, "output_token_limit": 50000, "period": "monthly"},

    {"name": "Premium", "model": "gpt-4", "input_token_limit": 500000, "output_token_limit": 500000, "period": "monthly"},
    {"name": "Premium", "model": "gpt-4o", "input_token_limit": 500000, "output_token_limit": 500000, "period": "monthly"},
    {"name": "Premium", "model": "gpt-3.5-turbo", "input_token_limit": 500000, "output_token_limit": 500000, "period": "monthly"},
    {"name": "Premium", "model": "gpt-4o-mini", "input_token_limit": 500000, "output_token_limit": 500000, "period": "monthly"},

    {"name": "Trial", "model": "gpt-3.5-turbo", "input_token_limit": 10000, "output_token_limit": 10000, "period": "monthly"},
    {"name": "Trial", "model": "gpt-4o-mini", "input_token_limit": 10000, "output_token_limit": 10000, "period": "monthly"},
]



async def create_policies(policies):
    """Insert predefined policies into the database if they don't exist."""
    async with AsyncSessionLocal() as session:
        for policy in policies:
            exists = await session.execute(
                "SELECT id FROM policies WHERE name = :name AND model = :model",
                policy
            )
            if not exists.scalars().first():
                session.add(Policy(**policy))

        await session.commit()
        print("Predefined policies inserted successfully!")

asyncio.run(create_policies(policies))