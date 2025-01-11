# Use an official lightweight Python image
FROM python:3.9-slim

# Set working directory
WORKDIR /app

# Install pipenv
RUN pip install pipenv grpcio-tools

# Install dependencies
COPY Pipfile Pipfile.lock ./
RUN pipenv install --system --deploy

# Copy codebase
COPY . .

# Expose default port (can be overridden via env)
EXPOSE ${PORT}

# Entry point script that checks ROLE
ENTRYPOINT ["python3", "app/entrypoint.py"]