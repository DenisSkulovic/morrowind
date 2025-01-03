import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { BirthsignDTO } from "../../../proto/common";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";

@Entity()
export class Birthsign extends ContentBase {
    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "BIRTHSIGN"

    @Column({ type: "varchar", length: 50 })
    @Serializable()
    name!: string

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): BirthsignDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: BirthsignDTO): Birthsign {
        return Serializer.fromDTO(dto, new Birthsign());
    }
}