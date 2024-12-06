import { ContentBase } from "../../class/ContentBase";
import { EffectElementEnum, EffectTypeEnum } from "../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { EffectTypeEnumDTO, ResistanceDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../class/FormSelectOption";

export class Resistance extends ContentBase {
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter resistance name', required: true })
    name!: string;

    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Effect Type',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(EffectTypeEnum).map(value => {
                return { id: value, label: value }
            })
        },
        required: true
    })
    @Serializable({
        serialize: (i) => serializeEnum(EffectTypeEnum, EffectTypeEnumDTO, i),
        deserialize: (i) => deserializeEnum(EffectTypeEnumDTO, EffectTypeEnum, i)
    })
    effectType!: string; // Matches Effect.type

    @Serializable()
    @FormField({
        component: FieldComponentEnum.SELECT_FIELD, label: 'Target Effect', placeholder: 'Enter target effect (e.g. fire, poison, disease)',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(EffectElementEnum).map(value => {
                return { id: value, label: value }
            })
        }
    })
    targetEffect?: string; // "fire", "poison", "disease".

    public toDTO(): ResistanceDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: ResistanceDTO): Resistance {
        const resistance = new Resistance();
        return Serializer.fromDTO(dto, resistance);
    }
}
