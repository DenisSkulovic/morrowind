import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { BirthsignDTO } from "../../../proto/common";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer } from "../../../serializer";

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
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: 'id' })
    world!: World;

    public toDTO(): BirthsignDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: BirthsignDTO): Birthsign {
        const birthsign = new Birthsign();
        return Serializer.fromDTO(dto, birthsign);
    }
}