import { DataSource } from "typeorm";
import { Character } from "../../entities/Content/Character";
import { Background } from "../../entities/Content/Background";
import { Faction } from "../../entities/Content/Faction";
import { cloneDeep } from "lodash"
import { Disease } from "../../entities/Content/Disease";
import { Addiction } from "../../entities/Content/Addiction";
import { PersonalityProfile } from "../../entities/Content/PersonalityProfile";
import { Trait } from "../../entities/Content/Trait/Trait";
import { Race } from "../../entities/Content/Race";
import { ContentBase } from "../../ContentBase";
import { Context, EntityConstructor, GenerationInstruction } from "../../types";
import { CharacterProfession } from "../../entities/Content/CharacterProfession";
import { MemoryPool } from "../../entities/Content/Knowledge/MemoryPool";
import { StorageSlot } from "../../entities/Content/Slot/StorageSlot";
import { EquipmentSlot } from "../../entities/Content/Slot/EquipmentSlot";
import { EquipmentSlotService } from "../service/EquipmentSlotService";
import { StorageSlotService } from "../service/StorageSlotService";
import { AbstractProbGenerator } from "./AbstractProbGenerator";
import { CharacterGenInstruction } from "../../entities/Content/CharacterGenInstruction";
import { CharacterGroupGenInstruction } from "../../entities/Content/CharacterGroupGenInstruction";
import { PastExperienceChild } from "../../entities/Content/Knowledge/PastExperience/PastExperienceChild";
import { PastExperienceAdult } from "../../entities/Content/Knowledge/PastExperience/PastExperienceAdult";
import { ItemGenerator } from "./ItemGenerator";
import { Item } from "../../entities/Content/Item/Item";
import { IdAndQuant } from "../../class/blueprint_id_and_prob";
import { InstructionProcessor } from "../service/InstructionProcessor";
import { SkillSet } from "../../entities/Content/Skill/SkillSet";
import { GenderEnum } from "../../enum/GenderEnum";
import { Birthsign } from "../../entities/Content/Birthsign";
import { CharacterMemory } from "../../entities/Content/Knowledge/CharacterMemory";
import { Tag } from "../../entities/Content/Tag";


// TODO I need to conceptualize how I will deal with modifiers
// modifiers will have to be calculated based on many sources
// having a trait can apply a modifier. Having a disease can apply a modifier. 
// Having an addiction, a status, etc. can apply a modifier.
// Maybe statuses? Sick, in-pain, withdrawal, well-fed, etc.?
// need to understand how games like CK3 does this.



export enum CacheKeyEnum {
    CHARACTER_INSTRUCTION = "characterInstruction",
    BACKGROUND = "background",
    SKILL_SET = "skill_set",
    SKILL = "skill",
    RACE = "race",
    FACTION = "faction",
    DISEASE = "disease",
    ADDICTION = "addiction",
    PROFESSION = "profession",
    MEMORY_POOL = "memoryPool",
    PERSONALITY = "personality",
    TRAIT = "trait",
    PAST_EXP_CHILD = "past_exp_child",
    PAST_EXP_ADULT = "past_exp_adult",
    BIRTHSIGN = "birthsign",
}




export class CharacterGenerator extends AbstractProbGenerator<Character> {
    context?: Context
    constructor(dataSource: DataSource, context?: Context) {
        super(dataSource)
        this.context = context
        this.blueprintsCache = {}
    }

    public async generateGroup(group_blueprint: CharacterGroupGenInstruction) {
        const instructions: IdAndQuant[] = InstructionProcessor.processInstruction(group_blueprint.set)
        const characters: Character[] = await this.generateMany(instructions)
        return characters
    }

