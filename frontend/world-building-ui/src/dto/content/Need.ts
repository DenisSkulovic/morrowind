import { ContentBase } from "../../class/ContentBase";
import { NeedTypeEnum, NeedLayerEnum } from "../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { NeedTypeEnumDTO, NeedLayerEnumDTO, NeedDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../class/FormSelectOption";

export class Need extends ContentBase {
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter need name', required: true })
    name!: string;

    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter need description', required: true })
    description!: string;

    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Need Type',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(NeedTypeEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({
        serialize: (i) => serializeEnum(NeedTypeEnum, NeedTypeEnumDTO, i),
        deserialize: (i) => deserializeEnum(NeedTypeEnumDTO, NeedTypeEnum, i)
    })
    type!: NeedTypeEnum; // "dynamic", "threshold", "external".

    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Need Layer',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(NeedLayerEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({
        serialize: (i) => serializeEnum(NeedLayerEnum, NeedLayerEnumDTO, i),
        deserialize: (i) => deserializeEnum(NeedLayerEnumDTO, NeedLayerEnum, i)
    })
    layer!: NeedLayerEnum

    public toDTO(): NeedDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: NeedDTO): Need {
        const need = new Need();
        return Serializer.fromDTO(dto, need);
    }
}
