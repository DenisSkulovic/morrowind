import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, BeforeInsert, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";
import { ResistanceDTO } from "../../proto/common";

@Entity()
export class Resistance extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    id_prefix = "RESISTANCE";

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({ type: "enum", enum: ["ELEMENTAL", "STATUS", "DISEASE", "MAGIC"]})
    effectType!: string; // Matches Effect.type

    @Column({ nullable: true })
    targetEffect?: string; // "fire", "poison", "disease".

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;


    public toDTO(): ResistanceDTO {
        return {
            id: this.id,
            name: this.name,
            effectType: this.effectType,
            targetEffect: this.targetEffect,
            user: this.user?.toDTO(),
            campaign: this.campaign?.toDTO(),
            world: this.world?.toDTO(),
            targetEntity: this.targetEntity
        };
    }

    public static fromDTO(dto: ResistanceDTO, user: User, world: World, campaign?: Campaign): Resistance {
        const resistance = new Resistance();
        resistance.id = dto.id;
        resistance.name = dto.name;
        resistance.effectType = dto.effectType;
        resistance.targetEffect = dto.targetEffect;
        resistance.user = user;
        resistance.campaign = campaign;
        resistance.world = world;
        resistance.targetEntity = dto.targetEntity
        return resistance;
    }
}
