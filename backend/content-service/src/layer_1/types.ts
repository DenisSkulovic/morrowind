import { BlueprintGenInstruction_Gaussian } from "../class/blueprint_id_and_prob";

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
export type BlueprintSetCombinator = {
    "name": string,
    "prob": Probability_0_to_1, // 0-1, default 1
    "cond": CombinatorCondition,
    "items": Array<BlueprintSetCombinator | BlueprintGenInstruction_Gaussian>
}