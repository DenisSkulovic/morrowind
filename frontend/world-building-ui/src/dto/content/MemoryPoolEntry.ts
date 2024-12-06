import { ContentBase } from "../../class/ContentBase";
import { MemoryPoolEntryDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../class/FormSelectOption";
import { MemoryPool } from "./MemoryPool";

export class MemoryPoolEntry extends ContentBase {
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter memory pool entry name', required: true })
    name!: string;

    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Memory Pool',
        search: async (filter): Promise<FormSelectOption[]> => {
            return (await MemoryPool.search(filter)).map((item: MemoryPool) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    memoryPool!: string;

    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Memory', placeholder: 'Enter memory', required: true })
    memory!: string;

    @Serializable()
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Probability', placeholder: 'Enter probability', required: true })
    probability!: number;

    @Serializable()
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Default Clarity', placeholder: 'Enter default clarity', required: true })
    defaultClarity!: number;

    @Serializable()
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Default Importance', placeholder: 'Enter default importance', required: true })
    defaultImportance!: number;

    public toDTO(): MemoryPoolEntryDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: MemoryPoolEntryDTO): MemoryPoolEntry {
        const memoryPoolEntry = new MemoryPoolEntry();
        return Serializer.fromDTO(dto, memoryPoolEntry);
    }

    public static async search(filter?: any): Promise<MemoryPoolEntry[]> {
        // perform request to backend using the filter
        // return array of options
        return []
    }
}