# Variables
PYTHON := python3
PROTO_OUT := ./app/proto
DOCKER_IMAGE := ai-service-openai
DOCKER_TAG := latest

CONTAINER_NAME_PREFIX := ai_service_openai

ENV_FILE_API := ./ai-service-api-openai.env
ENV_FILE_WORKER := ./ai-service-worker-openai.env

.PHONY: proto clean server worker docker-build docker-run-server docker-run-worker docker-stop-server docker-stop-worker proto-docker

# Generate Protobuf files locally
proto:
	pipenv run $(PYTHON) app/helper_proto_generator.py

# Run the server locally
server:
	ROLE=server ENV_FILE=$(ENV_FILE_API) pipenv run $(PYTHON) entrypoint.py

# Run the worker locally
worker:
	ROLE=worker ENV_FILE=$(ENV_FILE_WORKER) pipenv run $(PYTHON) entrypoint.py

# Build Docker image
docker-build:
	docker build -t $(DOCKER_IMAGE):$(DOCKER_TAG) .

# Run the server as a Docker container
docker-run-server:
	docker run -d \
		--name $(CONTAINER_NAME_PREFIX)_server \
		--env-file ./ai-service-api-openai.env \
		-p 50061:50061 \
		$(DOCKER_IMAGE):$(DOCKER_TAG)

# Run the worker as a Docker container
docker-run-worker:
	docker run -d \
		--name $(CONTAINER_NAME_PREFIX)_worker \
		--env-file ./ai-service-worker-openai.env \
		$(DOCKER_IMAGE):$(DOCKER_TAG)

# Stop the server container
docker-stop-server:
	docker stop $(CONTAINER_NAME_PREFIX)_server && docker rm $(CONTAINER_NAME_PREFIX)_server

# Stop the worker container
docker-stop-worker:
	docker stop $(CONTAINER_NAME_PREFIX)_worker && docker rm $(CONTAINER_NAME_PREFIX)_worker