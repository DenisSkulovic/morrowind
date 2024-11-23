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
import { BlueprintSetInstruction } from "../../layer_1/types";
import { AbstractProbGenerator } from "./AbstractProbGenerator";
import { CharacterGenInstruction } from "../../entities/Content/CharacterGenInstruction";
import { CharacterGroupGenInstruction } from "../../entities/Content/CharacterGroupGenInstruction";
import { PastExperienceChild } from "../../entities/Content/Knowledge/PastExperience/PastExperienceChild";
import { PastExperienceAdult } from "../../entities/Content/Knowledge/PastExperience/PastExperienceAdult";
import { BlueprintSetProcessor } from "../service/BlueprintSetProcessor";
import { ItemGenerator } from "./ItemGenerator";
import { Item } from "../../entities/Content/Item/Item";
import { IdAndQuant, BlueprintGenInstruction_Gaussian, ProbObject_Simple } from "../../class/blueprint_id_and_prob";


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

    public async generateGroup(group_blueprint: CharacterGroupGenInstruction) {
        const instructionsGaussian = BlueprintSetProcessor.getInstructionsFromSet(group_blueprint)
        const characters: Character[] = await this.generateMany(instructionsGaussian)
        return characters
    }

    // Implementation of an abstract method. After this, you can generate the same instruction
    // in many ways (simple or gaussian probabilities) using methods on the parent abstract class.
    public async generateOne(instruction: string | IdAndQuant | BlueprintGenInstruction_Gaussian): Promise<Character[]> {
        const idAndQuant: IdAndQuant = this.simplifyInstruction(instruction)
        const quantity: number = idAndQuant.quantity || 1


        const extractedCharacterGenInstructions: (CharacterGenInstruction | null)[] = await this._getBlueprints_cacheOrRequest(CacheKeyEnum.CHARACTER_INSTRUCTION, CharacterGenInstruction, [blueprint_id])
        const charGenInstruction: CharacterGenInstruction | null = extractedCharacterGenInstructions[0]
        if (!charGenInstruction) throw new Error(`character generation instruction not found; did you forget to set it into the `)

        // Fetch the background blueprint
        const background_blueprint_id: string | undefined = charGenInstruction.background_blueprint_id
        const extractedBackgrounds: (Background | null)[] = await this._getBlueprints_cacheOrRequest(CacheKeyEnum.BACKGROUND, Background, [background_blueprint_id])
        const background: Background | null = extractedBackgrounds[0]
        if (!background) throw new Error(`Background ${background} not found.`);
        const backgroundClone: Background = cloneDeep(background)

        // TODO
        // TODO I need to start taking custom fields from the character instruction; the code at the moment only creates according to background, without customization
        // TODO 

        // RACE

        // Collect necessary data from either cache or db (these only extract data and dont create anything, so no need to handle unique instances for each separate character)
        const [race, factions,
            diseases, addictions, professions,
            memoryPools, personality,
            past_enp_child, past_exp_adult
        ] = await Promise.all([
            charGenInstruction.race ? this._extractGeneric(CacheKeyEnum.RACE, Race, charGenInstruction.race) : this._extractGeneric(CacheKeyEnum.RACE, Race, backgroundClone.race_prob),
            this._extractGeneric(CacheKeyEnum.FACTION, Faction, backgroundClone.faction_prob),
            this._extractGeneric(CacheKeyEnum.DISEASE, Disease, backgroundClone.disease_prob),
            this._extractGeneric(CacheKeyEnum.ADDICTION, Addiction, backgroundClone.addiction_prob),
            this._extractGeneric(CacheKeyEnum.PROFESSION, CharacterProfession, backgroundClone.profession_prob),
            this._extractGeneric(CacheKeyEnum.MEMORY_POOL, MemoryPool, backgroundClone.memory_pools_prob),
            this._extractPersonality(backgroundClone.personality_prob),
            this._extractGeneric(CacheKeyEnum.PAST_EXP_CHILD, PastExperienceChild, backgroundClone.past_exp_child_prob),
            this._extractGeneric(CacheKeyEnum.PAST_EXP_ADULT, PastExperienceAdult, backgroundClone.past_exp_adult_prob),
        ])

        // create as many instances as quantity requires
        const characters: Character[] = []
        for (let i = 0; i < quantity; i++) {
            // Create character entity
            const character = Character.create({
                first_name: charGenInstruction.first_name,
                last_name: charGenInstruction.last_name,
                gender: charGenInstruction.gender,
                race,
                birthsign: charGenInstruction.birthsign,
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
                user: this.context.user,
                world: this.context.world,
                campaign: this.context.campaign
            })[0];

            // DEALING WITH ITEMS AND SLOTS 
            // generate an array of items (items are generated but not yet saved to DB, because generators only perform READ operations on the DB)
            const items: Item[] = await this._generateCharacterItems(charGenInstruction, backgroundClone)
            // assign equipment slots according to character race
            this._createAndAssignEquipmentSlots(character)
            this._allocateItemsToEquipmentOrStorage(items, character)

            // TODO assign tags based on everything

            characters.push(character);
        }

        return characters
    }


    protected async _extractGeneric<T extends ContentBase>(type: CacheKeyEnum, entityConstructor: EntityConstructor<T>, customBlueprintId: string): Promise<T[]>;
    protected async _extractGeneric<T extends ContentBase>(type: CacheKeyEnum, entityConstructor: EntityConstructor<T>, customBlueprintIds: string[]): Promise<T[]>;
    protected async _extractGeneric<T extends ContentBase>(type: CacheKeyEnum, entityConstructor: EntityConstructor<T>, prob_obj_simple: ProbObject_Simple): Promise<T[]>;
    protected async _extractGeneric<T extends ContentBase>(type: CacheKeyEnum, entityConstructor: EntityConstructor<T>, prob_obj_gaussian: BlueprintSetInstruction): Promise<T[]>;
    protected async _extractGeneric<T extends ContentBase>(type: CacheKeyEnum, entityConstructor: EntityConstructor<T>, probOrIds: string | string[] | ProbObject_Simple | BlueprintSetInstruction): Promise<T[]> {
        let blueprintIds: string[]
        if (typeof probOrIds === "string") { // single id provided
            blueprintIds = [probOrIds]
        } else if ("blueprint_id" in probOrIds) { // combinator and gaussian probabilities were provided
            const res: BlueprintGenInstruction_Gaussian[] = BlueprintSetProcessor.getInstructionsFromSet(probOrIds)
            blueprintIds = this._processProbGaussian(res).map((obj) => obj.blueprint_id)
        } else if ("prob" in probOrIds) { // simple probabilities were provided
            const idsAndQuantity: IdAndQuant[] = this._processProbSimple([probOrIds])
            blueprintIds = idsAndQuantity.map((obj) => obj.blueprint_id)
        } else if (Array.isArray(probOrIds)) {// specific ids were provided as a simple array
            blueprintIds = probOrIds
        } else {
            throw new Error("got into the else statement of _extractGeneric, which should be impossible")
        }

        const entities = await this._getBlueprints_cacheOrRequest(type, entityConstructor, blueprintIds)
        return entities
    }


    protected async _extractPersonality(
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

    protected async _generateCharacterItems(
        charGenInstruction: CharacterGenInstruction,
        background: Background,
    ): Promise<Item[]> {
        const itemGenerator: ItemGenerator = new ItemGenerator(this.dataSource)
        const idsAndQuants: IdAndQuant[] = []
        const items: Item[] = []
        // handle separate items
        if (charGenInstruction.items) {
            const res = await itemGenerator.generateMany(charGenInstruction.items)
        } else if (background.item_prob)
            itemGenerator.generateOne()
        // handle item sets
        if (charGenInstruction.item_sets) {

        } else if (background.item_set_prob)

            if (!items.length) return []
        // instruction can have both item sets and items, and there are no probabilities. Extract items for item sets, and compine with the provided items array.
        itemGenerator.generateMany()

        return items
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
