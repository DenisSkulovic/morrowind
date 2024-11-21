import { DataSource, In, Repository } from "typeorm";
import { sourcesMap } from "../../data-source";
import { ItemSetGenerator } from "./ItemSetGenerator";
import { Character } from "../../entities/Content/Character";
import { Background } from "../../entities/Content/Background";
import { DataSourceEnum } from "../../enum/DataSourceEnum";
import { Item } from "../../entities/Content/Item/Item";
import { Faction } from "../../entities/Content/Faction";
import { cloneDeep } from "lodash"
import { Disease } from "../../entities/Content/Disease";
import { Addiction } from "../../entities/Content/Addiction";
import { PersonalityProfile } from "../../entities/Content/PersonalityProfile";
import { Trait } from "../../entities/Content/Trait/Trait";
import { Race } from "../../entities/Content/Race";
import { RepositoryServiceBase } from "../service/RepositoryServiceBase";
import { ContentBase } from "../../ContentBase";
import { Context, EntityConstructor } from "../../types";
import { CharacterProfession } from "../../entities/Content/CharacterProfession";
import { MemoryPool } from "../../entities/Content/Knowledge/MemoryPool";
import { World } from "../../entities/World";
import { StorageSlot } from "../../entities/Content/Slot/StorageSlot";
import { EquipmentSlot } from "../../entities/Content/Slot/EquipmentSlot";
import { EquipmentSlotService } from "../service/EquipmentSlotService";
import { StorageSlotService } from "../service/StorageSlotService";
import { ItemSet } from "../../entities/Content/ItemSet";


// TODO I need to conceptualize how I will deal with modifiers
// modifiers will have to be calculated based on many sources
// having a trait can apply a modifier. Having a disease can apply a modifier. 
// Having an addiction, a status, etc. can apply a modifier.
// Maybe statuses? Sick, in-pain, withdrawal, well-fed, etc.?
// need to understand how games like CK3 does this.


export type CharacterGenInstruction = {
    "first_name": string,
    "last_name": string,
    "gender": "MALE" | "FEMALE",
    "birthsign": string,
    "birthEra": string,
    "birthYear": number,
    "birthMonth": string,
    "birthDay": number,
    "background_blueprint_id"?: string,
    "background_customization"?: Partial<Background>
}
export type CharGenProbObject = {
    "cond": CharGenProbCondition,
    "prob": CharGenProbMap,
}
export type CharGenProbCondition = "AND" | "OR" | "ANY";
export type CharGenProbMap = { [blueprint_id: string]: number };


export type BlueprintsCache = {
    [field: string]: {
        [key: string]: any
    }
}

export class CharacterGenerator {
    context: Context
    constructor(context: Context) {
        this.context = context
    }

