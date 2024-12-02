import { StorageSlotDefinitionDTO } from "../proto/common"

export class StorageSlotDefinition {
    constructor(
        public name: string,
        public grid: [number, number],
        public maxWeight: number
    ) { }
}
export type StorageSlotDefinitions = StorageSlotDefinition[]
export function serializeStorageSlotDefinition(stSlDef: StorageSlotDefinition): StorageSlotDefinitionDTO {
    return {

    }
}
export function deserializeStorageSlotDefinition(stSlDef: StorageSlotDefinition): StorageSlotDefinitionDTO {
    return {

    }
}