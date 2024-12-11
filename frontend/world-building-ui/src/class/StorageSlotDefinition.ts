import { common } from "../proto/common";
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

    toDTO(): common.StorageSlotDefinitionDTO {
        return serializeStorageSlotDefinition(this)
    }
    static fromDTO(dto: common.StorageSlotDefinitionDTO): StorageSlotDefinition {
        return deserializeStorageSlotDefinition(dto)
    }
}
export type StorageSlotDefinitions = StorageSlotDefinition[]

export function serializeStorageSlotDefinition(stSlDef: StorageSlotDefinition): common.StorageSlotDefinitionDTO {
    const dto = new common.StorageSlotDefinitionDTO();
    dto.name = stSlDef.name;
    dto.clazz = stSlDef.clazz;
    dto.maxWeight = stSlDef.maxWeight;
    dto.grid = [stSlDef.grid.width, stSlDef.grid.height];
    return dto;
}

export function deserializeStorageSlotDefinition(stSlDefDTO: common.StorageSlotDefinitionDTO): StorageSlotDefinition {
    return new StorageSlotDefinition(
        stSlDefDTO.name,
        { width: stSlDefDTO.grid[0], height: stSlDefDTO.grid[1] },
        stSlDefDTO.maxWeight
    )
}

export function serializeStorageSlotDefinitions(stSlDefs: StorageSlotDefinitions): common.StorageSlotDefinitionsDTO {
    const dto = new common.StorageSlotDefinitionsDTO();
    dto.arr = stSlDefs.map(def => def.toDTO());
    return dto;
}

export function deserializeStorageSlotDefinitions(stSlDefsDTO: common.StorageSlotDefinitionsDTO): StorageSlotDefinitions {
    return stSlDefsDTO.arr.map(stSlDefDTO => {
        return deserializeStorageSlotDefinition(stSlDefDTO)
    })
}