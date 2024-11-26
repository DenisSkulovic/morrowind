import { IdAndQuant, BlueprintGenInstruction_Gaussian, BlueprintSetCombinator } from "../class/blueprint_id_and_prob";
import { Campaign } from "../entities/Campaign";
import { User } from "../entities/User";
import { World } from "../entities/World";

export type EntityConstructor<T> = new () => T;

export type ItemRequirements = { [type: string]: { [name: string]: number | boolean } }

export type StorageSlotDefinition = {
    "name": string,
    "grid": [number, number],
    "maxWeight": number
}

export type Context = {
    user: User,
    world: World
    campaign?: Campaign,
}

export type GenerationInstruction = string | IdAndQuant | BlueprintGenInstruction_Gaussian | BlueprintSetCombinator


export type CombinatorCondition = "AND" | "OR" | "ANY";

// simple id and quantity


// working with simple probabilities here, nothing fancy
export type Probability_0_to_1 = number
export type BlueprintGenInstruction_Simple = { [blueprint_id: string]: Probability_0_to_1 };



// working with Gaussian bell curves here - mean, standard deviation and skewness

export type BlueprintSetInstruction = {
    blueprint_id: string,
    set: BlueprintSetCombinator
}
