# Specify the Python interpreter
PYTHON := python3

# Protobuf generation command
PROTO_SRC := ./proto
PROTO_OUT := ./generated
PROTO_FILES := $(wildcard $(PROTO_SRC)/*.proto)

.PHONY: proto clean

# Command to generate Protobuf files
proto:
	protoc --proto_path=$(PROTO_SRC) --python_out=$(PROTO_OUT) --grpc_python_out=$(PROTO_OUT) $(PROTO_FILES)

# Clean generated files
clean:
	rm -rf $(PROTO_OUT)/*.py

# Run the application
run:
	$(PYTHON) server.py
