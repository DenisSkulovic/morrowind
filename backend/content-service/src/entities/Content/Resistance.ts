import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, BeforeInsert, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";

@Entity()
export class Resistance extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    @BeforeInsert()
    generateId() {
        if (this.targetEntity) this.id = this.blueprint_id
        else this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "RESISTANCE";

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({ type: "enum", enum: ["ELEMENTAL", "STATUS", "DISEASE"]})
    effectType!: string; // Matches Effect.type

    @Column({ nullable: true })
    targetEffect?: string; // "fire", "poison", "disease".

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}
