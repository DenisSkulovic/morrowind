import { Serializable } from "../decorator/serializable.decorator";
import { ItemRequirementTypeEnum } from "../enum/ItemRequirementTypeEnum";
import { ItemRequirementDTO, ItemRequirementTypeEnumDTO } from "../proto/entities";
import { Serializer, SerializeStrategyEnum } from "../serializer";


export class ItemRequirement {
    @Serializable()
    clazz = "ItemRequirement"

    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: ItemRequirementTypeEnum, protoEnum: ItemRequirementTypeEnumDTO })
    type!: ItemRequirementTypeEnum

    @Serializable()
    name!: string

    @Serializable()
    number!: number

    toDTO(): ItemRequirementDTO {
        return Serializer.toDTO(this)
    }
    static fromDTO(dto: ItemRequirementDTO): ItemRequirement {
        return Serializer.fromDTO(dto, new ItemRequirement())
    }
};