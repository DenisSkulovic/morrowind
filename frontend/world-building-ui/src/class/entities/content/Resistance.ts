import { ContentBase } from "../../../class/ContentBase";
import { EffectElementEnum, EffectTypeEnum } from "../../../enum/entityEnums";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../../class/FormSelectOption";
import { DisplayField } from "../../../decorator/display-field.decorator";
import { EntityDisplay } from "../../../decorator/entity-display.decorator";
import { FilterOption, FilterOptionTypeEnum } from "../../../decorator/filter-option.decorator";
import { EffectTypeEnumDTO, EffectElementEnumDTO } from "../../../proto/common_pb";
import { SerializeStrategyEnum } from "../../../serialize/serializer";

@EntityDisplay({
    title: 'Resistances',
    defaultSort: 'name'
})
export class Resistance extends ContentBase {
    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter resistance name', required: true })
    name!: string;

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.SELECT, enum: EffectTypeEnum })
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Effect Type',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(EffectTypeEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
        required: true
    })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: EffectTypeEnum, protoEnum: EffectTypeEnumDTO })
    effectType!: EffectTypeEnum; // Matches Effect.type

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.SELECT, enum: EffectElementEnum })
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Target Effect',
        placeholder: 'Enter target effect (e.g. fire, poison, disease)',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(EffectElementEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        }
    })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: EffectElementEnum, protoEnum: EffectElementEnumDTO })
    targetEffect?: EffectElementEnum; // "fire", "poison", "disease".

}
