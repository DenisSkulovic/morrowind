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
import { Context, EntityConstructor } from "../../types";
import { CharacterProfession } from "../../entities/Content/CharacterProfession";
import { MemoryPool } from "../../entities/Content/Knowledge/MemoryPool";
import { StorageSlot } from "../../entities/Content/Slot/StorageSlot";
import { EquipmentSlot } from "../../entities/Content/Slot/EquipmentSlot";
import { EquipmentSlotService } from "../service/EquipmentSlotService";
import { StorageSlotService } from "../service/StorageSlotService";
import { ProbObject_Simple } from "../../layer_1/types";
import { AbstractProbGenerator, IdAndQuant } from "./AbstractProbGenerator";
import { CharacterGenInstruction } from "../../entities/Content/CharacterGenInstruction";
import { CharacterGroupGenInstruction } from "../../entities/Content/CharacterGroupGenInstruction";
import { PastExperienceChild } from "../../entities/Content/Knowledge/PastExperience/PastExperienceChild";
import { PastExperienceAdult } from "../../entities/Content/Knowledge/PastExperience/PastExperienceAdult";


// TODO I need to conceptualize how I will deal with modifiers
// modifiers will have to be calculated based on many sources
// having a trait can apply a modifier. Having a disease can apply a modifier. 
// Having an addiction, a status, etc. can apply a modifier.
// Maybe statuses? Sick, in-pain, withdrawal, well-fed, etc.?
// need to understand how games like CK3 does this.



enum CacheKeyEnum {
    CHARACTER_INSTRUCTION = "characterInstruction",
    BACKGROUND = "background",
    RACE = "race",
    FACTION = "faction",
    DISEASE = "disease",
    ADDICTION = "addiction",
    PROFESSION = "profession",
    MEMORY_POOL = "memoryPool",
    PERSONALITY = "personality",
    PAST_EXP_CHILD = "past_exp_child",
    PAST_EXP_ADULT = "past_exp_adult",
}




export class CharacterGenerator extends AbstractProbGenerator<Character> {
    context: Context
    constructor(context: Context, dataSource: DataSource) {
        super(dataSource)
        this.context = context
        this.blueprintsCache = {}
    }

    public async generateGroup_probGaussian(
        group_blueprint: CharacterGroupGenInstruction
    ) {
        const characters: Character[] = await this.generateMany_probGaussian([group_blueprint])
        return characters
    }

    // Implementation of an abstract method. After this, you can generate the same instruction
    // in many ways (simple or gaussian probabilities) using methods on the parent abstract class.
    public async generateOne(idAndQuant: IdAndQuant): Promise<Character> {
        // TODO ignore quantity - doesn make sense for characters. quantity is used for items; probably a use case for overloads to allow both a string and idAndQuant
        const blueprint_id = idAndQuant.blueprint_id

        const extractedCharacterGenInstructions: (CharacterGenInstruction | null)[] = await this._getBlueprints_cacheOrRequest("characterInstruction", CharacterGenInstruction, [blueprint_id])
        const instruction: CharacterGenInstruction | null = extractedCharacterGenInstructions[0]
        if (!instruction) throw new Error(`character generation instruction not found; did you forget to set it into the `)

        // Fetch the background blueprint
        const background_blueprint_id: string | undefined = instruction.background_blueprint_id
        const extractedBackgrounds: (Background | null)[] = await this._getBlueprints_cacheOrRequest("background", Background, [background_blueprint_id])
        const background: Background | null = extractedBackgrounds[0]
        if (!background) throw new Error(`Background ${background} not found.`);
        const backgroundClone: Background = cloneDeep(background)

        // TODO
        // TODO I need to start taking custom fields from the character instruction; the code at the moment only creates according to background, without customization
        // TODO 

        // Collect necessary data from either cache or db
        const [race, items, factions,
            diseases, addictions, professions,
            memoryPools, personality,
            past_enp_child, past_exp_adult
        ] = await Promise.all([
            this._extractGenericBlueprints(CacheKeyEnum.RACE, Race, backgroundClone.race_prob),
            this._generateCharacterItems(backgroundClone),
            this._extractGenericBlueprints(CacheKeyEnum.FACTION, Faction, backgroundClone.faction_prob),
            this._extractGenericBlueprints(CacheKeyEnum.DISEASE, Disease, backgroundClone.disease_prob),
            this._extractGenericBlueprints(CacheKeyEnum.ADDICTION, Addiction, backgroundClone.addiction_prob),
            this._extractGenericBlueprints(CacheKeyEnum.PROFESSION, CharacterProfession, backgroundClone.profession_prob),
            this._extractGenericBlueprints(CacheKeyEnum.MEMORY_POOL, MemoryPool, backgroundClone.memory_pools_prob),
            this._extractPersonalityBlueprints(backgroundClone.personality_prob),
            this._extractGenericBlueprints(CacheKeyEnum.PAST_EXP_CHILD, PastExperienceChild, backgroundClone.past_exp_child_prob),
            this._extractGenericBlueprints(CacheKeyEnum.PAST_EXP_ADULT, PastExperienceAdult, backgroundClone.past_exp_adult_prob),
        ])

        // Create character entity
        const character = Character.create({
            first_name: instruction.first_name,
            last_name: instruction.last_name,
            gender: instruction.gender,
            race,
            birthsign: instruction.birthsign,
            birthEra: instruction.birthEra,
            birthYear: instruction.birthYear,
            birthMonth: instruction.birthMonth,
            birthDay: instruction.birthDay,
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
            user: this.context.user,
            world: this.context.world,
            campaign: this.context.campaign
        })[0];



        // DEALING WITH ITEMS AND SLOTS
        // assign equipment slots according to character race
        this._createAndAssignEquipmentSlots(character)
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

        // TODO assign tags based on everything

        return character;
    }



