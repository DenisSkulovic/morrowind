import { Entity, TableInheritance, Column, OneToMany, ManyToOne, PrimaryGeneratedColumn, BeforeInsert, PrimaryColumn } from "typeorm";
import { ContentBase } from "../../ContentBase";
import { Need } from "./Need";
import { Campaign } from "../Campaign";
import { User } from "../User";
import { World } from "../World";
import { randomUUID } from "crypto";

// TODO somehow I need a way to connect races to needs, but also add needs through other ways, like an addiction. Also, a layer of modifiers, so that I can adjust the rate of decay and thresholds with %.

@Entity()
export class Race extends ContentBase {
    @PrimaryColumn()
    id!: string;

    @BeforeInsert()
    generateId() {
        if (this.targetEntity) this.id = this.blueprint_id
        else this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }
    id_prefix = "RACE"

    @Column({ type: "varchar", length: 255 })
    name!: string;

    @Column("jsonb")
    equipment_slot_definitions!: { name: string, allowedEntities: string[] }[]

    @ManyToOne(() => User, { nullable: true })
    user!: User;

    @ManyToOne(() => Campaign, { nullable: true })
    campaign?: Campaign;

    @ManyToOne(() => World, { nullable: true })
    world!: World;
}
