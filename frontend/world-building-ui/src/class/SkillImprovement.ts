import { common } from "../proto/common";

export class SkillImprovement {
    [skill_blueprintId: string]: number // number by which the base skill from race gets increased
}

export function serializeSkillImprovement(skImp: SkillImprovement): common.SkillImprovementDTO {
    const dto = new common.SkillImprovementDTO();
    Object.entries(skImp).forEach(([key, value]) => {
        dto.skillImprovement.set(key, value);
    });
    return dto;
}

export function deserializeSkillImprovement(skImpDTO: common.SkillImprovementDTO): SkillImprovement {
    const result: SkillImprovement = {};
    skImpDTO.skillImprovement.forEach((value: number, key: string) => {
        result[key] = value;
    });
    return result;
}