import { EquipmentSlotDefinitionDTO, EquipmentSlotDefinitionsDTO } from "../proto/common";

export class EquipmentSlotDefinition {
    clazz = "EquipmentSlotDefinition"
    constructor(
        public name: string,
        public allowedEntities: string[]
    ) { }
    toDTO(): EquipmentSlotDefinitionDTO {
        return serializeEquipmentSlotDefinition(this)
    }
    static fromDTO(dto: EquipmentSlotDefinitionDTO): EquipmentSlotDefinition {
        return deserializeEquipmentSlotDefinition(dto)
    }
}
export type EquipmentSlotDefinitions = EquipmentSlotDefinition[]

export function serializeEquipmentSlotDefinition(itSlDefinition: EquipmentSlotDefinition): EquipmentSlotDefinitionDTO {
    return itSlDefinition
}
export function deserializeEquipmentSlotDefinition(itSlDefinitionDTO: EquipmentSlotDefinitionDTO): EquipmentSlotDefinition {
    return new EquipmentSlotDefinition(
        itSlDefinitionDTO.name,
        itSlDefinitionDTO.allowedEntities
    )
}

export function serializeEquipmentSlotDefinitions(itSlDefinitions: EquipmentSlotDefinitions): EquipmentSlotDefinitionsDTO {
    return { arr: itSlDefinitions.map((def) => serializeEquipmentSlotDefinition(def)) }
}
export function deserializeEquipmentSlotDefinitions(itSlDefinitionsDTO: EquipmentSlotDefinitionsDTO): EquipmentSlotDefinitions {
    return itSlDefinitionsDTO.arr.map((defDTO) => deserializeEquipmentSlotDefinition(defDTO))
}