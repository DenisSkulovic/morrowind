import { SkillAdjustmentsDTO } from "../proto/common";

export class SkillAdjustment {
    [skill_blueprint_id: string]: number
}

export function serializeSkillAdjustment(skAdj: SkillAdjustment): SkillAdjustmentsDTO {
    return {
        skillAdjustments: skAdj
    }
}
export function deserializeSkillAdjustment(skAdjDTO: SkillAdjustmentsDTO): SkillAdjustment {
    return skAdjDTO.skillAdjustments
}