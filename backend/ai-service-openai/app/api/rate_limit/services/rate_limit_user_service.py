from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.api.rate_limit.models import User, AsyncSessionLocal



class RateLimitUserService:
    """Handles user rate limiting based on assigned policies."""

    @staticmethod
    async def create_user(id: str, name: str, policy_group_id: str):
        print(f"[RateLimitUserService.create_user] Creating user: {id} - {name} - {policy_group_id}", flush=True)
        async with AsyncSessionLocal() as session:
            new_user = User(id=id, name=name, policy_group_id=policy_group_id)
            session.add(new_user)
            await session.commit()

    @staticmethod
    async def get_user(id: str):
        print(f"[RateLimitUserService.get_user] Getting user: {id}", flush=True)
        async with AsyncSessionLocal() as session:
            return await session.get(User, id)

    @staticmethod
    async def delete_user(id: str):
        print(f"[RateLimitUserService.delete_user] Deleting user: {id}", flush=True)
        async with AsyncSessionLocal() as session:
            user = await session.get(User, id)
            if user:
                await session.delete(user)
                await session.commit()

    @staticmethod
    async def list_users(page: int, page_size: int):
        print(f"[RateLimitUserService.list_users] Listing users: {page} - {page_size}", flush=True)
        async with AsyncSessionLocal() as session:
            page = max(page, 1)
            page_size = max(page_size, 10)
            offset = (page - 1) * page_size
            total_count = await session.scalar(select(func.count()).select_from(User))
            result = await session.execute(select(User).offset(offset).limit(page_size))
            users = result.scalars().all()
            print(f"[RateLimitUserService.list_users] Listed users: {users}", flush=True)
            return users, total_count