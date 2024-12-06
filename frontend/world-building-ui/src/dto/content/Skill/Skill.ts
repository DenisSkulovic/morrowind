import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { SkillDTO } from "../../../proto/common";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serialize/serializer";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";
import { SkillCategoryEnum } from "../../../enum/entityEnums";
import { deserializeEnum } from "../../../enum/util";
import { serializeEnum } from "../../../enum/util";
import { FormSelectOption } from "../../../class/FormSelectOption";

export class Skill extends TaggableContentBase {
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter skill name', required: true })
    @Serializable()
    name!: string

    @FormField({ component: FieldComponentEnum.TEXTAREA_FIELD, label: 'Description', placeholder: 'Enter skill description', required: true })
    @Serializable()
    description!: string

    @FormField({
        component: FieldComponentEnum.SELECT_FIELD,
        label: 'Category',
        search: async (): Promise<FormSelectOption[]> => {
            return Object.values(SkillCategoryEnum).map((value) => {
                return { id: value, label: value }
            })
        },
        required: true
    })
    @Serializable({
        serialize: (i) => serializeEnum(SkillCategoryEnum, SkillCategoryEnum, i),
        deserialize: (i) => deserializeEnum(SkillCategoryEnum, SkillCategoryEnum, i)
    })
    category!: SkillCategoryEnum

    public toDTO(): SkillDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: SkillDTO): Skill {
        const skill = new Skill();
        return Serializer.fromDTO(dto, skill);
    }

    public static async search(filter?: any): Promise<Skill[]> {
        // perform request to backend using the filter
        // return array of options
        return []
    }
}