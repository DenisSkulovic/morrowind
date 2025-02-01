from typing import List
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.api.rate_limit.models import PolicyGroup, Policy, AsyncSessionLocal


class RateLimitPolicyGroupService:
    """Handles policy group rate limiting based on assigned policies."""

    @staticmethod
    async def create_policy_group(id: str, name: str):
        print(f"[RateLimitPolicyGroupService.create_policy_group] Creating policy group: {id} - {name}", flush=True)
        async with AsyncSessionLocal() as session:
            new_policy_group = PolicyGroup(id=id, name=name)
            session.add(new_policy_group)
            await session.commit()
    
    @staticmethod
    async def get_policy_group(id: str):
        print(f"[RateLimitPolicyGroupService.get_policy_group] Getting policy group: {id}", flush=True)
        async with AsyncSessionLocal() as session:
            return await session.get(PolicyGroup, id)

    @staticmethod
    async def delete_policy_group(id: str):
        print(f"[RateLimitPolicyGroupService.delete_policy_group] Deleting policy group: {id}", flush=True)
        async with AsyncSessionLocal() as session:
            policy_group = await session.get(PolicyGroup, id)
            if policy_group:
                await session.delete(policy_group)
                await session.commit()

    @staticmethod
    async def list_policy_groups(page: int, page_size: int):
        print(f"[RateLimitPolicyGroupService.list_policy_groups] Listing policy groups", flush=True)
        async with AsyncSessionLocal() as session:
            page = max(page, 1)
            page_size = max(page_size, 10)
            offset = (page - 1) * page_size
            total_count = await session.scalar(select(func.count()).select_from(PolicyGroup))
            result = await session.execute(select(PolicyGroup).offset(offset).limit(page_size))
            policy_groups = result.scalars().all()
            return policy_groups, total_count

    @staticmethod
    async def assign_policies_to_policy_group(policy_group_id: str, policy_ids: List[str]):
        print(f"[RateLimitPolicyGroupService.assign_policies_to_policy_group] Assigning policies to policy group: {policy_group_id} - {policy_ids}", flush=True)
        async with AsyncSessionLocal() as session:
            policy_group = await session.get(PolicyGroup, id)
            policies = await session.execute(select(Policy).where(Policy.id.in_(policy_ids)))
            if policy_group:
                for policy in policies.scalars().all():
                    await session.execute(policy_group_policies.insert().values(policy_group_id=policy_group.id, policy_id=policy.id))
                await session.commit()
                return AssignPoliciesResponse(success=True)
    
    @staticmethod
    async def remove_policies_from_policy_group(policy_group_id: str, policy_ids: List[str]):
        print(f"[RateLimitPolicyGroupService.remove_policies_from_policy_group] Removing policies from policy group: {policy_group_id} - {policy_ids}", flush=True)
        async with AsyncSessionLocal() as session:
            policy_group = await session.get(PolicyGroup, policy_group_id)
            await session.execute(policy_group_policies.delete().where(policy_group_policies.c.policy_group_id == policy_group.id, policy_group_policies.c.policy_id.in_(policy_ids)))
            await session.commit()
            return RemovePoliciesResponse(success=True)
