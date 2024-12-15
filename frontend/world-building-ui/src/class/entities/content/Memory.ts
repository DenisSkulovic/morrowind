import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { MemoryTypeEnum } from "../../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../enum/util";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Fact } from "./Fact";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../../class/FormSelectOption";
import { DisplayField } from '../../../decorator/display-field.decorator';
import { EntityDisplay } from '../../../decorator/entity-display.decorator';
import { FilterOption } from '../../../decorator/filter-option.decorator';
import { Context } from '../../../class/Context';
import { SearchQuery } from '../../../class/search/SearchQuery';
import { ContentService } from '../../../services/ContentService';
import { MemoryTypeEnumDTO } from '../../../proto/common_pb';

@EntityDisplay({
    title: 'Memories',
    defaultSort: 'name'
})
export class Memory extends TaggableContentBase {
    @DisplayField({
        order: 1,
        displayName: 'Name'
    })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter memory name', required: true })
    name!: string;

    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter memory description', required: true })
    description!: string

    @DisplayField({ order: 2 })
    @FilterOption()
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
        serialize: type => serializeEnum(MemoryTypeEnum, MemoryTypeEnumDTO, type),
        deserialize: type => deserializeEnum(MemoryTypeEnumDTO, MemoryTypeEnum, type),
    })
    type!: MemoryTypeEnum // TODO need to properly conceptualize types of memories and what that means. Maybe better to do it with tags?

    @FormField({ component: FieldComponentEnum.OBJECT_FIELD, label: 'Facts', placeholder: 'Enter facts', required: true })
    @Serializable({ strategy: 'full' })
    facts!: Fact[]

    public static async search(filter: SearchQuery, context: Context): Promise<Memory[]> {
        const contentService = new ContentService<Memory>();
        const { results } = await contentService.searchContent('Memory', filter, context);
        return results as Memory[];
    }
}
