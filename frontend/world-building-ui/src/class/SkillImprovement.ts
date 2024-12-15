import { SkillImprovementDTO } from "../proto/common_pb";

export class SkillImprovement {
    [skill_blueprintId: string]: number // number by which the base skill from race gets increased
}

export function serializeSkillImprovement(skImp: SkillImprovement): SkillImprovementDTO {
    const dto = new SkillImprovementDTO();
    Object.entries(skImp).forEach(([key, value]) => {
        dto.getSkillimprovementMap().set(key, value);
    });
    return dto;
}

export function deserializeSkillImprovement(skImpDTO: SkillImprovementDTO): SkillImprovement {
    const result: SkillImprovement = {};
    skImpDTO.getSkillimprovementMap().forEach((value: number, key: string) => {
        result[key] = value;
    });
    return result;
}