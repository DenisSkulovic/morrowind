import { BackgroundCustomizationDTO } from "../proto/common";
import { GenerationInstruction, serializeInstruction, serializeGenerationInstructions, deserializeInstruction, deserializeGenerationInstructions } from "./GenerationInstruction";

export class BackgroundCustomization {
    clazz = "BackgroundCustomization"
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
        public pastExpChild?: GenerationInstruction[],
        public pastExpAdult?: GenerationInstruction[],
        public memoryPools?: GenerationInstruction[],
        public skillSets?: GenerationInstruction[],
        public skillAdjustments?: { [skillBlueprintId: string]: number },
    ) { }

    toDTO(): BackgroundCustomizationDTO {
        return serializeBackgroundCustomization(this)
    }
    static fromDTO(dto: BackgroundCustomizationDTO): BackgroundCustomization {
        return deserializeBackgroundCustomization(dto)
    }
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
        pastExpChild: bcgCust.pastExpChild && serializeGenerationInstructions(bcgCust.pastExpChild),
        pastExpAdult: bcgCust.pastExpAdult && serializeGenerationInstructions(bcgCust.pastExpAdult),
        // memoryPools: bcgCust.memoryPools && serializeGenerationInstructions(bcgCust.memoryPools),
        skillSets: bcgCust.skillSets && serializeGenerationInstructions(bcgCust.skillSets),
        skillAdjustments: bcgCust.skillAdjustments && { skillAdjustments: bcgCust.skillAdjustments },
        clazz: bcgCust.clazz
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
    customization.pastExpChild = dto.pastExpChild && deserializeGenerationInstructions(dto.pastExpChild);
    customization.pastExpAdult = dto.pastExpAdult && deserializeGenerationInstructions(dto.pastExpAdult);
    // customization.memoryPools = dto.memoryPools && deserializeGenerationInstructions(dto.memoryPools);
    customization.skillSets = dto.skillSets && deserializeGenerationInstructions(dto.skillSets);
    customization.skillAdjustments = dto.skillAdjustments?.skillAdjustments;
    customization.clazz = dto.clazz
    return customization;
}
