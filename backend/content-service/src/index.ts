import "reflect-metadata";
import express from "express";
import { WorldDataSource, CampaignDataSource } from "./data-source";
import memoryRoutes from "./routes/MemoryRoutes";

const app = express();
app.use(express.json()); // Middleware to parse JSON
(async () => {
    // Initialize TypeORM Data Source
    const dataSourcePromises = [WorldDataSource, CampaignDataSource].map(async (dataSource) => {
        await dataSource.initialize()
        console.log("Data Source has been initialized");
    })

    await Promise.all(dataSourcePromises)

    // Use Memory Router
    app.use("/api/memories", memoryRoutes);

    // Start the Server
    const PORT = 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });

})()