import { BeforeInsert, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";
import { EffectTypeEnum, StatusDTO } from "../../proto/common";


@Entity()
export class Status extends ContentBase {

    
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "STATUS";

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({ type: "text" })
    description!: string;

    @Column({ type: "enum", enum: Object.values(EffectTypeEnum)})
    type!: string;

    @Column("jsonb", { nullable: true })
    effects!: string[]; // Links to associated Effect IDs.

    @Column({ nullable: true })
    duration!: number; // Duration in ticks (0 for permanent).

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;

    public toDTO(): StatusDTO {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            type: this.type,
            effects: this.effects,
            duration: this.duration,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }

    public static fromDTO(dto: StatusDTO, user: User, world: World, campaign?: Campaign): Status {
        const status = new Status();
        status.id = dto.id;
        status.name = dto.name;
        status.description = dto.description;
        status.type = dto.type;
        status.effects = dto.effects || [];
        status.duration = dto.duration;
        status.user = user;
        status.campaign = campaign;
        status.world = world;
        status.targetEntity = dto.targetEntity
        return status;
    }
}
