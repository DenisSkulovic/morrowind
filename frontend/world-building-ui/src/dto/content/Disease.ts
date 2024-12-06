import { TaggableContentBase } from "../../class/TaggableContentBase";
import { DiseaseSeverityEnum } from "../../enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { DiseaseSeverityEnumDTO, DiseaseDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../class/FormSelectOption";

export class Disease extends TaggableContentBase {
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter disease name', required: true })
    name!: string;

    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter disease description', required: true })
    description!: string;

    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Severity',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(DiseaseSeverityEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({
        serialize: type => serializeEnum(DiseaseSeverityEnum, DiseaseSeverityEnumDTO, type),
        deserialize: type => deserializeEnum(DiseaseSeverityEnumDTO, DiseaseSeverityEnum, type),
    })
    severity!: DiseaseSeverityEnum;

    public toDTO(): DiseaseDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: DiseaseDTO): Disease {
        const disease = new Disease();
        return Serializer.fromDTO(dto, disease);
    }

    public static async search(filter?: any): Promise<Disease[]> {
        // perform request to backend using the filter
        // return array of options 
        return []
    }
}
