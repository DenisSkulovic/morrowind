import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { EffectTypeEnumDTO, StatusDTO } from "../../../proto/common";
import { Context } from "../../../types";
import { EffectTypeEnum } from "../../../common/enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../common/enum/util";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serializer";


@Entity()
export class Status extends ContentBase {

    @PrimaryColumn()
    @Serializable()
    id!: string;

    id_prefix = "STATUS";

    @Column({ type: "varchar", length: 255 })
    @Serializable()
    name!: string;

    @Column({ type: "text" })
    @Serializable()
    description!: string;

    @Column({ type: "enum", enum: Object.values(EffectTypeEnum) })
    @Serializable({
        serialize: (i) => serializeEnum(EffectTypeEnum, EffectTypeEnumDTO, i),
        deserialize: (i) => deserializeEnum(EffectTypeEnumDTO, EffectTypeEnum, i)
    })
    type!: EffectTypeEnum;

    @Column("simple-array", { nullable: true })
    @Serializable()
    effects!: string[]; // Links to associated Effect IDs.

    @Column({ nullable: true })
    @Serializable()
    duration!: number; // Duration in ticks (0 for permanent).

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: 'id' })
    world!: World;

    public toDTO(): StatusDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: StatusDTO): Status {
        const status = new Status();
        return Serializer.fromDTO(dto, status);
    }
}
