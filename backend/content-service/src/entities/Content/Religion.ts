import { Entity, Column, ManyToOne, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { ReligionDTO } from "../../proto/common";

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
    @Column({type: "text"})
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

    public toDTO(): ReligionDTO {
        return {
            id: this.id,
            blueprintId: this.blueprint_id,
            name: this.name,
            description: this.description,
            rituals: this.rituals ? { religionRituals: this.rituals } : undefined,
            tenets: this.tenets ? { religionTenets: this.tenets } : undefined,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }

    public static fromDTO(dto: ReligionDTO, user: User, world: World, campaign?: Campaign): Religion {
        const religion = new Religion();
        religion.id = dto.id;
        religion.name = dto.name;
        religion.description = dto.description;
        religion.rituals = dto.rituals?.religionRituals || [];
        religion.tenets = dto.tenets?.religionTenets || [];
        religion.user = user;
        religion.campaign = campaign;
        religion.world = world;
        religion.targetEntity = dto.targetEntity
        return religion;
    }
}
