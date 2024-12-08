import { ContentBase } from "../../class/ContentBase";
import { MemoryPoolEntryDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../class/FormSelectOption";
import { MemoryPool } from "./MemoryPool";
import { DisplayField } from '../../decorator/display-field.decorator';
import { EntityDisplay } from '../../decorator/entity-display.decorator';
import { FilterOption } from "../../decorator/filter-option.decorator";
import { ContentService } from "../../services/ContentService";
import { Context } from "../../class/Context";
import { SearchQuery } from "../../class/search/SearchQuery";

@EntityDisplay({
    title: 'Memory Pool Entries',
    defaultSort: 'name'
})
export class MemoryPoolEntry extends ContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter memory pool entry name', required: true })
    name!: string;

    @DisplayField({ order: 2 })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Memory Pool',
        search: async (filter, context): Promise<FormSelectOption[]> => {
            return (await MemoryPool.search(filter, context)).map((item: MemoryPool) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    memoryPool!: string;

    @DisplayField({ order: 3 })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Memory', placeholder: 'Enter memory', required: true })
    memory!: string;

    @DisplayField({ order: 4 })
    @Serializable()
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Probability', placeholder: 'Enter probability', required: true })
    probability!: number;

    @DisplayField({ order: 5 })
    @Serializable()
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Default Clarity', placeholder: 'Enter default clarity', required: true })
    defaultClarity!: number;

    @DisplayField({ order: 6 })
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

    public static async search(filter: SearchQuery, context: Context): Promise<MemoryPoolEntry[]> {
        const contentService = new ContentService<MemoryPoolEntry>();
        const { results } = await contentService.searchContent('MemoryPoolEntry', filter, 1, 100, context);
        return results as MemoryPoolEntry[];
    }
}