### **Project: Morrowind-Themed Character Generator**

This project is a **fullstack web application** aimed at creating and managing detailed, lore-appropriate characters inspired by *The Elder Scrolls III: Morrowind*. It is being developed as part of a portfolio project to showcase fullstack development skills while remaining flexible for future expansions like combat systems, quest generation, and interactive world-building.

---

### **Current Features and Setup**

#### **Primary Goal**
- Allow users to create characters based on predefined archetypes (e.g., Dunmer Fisherman, Imperial Guard).
- Customize characters further with attributes like name, race, skills, memories, and tags.
- Handle character data in the backend and serve it to the frontend for display and interaction.

#### **Future Goals**
- Expand the backend logic to support relationships, dialogue, and dynamic character interactions.
- Integrate more complex features like:
  - Quest systems.
  - Combat mechanics based on attributes and personality traits.
  - An interactive inventory system with weight and volume limits.

---

### **Tech Stack**

#### **Backend**
- **Node.js** and **Express**: Lightweight server to handle API requests and business logic.
- **TypeORM**: Manages database interactions with entity definitions and relations.
- **PostgreSQL**: Relational database for persistent character, archetype, and memory storage.
- **TypeScript**: Enforces type safety and clean code structure.

#### **Frontend**
- **React** with **Next.js**: For efficient routing, SSR/SSG capabilities, and building a modern UI.
- **TypeScript**: Ensures type safety in the frontend.

#### **Development Environment**
- **Docker Compose**: Containerized setup for running all services (frontend, backend, database).
- **Nodemon**: Hot reloading for backend development.
- **Postgres Docker Image**: Manages database services without local installation.

---

### **Current Folder and File Structure**

#### **Project Root (character-generator/)**
plaintext
/character-generator/
├── docker-compose.yml        # Orchestrates all services (frontend, backend, database)
├── .env                      # Contains environment variables (Postgres credentials, etc.)
├── backend/                  # Backend service files
│   ├── Dockerfile.dev        # Dockerfile for development setup
│   ├── src/                  # Source code for the backend
│   │   ├── index.ts          # Entry point for the backend server
│   │   ├── entities/         # TypeORM entity definitions
│   │   │   ├── Character.ts  # Defines the Character entity
│   │   │   └── Memory.ts     # Defines the Memory entity
│   │   ├── controller/       # Express controllers for handling API endpoints
│   │   │   └── MemoryController.ts # Manages memory-related logic
│   │   ├── services/         # Business logic layer
│   │   │   └── MemoryService.ts    # Encapsulates memory-related operations
│   │   ├── data-source.ts    # TypeORM DataSource configuration
│   │   └── routes/           # API routes for each resource
│   │       └── memoryRoutes.ts  # Routes for memory management
├── frontend/                 # Frontend service files
│   ├── Dockerfile            # Dockerfile for building the frontend
│   ├── src/                  # Source code for the frontend
│   │   └── app/              # Next.js app directory
│   │       └── page.tsx      # Placeholder for initial UI


---

### **Project Logic**

#### **Backend**

1. **API Design**
   - **RESTful Endpoints**:
     - GET /api/memories: Fetches all memories for a character.
     - POST /api/memories: Creates a new memory for a character.
     - PUT /api/memories/:id: Updates an existing memory.
     - DELETE /api/memories/:id: Marks a memory as deleted.

2. **Entity Relationships**
   - **Character**:
     - A Character can have many Memory instances.
   - **Memory**:
     - Belongs to a single Character.
     - Stores metadata like type, description, and timestamps.

3. **Database**
   - Managed using **TypeORM** with migration capabilities for schema evolution.
   - data-source.ts initializes and synchronizes entities with the database.

4. **Development Features**
   - **Hot Reloading**: Changes in the code are reflected automatically using nodemon.
   - **Error Handling**: Controllers ensure exceptions are caught and reported via structured responses.

---

#### **Frontend**

1. **Next.js Setup**
   - **App Router**: Pages are built dynamically.
   - Uses **React components** for modularity and reusability.
   - Currently, the frontend is in its initial stages with a basic page.tsx.

2. **UI Goals**
   - Present detailed character data dynamically.
   - Allow users to create, view, and edit characters via interactive forms.

---

### **Current Development Considerations**

1. **Frontend Development**
   - Will use Next.js dynamic routing for character pages.
   - Plans to use a state management library like Redux or Context API for UI state.

2. **Backend Improvements**
   - Add validation middleware to ensure robust input handling.
   - Implement an abstract service layer for shared logic.

3. **Database**
   - Switch from synchronize: true (dev-only) to migrations for production readiness.

4. **Profiles in Docker Compose**
   - Profiles allow selective service startup for faster iterations:
     - backend profile: Spins up the backend and database.
     - frontend profile: Only starts the frontend service.
     - fullstack profile: Starts all services together.

---

### **Future Plans**

#### **Expansion**
- **Quests**:
  - Introduce a quest system where characters can undertake tasks with branching outcomes.
  - Tie quests to memories, allowing characters to reflect on completed quests in dialogue.

- **Combat Mechanics**:
  - Build a module for character-based combat using skills, attributes, and inventory.

- **AI Integration**:
  - Use text-based AI for generating dialogue, quest steps, and immersive world-building.

#### **UI Enhancements**
- Implement a fully responsive design for mobile and desktop.
- Use Tailwind CSS or Material-UI for styling components.

#### **Authentication**
- Integrate **AWS Cognito** or **Auth0** for user authentication.
- Allow users to save and retrieve their characters.

---

### **Development Environment Summary**

- **Local Development**:
  - Uses Docker Compose with nodemon for backend hot reloading and volume mounts for live code editing.
- **Testing**:
  - Postman or Insomnia for API testing.
  - Plans to add unit tests using Jest.

---