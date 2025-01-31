import asyncio
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from models import AsyncSessionLocal, User, Policy, UserUsage, user_policies
from ai_service_pb2 import (
    CreateUserResponse, GetUserResponse, DeleteUserResponse, ListUsersResponse,
    AssignPoliciesResponse, RemovePoliciesResponse, UserPoliciesResponse,
    CreatePolicyResponse, GetPolicyResponse, UpdatePolicyResponse, DeletePolicyResponse, ListPoliciesResponse,
    UserUsageResponse, UserUsageEntry
)
from ai_service_rate_limiting_pb2_grpc import UserPolicyServiceServicer



class UserPolicyService(UserPolicyServiceServicer):
    
    # --- USER MANAGEMENT ---
    
    async def CreateUser(self, request, context):
        async with AsyncSessionLocal() as session:
            new_user = User(id=request.user_id, name=request.name, user_type=request.user_type)
            session.add(new_user)
            await session.commit()
            return CreateUserResponse(success=True)

    async def GetUser(self, request, context):
        async with AsyncSessionLocal() as session:
            user = await session.get(User, request.user_id)
            if not user:
                return GetUserResponse()
            
            policies = [policy.name for policy in user.policies]
            return GetUserResponse(user_id=user.id, name=user.name, user_type=user.user_type, policies=policies)

    async def DeleteUser(self, request, context):
        async with AsyncSessionLocal() as session:
            user = await session.get(User, request.user_id)
            if user:
                await session.delete(user)
                await session.commit()
                return DeleteUserResponse(success=True)
            return DeleteUserResponse(success=False)

    async def ListUsers(self, request, context):
        async with AsyncSessionLocal() as session:
            page = max(request.page, 1)
            page_size = max(request.page_size, 10)
            offset = (page - 1) * page_size

            total_count = await session.scalar(select(func.count()).select_from(User))
            result = await session.execute(select(User).offset(offset).limit(page_size))
            users = result.scalars().all()

            return ListUsersResponse(
                users=[GetUserResponse(user_id=u.id, name=u.name, user_type=u.user_type, policies=[p.name for p in u.policies]) for u in users],
                total_count=total_count
            )




    # --- POLICY MANAGEMENT ---

    async def CreatePolicy(self, request, context):
        async with AsyncSessionLocal() as session:
            new_policy = Policy(name=request.name, model=request.model, token_limit=request.token_limit, period=request.period)
            session.add(new_policy)
            await session.commit()
            return CreatePolicyResponse(success=True)

    async def GetPolicy(self, request, context):
        async with AsyncSessionLocal() as session:
            policy = await session.get(Policy, request.policy_id)
            if not policy:
                return GetPolicyResponse()
            return GetPolicyResponse(name=policy.name, model=policy.model, token_limit=policy.token_limit, period=policy.period)

    async def UpdatePolicy(self, request, context):
        async with AsyncSessionLocal() as session:
            policy = await session.get(Policy, request.policy_id)
            if policy:
                policy.name = request.name
                policy.model = request.model
                policy.token_limit = request.token_limit
                policy.period = request.period
                await session.commit()
                return UpdatePolicyResponse(success=True)
            return UpdatePolicyResponse(success=False)

    async def DeletePolicy(self, request, context):
        async with AsyncSessionLocal() as session:
            policy = await session.get(Policy, request.policy_id)
            if policy:
                await session.delete(policy)
                await session.commit()
                return DeletePolicyResponse(success=True)
            return DeletePolicyResponse(success=False)

    async def ListPolicies(self, request, context):
        async with AsyncSessionLocal() as session:
            page = max(request.page, 1)
            page_size = max(request.page_size, 10)
            offset = (page - 1) * page_size

            total_count = await session.scalar(select(func.count()).select_from(Policy))
            result = await session.execute(select(Policy).offset(offset).limit(page_size))
            policies = result.scalars().all()

            return ListPoliciesResponse(
                policies=[GetPolicyResponse(name=p.name, model=p.model, token_limit=p.token_limit, period=p.period) for p in policies],
                total_count=total_count
            )

    # --- POLICY ASSIGNMENTS ---
    
    async def AssignPoliciesToUser(self, request, context):
        async with AsyncSessionLocal() as session:
            user = await session.get(User, request.user_id)
            policies = await session.execute(select(Policy).where(Policy.id.in_(request.policy_ids)))
            if user:
                user.policies.extend(policies.scalars().all())
                await session.commit()
                return AssignPoliciesResponse(success=True)
            return AssignPoliciesResponse(success=False)

    async def RemovePoliciesFromUser(self, request, context):
        async with AsyncSessionLocal() as session:
            user = await session.get(User, request.user_id)
            if user:
                user.policies = [p for p in user.policies if p.id not in request.policy_ids]
                await session.commit()
                return RemovePoliciesResponse(success=True)
            return RemovePoliciesResponse(success=False)
    
    