import { Serializable } from "../decorator/serializable.decorator"
import { StorageSlotDefinitionDTO } from "../proto/common"
import { Serializer, SerializeStrategyEnum } from "../serializer"
import { GridSize } from "./GridSize"

export class StorageSlotDefinition {
    @Serializable()
    clazz = "StorageSlotDefinition"

    @Serializable()
    name!: string

    @Serializable({ strategy: SerializeStrategyEnum.FULL })
    grid!: GridSize

    @Serializable()
    maxWeight!: number

    toDTO(): StorageSlotDefinitionDTO {
        return Serializer.toDTO(this)
    }
    static fromDTO(dto: StorageSlotDefinitionDTO): StorageSlotDefinition {
        return Serializer.fromDTO(dto, new StorageSlotDefinition())
    }
}
