export type ItemSet = {
    id: string,
    set: ItemSetCombinator
}

export type ItemSetCombinator = {
    "name": string,
    "prob": number, // 0-1, default 1
    "condition": "AND" | "OR" | "ANY",
    "items": Array<ItemSetCombinator | ItemGenInstruction>
}
export type ItemGenInstruction = {
    "item_blueprint_id": string,
    "prob"?: number, // 0-1, default 1
    "avg_quan"?: number, // positive integer, default 1
    "st_dev"?: number, // positive float, default 0
    "skew"?: number, // positive float, default 0
}