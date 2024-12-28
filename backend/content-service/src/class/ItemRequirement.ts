import { Serializable } from "../decorator/serializable.decorator";
import { ItemRequirementDTO, ItemRequirementsDTO } from "../proto/common";
import { Serializer } from "../serializer";


export class ItemRequirement {
    @Serializable()
    clazz = "ItemRequirement"

    @Serializable()
    type!: string

    @Serializable()
    name!: string

    @Serializable()
    number!: number

    @Serializable()
    flag!: boolean

    toDTO(): ItemRequirementDTO {
        return Serializer.toDTO(this)
    }
    static fromDTO(dto: ItemRequirementDTO): ItemRequirement {
        return Serializer.fromDTO(dto, new ItemRequirement())
    }
};