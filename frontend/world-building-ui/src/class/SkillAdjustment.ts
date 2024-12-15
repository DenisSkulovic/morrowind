import { SkillAdjustmentsDTO } from "../proto/common_pb";

export class SkillAdjustment {
    [skill_blueprintId: string]: number
}


export function serializeSkillAdjustments(adjustments?: { [key: string]: number }): SkillAdjustmentsDTO | undefined {
    if (!adjustments) return undefined;
    const dto = new SkillAdjustmentsDTO();
    Object.entries(adjustments).forEach(([key, value]) => {
        dto.getSkilladjustmentsMap().set(key, value);
    });
    return dto;
}

export function deserializeSkillAdjustments(dto?: SkillAdjustmentsDTO): { [key: string]: number } | undefined {
    if (!dto) return undefined;
    const adjustments: { [key: string]: number } = {};
    dto.getSkilladjustmentsMap().forEach((value, key) => {
        adjustments[key] = value;
    });
    return adjustments;
}