    protected async _extractGenericBlueprints<T extends ContentBase>(
        type: CacheKeyEnum,
        entityConstructor: EntityConstructor<T>,
        prob_obj: ProbObject_Simple | undefined
    ): Promise<T[]> {
        if (!prob_obj) return []

        const idsAndQuantity: IdAndQuant[] = this._processProbSimple([prob_obj])
        const blueprintIds: string[] = idsAndQuantity.map((obj) => obj.blueprint_id)
        const extractedBlueprints: T[] = await this._getBlueprints_cacheOrRequest(type, entityConstructor, blueprintIds)
        return extractedBlueprints
    }


    protected async _extractPersonalityBlueprints(
        prob_obj: ProbObject_Simple | undefined,
    ): Promise<{ traits: Trait[], enneagramType: string }> {
        if (!prob_obj) throw new Error("a character cannot exist without a personality")
        const personalityProfileName: string | undefined = this._processProbOr(prob_obj.prob)
        if (!personalityProfileName) throw new Error(`no personality profile chosen; a character cannot be without personality`)

        // get personality profile
        const extractedPersonalityProfiles: (PersonalityProfile | null)[] = await this._getBlueprints_cacheOrRequest("personality", PersonalityProfile, [personalityProfileName])
        const personalityProfile: PersonalityProfile | null = extractedPersonalityProfiles[0]
        if (!personalityProfile) throw new Error(`cannot proceed with character generation without personality profile`)

        // get traits
        const traits_prob: ProbObject_Simple = personalityProfile.traits
        const traitNames = this._processProbAny(traits_prob.prob)
        const traits: Trait[] = await this._getBlueprints_cacheOrRequest("trait", Trait, traitNames)

        return { traits, enneagramType: personalityProfile.enneagramType }
    }


    
    protected _createAndAssignEquipmentSlots(character: Character): void {
        // nothing to fetch in this method, only to create empty equipment slots on the character, according to their race

        character.equipmentSlots = []
        const slotDefinitions: {
            name: string;
            allowedEntities: string[];
        }[] = character.race.equipment_slot_definitions

        slotDefinitions.forEach((definition) => {
            const slot: EquipmentSlot = EquipmentSlot.create({
                name: definition.name,
                allowedEntities: definition.allowedEntities,
                character,
                world: this.context.world,
                user: this.context.user,
                campaign: this.context.campaign
            })
            character.equipmentSlots.push(slot)
        })
    }



}
