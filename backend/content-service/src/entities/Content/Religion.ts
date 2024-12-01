import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { ReligionDTO } from "../../proto/common";
import { Context } from "../../types";

@Entity()
export class Religion extends ContentBase {

    @PrimaryColumn()
    id!: string;

    id_prefix = "RELIGION";

    /**
     * The name of the religion.
     */
    @Column({ type: "varchar", length: 255 })
    name!: string;

    /**
     * A description of the religion, outlining its beliefs and core philosophy.
     */
    @Column({ type: "text" })
    description!: string;

    /**
     * A list of common rituals or practices for this religion.
     */
    @Column("jsonb", { nullable: true })
    rituals?: { name: string; description: string }[];

    /**
     * A list of moral or behavioral principles associated with the religion.
     */
    @Column("jsonb", { nullable: true })
    tenets?: { name: string; description: string }[];

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public static toDTO(religion: Religion): ReligionDTO {
        return {
            id: religion.id,
            blueprintId: religion.blueprint_id,
            name: religion.name,
            description: religion.description,
            rituals: religion.rituals ? { arr: religion.rituals } : undefined,
            tenets: religion.tenets ? { arr: religion.tenets } : undefined,
            user: Religion.serializeEntity(religion.user, i => User.toDTO(i)),
            campaign: Religion.serializeEntity(religion.campaign, i => Campaign.toDTO(i)),
            world: Religion.serializeEntity(religion.world, i => World.toDTO(i)),
            targetEntity: religion.targetEntity
        };
    }

    public static fromDTO(dto: ReligionDTO, context: Context): Religion {
        const religion = new Religion();
        religion.id = dto.id;
        religion.name = dto.name;
        religion.description = dto.description;
        religion.rituals = dto.rituals?.arr || [];
        religion.tenets = dto.tenets?.arr || [];
        religion.user = context.user;
        religion.campaign = context.campaign;
        religion.world = context.world;
        religion.targetEntity = dto.targetEntity
        return religion;
    }
}