    // Implementation of an abstract method. After this, you can generate the same instruction
    // in many ways (simple or gaussian probabilities) using methods on the parent abstract class.
    public async _generateOne(idAndQuant: IdAndQuant): Promise<Character[]> {
        const quantity: number = idAndQuant.quantity || 1

        // extract CharacterGenInstruction objects from cache or db
        const extractedCharacterGenInstructions: (CharacterGenInstruction | null)[] = await this._getBlueprints_cacheOrRequest(CacheKeyEnum.CHARACTER_INSTRUCTION, CharacterGenInstruction, [idAndQuant.blueprint_id])
        const charGenInstruction: CharacterGenInstruction | null = extractedCharacterGenInstructions[0]
        if (!charGenInstruction) throw new Error(`character generation instruction not found; did you forget to set it into the `)

        // Fetch the background blueprint
        const background_blueprint_id: string | undefined = charGenInstruction.background_blueprint_id
        const extractedBackgrounds: (Background | null)[] = await this._getBlueprints_cacheOrRequest(CacheKeyEnum.BACKGROUND, Background, [background_blueprint_id])
        const background: Background | null = extractedBackgrounds[0]
        if (!background) throw new Error(`Background ${background} not found.`);
        const customizedBackground: Background = cloneDeep(background)

        if (charGenInstruction.background_customization) Object.assign(customizedBackground, charGenInstruction.background_customization)

        // create as many instances as quantity requires
        const characters: Character[] = []
        for (let i = 0; i < quantity; i++) {
            // Collect necessary data from either cache or db (these only extract data and dont create anything, so no need to handle unique instances for each separate character)
            const [birthsigns, races, factions,
                diseases, addictions, professions,
                memoryPools, personality,
                past_exp_child, past_exp_adult,
                skills
            ] = await Promise.all([
                this._extractGeneric(CacheKeyEnum.BIRTHSIGN, Birthsign, charGenInstruction.birthsign),
                this._extractGeneric(CacheKeyEnum.RACE, Race, customizedBackground.race),
                this._extractGeneric(CacheKeyEnum.FACTION, Faction, customizedBackground.faction),
                this._extractGeneric(CacheKeyEnum.DISEASE, Disease, customizedBackground.disease),
                this._extractGeneric(CacheKeyEnum.ADDICTION, Addiction, customizedBackground.addiction),
                this._extractGeneric(CacheKeyEnum.PROFESSION, CharacterProfession, customizedBackground.profession),
                this._extractGeneric(CacheKeyEnum.MEMORY_POOL, MemoryPool, customizedBackground.memory_pools),
                this._extractPersonality(customizedBackground.personality[0]),
                this._extractGeneric(CacheKeyEnum.PAST_EXP_CHILD, PastExperienceChild, customizedBackground.past_exp_child),
                this._extractGeneric(CacheKeyEnum.PAST_EXP_ADULT, PastExperienceAdult, customizedBackground.past_exp_adult),
                this._extractSkills(customizedBackground)
            ])

            // RACE
            const race: Race | undefined = races[0]
            if (!race) throw new Error("Received no Race for character. A character must have a race. Did you forget to set one? Or maybe your probabilities settings resulted in an empty value?")

            // BIRTHSIGN
            const birthsign: Birthsign | undefined = birthsigns[0]

            // MEMORIES
            const characterMemories: CharacterMemory[] = []

            // TAGS
            const tags: Tag[] = []

            // GENDER
            const gender: GenderEnum = this.decideGender(charGenInstruction, customizedBackground)

            // Create character entity
            const character: Character = Character.create({
                first_name: charGenInstruction.first_name || "FIRSTNAMELESS",
                last_name: charGenInstruction.last_name || "LASTNAMELESS",
                gender: gender,
                race,
                birthsign,
                birthEra: charGenInstruction.birthEra,
                birthYear: charGenInstruction.birthYear,
                birthMonth: charGenInstruction.birthMonth,
                birthDay: charGenInstruction.birthDay,
                skills,
                professions,
                memoryPools,
                characterMemories,
                enneagramType: personality.enneagramType,
                traits: personality.traits,
                factions,
                diseases,
                addictions,
                tags,
                user: this.context && this.context.user,
                world: this.context && this.context.world,
                campaign: this.context && this.context.campaign,
                pastExperiencesChild: past_exp_child,
                pastExperiencesAdult: past_exp_adult,
            });

            // DEALING WITH ITEMS AND SLOTS 
            // generate an array of items (items are generated but not yet saved to DB, because generators only perform READ operations on the DB)
            const items: Item[] = await this._generateCharacterItems(customizedBackground)
            // assign equipment slots according to character race
            this._createAndAssignEquipmentSlots(character)
            this._allocateItemsToEquipmentOrStorage(items, character)

            // TODO assign tags based on everything

            characters.push(Character.create(character));
        }

        return characters
    }

    protected decideGender(charGenInstr: CharacterGenInstruction, customizedBackground: Background): GenderEnum {
        if (charGenInstr.gender) return charGenInstr.gender
        if (customizedBackground.gender) {
            const idsAndQuants: IdAndQuant[] = InstructionProcessor.processInstruction(customizedBackground.gender)
            const firstItem: IdAndQuant | undefined = idsAndQuants[0]
            if (!firstItem) throw new Error("No gender info received for character. Character must have a gender.")
            const genderLabel: string = firstItem.blueprint_id
            if (!Object.values(GenderEnum).includes(genderLabel as GenderEnum)) {
                throw new Error(`Received unrecognized gender: "${genderLabel}"`)
            }
            return genderLabel as GenderEnum
        }
        throw new Error("No gender info received for character. Character must have a gender.")
    }


    protected async _extractGeneric<T extends ContentBase>(type: CacheKeyEnum, entityConstructor: EntityConstructor<T>, instructions: GenerationInstruction[] | GenerationInstruction | undefined): Promise<T[]> {
        const res: T[] = []
        if (!instructions) return res
        const process = async (instr: GenerationInstruction) => {
            const idsAndQuants: IdAndQuant[] = InstructionProcessor.processInstruction(instr)
            const blueprintIds: string[] = idsAndQuants.map((idAndQuant) => idAndQuant.blueprint_id)
            const entities = await this._getBlueprints_cacheOrRequest(type, entityConstructor, blueprintIds)
            entities.forEach((entity) => res.push(entity))
        }
        if (Array.isArray(instructions)) {
            for (const instruction of instructions) {
                await process(instruction)
            }
        } else await process(instructions)
        return res
    }


