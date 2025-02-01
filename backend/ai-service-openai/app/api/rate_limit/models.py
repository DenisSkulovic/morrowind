from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker, relationship, declarative_base
from sqlalchemy import Column, String, Integer, DateTime, ForeignKey, Table, func, Enum
import uuid
import os
from api.rate_limit.enums import PolicyPeriodEnum, AIModelEnum, ProviderEnum
from config import DATABASE_URL


Base = declarative_base()
engine = create_async_engine(DATABASE_URL, echo=True)
AsyncSessionLocal = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)


class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String, nullable=False)
    usage = relationship("UserUsage", back_populates="user")
    policy_group_id = Column(String, ForeignKey("policy_groups.id"), nullable=False)
    policy_group = relationship("PolicyGroup", back_populates="users")

class PolicyGroup(Base):
    __tablename__ = "policy_groups"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String, nullable=False)
    users = relationship("User", back_populates="policy_group")
    policies = relationship("Policy", back_populates="policy_group")

class Policy(Base):
    __tablename__ = "policies"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String, nullable=False)
    policy_group_id = Column(String, ForeignKey("policy_groups.id"), nullable=False)
    policy_group = relationship("PolicyGroup", back_populates="policies")
    provider = Column(Enum(ProviderEnum), nullable=False)  # e.g., "openai"
    model = Column(Enum(AIModelEnum), nullable=False)  # e.g., "gpt-4", "gpt-3.5-turbo"
    input_token_limit = Column(Integer, nullable=False)
    output_token_limit = Column(Integer, nullable=False)
    period = Column(Enum(PolicyPeriodEnum), nullable=False)  # "daily", "monthly"

class UserUsage(Base):
    __tablename__ = "user_usage"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(String, ForeignKey("users.id"), nullable=False)
    user = relationship("User", back_populates="usage")
    model = Column(Enum(AIModelEnum), nullable=False)
    provider = Column(Enum(ProviderEnum), nullable=False)
    input_tokens_used = Column(Integer, default=0)  # Track input tokens separately
    output_tokens_used = Column(Integer, default=0)  # Track output tokens separately
    last_reset = Column(DateTime, default=func.now())