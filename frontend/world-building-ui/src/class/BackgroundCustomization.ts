import { BackgroundCustomizationDTO } from "../proto/common";
import { serializeInstruction, serializeGenerationInstructions, deserializeInstruction, deserializeGenerationInstructions } from "./GenerationInstruction";
import type { GenerationInstruction } from "./GenerationInstruction";;
import { FormField } from "../decorator/form-field.decorator";
import { FieldComponentEnum } from "../enum/FieldComponentEnum";

export class BackgroundCustomization {
    clazz = "BackgroundCustomization"
    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Gender' })
    public gender?: GenerationInstruction

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Factions' })
    public faction?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Diseases' })
    public disease?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Addictions' })
    public addiction?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Professions' })
    public profession?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Race' })
    public race?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Religion' })
    public religion?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Personality' })
    public personality?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Items' })
    public items?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Childhood Past Experiences' })
    public pastExpChild?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Adult Past Experiences' })
    public pastExpAdult?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Memory Pools' })
    public memoryPools?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.GENERATION_INSTRUCTION_FIELD, label: 'Skill Sets' })
    public skillSets?: GenerationInstruction[]

    @FormField({ component: FieldComponentEnum.OBJECT_FIELD, label: 'Skill Adjustments' })
    public skillAdjustments?: { [skillBlueprintId: string]: number }

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
