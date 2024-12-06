import { TaggableContentBase } from "../../class/TaggableContentBase";
import { PastExperienceTypeEnum } from "../../enum/PastExperienceTypeEnum";
import { serializeEnum, deserializeEnum } from "../../enum/util";
import { PastExperienceTypeEnumDTO, PastExperienceDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";
import { FormField } from "../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../enum/FieldComponentEnum";
import { FormSelectOption } from "../../class/FormSelectOption";

export class PastExperience extends TaggableContentBase {
    @Serializable()
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter past experience name', required: true })
    name!: string;

    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Experience Type',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(PastExperienceTypeEnum).map(([key, value]) => {
                return { id: value, label: value }
            })
        },
    })
    @Serializable({
        serialize: (i) => serializeEnum(PastExperienceTypeEnum, PastExperienceTypeEnumDTO, i),
        deserialize: (i) => deserializeEnum(PastExperienceTypeEnumDTO, PastExperienceTypeEnum, i)
    })
    expType!: PastExperienceTypeEnum

    public toDTO(): PastExperienceDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: PastExperienceDTO): PastExperience {
        const pastExperience = new PastExperience();
        return Serializer.fromDTO(dto, pastExperience);
    }

    public static async search(filter?: any): Promise<PastExperience[]> {
        // perform request to backend using the filter
        // return array of options
        return []
    }
}