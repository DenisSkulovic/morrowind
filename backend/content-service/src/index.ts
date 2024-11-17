import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./data-source";
import memoryRoutes from "./routes/MemoryRoutes";

const app = express();
app.use(express.json()); // Middleware to parse JSON

// Initialize TypeORM Data Source
AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized");
    })
    .catch((err: any) => {
        console.error("Error initializing Data Source:", err);
    });

// Use Memory Router
app.use("/api/memories", memoryRoutes);

// Start the Server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
