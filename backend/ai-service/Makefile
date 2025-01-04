# Variables
PYTHON := python3
PROTO_SRC := ./proto
PROTO_OUT := ./generated
PROTO_FILES := $(wildcard $(PROTO_SRC)/*.proto)
DOCKER_IMAGE := ai-service
DOCKER_TAG := latest

.PHONY: proto clean server worker docker-build docker-run docker-stop

# Generate Protobuf files
proto:
	$(PYTHON) -m grpc_tools.protoc \
		--proto_path=$(PROTO_SRC) \
		--python_out=$(PROTO_OUT) \
		--grpc_python_out=$(PROTO_OUT) \
		$(PROTO_FILES)

# Clean generated Protobuf files
clean:
	rm -rf $(PROTO_OUT)/*.py

# Run the server locally
server:
	$(PYTHON) server.py

# Run the worker locally
worker:
	$(PYTHON) worker.py

# Build Docker image
docker-build:
	docker build -t $(DOCKER_IMAGE):$(DOCKER_TAG) .

# Run Docker containers for server and worker
docker-run:
	docker-compose up -d

# Stop Docker containers
docker-stop:
	docker-compose down
