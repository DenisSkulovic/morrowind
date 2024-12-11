import { common } from "../proto/common";

export class SkillAdjustment {
    [skill_blueprintId: string]: number
}

export function serializeSkillAdjustment(skAdj: SkillAdjustment): common.SkillAdjustmentsDTO {
    const dto = new common.SkillAdjustmentsDTO();
    const map = dto.skillAdjustments;
    for (const [key, value] of Object.entries(skAdj)) {
        map.set(key, value);
    }
    return dto;
}

export function deserializeSkillAdjustment(skAdjDTO: common.SkillAdjustmentsDTO): SkillAdjustment {
    return Object.fromEntries(skAdjDTO.skillAdjustments.entries());
}
