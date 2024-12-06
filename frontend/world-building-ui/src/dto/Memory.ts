import { TaggableContentBase } from "../class/TaggableContentBase";
import { MemoryTypeEnum } from "../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../enum/util";
import { MemoryTypeEnumDTO, MemoryDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";
import { Fact } from "./Fact";

export class Memory extends TaggableContentBase {
    @Serializable()
    name!: string;

    @Serializable()
    description!: string

    @Serializable({
        serialize: (i) => serializeEnum(MemoryTypeEnum, MemoryTypeEnumDTO, i),
        deserialize: (i) => deserializeEnum(MemoryTypeEnumDTO, MemoryTypeEnum, i)
    })
    type!: MemoryTypeEnum // TODO need to properly conceptualize types of memories and what that means. Maybe better to do it with tags?

    @Serializable({ strategy: 'full' })
    facts!: Fact[]

    public toDTO(): MemoryDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: MemoryDTO): Memory {
        const memory = new Memory();
        return Serializer.fromDTO(dto, memory);
    }
}