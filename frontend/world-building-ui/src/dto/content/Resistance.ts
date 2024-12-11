import { ContentBase } from "../../class/ContentBase";
import { EffectElementEnum, EffectTypeEnum } from "../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { common } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../class/FormSelectOption";
import { DisplayField } from "../../decorator/display-field.decorator";
import { EntityDisplay } from "../../decorator/entity-display.decorator";
import { FilterOption } from "../../decorator/filter-option.decorator";
import { Context } from "../../class/Context";
import { ContentService } from "../../services/ContentService";
import { SearchQuery } from "../../class/search/SearchQuery";

@EntityDisplay({
    title: 'Resistances',
    defaultSort: 'name'
})
export class Resistance extends ContentBase {
    @DisplayField({ order: 1 })
    @FilterOption()
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter resistance name', required: true })
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
        required: true
    })
    @Serializable({
        serialize: type => serializeEnum(EffectTypeEnum, common.EffectTypeEnumDTO, type),
        deserialize: type => deserializeEnum(common.EffectTypeEnumDTO, EffectTypeEnum, type)
    })
    effectType!: string; // Matches Effect.type

    @DisplayField({ order: 3 })
    @FilterOption()
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
    @Serializable({
        serialize: element => serializeEnum(EffectElementEnum, common.EffectElementEnumDTO, element),
        deserialize: element => deserializeEnum(common.EffectElementEnumDTO, EffectElementEnum, element)
    })
    targetEffect?: string; // "fire", "poison", "disease".

    public toDTO(): common.ResistanceDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.ResistanceDTO): Resistance {
        const resistance = new Resistance();
        return Serializer.fromDTO(dto, resistance);
    }

    public static async search(filter: SearchQuery, context: Context): Promise<Resistance[]> {
        const contentService = new ContentService<Resistance>();
        const { results } = await contentService.searchContent('Resistance', filter, context);
        return results as Resistance[];
    }
}
