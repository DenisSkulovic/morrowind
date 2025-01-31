import datetime
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from models import User, Policy, UserUsage, AsyncSessionLocal

class RateLimiter:
    """Handles user rate limiting based on assigned policies."""

    @staticmethod
    async def get_policies(user_id: str):
        """Fetch all policies assigned to a user."""
        async with AsyncSessionLocal() as session:
            result = await session.execute(
                select(Policy).join(User.policies).where(User.id == user_id)
            )
            return result.scalars().all()

    @staticmethod
    async def get_policy(user_id, model):
        async with AsyncSessionLocal() as session:
            result = await session.execute(
                select(Policy).where(Policy.model == model, Policy.user_id == user_id)
            )
            policy = result.scalars().first()
            if not policy:
                print(f"No policy found for user {user_id} and model {model}", flush=True)
            return policy

    @staticmethod
    async def reset_usage_if_needed(user_usage: UserUsage, period: str, session: AsyncSession):
        """Resets usage if the period (daily/monthly) has passed."""
        now = datetime.datetime.utcnow()
        if (period == "daily" and now.date() > user_usage.last_reset.date()) or \
           (period == "monthly" and now.month > user_usage.last_reset.month):
            user_usage.tokens_used = 0
            user_usage.last_reset = now
            await session.commit()

    @staticmethod
    async def allow_request(user_id: str, model: str, tokens_requested: int):
        """Check if the user is within their allowed quota."""
        async with AsyncSessionLocal() as session:
            policy = await RateLimiter.get_policy(user_id, model)
            print(f"Policy: {policy}", flush=True)

            if not policy:
                print(f"No valid policies for user {user_id} on model {model}")
                return False

            # Get or create usage record
            usage = await session.execute(
                select(UserUsage).where(UserUsage.user_id == user_id, UserUsage.model == model)
            )
            user_usage = usage.scalars().first()

            if not user_usage:
                user_usage = UserUsage(user_id=user_id, model=model)
                session.add(user_usage)
                await session.commit()

            for policy in applicable_policies:
                await RateLimiter.reset_usage_if_needed(user_usage, policy.period, session)

                if user_usage.tokens_used + tokens_requested <= policy.token_limit:
                    user_usage.tokens_used += tokens_requested
                    await session.commit()
                    print(f"Allowed request: {user_id} used {user_usage.tokens_used}/{policy.token_limit} tokens.")
                    return True

            print(f"Rate limit exceeded for user {user_id}")
            return False
        
    @staticmethod
    async def update_usage(user_id, model, input_tokens, output_tokens):
        """Update the user's token usage in the database."""
        async with AsyncSessionLocal() as session:
            result = await session.execute(
                select(UserUsage).where(UserUsage.user_id == user_id, UserUsage.model == model)
            )
            user_usage = result.scalars().first()

            if not user_usage:
                user_usage = UserUsage(user_id=user_id, model=model, input_tokens_used=0, output_tokens_used=0, tokens_used=0)
                session.add(user_usage)

            user_usage.input_tokens_used += input_tokens
            user_usage.output_tokens_used += output_tokens
            user_usage.tokens_used += (input_tokens + output_tokens)  # Total tokens

            await session.commit()
            print(f"🔄 Updated token usage: Input={input_tokens}, Output={output_tokens}, Total={user_usage.tokens_used}")