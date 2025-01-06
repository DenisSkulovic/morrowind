import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../../ContentBase";
import { ReligionDTO } from "../../../proto/entities";
import { Campaign } from "../../campaign/entities/Campaign";
import { User } from "../../user/entities/User";
import { World } from "../../world/entities/World";
import { Serializable } from "../../../decorator/serializable.decorator";
import { ReligionRitual } from "../../../class/ReligionRitual";
import { ReligionTenet } from "../../../class/ReligionTenet";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";

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
    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: ReligionRitual })
    rituals?: ReligionRitual[];

    /**
     * A list of moral or behavioral principles associated with the religion.
     */
    @Column("jsonb", { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: ReligionTenet })
    tenets?: ReligionTenet[];

    @ManyToOne(() => User, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    world!: World;

    public toDTO(): ReligionDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: ReligionDTO): Religion {
        return Serializer.fromDTO(dto, new Religion());
    }
}
