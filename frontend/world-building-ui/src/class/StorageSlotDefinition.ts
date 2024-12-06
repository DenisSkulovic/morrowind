import { StorageSlotDefinitionDTO, StorageSlotDefinitionsDTO } from "../proto/common"

export class StorageSlotDefinition {
    clazz = "StorageSlotDefinition"
    constructor(
        public name: string,
        public grid: [number, number],
        public maxWeight: number
    ) { }
    toDTO(): StorageSlotDefinitionDTO {
        return serializeStorageSlotDefinition(this)
    }
    static fromDTO(dto: StorageSlotDefinitionDTO): StorageSlotDefinition {
        return deserializeStorageSlotDefinition(dto)
    }
}
export type StorageSlotDefinitions = StorageSlotDefinition[]
export function serializeStorageSlotDefinition(stSlDef: StorageSlotDefinition): StorageSlotDefinitionDTO {
    return stSlDef
}
export function deserializeStorageSlotDefinition(stSlDefDTO: StorageSlotDefinitionDTO): StorageSlotDefinition {
    return new StorageSlotDefinition(
        stSlDefDTO.name,
        [stSlDefDTO.grid[0], stSlDefDTO.grid[1]],
        stSlDefDTO.maxWeight
    )
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