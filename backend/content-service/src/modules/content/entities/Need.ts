import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { NeedDTO, NeedLayerEnumDTO, NeedTypeEnumDTO } from "../../../proto/common";
import { Context } from "../../../types";
import { NeedTypeEnum, NeedLayerEnum } from "../../../common/enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../common/enum/util";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serializer";

@Entity()
export class Need extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    id_prefix = "NEED";

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
    @Serializable({
        serialize: (i) => serializeEnum(NeedTypeEnum, NeedTypeEnumDTO, i),
        deserialize: (i) => deserializeEnum(NeedTypeEnumDTO, NeedTypeEnum, i)
    })
    type!: NeedTypeEnum; // "dynamic", "threshold", "external".

    /**
     * Need layer according to Maslow pyramid
     */
    @Column({ type: "enum", enum: Object.values(NeedLayerEnum) })
    @Serializable({
        serialize: (i) => serializeEnum(NeedLayerEnum, NeedLayerEnumDTO, i),
        deserialize: (i) => deserializeEnum(NeedLayerEnumDTO, NeedLayerEnum, i)
    })
    layer!: NeedLayerEnum

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: 'id' })
    world!: World;

    public toDTO(): NeedDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: NeedDTO): Need {
        const need = new Need();
        return Serializer.fromDTO(dto, need);
    }
}
