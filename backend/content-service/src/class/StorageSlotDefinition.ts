import { StorageSlotDefinitionDTO, StorageSlotDefinitionsDTO } from "../proto/common"

export class StorageSlotDefinition {
    constructor(
        public name: string,
        public grid: [number, number],
        public maxWeight: number
    ) { }
}
export type StorageSlotDefinitions = StorageSlotDefinition[]
export function serializeStorageSlotDefinition(stSlDef: StorageSlotDefinition): StorageSlotDefinitionDTO {
    return stSlDef
}
export function deserializeStorageSlotDefinition(stSlDefDTO: StorageSlotDefinitionDTO): StorageSlotDefinition {
    return {
        name: stSlDefDTO.name,
        grid: [stSlDefDTO.grid[0], stSlDefDTO.grid[1]],
        maxWeight: stSlDefDTO.maxWeight
    }
}
export function serializeStorageSlotDefinitions(stSlDefs: StorageSlotDefinitions): StorageSlotDefinitionsDTO {
    return {
        arr: stSlDefs
    }
}
export function deserializeStorageSlotDefinitions(stSlDefsDTO: StorageSlotDefinitionsDTO): StorageSlotDefinitions {
    return stSlDefsDTO.arr.map(stSlDefDTO => {
        return deserializeStorageSlotDefinition(stSlDefDTO)
    })
}