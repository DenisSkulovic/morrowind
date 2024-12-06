import { serializeFactStatuses, deserializeFactStatuses, FactStatus } from "../class/FactStatus";
import { TaggableContentBase } from "../class/TaggableContentBase";
import { CharacterMemoryDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class CharacterMemory extends TaggableContentBase {
    @Serializable()
    name!: string;

    @Serializable()
    character!: string;

    @Serializable()
    memory!: string;

    @Serializable({ serialize: serializeFactStatuses, deserialize: deserializeFactStatuses })
    factStatus?: FactStatus[];

    @Serializable()
    importance!: number; // How significant this memory is (affects reinforcement)

    @Serializable()
    resistance!: number; // Higher resistance = slower clarity decay

    @Serializable()
    accumulator!: number; // from 0 to

    @Serializable()
    acquiredAt?: number; // Date memory was gained

    @Serializable()
    lastUpdatedAt?: number; // Last time the memory was reinforced/pruned

    public toDTO(): CharacterMemoryDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: CharacterMemoryDTO): CharacterMemory {
        const characterMemory = new CharacterMemory();
        return Serializer.fromDTO(dto, characterMemory);
    }
}