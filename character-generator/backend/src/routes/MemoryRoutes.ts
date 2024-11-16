import { Router } from "express";
import { MemoryController } from "../controller/MemoryController";

const router = Router();

router.post("/", MemoryController.createMemory); // Create a new memory
router.get("/:characterId", MemoryController.getMemoriesByCharacter); // Get memories by character
router.delete("/:memoryId", MemoryController.deleteMemory); // Delete a memory

export default router;