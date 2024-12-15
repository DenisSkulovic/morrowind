import { ContentBase } from "../../../class/ContentBase";
import { EffectTypeEnum } from "../../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../enum/util";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { Effect } from "./Effect";
import { FormSelectOption } from "../../../class/FormSelectOption";
import { EntityDisplay } from "../../../decorator/entity-display.decorator";
import { DisplayField } from "../../../decorator/display-field.decorator";
import { FilterOption } from "../../../decorator/filter-option.decorator";
import { Context } from "../../../class/Context";
import { SearchQuery } from "../../../class/search/SearchQuery";
import { ContentService } from "../../../services/ContentService";
import { EffectTypeEnumDTO } from "../../../proto/common_pb";

@EntityDisplay({
    title: 'Statuses',
    defaultSort: 'name'
})
export class Status extends ContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter status name', required: true })
    name!: string;

    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter status description', required: true })
    description!: string;

    @DisplayField({ order: 2 })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Type',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(EffectTypeEnum).map(value => {
                return { id: value, label: value }
            })
        },
        required: true
    })
    @Serializable({
        serialize: type => serializeEnum(EffectTypeEnum, EffectTypeEnumDTO, type),
        deserialize: type => deserializeEnum(EffectTypeEnumDTO, EffectTypeEnum, type)
    })
    type!: EffectTypeEnum;

    @DisplayField({ order: 3 })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Effects',
        search: async (filter: SearchQuery, context: Context): Promise<FormSelectOption[]> => {
            return (await Effect.search(filter, context)).map((item: Effect) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    effects!: string[]; // Links to associated Effect IDs.

    @DisplayField({ order: 4 })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Duration', placeholder: 'Enter duration in ticks (0 for permanent)', required: true })
    duration!: number; // Duration in ticks (0 for permanent).

    public static async search(filter: SearchQuery, context: Context): Promise<Status[]> {
        const contentService = new ContentService<Status>();
        const { results } = await contentService.searchContent('Status', filter, context);
        return results as Status[];
    }
}
