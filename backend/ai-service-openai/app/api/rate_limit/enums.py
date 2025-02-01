from enum import Enum

class PolicyPeriodEnum(Enum):
    DAILY = "daily"
    MONTHLY = "monthly"
    YEARLY = "yearly"

class AIModelEnum(Enum):
    GPT_3_5_TURBO = "gpt-3.5-turbo"
    GPT_4 = "gpt-4"
    GPT_4O = "gpt-4o"
    GPT_4O_MINI = "gpt-4o-mini"

class ProviderEnum(Enum):
    OPENAI = "openai"
