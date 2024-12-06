import { TaggableContentBase } from "../../class/TaggableContentBase";
import { MemoryTypeEnum } from "../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { MemoryTypeEnumDTO, MemoryDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { Fact } from "./Fact";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../class/FormSelectOption";

export class Memory extends TaggableContentBase {
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter memory name', required: true })
    name!: string;

    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter memory description', required: true })
    description!: string

    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Memory Type',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(MemoryTypeEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({
        serialize: (i) => serializeEnum(MemoryTypeEnum, MemoryTypeEnumDTO, i),
        deserialize: (i) => deserializeEnum(MemoryTypeEnumDTO, MemoryTypeEnum, i)
    })
    type!: MemoryTypeEnum // TODO need to properly conceptualize types of memories and what that means. Maybe better to do it with tags?

    @FormField({ component: FieldComponentEnum.OBJECT_FIELD, label: 'Facts', placeholder: 'Enter facts', required: true })
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