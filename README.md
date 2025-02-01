# 🎮 AI-Powered Game World & Campaign Manager

A modern web application for creating and managing game worlds and campaigns, leveraging cutting-edge technologies and AI assistance for content generation. Built with a robust tech stack focused on performance, scalability, and real-time capabilities.

## 🚀 Technology Stack

### Frontend
- **Next.js** - React framework for production-grade applications
- **TypeScript** - For type-safe code and enhanced developer experience
- **Apollo Client** - Seamless GraphQL integration for flexible data querying
- **Redux** - State management with predictable state containers
- **Material UI** - Polished component library for consistent design
- **gRPC-Web** - Efficient client-server communication for structured APIs

### Backend
- **NestJS** - Progressive Node.js framework for scalable applications
- **TypeScript** - For type-safe code and enhanced developer experience
- **GraphQL** - Flexible querying for smart search and dynamic data needs
- **gRPC** - High-performance RPC framework for service communication
- **Python** - For AI integration and content processing
- **Redis** - High-speed caching for transient gameplay data
- **RabbitMQ** - Reliable message broker for microservice coordination, specifically for AI usage at the moment
- **Docker** - Containerization for consistent deployment
- **Kubernetes** - Container orchestration for scalable deployment
- **AWS** - Cloud infrastructure and services
- **PostgreSQL** - Robust database for world/campaign data; to track rate limiting for AI usage

### 🤖 AI Integration
- **OpenAI API** - For dynamic content generation, dialogue and game narration

## 🌟 Key Features

- **World Creation & Management**
  - TypeScript-powered tools for defining game entities
  - GraphQL-based smart search for flexible and complex queries
  - AI-assisted content generation with Python backend

- **Dynamic Campaign System**
  - NestJS microservices architecture for campaign management
  - AI-driven dialogue and narrative generation (in other words - an AI Dungeon Master)
  - Redis for transient gameplay state and high-speed data access
  - Scalable cloud deployment with Kubernetes on AWS

- **Gameplay Features**
  - Flexible dialogue system using gRPC/WebSocket streams
  - Procedural generation of temporary game content
  - Integration of player choices with AI-guided outcomes

## 📅 Status: In Development

Currently focusing on:
- Implementing **GraphQL** for smart search functionality.
- Enhancing the **AI-driven dialogue system** with real-time streaming.
- Expanding **backend microservices** for dynamic campaign management.
- Refining the **Next.js frontend** for intuitive world-building and gameplay interfaces. Integrating AI-assisted content generation and playground dialogue simulation with a character while on the world-building UI.

[📚 Documentation](./docs) | [🤝 Contributing](./CONTRIBUTING.md)