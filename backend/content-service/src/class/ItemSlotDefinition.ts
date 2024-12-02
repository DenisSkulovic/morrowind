import { EquipmentSlotDefinitionDTO, EquipmentSlotDefinitionsDTO } from "../proto/common";

export class EquipmentSlotDefinition {
    constructor(
        public name: string,
        public allowedEntities: string[]
    ) { }
}
export type EquipmentSlotDefinitions = EquipmentSlotDefinition[]

export function serializeEquipmentSlotDefinition(itSlDefinition: EquipmentSlotDefinition): EquipmentSlotDefinitionDTO {
    return itSlDefinition
}
export function deserializeEquipmentSlotDefinition(itSlDefinitionDTO: EquipmentSlotDefinitionDTO): EquipmentSlotDefinition {
    return itSlDefinitionDTO
}

export function serializeEquipmentSlotDefinitions(itSlDefinitions: EquipmentSlotDefinitions): EquipmentSlotDefinitionsDTO {
    return { arr: itSlDefinitions.map((def) => serializeEquipmentSlotDefinition(def)) }
}
export function deserializeEquipmentSlotDefinitions(itSlDefinitionsDTO: EquipmentSlotDefinitionsDTO): EquipmentSlotDefinitions {
    return itSlDefinitionsDTO.arr.map((defDTO) => deserializeEquipmentSlotDefinition(defDTO))
}