    protected async _extractPersonality(
        instruction: GenerationInstruction,
    ): Promise<{ traits: Trait[], enneagramType: string }> {
        const personalityProfileName: string | undefined = InstructionProcessor.processInstruction(instruction)[0].blueprint_id
        if (!personalityProfileName) throw new Error(`no personality profile chosen; a character cannot be without personality`)

        // get personality profile
        const extractedPersonalityProfiles: (PersonalityProfile | null)[] = await this._getBlueprints_cacheOrRequest(CacheKeyEnum.PERSONALITY, PersonalityProfile, [personalityProfileName])
        const personalityProfile: PersonalityProfile | null = extractedPersonalityProfiles[0]
        if (!personalityProfile) throw new Error(`cannot proceed with character generation without personality profile`)

        // get traits
        const traits_instructions: GenerationInstruction[] = personalityProfile.traits
        const trait_idsAndQuants: IdAndQuant[] = traits_instructions.map((trait_instruction) => InstructionProcessor.processInstruction(trait_instruction)).flat()
        const traitNames: string[] = trait_idsAndQuants.map((trait_idAndQuant) => trait_idAndQuant.blueprint_id)
        const traits: Trait[] = await this._getBlueprints_cacheOrRequest(CacheKeyEnum.TRAIT, Trait, traitNames)

        return { traits, enneagramType: personalityProfile.enneagramType }
    }

    protected async _generateCharacterItems(customizedBackground: Background): Promise<Item[]> {
        if (!customizedBackground.items) return []
        const itemGenerator: ItemGenerator = new ItemGenerator(this.dataSource)
        return await itemGenerator.generateMany(customizedBackground.items)
    }

    protected async _extractSkills(customizedBackground: Background): Promise<{ [skill: string]: number }> {
        const skills: { [skill: string]: number } = {}

        // TODO create some base definitions for races, like in Morrowind
        // start with initial skill definition for the race

        // process skill sets
        const skillSetInstructions: GenerationInstruction[] | undefined = customizedBackground.skill_sets
        const skillSetIds: IdAndQuant[] | undefined = skillSetInstructions?.map((instruction) => InstructionProcessor.processInstruction(instruction)).flat()
        if (skillSetIds) {
            const skillSets: SkillSet[] = await this._extractGeneric(CacheKeyEnum.SKILL_SET, SkillSet, skillSetIds)
            for (const skillSet of skillSets) {
                for (const [skill, amount] of Object.entries(skillSet.skill_improvement)) {
                    if (!skills[skill]) skills[skill] = 0
                    skills[skill] += amount
                }
            }
        }

        // process custom adjustments
        if (customizedBackground.skill_adjustments) {
            for (const [skill, amount] of Object.entries(customizedBackground.skill_adjustments)) {
                if (!skills[skill]) skills[skill] = 0
                skills[skill] += amount
            }
        }
        return skills
    }



    protected _createAndAssignEquipmentSlots(character: Character): void {
        // nothing to fetch in this method, only to create empty equipment slots on the character, according to their race

        character.equipmentSlots = []
        const slotDefinitions: {
            name: string;
            allowedEntities: string[];
        }[] = character.race.equipment_slot_definitions

        slotDefinitions.forEach((definition) => {
            const eqSlotObj: { [key: string]: any } = {
                name: definition.name,
                allowedEntities: definition.allowedEntities,
                character,
            }
            if (this.context) {
                eqSlotObj.user = this.context.user
                eqSlotObj.world = this.context.world
                eqSlotObj.campaign = this.context.campaign
            }
            const slot: EquipmentSlot = EquipmentSlot.create(eqSlotObj)
            character.equipmentSlots.push(slot)
        })
    }


    protected _allocateItemsToEquipmentOrStorage(items: Item[], character: Character) {
        // put items into equipment slots if and when appropriate
        const { equippedItems, unequippedItems } = EquipmentSlotService.equipItems(character.equipmentSlots, items)
        console.log(`equipped ${equippedItems.length} items`)

        // collect storage slots
        const storageSlots: StorageSlot[] = []
        character.equipmentSlots.forEach((eqSlot) => {
            eqSlot.equippedItem?.storageSlots?.forEach((stSlot) => {
                storageSlots.push(stSlot)
            })
        })

        // store remaining items into storage slots
        const { placedItems, unplacedItems } = StorageSlotService.placeItemsIntoStorageSlots(storageSlots, unequippedItems)
        console.log(`stored ${placedItems.length} items`)

        // raise warning that some items did not fit and were discarded
        if (unplacedItems.length) console.warn(`during character generation some items did not fit into slots; discarding: `, JSON.stringify(unplacedItems))

    }

}
