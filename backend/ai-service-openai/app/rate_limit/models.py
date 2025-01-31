from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker, relationship, declarative_base
from sqlalchemy import Column, String, Integer, DateTime, ForeignKey, Table, func
import uuid
import os

# Use environment variables for DB URL
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql+asyncpg://user:password@postgres/mydb")

Base = declarative_base()
engine = create_async_engine(DATABASE_URL, echo=True)
AsyncSessionLocal = sessionmaker(engine, class_=AsyncSession, expire_on_commit=False)

# Many-to-Many: Users ↔ Policies
user_policies = Table(
    "user_policies",
    Base.metadata,
    Column("user_id", String, ForeignKey("users.id"), primary_key=True),
    Column("policy_id", String, ForeignKey("policies.id"), primary_key=True)
)

class User(Base):
    __tablename__ = "users"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String, nullable=False)
    user_type = Column(String, nullable=False)  # "admin", "basic", "premium"
    policies = relationship("Policy", secondary=user_policies, back_populates="users")

class Policy(Base):
    __tablename__ = "policies"

    id = Column(String, primary_key=True, default=lambda: str(uuid.uuid4()))
    name = Column(String, nullable=False)
    model = Column(String, nullable=False)  # e.g., "gpt-4", "gpt-3.5-turbo"
    input_token_limit = Column(Integer, nullable=False)
    output_token_limit = Column(Integer, nullable=False)
    period = Column(String, nullable=False)  # "daily", "monthly"
    users = relationship("User", secondary=user_policies, back_populates="policies")

from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from database import Base

class UserUsage(Base):
    __tablename__ = "user_usage"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    user_id = Column(String, ForeignKey("users.id"), nullable=False)
    model = Column(String, nullable=False)
    input_tokens_used = Column(Integer, default=0)  # Track input tokens separately
    output_tokens_used = Column(Integer, default=0)  # Track output tokens separately
    tokens_used = Column(Integer, default=0)  # Total = input + output