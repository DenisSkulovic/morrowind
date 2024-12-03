import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { ReligionDTO } from "../../../proto/common";
import { Context } from "../../../types";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { ReligionRituals, deserializeReligionRituals, serializeReligionRituals } from "../../../class/ReligionRitual";
import { ReligionTenets, deserializeReligionTenets, serializeReligionTenets } from "../../../class/ReligionTenet";
import { Serializer } from "../../../serializer";

@Entity()
export class Religion extends ContentBase {

    @PrimaryColumn()
    @Serializable()
    id!: string;

    idPrefix = "RELIGION";

    /**
     * The name of the religion.
     */
    @Column({ type: "varchar", length: 255 })
    @Serializable()
    name!: string;

    /**
     * A description of the religion, outlining its beliefs and core philosophy.
     */
    @Column({ type: "text" })
    @Serializable()
    description!: string;

    /**
     * A list of common rituals or practices for this religion.
     */
    @Column("jsonb", { nullable: true })
    @Serializable({
        serialize: serializeReligionRituals,
        deserialize: deserializeReligionRituals
    })
    rituals?: ReligionRituals;

    /**
     * A list of moral or behavioral principles associated with the religion.
     */
    @Column("jsonb", { nullable: true })
    @Serializable({
        serialize: serializeReligionTenets,
        deserialize: deserializeReligionTenets
    })
    tenets?: ReligionTenets;

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: 'id' })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: 'id' })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: 'id' })
    world!: World;

    public toDTO(): ReligionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: ReligionDTO): Religion {
        const religion = new Religion();
        return Serializer.fromDTO(dto, religion);
    }
}
