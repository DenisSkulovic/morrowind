import os
import subprocess
from pathlib import Path

# Define paths
PROTO_SRC = "./proto"
PROTO_OUT = "./"

# Ensure output directory exists
Path(PROTO_OUT).mkdir(parents=True, exist_ok=True)

# List all .proto files
proto_files = [f for f in Path(PROTO_SRC).glob("*.proto")]

if not proto_files:
    print("[helper_proto_generator.py] No .proto files found.")
    exit(1)

# Generate gRPC code for each .proto file
for proto_file in proto_files:
    print(f"[helper_proto_generator.py] Processing {proto_file}...", flush=True)
    subprocess.run([
        "python3", "-m", "grpc_tools.protoc",
        f"--proto_path={PROTO_SRC}",
        f"--python_out={PROTO_OUT}",
        f"--grpc_python_out={PROTO_OUT}",
        str(proto_file)
    ], check=True)

print("[helper_proto_generator.py] Protobuf files generated successfully.", flush=True)
