import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { NeedDTO, NeedLayerEnumDTO, NeedTypeEnumDTO } from "../../../proto/entities";
import { NeedTypeEnum, NeedLayerEnum } from "../../../common/enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../common/enum/util";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";

@Entity()
export class Need extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "NEED";

    /**
     * Name of the need (e.g., Hunger, Security, Financial Stability).
     */
    @Column({ type: "varchar", length: 255 })
    @Serializable()
    name!: string;

    /**
     * Description of the need.
     */
    @Column({ type: "text" })
    @Serializable()
    description!: string;

    /**
     * The type of need (e.g., dynamic, threshold, external).
     * Hunger is a dynamic need. Safety is an external need as it is based on the world around the NPC. 
     */
    @Column({ type: "enum", enum: Object.values(NeedTypeEnum) })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: NeedTypeEnum, protoEnum: NeedTypeEnumDTO })
    type!: NeedTypeEnum; // "dynamic", "threshold", "external".

    /**
     * Need layer according to Maslow pyramid
     */
    @Column({ type: "enum", enum: Object.values(NeedLayerEnum) })
    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: NeedLayerEnum, protoEnum: NeedLayerEnumDTO })
    layer!: NeedLayerEnum

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): NeedDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: NeedDTO): Need {
        return Serializer.fromDTO(dto, new Need());
    }
}
