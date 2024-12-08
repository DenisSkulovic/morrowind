import { TaggableContentBase } from "../../class/TaggableContentBase";
import { MemoryPoolDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { MemoryPoolEntry } from "./MemoryPoolEntry";
import { Tag } from "./Tag";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../class/FormSelectOption";
import { DisplayField } from '../../decorator/display-field.decorator';
import { EntityDisplay } from '../../decorator/entity-display.decorator';
import { FilterOption } from "../../decorator/filter-option.decorator";
import { Context } from "../../class/Context";
import { ContentService } from "../../services/ContentService";
import { SearchQuery } from "../../class/search/SearchQuery";

@EntityDisplay({
    title: 'Memory Pools',
    defaultSort: 'name'
})
export class MemoryPool extends TaggableContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter memory pool name', required: true })
    name!: string;

    @DisplayField({ order: 2 })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter memory pool description' })
    description?: string;

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Memory Pool Entries',
        search: async (filter: SearchQuery, context: Context): Promise<FormSelectOption[]> => {
            return (await MemoryPoolEntry.search(filter, context)).map((item: MemoryPoolEntry) => {
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

    public static async search(filter: SearchQuery, context: Context): Promise<MemoryPool[]> {
        const contentService = new ContentService<MemoryPool>();
        const { results } = await contentService.searchContent('MemoryPool', filter, 1, 100, context);
        return results as MemoryPool[];
    }
}

// memory pools are collections of memory entries, memory pool entries contain a memory and some expected values for generation, and memories are collections of facts. Memory pools can be any groupings by region, topic, etc.
// Reason for MemoryPoolEntry: same memory can have different significance for different groups of people, and different levels of claarity and detail based on something like professional expertise.
// examples: "Seida Neen (local)", "Seida Neen (passerby)", "Bitter Coast (local)", "Bitter Coast (rudimentary)", "Fishing (Expert)", "Dwemer Architecture (Expert)", "Almsivi (devout)"