import { TaggableContentBase } from "../../class/TaggableContentBase";
import { SkillDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";

export class Skill extends TaggableContentBase {
    @Serializable()
    name!: string

    @Serializable()
    description!: string

    @Serializable()
    category!: string

    public toDTO(): SkillDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: SkillDTO): Skill {
        const skill = new Skill();
        return Serializer.fromDTO(dto, skill);
    }
}