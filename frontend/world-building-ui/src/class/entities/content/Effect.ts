import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { EffectTypeEnum, EffectTargetEnum, EffectModeEnum, EffectElementEnum } from "../../../enum/entityEnums";
import { Serializable } from "../../../decorator/serializable.decorator";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../../class/FormSelectOption";
import { DisplayField } from '../../../decorator/display-field.decorator';
import { EntityDisplay } from '../../../decorator/entity-display.decorator';
import { FilterOption, FilterOptionTypeEnum } from '../../../decorator/filter-option.decorator';
import { EffectTypeEnumDTO, EffectTargetEnumDTO, EffectModeEnumDTO, EffectElementEnumDTO } from '../../../proto/entities_pb';
import { SerializeStrategyEnum } from "../../../serialize/serializer";

@EntityDisplay({
    title: 'Effects',
    defaultSort: 'name'
})
export class Effect extends TaggableContentBase {
    @DisplayField({
        displayName: 'Name'
    })
    @FilterOption({ type: FilterOptionTypeEnum.TEXT })
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter effect name', required: true })
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
    })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: EffectTypeEnum, protoEnum: EffectTypeEnumDTO })
    type!: EffectTypeEnum; // "damage", "healing", "buff", "debuff", "resistance", etc.

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.SELECT, enum: EffectTargetEnum })
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Effect Target',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(EffectTargetEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: EffectTargetEnum, protoEnum: EffectTargetEnumDTO })
    target!: EffectTargetEnum; // "health", "stamina", "magic", etc.

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.SELECT, enum: EffectModeEnum })
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Effect Mode',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(EffectModeEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: EffectModeEnum, protoEnum: EffectModeEnumDTO })
    mode!: EffectModeEnum; // "instant", "gradual", "persistent"

    @DisplayField()
    @FilterOption({ type: FilterOptionTypeEnum.SELECT, enum: EffectElementEnum })
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Effect Element',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(EffectElementEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: EffectElementEnum, protoEnum: EffectElementEnumDTO })
    element?: EffectElementEnum;

}
