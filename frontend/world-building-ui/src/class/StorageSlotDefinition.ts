import { StorageSlotDefinitionDTO, StorageSlotDefinitionsDTO } from "../proto/common"
import { FormField } from "../decorator/form-field.decorator"
import { FieldComponentEnum } from "../enum/FieldComponentEnum"
import type { GridSize } from "../dto/content/Slot/StorageSlot"

export class StorageSlotDefinition {
    clazz = "StorageSlotDefinition"

    @FormField({ component: FieldComponentEnum.TEXT_FIELD, label: 'Name', placeholder: 'Enter storage slot name', required: true })
    name: string;

    @FormField({ component: FieldComponentEnum.OBJECT_FIELD, label: 'Grid Size', placeholder: 'Enter grid dimensions', required: true })
    grid: GridSize;

    @FormField({ component: FieldComponentEnum.NUMBER_FIELD, label: 'Max Weight', placeholder: 'Enter maximum weight', required: true })
    maxWeight: number;

    constructor(
        name: string,
        grid: GridSize,
        maxWeight: number
    ) {
        this.name = name;
        this.grid = grid;
        this.maxWeight = maxWeight;
    }

    toDTO(): StorageSlotDefinitionDTO {
        return serializeStorageSlotDefinition(this)
    }
    static fromDTO(dto: StorageSlotDefinitionDTO): StorageSlotDefinition {
        return deserializeStorageSlotDefinition(dto)
    }
}
export type StorageSlotDefinitions = StorageSlotDefinition[]
export function serializeStorageSlotDefinition(stSlDef: StorageSlotDefinition): StorageSlotDefinitionDTO {
    return {
        name: stSlDef.name,
        grid: [stSlDef.grid.width, stSlDef.grid.height],
        maxWeight: stSlDef.maxWeight,
        clazz: stSlDef.clazz
    }
}
export function deserializeStorageSlotDefinition(stSlDefDTO: StorageSlotDefinitionDTO): StorageSlotDefinition {
    return new StorageSlotDefinition(
        stSlDefDTO.name,
        { width: stSlDefDTO.grid[0], height: stSlDefDTO.grid[1] },
        stSlDefDTO.maxWeight
    )
}
export function serializeStorageSlotDefinitions(stSlDefs: StorageSlotDefinitions): StorageSlotDefinitionsDTO {
    return {
        arr: stSlDefs.map(def => def.toDTO())
    }
}
export function deserializeStorageSlotDefinitions(stSlDefsDTO: StorageSlotDefinitionsDTO): StorageSlotDefinitions {
    return stSlDefsDTO.arr.map(stSlDefDTO => {
        return deserializeStorageSlotDefinition(stSlDefDTO)
    })
}