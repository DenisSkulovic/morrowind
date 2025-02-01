from typing import List
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from api.rate_limit.models import User, Policy, UserUsage, AsyncSessionLocal
from api.rate_limit.enums import PolicyPeriodEnum




class RateLimitPolicyService:

    @staticmethod
    async def create_policy(name: str, model: str, provider: str, input_token_limit: int, output_token_limit: int, period: str, policy_group_id: str):
        print(f"[RateLimitPolicyService.create_policy] Creating policy: {name} - {model} - {provider} - {input_token_limit} - {output_token_limit} - {period} - {policy_group_id}", flush=True)
        async with AsyncSessionLocal() as session:
            new_policy = Policy(
                name=name, model=model, provider=provider,
                input_token_limit=input_token_limit, output_token_limit=output_token_limit,
                period=period, policy_group_id=policy_group_id
            )
            session.add(new_policy)
            await session.commit()
    
    @staticmethod
    async def get_policy(policy_id: str):
        print(f"[RateLimitPolicyService.get_policy] Getting policy: {policy_id}", flush=True)
        async with AsyncSessionLocal() as session:
            return await session.get(Policy, policy_id)

    @staticmethod
    async def update_policy(policy_id: str, name: str, model: str, provider: str, input_token_limit: int, output_token_limit: int, period: str, policy_group_id: str):
        print(f"[RateLimitPolicyService.update_policy] Updating policy: {policy_id} - {name} - {model} - {provider} - {input_token_limit} - {output_token_limit} - {period} - {policy_group_id}", flush=True)
        async with AsyncSessionLocal() as session:
            policy = await session.get(Policy, policy_id)
            if policy:
                policy.name = name
                policy.model = model
                policy.provider = provider
                policy.input_token_limit = input_token_limit
                policy.output_token_limit = output_token_limit
                policy.period = period
                policy.policy_group_id = policy_group_id
                await session.commit()

    @staticmethod
    async def delete_policy(policy_id: str):
        print(f"[RateLimitPolicyService.delete_policy] Deleting policy: {policy_id}", flush=True)
        async with AsyncSessionLocal() as session:
            policy = await session.get(Policy, policy_id)
            if policy:
                await session.delete(policy)
                await session.commit()

    @staticmethod
    async def list_policies(page: int, page_size: int):
        print(f"[RateLimitPolicyService.list_policies] Listing policies: {page} - {page_size}", flush=True)
        async with AsyncSessionLocal() as session:
            page = max(page, 1)
            page_size = max(page_size, 10)
            offset = (page - 1) * page_size
            total_count = await session.scalar(select(func.count()).select_from(Policy))
            result = await session.execute(select(Policy).offset(offset).limit(page_size))
            policies = result.scalars().all()
            return policies, total_count

    @staticmethod
    async def assign_policies_to_user(user_id: str, policy_ids: List[str]):
        print(f"[RateLimitPolicyService.assign_policies_to_user] Assigning policies to user: {user_id} - {policy_ids}", flush=True)
        async with AsyncSessionLocal() as session:
            user = await session.get(User, user_id)
            policies = await session.execute(select(Policy).where(Policy.id.in_(policy_ids)))
            if user:
                for policy in policies.scalars().all():
                    await session.execute(user_policies.insert().values(user_id=user.id, policy_id=policy.id))
                await session.commit()
                return AssignPoliciesResponse(success=True)
            return AssignPoliciesResponse(success=False)

    @staticmethod
    async def remove_policies_from_user(user_id: str, policy_ids: List[str]):
        print(f"[RateLimitPolicyService.remove_policies_from_user] Removing policies from user: {user_id} - {policy_ids}", flush=True)
        async with AsyncSessionLocal() as session:
            user = await session.get(User, user_id)
            if user:
                await session.execute(user_policies.delete().where(user_policies.c.user_id == user.id, user_policies.c.policy_id.in_(policy_ids)))
                await session.commit()
                return RemovePoliciesResponse(success=True)
            return RemovePoliciesResponse(success=False)
    