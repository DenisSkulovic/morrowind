import { ContentBase } from "../class/ContentBase";
import { MemoryPoolEntryDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";

export class MemoryPoolEntry extends ContentBase {
    @Serializable()
    name!: string;

    @Serializable()
    memoryPool!: string;

    @Serializable()
    memory!: string;

    @Serializable()
    probability!: number;

    @Serializable()
    defaultClarity!: number;

    @Serializable()
    defaultImportance!: number;

    public toDTO(): MemoryPoolEntryDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: MemoryPoolEntryDTO): MemoryPoolEntry {
        const memoryPoolEntry = new MemoryPoolEntry();
        return Serializer.fromDTO(dto, memoryPoolEntry);
    }
}