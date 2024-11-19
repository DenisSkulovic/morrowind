import { Request, Response } from "express";
import { MemoryService } from "../layer_2_and_3/service/MemoryService";
import { DataSourceEnum } from "../enum/DataSourceEnum";
import { sourcesMap } from "../data-source";
import { getSanitizedSource } from "../util/getSanitizedSource";



export class MemoryController {

    public static async createMemory(req: Request, res: Response): Promise<void> {
        try {
            const memoryService = new MemoryService({ sourcesMap });
            const { characterId, description, type } = req.body;
            const source: DataSourceEnum = getSanitizedSource(req.query.source)
            const memory = await memoryService.createMemory(source, { characterId, description, type });
            res.status(201).json(memory);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    };

    public static async getMemoriesByCharacter(req: Request, res: Response): Promise<void> {
        try {
            const source: DataSourceEnum = getSanitizedSource(req.query.source)
            const memoryService = new MemoryService({ sourcesMap });
            const { characterId } = req.params;
            const memories = await memoryService.getMemoriesByCharacter(characterId, source);
            res.status(200).json(memories);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    };

    public static async deleteMemory(req: Request, res: Response): Promise<void> {
        try {
            const source: DataSourceEnum = getSanitizedSource(req.query.source)
            const memoryService = new MemoryService({ sourcesMap });
            const { memoryId } = req.params;
            await memoryService.deleteMemory(memoryId, source);
            res.status(204).send();
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    };

}
