import { BackgroundCustomizationDTO } from "../proto/common";
import { GenerationInstruction, serializeInstruction, serializeGenerationInstructions, deserializeInstruction, deserializeGenerationInstructions } from "./GenerationInstruction";

export class BackgroundCustomization {
    constructor(
        public gender?: GenerationInstruction,
        public faction?: GenerationInstruction[],
        public disease?: GenerationInstruction[],
        public addiction?: GenerationInstruction[],
        public profession?: GenerationInstruction[],
        public race?: GenerationInstruction[],
        public religion?: GenerationInstruction[],
        public personality?: GenerationInstruction[],
        public items?: GenerationInstruction[],
        public past_exp_child?: GenerationInstruction[],
        public past_exp_adult?: GenerationInstruction[],
        public memory_pools?: GenerationInstruction[],
        public skill_sets?: GenerationInstruction[],
        public skill_adjustments?: { [skill_blueprint_id: string]: number },
    ) { }
}


export function serializeBackgroundCustomization(bcgCust: BackgroundCustomization): BackgroundCustomizationDTO {
    return {
        gender: bcgCust.gender ? serializeInstruction(bcgCust.gender) : undefined,
        faction: bcgCust.faction && serializeGenerationInstructions(bcgCust.faction),
        disease: bcgCust.disease && serializeGenerationInstructions(bcgCust.disease),
        addiction: bcgCust.addiction && serializeGenerationInstructions(bcgCust.addiction),
        profession: bcgCust.profession && serializeGenerationInstructions(bcgCust.profession),
        race: bcgCust.race && serializeGenerationInstructions(bcgCust.race),
        religion: bcgCust.religion && serializeGenerationInstructions(bcgCust.religion),
        personality: bcgCust.personality && serializeGenerationInstructions(bcgCust.personality),
        items: bcgCust.items && serializeGenerationInstructions(bcgCust.items),
        pastExpChild: bcgCust.past_exp_child && serializeGenerationInstructions(bcgCust.past_exp_child),
        pastExpAdult: bcgCust.past_exp_adult && serializeGenerationInstructions(bcgCust.past_exp_adult),
        // memoryPools: bcgCust.memory_pools && serializeGenerationInstructions(bcgCust.memory_pools),
        skillSets: bcgCust.skill_sets && serializeGenerationInstructions(bcgCust.skill_sets),
        skillAdjustments: bcgCust.skill_adjustments && { skillAdjustments: bcgCust.skill_adjustments },
    };
}
export function deserializeBackgroundCustomization(dto: BackgroundCustomizationDTO): BackgroundCustomization {
    const customization = new BackgroundCustomization();
    customization.gender = dto.gender && deserializeInstruction(dto.gender);
    customization.faction = dto.faction && deserializeGenerationInstructions(dto.faction);
    customization.disease = dto.disease && deserializeGenerationInstructions(dto.disease);
    customization.addiction = dto.addiction && deserializeGenerationInstructions(dto.addiction);
    customization.profession = dto.profession && deserializeGenerationInstructions(dto.profession);
    customization.race = dto.race && deserializeGenerationInstructions(dto.race);
    customization.religion = dto.religion && deserializeGenerationInstructions(dto.religion);
    customization.personality = dto.personality && deserializeGenerationInstructions(dto.personality);
    customization.items = dto.items && deserializeGenerationInstructions(dto.items);
    customization.past_exp_child = dto.pastExpChild && deserializeGenerationInstructions(dto.pastExpChild);
    customization.past_exp_adult = dto.pastExpAdult && deserializeGenerationInstructions(dto.pastExpAdult);
    // customization.memory_pools = dto.memoryPools && deserializeGenerationInstructions(dto.memoryPools);
    customization.skill_sets = dto.skillSets && deserializeGenerationInstructions(dto.skillSets);
    customization.skill_adjustments = dto.skillAdjustments?.skillAdjustments;
    return customization;
}
