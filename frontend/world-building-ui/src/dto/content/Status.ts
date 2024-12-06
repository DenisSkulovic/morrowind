import { ContentBase } from "../../class/ContentBase";
import { EffectTypeEnum } from "../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { EffectTypeEnumDTO, StatusDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { Effect } from "./Effect";
import { FormSelectOption } from "../../class/FormSelectOption";

export class Status extends ContentBase {
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter status name', required: true })
    name!: string;

    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter status description', required: true })
    description!: string;

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
        serialize: (i) => serializeEnum(EffectTypeEnum, EffectTypeEnumDTO, i),
        deserialize: (i) => deserializeEnum(EffectTypeEnumDTO, EffectTypeEnum, i)
    })
    type!: EffectTypeEnum;

    @FormField({
        component: FieldComponentEnum.MULTI_SELECT_FIELD,
        label: 'Effects',
        search: async (filter): Promise<FormSelectOption[]> => {
            return (await Effect.search(filter)).map((item: Effect) => {
                return { id: item.id, label: item.name }
            })
        }
    })
    @Serializable()
    effects!: string[]; // Links to associated Effect IDs.

    @Serializable()
    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Duration', placeholder: 'Enter duration in ticks (0 for permanent)', required: true })
    duration!: number; // Duration in ticks (0 for permanent).

    public toDTO(): StatusDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: StatusDTO): Status {
        const status = new Status();
        return Serializer.fromDTO(dto, status);
    }
}
