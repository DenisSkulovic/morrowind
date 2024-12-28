import { FactStatusEnum } from "../common/enum/entityEnums";
import { Serializable } from "../decorator/serializable.decorator";
import { FactStatusDTO, FactStatusEnumDTO } from "../proto/common";
import { Serializer, SerializeStrategyEnum } from "../serializer";

export class FactStatus {
    @Serializable()
    clazz = "FactStatus"

    @Serializable()
    factId!: string

    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: FactStatusEnum, protoEnum: FactStatusEnumDTO })
    status!: FactStatusEnum

    toDTO() {
        return Serializer.toDTO(this)
    }

    static fromDTO(dto: FactStatusDTO): FactStatus {
        return Serializer.fromDTO(dto, new FactStatus())
    }
}
