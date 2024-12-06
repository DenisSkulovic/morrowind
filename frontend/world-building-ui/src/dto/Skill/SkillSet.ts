import { serializeSkillImprovement, deserializeSkillImprovement, SkillImprovement } from "../../class/SkillImprovement";
import { TaggableContentBase } from "../../class/TaggableContentBase";
import { SkillSetDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";

export class SkillSet extends TaggableContentBase {
    @Serializable()
    name!: string

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