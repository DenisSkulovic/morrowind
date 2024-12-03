import { ItemRequirementDTO, ItemRequirementsDTO } from "../proto/common";


export class ItemRequirement {
    clazz = "ItemRequirement"
    constructor(
        public type: string,
        public name: string,
        public value: number | boolean,
    ) { }
    toDTO(): ItemRequirementDTO {
        return serializeRequirement(this)
    }
    static fromDTO(dto: ItemRequirementDTO): ItemRequirement {
        return deserializeRequirement(dto)
    }
};
export type ItemRequirements = ItemRequirement[]

export function serializeRequirement(req: ItemRequirement): ItemRequirementDTO {
    return {
        type: req.type,
        name: req.name,
        ...(typeof req.value === "number" ? { number: req.value } : { flag: req.value }),
        clazz: req.clazz
    }
};
export function deserializeRequirement(dtoReq: ItemRequirementDTO): ItemRequirement {
    return new ItemRequirement(
        dtoReq.type,
        dtoReq.name,
        dtoReq.number !== undefined ? dtoReq.number : dtoReq.flag || false,
    )
}
export const serializeRequirements = (reqs: ItemRequirement[]): ItemRequirementsDTO => { return { arr: reqs.map(serializeRequirement) } };
export const deserializeRequirements = (dtoInstructions: ItemRequirementsDTO): ItemRequirement[] => { return dtoInstructions.arr.map(deserializeRequirement) };
