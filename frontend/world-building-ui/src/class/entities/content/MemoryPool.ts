import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { Serializable } from "../../../decorator/serializable.decorator";
import { MemoryPoolEntry } from "./MemoryPoolEntry";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../../class/FormSelectOption";
import { DisplayField } from '../../../decorator/display-field.decorator';
import { EntityDisplay } from '../../../decorator/entity-display.decorator';
import { FilterOption, FilterOptionTypeEnum } from '../../../decorator/filter-option.decorator';
import { Context } from '../../../class/Context';
import { SearchQuery } from '../../../class/search/SearchQuery';
import { MemoryPoolEntriesDTO, MemoryPoolEntryDTO } from "../../../proto/entities_pb";
import { SerializeStrategyEnum } from "../../../serialize/serializer";

@EntityDisplay({
    title: 'Memory Pools',
    defaultSort: 'name'
})
export class MemoryPool extends TaggableContentBase {
    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter memory pool name', required: true })
    name!: string;

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter memory pool description' })
    description?: string;

    @DisplayField({
        displayName: 'No. of Memory Pool Entries',
        getValue: (memoryPoolEntries) => memoryPoolEntries?.length || 0
    })
    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Memory Pool Entries',
        search: async (filter: SearchQuery, context: Context): Promise<FormSelectOption[]> => {
            return (await MemoryPoolEntry.search<MemoryPoolEntry>(filter, context)).map((item: MemoryPoolEntry) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable({ strategy: SerializeStrategyEnum.ID, internalClass: MemoryPoolEntry, dtoClass: MemoryPoolEntryDTO, dtoArrClass: MemoryPoolEntriesDTO })
    memoryPoolEntries!: MemoryPoolEntry[];

}

// memory pools are collections of memory entries, memory pool entries contain a memory and some expected values for generation, and memories are collections of facts. Memory pools can be any groupings by region, topic, etc.
// Reason for MemoryPoolEntry: same memory can have different significance for different groups of people, and different levels of claarity and detail based on something like professional expertise.
// examples: "Seida Neen (local)", "Seida Neen (passerby)", "Bitter Coast (local)", "Bitter Coast (rudimentary)", "Fishing (Expert)", "Dwemer Architecture (Expert)", "Almsivi (devout)"