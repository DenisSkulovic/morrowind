import { ContentBase } from "../../../class/ContentBase";
import { EffectTypeEnum } from "../../../enum/entityEnums";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { Effect } from "./Effect";
import { FormSelectOption } from "../../../class/FormSelectOption";
import { EntityDisplay } from "../../../decorator/entity-display.decorator";
import { DisplayField } from "../../../decorator/display-field.decorator";
import { FilterOption, FilterOptionTypeEnum } from "../../../decorator/filter-option.decorator";
import { Context } from "../../../class/Context";
import { SearchQuery } from "../../../class/search/SearchQuery";
import { EffectTypeEnumDTO } from "../../../proto/common_pb";
import { SerializeStrategyEnum } from "../../../serialize/serializer";

@EntityDisplay({
    title: 'Statuses',
    defaultSort: 'name'
})
export class Status extends ContentBase {
    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter status name', required: true })
    name!: string;

    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter status description', required: true })
    description!: string;

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.SELECT, enum: EffectTypeEnum })
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
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: EffectTypeEnum, protoEnum: EffectTypeEnumDTO })
    type!: EffectTypeEnum;

    @DisplayField()
    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Effects',
        search: async (filter: SearchQuery, context: Context): Promise<FormSelectOption[]> => {
            return (await Effect.search<Effect>(filter, context)).map((item: Effect) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    effects!: Effect[]; // Links to associated Effect IDs.

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.NUMBER_RANGE })
    @Serializable()
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Duration', placeholder: 'Enter duration in ticks (0 for permanent)', required: true })
    duration!: number; // Duration in ticks (0 for permanent).

}
