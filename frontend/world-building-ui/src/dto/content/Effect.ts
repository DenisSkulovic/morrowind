import { TaggableContentBase } from "../../class/TaggableContentBase";
import { EffectTypeEnum, EffectTargetEnum, EffectModeEnum, EffectElementEnum } from "../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { common } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../class/FormSelectOption";
import { DisplayField } from '../../decorator/display-field.decorator';
import { EntityDisplay } from '../../decorator/entity-display.decorator';
import { FilterOption } from "../../decorator/filter-option.decorator";
import { ContentService } from "../../services/ContentService";
import { SearchQuery } from "../../class/search/SearchQuery";
import { Context } from "../../class/Context";

@EntityDisplay({
    title: 'Effects',
    defaultSort: 'name'
})
export class Effect extends TaggableContentBase {
    @DisplayField({
        order: 1,
        displayName: 'Name'
    })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter effect name', required: true })
    name!: string;

    @DisplayField({ order: 2 })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Effect Type',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(EffectTypeEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({
        serialize: type => serializeEnum(EffectTypeEnum, common.EffectTypeEnumDTO, type),
        deserialize: type => deserializeEnum(common.EffectTypeEnumDTO, EffectTypeEnum, type),
    })
    type!: EffectTypeEnum; // "damage", "healing", "buff", "debuff", "resistance", etc.

    @DisplayField({ order: 3 })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Effect Target',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(EffectTargetEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({
        serialize: target => serializeEnum(EffectTargetEnum, common.EffectTargetEnumDTO, target),
        deserialize: target => deserializeEnum(common.EffectTargetEnumDTO, EffectTargetEnum, target),
    })
    target!: EffectTargetEnum; // "health", "stamina", "magic", etc.

    @DisplayField({ order: 4 })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Effect Mode',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(EffectModeEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({
        serialize: mode => serializeEnum(EffectModeEnum, common.EffectModeEnumDTO, mode),
        deserialize: mode => deserializeEnum(common.EffectModeEnumDTO, EffectModeEnum, mode),
    })
    mode!: EffectModeEnum; // "instant", "gradual", "persistent"

    @DisplayField({ order: 5 })
    @FilterOption()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Effect Element',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(EffectElementEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({
        serialize: element => serializeEnum(EffectElementEnum, common.EffectElementEnumDTO, element),
        deserialize: element => deserializeEnum(common.EffectElementEnumDTO, EffectElementEnum, element),
    })
    element?: EffectElementEnum;

    public toDTO(): common.EffectDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.EffectDTO): Effect {
        const effect = new Effect();
        return Serializer.fromDTO(dto, effect);
    }

    public static async search(filter: SearchQuery, context: Context): Promise<Effect[]> {
        const contentService = new ContentService<Effect>();
        const { results } = await contentService.searchContent('Effect', filter, context);
        return results as Effect[];
    }

}
