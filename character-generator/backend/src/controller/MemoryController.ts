import { Request, Response } from "express";
import { MemoryService } from "../service/MemoryService";


export class MemoryController {

    public static async createMemory(req: Request, res: Response): Promise<void> {
        try {
            const memoryService = new MemoryService();
            const { characterId, description, type } = req.body;
            const memory = await memoryService.createMemory(characterId, description, type);
            res.status(201).json(memory);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    };

    public static async getMemoriesByCharacter(req: Request, res: Response): Promise<void> {
        try {
            const memoryService = new MemoryService();
            const { characterId } = req.params;
            const memories = await memoryService.getMemoriesByCharacter(Number(characterId));
            res.status(200).json(memories);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    };

    public static async deleteMemory(req: Request, res: Response): Promise<void> {
        try {
            const memoryService = new MemoryService();
            const { memoryId } = req.params;
            await memoryService.deleteMemory(Number(memoryId));
            res.status(204).send();
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    };

}
