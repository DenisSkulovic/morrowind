import { cloneDeep } from "lodash";
import { DataSource } from "typeorm";
import { ContentBase } from "../../../../ContentBase";
import { GenderEnum } from "../../../../common/enum/GenderEnum";
import { AbstractProbGenerator, IAbstractProbGenerator } from "../abstract-generator";
import { Addiction } from "../../entities/Addiction";
import { Background } from "../../entities/Background";
import { Birthsign } from "../../entities/Birthsign";
import { Character } from "../../entities/Character";
import { CharacterGenInstruction } from "../../entities/CharacterGenInstruction";
import { CharacterGroupGenInstruction } from "../../entities/CharacterGroupGenInstruction";
import { CharacterProfession } from "../../entities/CharacterProfession";
import { Disease } from "../../entities/Disease";
import { Faction } from "../../entities/Faction";
import { Item } from "../../entities/Item/Item";
import { CharacterMemory } from "../../entities/CharacterMemory";
import { MemoryPool } from "../../entities/MemoryPool";
import { PersonalityProfile } from "../../entities/PersonalityProfile";
import { Race } from "../../entities/Race";
import { SkillSet } from "../../entities/Skill/SkillSet";
import { EquipmentSlot } from "../../entities/Slot/EquipmentSlot";
import { StorageSlot } from "../../entities/Slot/StorageSlot";
import { Tag } from "../../entities/Tag";
import { Trait } from "../../entities/Trait";
import { Inject, Injectable, forwardRef } from "@nestjs/common";
import { IdAndQuant, GenerationInstruction } from "../../../../class/GenerationInstruction";
import { Context, EntityConstructor } from "../../../../types";
import { InjectDataSource } from "@nestjs/typeorm";
import { DataSourceEnum } from "../../../../common/enum/DataSourceEnum";
import { ItemGeneratorService } from "../item/item-generator.service";
import { InstructionProcessorService } from "../../instruction/instruction-processor.service";
import { StorageSlotService } from "../../storage-slot/storage-slot.service";
import { EquipmentSlotService } from "../../equipment-slot/equipment-slot.service";
import { PastExperience } from "../../entities/PastExperience";



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
    PAST_EXP = "past_exp",
    BIRTHSIGN = "birthsign",
}

export interface ICharacterGeneratorService extends IAbstractProbGenerator<Character> {
    generateGroup(
        group_blueprint: CharacterGroupGenInstruction,
        source: DataSourceEnum,
    ): Promise<Character[]>
}


