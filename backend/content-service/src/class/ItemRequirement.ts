import { ItemRequirementDTO, ItemRequirementsDTO } from "../proto/common";


export class ItemRequirement {
    constructor(
        public type: string,
        public name: string,
        public value: number | boolean,
    ) { }
};
export type ItemRequirements = ItemRequirement[]
export function serializeRequirement(req: ItemRequirement): ItemRequirementDTO {
    return {
        type: req.type,
        name: req.name,
        ...(typeof req.value === "number" ? { number: req.value } : { flag: req.value }),
    }
};
export function deserializeRequirement(dtoReq: ItemRequirementDTO): ItemRequirement {
    return {
        type: dtoReq.type,
        name: dtoReq.name,
        value: dtoReq.number !== undefined ? dtoReq.number : dtoReq.flag || false,
    };
}
export const serializeRequirements = (reqs: ItemRequirement[]): ItemRequirementsDTO => { return { arr: reqs.map(serializeRequirement) } };
export const deserializeRequirements = (dtoInstructions: ItemRequirementsDTO): ItemRequirement[] => { return dtoInstructions.arr.map(deserializeRequirement) };
