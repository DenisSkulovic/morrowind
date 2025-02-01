import os
from alembic import command
from alembic.config import Config

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
print(f"[migrations.py] BASE_DIR: {BASE_DIR}", flush=True)
ALEMBIC_CONFIG_PATH = os.path.abspath(os.path.join(BASE_DIR, "../../../../alembic.ini"))  # Path to Alembic config
print(f"[migrations.py] ALEMBIC_CONFIG_PATH: {ALEMBIC_CONFIG_PATH}", flush=True)

async def run_alembic_migrations():
    """Run Alembic migrations automatically before inserting data."""
    print("[migrations.py] Running Alembic migrations...", flush=True)
    alembic_cfg = Config(ALEMBIC_CONFIG_PATH)
    command.upgrade(alembic_cfg, "head")  # Apply all migrations
    print("[migrations.py] Alembic migrations completed!", flush=True)

async def generate_migration_if_schema_changed():
    """Generate a new migration if there are schema changes."""
    print("[migrations.py] Checking for schema changes...", flush=True)
    alembic_cfg = Config(ALEMBIC_CONFIG_PATH)

    try:
        # Auto-generate a new migration based on schema changes
        command.revision(alembic_cfg, autogenerate=True, message="Auto-update migration")
        print("[migrations.py] New migration generated!", flush=True)
    except Exception as e:
        if "Target database is already up to date" in str(e):
            print("[migrations.py] No schema changes detected. Skipping migration.", flush=True)
        else:
            print(f"[migrations.py] Migration generation failed: {e}", flush=True)