@Injectable()
export class CharacterGeneratorService extends AbstractProbGenerator<Character> implements ICharacterGeneratorService {
    constructor(
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_WORLD) protected readonly worldDataSource: DataSource,
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_CAMPAIGN) protected readonly campaignDataSource: DataSource,
        @Inject(forwardRef(() => InstructionProcessorService)) protected instructionProcessorService: InstructionProcessorService,
        @Inject(forwardRef(() => ItemGeneratorService)) protected itemGeneratorService: ItemGeneratorService,
        @Inject(forwardRef(() => StorageSlotService)) protected storageSlotService: StorageSlotService,
        @Inject(forwardRef(() => EquipmentSlotService)) protected equipmentSlotService: EquipmentSlotService,
    ) {
        super(worldDataSource, campaignDataSource, instructionProcessorService)
        this.blueprintsCache = {}
    }

    public async generateGroup(
        group_blueprint: CharacterGroupGenInstruction,
        source: DataSourceEnum,
    ): Promise<Character[]> {
        const instructions: IdAndQuant[] = this.instructionProcessorService.processInstruction(group_blueprint.set)
        const characters: Character[] = await this.generateMany(instructions, source)
        return characters
    }

    // Implementation of an abstract method. After this, you can generate the same instruction
    // in many ways (simple or gaussian probabilities) using methods on the parent abstract class.
    public async _generateOne(
        idAndQuant: IdAndQuant,
        source: DataSourceEnum,
        context?: Context
    ): Promise<Character[]> {
        const quantity: number = idAndQuant.quantity || 1

        // extract CharacterGenInstruction objects from cache or db
        const extractedCharacterGenInstructions: (CharacterGenInstruction | null)[] = await this._getBlueprints_cacheOrRequest(CacheKeyEnum.CHARACTER_INSTRUCTION, CharacterGenInstruction, [idAndQuant.blueprint_id], source)
        const charGenInstruction: CharacterGenInstruction | null = extractedCharacterGenInstructions[0]
        if (!charGenInstruction) throw new Error(`character generation instruction not found; did you forget to set it into the `)

        // Fetch the background blueprint
        const background_blueprint_id: string | undefined = charGenInstruction.background_blueprint_id
        const extractedBackgrounds: (Background | null)[] = await this._getBlueprints_cacheOrRequest(CacheKeyEnum.BACKGROUND, Background, [background_blueprint_id], source)
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
                past_exp, skills
            ] = await Promise.all([
                this._extractGeneric(CacheKeyEnum.BIRTHSIGN, Birthsign, charGenInstruction.birthsign, source),
                this._extractGeneric(CacheKeyEnum.RACE, Race, customizedBackground.race, source),
                this._extractGeneric(CacheKeyEnum.FACTION, Faction, customizedBackground.faction, source),
                this._extractGeneric(CacheKeyEnum.DISEASE, Disease, customizedBackground.disease, source),
                this._extractGeneric(CacheKeyEnum.ADDICTION, Addiction, customizedBackground.addiction, source),
                this._extractGeneric(CacheKeyEnum.PROFESSION, CharacterProfession, customizedBackground.profession, source),
                this._extractGeneric(CacheKeyEnum.MEMORY_POOL, MemoryPool, customizedBackground.memory_pools, source),
                this._extractPersonality(customizedBackground.personality[0], source),
                this._extractGeneric(CacheKeyEnum.PAST_EXP, PastExperience, customizedBackground.past_exp_child, source),
                this._extractSkills(customizedBackground, source)
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
                user: context && context.user,
                world: context && context.world,
                campaign: context && context.campaign,
                pastExperiences: past_exp,
            });

            // DEALING WITH ITEMS AND SLOTS 
            // generate an array of items (items are generated but not yet saved to DB, because generators only perform READ operations on the DB)
            const items: Item[] = await this._generateCharacterItems(customizedBackground, source)
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
            const idsAndQuants: IdAndQuant[] = this.instructionProcessorService.processInstruction(customizedBackground.gender)
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


    protected async _extractGeneric<T extends ContentBase>(
        type: CacheKeyEnum,
        entityConstructor: EntityConstructor<T>,
        instructions: GenerationInstruction[] | GenerationInstruction | undefined,
        source: DataSourceEnum,
    ): Promise<T[]> {
        const res: T[] = []
        if (!instructions) return res
        const process = async (instr: GenerationInstruction) => {
            const idsAndQuants: IdAndQuant[] = this.instructionProcessorService.processInstruction(instr)
            const blueprintIds: string[] = idsAndQuants.map((idAndQuant) => idAndQuant.blueprint_id)
            const entities = await this._getBlueprints_cacheOrRequest(type, entityConstructor, blueprintIds, source)
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
        source: DataSourceEnum,
    ): Promise<{ traits: Trait[], enneagramType: string }> {
        const personalityProfileName: string | undefined = this.instructionProcessorService.processInstruction(instruction)[0].blueprint_id
        if (!personalityProfileName) throw new Error(`no personality profile chosen; a character cannot be without personality`)

        // get personality profile
        const extractedPersonalityProfiles: (PersonalityProfile | null)[] = await this._getBlueprints_cacheOrRequest(CacheKeyEnum.PERSONALITY, PersonalityProfile, [personalityProfileName], source)
        const personalityProfile: PersonalityProfile | null = extractedPersonalityProfiles[0]
        if (!personalityProfile) throw new Error(`cannot proceed with character generation without personality profile`)

        // get traits
        const traits_instructions: GenerationInstruction[] = personalityProfile.traits
        const trait_idsAndQuants: IdAndQuant[] = traits_instructions.map((trait_instruction) => this.instructionProcessorService.processInstruction(trait_instruction)).flat()
        const traitNames: string[] = trait_idsAndQuants.map((trait_idAndQuant) => trait_idAndQuant.blueprint_id)
        const traits: Trait[] = await this._getBlueprints_cacheOrRequest(CacheKeyEnum.TRAIT, Trait, traitNames, source)

        return { traits, enneagramType: personalityProfile.enneagramType }
    }

    protected async _generateCharacterItems(
        customizedBackground: Background,
        source: DataSourceEnum,
    ): Promise<Item[]> {
        if (!customizedBackground.items) return []
        return await this.itemGeneratorService.generateMany(customizedBackground.items, source)
    }

    protected async _extractSkills(
        customizedBackground: Background,
        source: DataSourceEnum,
    ): Promise<{ [skill: string]: number }> {
        const skills: { [skill: string]: number } = {}

        // TODO create some base definitions for races, like in Morrowind
        // start with initial skill definition for the race

        // process skill sets
        const skillSetInstructions: GenerationInstruction[] | undefined = customizedBackground.skill_sets
        const skillSetIds: IdAndQuant[] | undefined = skillSetInstructions?.map((instruction) => this.instructionProcessorService.processInstruction(instruction)).flat()
        if (skillSetIds) {
            const skillSets: SkillSet[] = await this._extractGeneric(CacheKeyEnum.SKILL_SET, SkillSet, skillSetIds, source)
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



    protected _createAndAssignEquipmentSlots(
        character: Character,
        context?: Context,
    ): void {
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
            if (context) {
                eqSlotObj.user = context.user
                eqSlotObj.world = context.world
                eqSlotObj.campaign = context.campaign
            }
            const slot: EquipmentSlot = EquipmentSlot.create(eqSlotObj)
            character.equipmentSlots.push(slot)
        })
    }


    protected _allocateItemsToEquipmentOrStorage(
        items: Item[],
        character: Character,
    ) {
        // put items into equipment slots if and when appropriate
        const { equippedItems, unequippedItems } = this.equipmentSlotService.equipItems(character.equipmentSlots, items)
        console.log(`equipped ${equippedItems.length} items`)

        // collect storage slots
        const storageSlots: StorageSlot[] = []
        character.equipmentSlots.forEach((eqSlot) => {
            eqSlot.equippedItem?.storageSlots?.forEach((stSlot) => {
                storageSlots.push(stSlot)
            })
        })

        // store remaining items into storage slots
        const { placedItems, unplacedItems } = this.storageSlotService.placeItemsIntoStorageSlots(storageSlots, unequippedItems)
        console.log(`stored ${placedItems.length} items`)

        // raise warning that some items did not fit and were discarded
        if (unplacedItems.length) console.warn(`during character generation some items did not fit into slots; discarding: `, JSON.stringify(unplacedItems))

    }

}
