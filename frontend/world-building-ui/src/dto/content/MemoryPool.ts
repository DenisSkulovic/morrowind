import { TaggableContentBase } from "../../class/TaggableContentBase";
import { MemoryPoolDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { MemoryPoolEntry } from "./MemoryPoolEntry";
import { Tag } from "./Tag";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../class/FormSelectOption";

export class MemoryPool extends TaggableContentBase {
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter memory pool name', required: true })
    name!: string;

    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter memory pool description' })
    description?: string;

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Memory Pool Entries',
        search: async (filter): Promise<FormSelectOption[]> => {
            return (await MemoryPoolEntry.search(filter)).map((item: MemoryPoolEntry) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    memoryPoolEntries!: string[];

    public toDTO(): MemoryPoolDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: MemoryPoolDTO): MemoryPool {
        const memoryPool = new MemoryPool();
        return Serializer.fromDTO(dto, memoryPool);
    }

    public static async search(filter?: any): Promise<MemoryPool[]> {
        // perform request to backend using the filter
        // return array of options
        return []
    }
}

// memory pools are collections of memory entries, memory pool entries contain a memory and some expected values for generation, and memories are collections of facts. Memory pools can be any groupings by region, topic, etc.
// Reason for MemoryPoolEntry: same memory can have different significance for different groups of people, and different levels of claarity and detail based on something like professional expertise.
// examples: "Seida Neen (local)", "Seida Neen (passerby)", "Bitter Coast (local)", "Bitter Coast (rudimentary)", "Fishing (Expert)", "Dwemer Architecture (Expert)", "Almsivi (devout)"