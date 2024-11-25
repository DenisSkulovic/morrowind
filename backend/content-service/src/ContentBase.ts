import { BaseEntity, BeforeInsert, Column, PrimaryColumn } from "typeorm";
import { randomUUID } from "crypto";
import { Campaign } from "./entities/Campaign";
import { User } from "./entities/User";
import { World } from "./entities/World";

export abstract class ContentBase extends BaseEntity {

    id?: string

    @Column({ type: "varchar", length: 255, nullable: true })
    blueprint_id!: string;


    @Column({ type: "json", nullable: true })
    metadata?: Record<string, any>;

    // TODO make an automatic assignment based on specific class name
    @Column()
    targetEntity!: string

    stackable = false
    maxQuantity = 1

    user!: User;
    campaign?: Campaign;
    world!: World;
}
