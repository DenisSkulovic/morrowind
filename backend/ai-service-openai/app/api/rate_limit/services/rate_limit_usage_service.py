import datetime
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.api.rate_limit.models import UserUsage, AsyncSessionLocal
from app.api.rate_limit.enums import PolicyPeriodEnum




class RateLimitUsageService:
    @staticmethod
    async def reset_usage_if_needed(user_usage: UserUsage, period: str, session: AsyncSession):
        """Resets usage if the period (daily/monthly) has passed."""
        print(f"[RateLimitUsageService.reset_usage_if_needed] Resetting usage if needed: {user_usage.id} - {period}", flush=True)
        now = datetime.datetime.utcnow()
        if (period == PolicyPeriodEnum.DAILY and now.date() > user_usage.last_reset.date()) or \
           (period == PolicyPeriodEnum.MONTHLY and now.month > user_usage.last_reset.month):
            print(f"[RateLimitUsageService.reset_usage_if_needed] Resetting usage: {user_usage.id} - {period}", flush=True)
            user_usage.input_tokens_used = 0
            user_usage.output_tokens_used = 0
            user_usage.last_reset = now
            await session.commit()
        else:
            print(f"[RateLimitUsageService.reset_usage_if_needed] No need to reset usage: {user_usage.id} - {period}", flush=True)

    @staticmethod
    async def allow_request(user_id: str, model: str, input_tokens_requested: int, output_tokens_requested: int):
        """Check if the user is within their allowed quota."""
        print(f"[RateLimitUsageService.allow_request] Allowing request: {user_id} - {model} - {input_tokens_requested} - {output_tokens_requested}", flush=True)
        async with AsyncSessionLocal() as session:
            policy = await RateLimiter.get_policy(user_id, model)
            print(f"[RateLimitUsageService.allow_request] Policy: {policy}", flush=True)

            if not policy:
                print(f"[RateLimitUsageService.allow_request] No valid policies for user {user_id} on model {model}", flush=True)
                return False

            # Get or create usage record
            usage = await session.execute(
                select(UserUsage).where(UserUsage.user_id == user_id, UserUsage.model == model)
            )
            user_usage = usage.scalars().first()

            if not user_usage:
                user_usage = UserUsage(user_id=user_id, model=model, provider=policy.provider)
                session.add(user_usage)
                await session.commit()

            await RateLimiter.reset_usage_if_needed(user_usage, policy.period.value, session)

            input_tokens_used = user_usage.input_tokens_used + input_tokens_requested
            output_tokens_used = user_usage.output_tokens_used + output_tokens_requested
            input_tokens_limit_exceeded = input_tokens_used > policy.input_token_limit
            output_tokens_limit_exceeded = output_tokens_used > policy.output_token_limit
            if not input_tokens_limit_exceeded and not output_tokens_limit_exceeded:
                user_usage.input_tokens_used += input_tokens_requested
                user_usage.output_tokens_used += output_tokens_requested
                await session.commit()
                print(f"[RateLimitUsageService.allow_request] Allowed request: {user_id} used {user_usage.input_tokens_used}/{policy.input_token_limit} input tokens and {user_usage.output_tokens_used}/{policy.output_token_limit} output tokens.")
                return True

            print(f"[RateLimitUsageService.allow_request] Rate limit exceeded for user {user_id}")
            return False
        
    @staticmethod
    async def update_usage(user_id, model, input_tokens, output_tokens):
        """Update the user's token usage in the database."""
        print(f"[RateLimitUsageService.update_usage] Updating usage: {user_id} - {model} - {input_tokens} - {output_tokens}", flush=True)
        async with AsyncSessionLocal() as session:
            result = await session.execute(
                select(UserUsage).where(UserUsage.user_id == user_id, UserUsage.model == model)
            )
            user_usage = result.scalars().first()

            if not user_usage:
                print(f"[RateLimitUsageService.update_usage] Creating new user usage: {user_id} - {model}", flush=True)
                user_usage = UserUsage(user_id=user_id, model=model, input_tokens_used=0, output_tokens_used=0)
                session.add(user_usage)

            user_usage.input_tokens_used += input_tokens
            user_usage.output_tokens_used += output_tokens

            print(f"[RateLimitUsageService.update_usage] Updating user usage: {user_id} - {model} - {input_tokens} - {output_tokens}", flush=True)
            await session.commit()
            print(f"[RateLimitUsageService.update_usage] Updated token usage: Input={input_tokens}, Output={output_tokens}, Total Input={user_usage.input_tokens_used}, Total Output={user_usage.output_tokens_used}", flush=True)
