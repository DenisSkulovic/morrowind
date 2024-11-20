// Moods can be "Energetic", "Sad", "Reclusive", "Talkative", or whatever.
// The mood is a result of personality traits and fulfillment of needs(?).
// A depressed person will most likely be always in a bad mood.

import { TableInheritance, Entity, Column, ManyToOne, PrimaryGeneratedColumn, BeforeInsert, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";

@Entity()
export class Mood extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    @BeforeInsert()
    generateId() {
        if (this.targetEntity) this.id = this.blueprint_id
        else this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "MOOD";

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column({ type: "text" })
    description!: string;

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}
