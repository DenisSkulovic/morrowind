import asyncio
import os
from sqlalchemy.ext.asyncio import AsyncSession
from alembic import command
from alembic.config import Config
from api.rate_limit.models import AsyncSessionLocal, Policy, User
from api.rate_limit.enums import ProviderEnum, PolicyPeriodEnum, AIModelEnum
from api.rate_limit.services.rate_limit_policy_service import RateLimitPolicyService
from api.rate_limit.services.rate_limit_user_service import RateLimitUserService
from api.rate_limit.services.rate_limit_policy_group_service import RateLimitPolicyGroupService

# predefined data for initial development. Clearly this needs to be done via admin endpoints and such. Later.
policy_groups = [
    {"id": "admin", "name": "Admin", "users": [], "policies": []},
    {"id": "basic", "name": "Basic", "users": [], "policies": []},
    {"id": "premium", "name": "Premium", "users": [], "policies": []},
    {"id": "trial", "name": "Trial", "users": [], "policies": []},
]

policies = [
    {"id": "admin-gpt-4o-mini", "name": "Admin-gpt-4o-mini", "provider": ProviderEnum.OPENAI, "model": AIModelEnum.GPT_4O_MINI, "input_token_limit": 999999999, "output_token_limit": 999999999, "period": PolicyPeriodEnum.MONTHLY, "policy_group_id": "admin"},
    {"id": "admin-gpt-4o", "name": "Admin-gpt-4o", "provider": ProviderEnum.OPENAI, "model": AIModelEnum.GPT_4O, "input_token_limit": 999999999, "output_token_limit": 999999999, "period": PolicyPeriodEnum.MONTHLY, "policy_group_id": "admin"},
    {"id": "admin-gpt-4", "name": "Admin-gpt-4", "provider": ProviderEnum.OPENAI, "model": AIModelEnum.GPT_4, "input_token_limit": 999999999, "output_token_limit": 999999999, "period": PolicyPeriodEnum.MONTHLY, "policy_group_id": "admin"},
    {"id": "admin-gpt-3.5-turbo", "name": "Admin-gpt-3.5-turbo", "provider": ProviderEnum.OPENAI, "model": AIModelEnum.GPT_3_5_TURBO, "input_token_limit": 999999999, "output_token_limit": 999999999, "period": PolicyPeriodEnum.MONTHLY, "policy_group_id": "admin"},

    {"id": "basic-gpt-3.5-turbo", "name": "Basic-gpt-3.5-turbo", "provider": ProviderEnum.OPENAI, "model": AIModelEnum.GPT_3_5_TURBO, "input_token_limit": 50000, "output_token_limit": 50000, "period": PolicyPeriodEnum.MONTHLY, "policy_group_id": "basic"},
    {"id": "basic-gpt-4o-mini", "name": "Basic-gpt-4o-mini", "provider": ProviderEnum.OPENAI, "model": AIModelEnum.GPT_4O_MINI, "input_token_limit": 50000, "output_token_limit": 50000, "period": PolicyPeriodEnum.MONTHLY, "policy_group_id": "basic"},

    {"id": "premium-gpt-4", "name": "Premium-gpt-4", "provider": ProviderEnum.OPENAI, "model": AIModelEnum.GPT_4, "input_token_limit": 500000, "output_token_limit": 500000, "period": PolicyPeriodEnum.MONTHLY, "policy_group_id": "premium"},
    {"id": "premium-gpt-4o", "name": "Premium-gpt-4o", "provider": ProviderEnum.OPENAI, "model": AIModelEnum.GPT_4O, "input_token_limit": 500000, "output_token_limit": 500000, "period": PolicyPeriodEnum.MONTHLY, "policy_group_id": "premium"},
    {"id": "premium-gpt-3.5-turbo", "name": "Premium-gpt-3.5-turbo", "provider": ProviderEnum.OPENAI, "model": AIModelEnum.GPT_3_5_TURBO, "input_token_limit": 500000, "output_token_limit": 500000, "period": PolicyPeriodEnum.MONTHLY, "policy_group_id": "premium"},
    {"id": "premium-gpt-4o-mini", "name": "Premium-gpt-4o-mini", "provider": ProviderEnum.OPENAI, "model": AIModelEnum.GPT_4O_MINI, "input_token_limit": 500000, "output_token_limit": 500000, "period": PolicyPeriodEnum.MONTHLY, "policy_group_id": "premium"},

    {"id": "trial-gpt-3.5-turbo", "name": "Trial-gpt-3.5-turbo", "provider": ProviderEnum.OPENAI, "model": AIModelEnum.GPT_3_5_TURBO, "input_token_limit": 10000, "output_token_limit": 10000, "period": PolicyPeriodEnum.MONTHLY, "policy_group_id": "trial"},
    {"id": "trial-gpt-4o-mini", "name": "Trial-gpt-4o-mini", "provider": ProviderEnum.OPENAI, "model": AIModelEnum.GPT_4O_MINI, "input_token_limit": 10000, "output_token_limit": 10000, "period": PolicyPeriodEnum.MONTHLY, "policy_group_id": "trial"},
]

