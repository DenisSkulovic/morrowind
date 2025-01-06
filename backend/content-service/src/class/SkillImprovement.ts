import { SkillImprovementDTO } from "../proto/entities";

export class SkillImprovement {
    [skill_blueprintId: string]: number // number by which the base skill from race gets increased
}

export function serializeSkillImprovement(skImp: SkillImprovement): SkillImprovementDTO {
    return {
        skillImprovement: skImp
    }
}
export function deserializeSkillImprovement(skImpDTO: SkillImprovementDTO): SkillImprovement {
    return skImpDTO.skillImprovement
}