    public async generateCharacters(
        instructions: CharacterGenInstruction[],
        source: DataSourceEnum,
    ): Promise<Character[]> {

        const blueprintsCache: BlueprintsCache = {} // caching blueprint data extracted from db to not request for info I already have from previous characters
        const dataSource: DataSource | undefined = sourcesMap.get(source)
        if (!dataSource) throw new Error(`failed to find data source for source: "source"`)

        const promises = instructions.map(async (instruction) => {
            // Fetch the background blueprint
            let background: Background | null = null
            if (instruction.background_blueprint_id) {
                // try to find background in the cache
                background = blueprintsCache["background"][instruction.background_blueprint_id]
                if (!background) {
                    // try to extract background from db
                    const backgroundRepository: Repository<Background> = dataSource.getRepository(Background)
                    background = await backgroundRepository.findOne({ where: { id: instruction.background_blueprint_id } });
                    blueprintsCache["background"][instruction.background_blueprint_id] = background
                }
            }
            if (!background) throw new Error(`Background ${background} not found.`);
            const backgroundClone = cloneDeep(background)

            // Apply customizations to background
            const customizedBackground: Background = Object.assign(backgroundClone, instruction.background_customization);

            // Collect necessary data from either cache or db
            const [race, items, factions,
                diseases, addictions, professions,
                memoryPools, personality,
            ] = await Promise.all([
                this._extractGenericBlueprints("race", Race, customizedBackground.race_prob, source, blueprintsCache),
                this._extractItemSetBlueprints(customizedBackground, source),
                this._extractGenericBlueprints("faction", Faction, customizedBackground.faction_prob, source, blueprintsCache),
                this._extractGenericBlueprints("disease", Disease, customizedBackground.disease_prob, source, blueprintsCache),
                this._extractGenericBlueprints("addiction", Addiction, customizedBackground.addiction_prob, source, blueprintsCache),
                this._extractGenericBlueprints("profession", CharacterProfession, customizedBackground.profession_prob, source, blueprintsCache),
                this._extractGenericBlueprints("memoryPool", MemoryPool, customizedBackground.memory_pools_prob, source, blueprintsCache),
                this._extractPersonalityBlueprints(customizedBackground.personality_prob, source, blueprintsCache),
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
        })

        const characters: Character[] = await Promise.all(promises)
        return characters
    }

    private async _extractGenericBlueprints<T extends ContentBase>(
        field: string,
        entityConstructor: EntityConstructor<T>,
        prob_obj: CharGenProbObject | undefined,
        source: DataSourceEnum,
        blueprintsCache: BlueprintsCache
    ): Promise<T[]> {
        if (!prob_obj) return []
        const blueprintIds: string[] = this._getBlueprintIdsForProbObject(prob_obj)

        const entities: T[] = []
        const blueprintsToFetch: string[] = []

        // TODO this "extract cached or fetch missing" can be generalized - _extractGenericBlueprints and _extractPersonalityBlueprints do it the same way
        // extract cached entities or record ID as to be fetched
        blueprintIds.forEach((blueprint_id: string) => {
            const cachedEntity: T | undefined = blueprintsCache[field][blueprint_id]
            if (cachedEntity) entities.push(cachedEntity)
            else blueprintsToFetch.push(blueprint_id)
        })

        // fetch missing entities
        const dataSource: DataSource | undefined = sourcesMap.get(source)
        if (!dataSource) throw new Error(`failed to find DataSource for source: "${source}"`)
        const repository: Repository<T> = dataSource.getRepository(entityConstructor)
        const fetchedEntities = await repository.find({ where: { id: In(blueprintsToFetch) } })
        fetchedEntities.forEach((entity) => {
            entities.push(entity)
            // record blueprint entity data for future use 
            blueprintsCache[field][entity.blueprint_id] = entity
        })

        return entities
    }


    private async _extractPersonalityBlueprints(
        prob_obj: CharGenProbObject | undefined,
        source: DataSourceEnum,
        blueprintsCache: BlueprintsCache
    ): Promise<{ traits: Trait[], enneagramType: string }> {
        if (!prob_obj) throw new Error("a character cannot exist without a personality")
        const personalityProfileName: string | undefined = this._chooseOR(prob_obj.prob)
        if (!personalityProfileName) throw new Error(`no personality profile chosen; a character cannot be without personality`)

        // get personality profile
        let personalityProfile: PersonalityProfile | null = blueprintsCache["personalityProfile"][personalityProfileName] || null
        if (!personalityProfile) {
            // fetch personality profile
            const dataSource = sourcesMap.get(source)
            if (!dataSource) throw new Error(`failed to get datasource for source: "${source}"`)
            const personalityProfileRepository: Repository<PersonalityProfile> = dataSource?.getRepository(PersonalityProfile)
            personalityProfile = await personalityProfileRepository.findOne({ where: { id: personalityProfileName } })
        }
        if (!personalityProfile) throw new Error(`cannot proceed with character generation without personality profile`)
        const traits_prob: CharGenProbObject = personalityProfile.traits
        const traitNames = this._chooseANY(traits_prob.prob)
        const traits: Trait[] = []
        const triatsToFetch: string[] = []

        // TODO this "extract cached or fetch missing" can be generalized - _extractGenericBlueprints and _extractPersonalityBlueprints do it the same way
        // extract cached traits or record ID as to be fetched
        traitNames.forEach((traitName: string) => {
            const cachedEntity: Trait | undefined = blueprintsCache["trait"][traitName]
            if (cachedEntity) traits.push(cachedEntity)
            else triatsToFetch.push(traitName)
        })

        // fetch missing traits
        const dataSource: DataSource | undefined = sourcesMap.get(source)
        if (!dataSource) throw new Error(`failed to find DataSource for source: "${source}"`)
        const repository: Repository<Trait> = dataSource.getRepository(Trait)
        const fetchedEntities = await repository.find({ where: { id: In(triatsToFetch) } })
        fetchedEntities.forEach((entity) => {
            traits.push(entity)
            // record blueprint entity data for future use 
            blueprintsCache["trait"][entity.blueprint_id] = entity
        })

        return { traits, enneagramType: personalityProfile.enneagramType }
    }


    private async _extractItemSetBlueprints(background: Background, source: DataSourceEnum): Promise<ItemSet[]> {

    }
    private async _processPastExp(background: Background, source: DataSourceEnum) { }
    private async _processTags(background: Background, source: DataSourceEnum) { }
    private _createAndAssignEquipmentSlots(character: Character): void {
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


    private _getBlueprintIdsForProbObject(probObj: CharGenProbObject): string[] {
        const blueprintIds: string[] = [];

        switch (probObj.cond) {
            case "OR":
                this._chooseOR(probObj.prob, blueprintIds);
                break;
            case "AND": // not sure if there is any difference between AND and ANY, will keep both for now
            case "ANY":
                this._chooseANY(probObj.prob, blueprintIds)
                break;
        }

        return blueprintIds;
    }

    private _chooseOR(probObj: CharGenProbMap, targetArr?: string[]): string | undefined {
        const totalProb = Object.values(probObj).reduce((sum, prob) => sum + prob, 0);
        let randomValue = Math.random() * totalProb;

        for (const [key, prob] of Object.entries(probObj)) {
            randomValue -= prob;
            if (randomValue <= 0) {
                if (targetArr) targetArr.push(key)
                return key
            };
        }
    }
    private _chooseANY(probObj: CharGenProbMap, targetArr?: string[]) {
        const ownArray: string[] = []
        for (const [blueprintId, prob] of Object.entries(probObj.prob)) {
            if (Math.random() <= prob) {
                if (targetArr) targetArr.push(blueprintId)
                else ownArray.push(blueprintId)
            };
        }
        if (targetArr) return targetArr
        else return ownArray
    }

}