users = [
    {"id": "admin-user", "name": "Admin-user", "policy_group_id": "admin"},
]



async def create_policy_groups(policy_groups):
    """Insert predefined policy groups into the database if they don't exist."""
    print(f"[initialize_db] Creating policy groups: {policy_groups}", flush=True)
    for policy_group in policy_groups:
        policy_group_obj = await RateLimitPolicyGroupService.get_policy_group(policy_group['id'])
        if not policy_group_obj:
            print(f"[initialize_db] Creating policy group: {policy_group['id']} - {policy_group['name']}", flush=True)
            await RateLimitPolicyGroupService.create_policy_group(policy_group_id=policy_group['id'], name=policy_group['name'])
            print(f"Predefined policy group created: {policy_group['id']} - {policy_group['name']}", flush=True)
        else:
            print(f"[initialize_db] Policy group already exists: {policy_group['id']} - {policy_group['name']}", flush=True)

async def create_users(users):
    """Insert predefined users into the database if they don't exist."""
    print(f"[initialize_db] Creating users: {users}", flush=True)
    for user in users:
        user_obj = await RateLimitUserService.get_user(user['id'])
        if not user_obj:
            print(f"[initialize_db] Creating user: {user['id']} - {user['name']} - {user['policy_group_id']}", flush=True)
            await RateLimitUserService.create_user(user_id=user['id'], name=user['name'], policy_group_id=user['policy_group_id'])
            print(f"Predefined user created: {user['id']} - {user['name']} - {user['policy_group_id']}", flush=True)
        else:
            print(f"[initialize_db] User already exists: {user['id']} - {user['name']} - {user['policy_group_id']}", flush=True)
    print("Predefined users inserted successfully!")

async def create_policies(policies):
    """Insert predefined policies into the database if they don't exist."""
    print(f"[initialize_db] Creating policies: {policies}", flush=True)
    for policy in policies:
        policy_obj = await RateLimitPolicyService.get_policy(policy['id'])
        if not policy_obj:
            print(f"[initialize_db] Creating policy: {policy['id']} - {policy['name']} - {policy['model']} - {policy['provider']} - {policy['input_token_limit']} - {policy['output_token_limit']} - {policy['period']} - {policy['policy_group_id']}", flush=True)
            await RateLimitPolicyService.create_policy(policy_id=policy['id'], name=policy['name'], model=policy['model'], provider=policy['provider'], input_token_limit=policy['input_token_limit'], output_token_limit=policy['output_token_limit'], period=policy['period'], policy_group_id=policy['policy_group_id'])
            print(f"Predefined policy created: {policy['id']} - {policy['name']} - {policy['model']} - {policy['provider']} - {policy['input_token_limit']} - {policy['output_token_limit']} - {policy['period']} - {policy['policy_group_id']}", flush=True)
        else:
            print(f"[initialize_db] Policy already exists: {policy['id']} - {policy['name']} - {policy['model']} - {policy['provider']} - {policy['input_token_limit']} - {policy['output_token_limit']} - {policy['period']} - {policy['policy_group_id']}", flush=True)
    print("Predefined policies inserted successfully!")

async def initialize_db():
    await create_policy_groups(policy_groups)
    await create_users(users)
    await create_policies(policies)

if __name__ == "__main__":
    asyncio.run(initialize_db())