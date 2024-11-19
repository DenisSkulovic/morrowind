import { Memory } from "../../entities/Content/Knowledge/Memory";
import { Character } from "../../entities/Content/Character";
import { ContentServiceBase, ContentServiceSettings } from "./ContentServiceBase";
import { DataSourceEnum } from "../../enum/DataSourceEnum";
import { Repository } from "typeorm";
import { CharacterMemory } from "../../entities/Content/Knowledge/CharacterMemory";

export class MemoryService extends ContentServiceBase {

    constructor(settings: ContentServiceSettings) {
        super(settings)
    }

    // Create a new memory
    async createMemory(
        source: DataSourceEnum,
        data: {
            characterId: string,
            description: string,
            type: string
        }
    ): Promise<Memory> {
        const {characterId, description, type} = data

        const characterRepository: Repository<Character> = this.getContentRepository("Character", source) as Repository<Character>;
        const character: Character | null = await characterRepository.findOneBy({ id: characterId });

        if (!character) throw new Error("Character not found");

        const memoryRepository: Repository<Memory> = this.getContentRepository("Memory", source) as Repository<Memory>;
        const memory = memoryRepository.create({ description, type });
        return memoryRepository.save(memory);
    }

    // TODO create a CharacterMemoryService and move this method there
    // Get all memories for a character
    async getMemoriesByCharacter(
        characterId: string,
        source: DataSourceEnum,
    ): Promise<CharacterMemory[]> {
        const memoryRepository: Repository<CharacterMemory> = this.getContentRepository("CharacterMemory", source) as Repository<CharacterMemory>;
        return memoryRepository.find({
            where: { character: { id: characterId } },
            relations: ["character"],
        });
    }

    // Delete a memory
    async deleteMemory(
        memoryId: string,
        source: DataSourceEnum,
    ): Promise<void> {
        const memoryRepository: Repository<Memory> = this.getContentRepository("Memory", source) as Repository<Memory>;
        const memory = await memoryRepository.findOneBy({ id: memoryId });
        if (!memory) throw new Error("Memory not found");
        await memoryRepository.remove(memory);
    }
}
