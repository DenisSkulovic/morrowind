import { Entity, PrimaryColumn, Column, ManyToOne, PrimaryGeneratedColumn, BeforeInsert } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";
import { BlueprintSetCombinator } from "../../class/blueprint_id_and_prob";

@Entity()
export class ItemSet extends ContentBase {
    @PrimaryColumn()
    id!: string;
    
    @BeforeInsert()
    generateId() {
        if (this.targetEntity) this.id = this.blueprint_id
        else this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "ITEM_SET"
    
    @Column({ type: "jsonb" })
    set!: BlueprintSetCombinator; // JSON structure for the set, stored as jsonb

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}
