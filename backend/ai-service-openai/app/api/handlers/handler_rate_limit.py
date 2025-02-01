import asyncio
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.api.rate_limit.models import AsyncSessionLocal, User, Policy, UserUsage
from ai_service_rate_limiting_pb2 import (
    CreateUserResponse, GetUserResponse, DeleteUserResponse, ListUsersResponse,
    AssignPoliciesResponse, RemovePoliciesResponse,
    CreatePolicyResponse, GetPolicyResponse, UpdatePolicyResponse, DeletePolicyResponse, ListPoliciesResponse,
    UserUsageResponse, UserUsageEntry
)
from ai_service_rate_limiting_pb2_grpc import RateLimitServiceServicer
from app.api.rate_limit.services.rate_limit_policy_service import RateLimitPolicyService
from app.api.rate_limit.services.rate_limit_user_service import RateLimitUserService
from app.api.rate_limit.services.rate_limit_usage_service import RateLimitUsageService
from app.api.rate_limit.services.rate_limit_policy_group_service import RateLimitPolicyGroupService
from app.api.rate_limit.enums import PolicyPeriodEnum, AIModelEnum, ProviderEnum

class RateLimitHandler(RateLimitServiceServicer):
    
    # --- USER MANAGEMENT ---
    
    async def CreateUser(self, request, context):
        await RateLimitUserService.create_user(request.user_id, request.name, request.policy_group_id)
        return CreateUserResponse(success=True)

    async def GetUser(self, request, context):
        user = await RateLimitUserService.get_user(request.user_id)
        if not user:
            return GetUserResponse()
        return GetUserResponse(user_id=user.id, name=user.name, policy_group_id=user.policy_group_id)

    async def DeleteUser(self, request, context):
        await RateLimitUserService.delete_user(request.user_id)
        return DeleteUserResponse(success=True)

    async def ListUsers(self, request, context):
        users, total_count = await RateLimitUserService.list_users(request.page, request.page_size)
        return ListUsersResponse(
            users=[GetUserResponse(user_id=u.id, name=u.name, policy_group_id=u.policy_group_id) for u in users],
            total_count=total_count
        )

    # --- POLICY GROUP MANAGEMENT ---
    async def CreatePolicyGroup(self, request, context):
        await RateLimitPolicyGroupService.create_policy_group(request.name)
        return CreatePolicyGroupResponse(success=True)

    async def GetPolicyGroup(self, request, context):
        policy_group = await RateLimitPolicyGroupService.get_policy_group(request.policy_group_id)
        if not policy_group:
            return GetPolicyGroupResponse()
        return GetPolicyGroupResponse(policy_group_id=policy_group.id, name=policy_group.name)

    async def UpdatePolicyGroup(self, request, context):
        await RateLimitPolicyGroupService.update_policy_group(request.policy_group_id, request.name)
        return UpdatePolicyGroupResponse(success=True)

    async def DeletePolicyGroup(self, request, context):
        await RateLimitPolicyGroupService.delete_policy_group(request.policy_group_id)
        return DeletePolicyGroupResponse(success=True)

    async def ListPolicyGroups(self, request, context):
        policy_groups, total_count = await RateLimitPolicyGroupService.list_policy_groups(request.page, request.page_size)
        return ListPolicyGroupsResponse(
            policy_groups=[GetPolicyGroupResponse(policy_group_id=pg.id, name=pg.name) for pg in policy_groups],
            total_count=total_count
        )

    # --- POLICY MANAGEMENT ---

    async def CreatePolicy(self, request, context):
        await RateLimitPolicyService.create_policy(request.name, request.model, request.provider, request.input_token_limit, request.output_token_limit, request.period, request.policy_group_id)
        return CreatePolicyResponse(success=True)

    async def GetPolicy(self, request, context):
        policy = await RateLimitPolicyService.get_policy(request.policy_id)
        if not policy:
            return GetPolicyResponse()
        return GetPolicyResponse(
            name=policy.name, model=policy.model, provider=policy.provider,
            input_token_limit=policy.input_token_limit, output_token_limit=policy.output_token_limit,
            period=policy.period, policy_group_id=policy.policy_group_id
        )

    async def UpdatePolicy(self, request, context):
        await RateLimitPolicyService.update_policy(request.policy_id, request.name, request.model, request.provider, request.input_token_limit, request.output_token_limit, request.period, request.policy_group_id)
        return UpdatePolicyResponse(success=True)

    async def DeletePolicy(self, request, context):
        await RateLimitPolicyService.delete_policy(request.policy_id)
        return DeletePolicyResponse(success=True)

    async def ListPolicies(self, request, context):
        policies, total_count = await RateLimitPolicyService.list_policies(request.page, request.page_size)
        return ListPoliciesResponse(
            policies=[GetPolicyResponse(
                name=p.name, model=p.model, provider=p.provider,
                input_token_limit=p.input_token_limit, output_token_limit=p.output_token_limit,
                period=p.period, policy_group_id=p.policy_group_id
            ) for p in policies],
            total_count=total_count
        )

    # --- POLICY ASSIGNMENTS ---
    
    async def AssignPoliciesToUser(self, request, context):
        await RateLimitUserService.assign_policies_to_user(request.user_id, request.policy_ids)
        return AssignPoliciesResponse(success=True)

    async def RemovePoliciesFromUser(self, request, context):
        await RateLimitUserService.remove_policies_from_user(request.user_id, request.policy_ids)
        return RemovePoliciesResponse(success=True)
