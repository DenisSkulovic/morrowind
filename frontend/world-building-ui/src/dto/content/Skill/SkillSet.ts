import { serializeSkillImprovement, deserializeSkillImprovement, SkillImprovement } from "../../../class/SkillImprovement";
import { TaggableContentBase } from "../../../class/TaggableContentBase";
import { SkillSetDTO } from "../../../proto/common";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serialize/serializer";
import { FormField } from "../../../decorator/form-field.decorator";
import { FieldComponentEnum } from "../../../enum/FieldComponentEnum";

export class SkillSet extends TaggableContentBase {
    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter skill set name', required: true })
    @Serializable()
    name!: string

    @FormField({ component: FieldComponentEnum.OBJECT_FIELD, label: 'Skill Improvement', required: true })
    @Serializable({ serialize: serializeSkillImprovement, deserialize: deserializeSkillImprovement })
    skillImprovement!: SkillImprovement

    public toDTO(): SkillSetDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: SkillSetDTO): SkillSet {
        const skillSet = new SkillSet();
        return Serializer.fromDTO(dto, skillSet);
    }
}