import { Serializable } from "../decorator/serializable.decorator";
import { EquipmentSlotDefinitionDTO } from "../proto/entities";
import { Serializer } from "../serializer";

export class EquipmentSlotDefinition {
    @Serializable()
    clazz = "EquipmentSlotDefinition"

    @Serializable()
    name!: string

    @Serializable()
    allowedEntities!: string[]

    toDTO(): EquipmentSlotDefinitionDTO {
        return Serializer.toDTO(this)
    }

    static fromDTO(dto: EquipmentSlotDefinitionDTO): EquipmentSlotDefinition {
        return Serializer.fromDTO(dto, new EquipmentSlotDefinition())
    }
}
