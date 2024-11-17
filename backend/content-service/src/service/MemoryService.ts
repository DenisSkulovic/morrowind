import { AppDataSource } from "../data-source";
import { Memory } from "../entities/Memory";
import { Character } from "../entities/Character";

export class MemoryService {
    private memoryRepository = AppDataSource.getRepository(Memory);

    // Create a new memory
    async createMemory(characterId: number, description: string, type: string): Promise<Memory> {
        const characterRepository = AppDataSource.getRepository(Character);
        const character = await characterRepository.findOneBy({ id: characterId });

        if (!character) {
            throw new Error("Character not found");
        }

        const memory = this.memoryRepository.create({ description, type, character });
        return this.memoryRepository.save(memory);
    }

    // Get all memories for a character
    async getMemoriesByCharacter(characterId: number): Promise<Memory[]> {
        return this.memoryRepository.find({
            where: { character: { id: characterId } },
            relations: ["character"],
        });
    }

    // Delete a memory
    async deleteMemory(memoryId: number): Promise<void> {
        const memory = await this.memoryRepository.findOneBy({ id: memoryId });
        if (!memory) {
            throw new Error("Memory not found");
        }
        await this.memoryRepository.remove(memory);
    }
}
