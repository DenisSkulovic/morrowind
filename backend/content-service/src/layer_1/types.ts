export type CombinatorCondition = "AND" | "OR" | "ANY";


// working with simple probabilities here, nothing fancy
export type Probability_0_to_1 = number
export type BlueprintGenInstruction_Simple = { [blueprint_id: string]: Probability_0_to_1 };
export type ProbObject_Simple = {
    "cond": CombinatorCondition,
    "prob": BlueprintGenInstruction_Simple,
}


// working with Gaussian bell curves here - mean, standard deviation and skewness
export type BlueprintGenInstruction_Gaussian = {
    "blueprint_id": string,
    "prob"?: Probability_0_to_1, // 0-1, default 1
    "avg_quan"?: number, // positive integer, default 1
    "st_dev"?: number, // positive float, default 0
    "skew"?: number, // positive float, default 0
}
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