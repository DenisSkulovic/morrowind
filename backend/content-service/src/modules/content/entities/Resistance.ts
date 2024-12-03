import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { EffectTypeEnumDTO, ResistanceDTO } from "../../../proto/common";
import { Context } from "../../../types";
import { EffectTypeEnum } from "../../../common/enum/entityEnums";
import { serializeEnum, deserializeEnum } from "../../../common/enum/util";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serializer";

@Entity()
export class Resistance extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "RESISTANCE";

    @Column({ type: "varchar", length: 255 })
    @Serializable()
    name!: string;

    @Column({ type: "enum", enum: Object.values(EffectTypeEnum) })
    @Serializable({
        serialize: (i) => serializeEnum(EffectTypeEnum, EffectTypeEnumDTO, i),
        deserialize: (i) => deserializeEnum(EffectTypeEnumDTO, EffectTypeEnum, i)
    })
    effectType!: string; // Matches Effect.type

    @Column({ nullable: true })
    @Serializable()
    targetEffect?: string; // "fire", "poison", "disease".

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: 'id' })
    world!: World;


    public toDTO(): ResistanceDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: ResistanceDTO): Resistance {
        const resistance = new Resistance();
        return Serializer.fromDTO(dto, resistance);
    }
}
