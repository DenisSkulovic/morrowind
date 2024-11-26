import { BaseEntity, BeforeInsert, BeforeUpdate, Column, PrimaryColumn } from "typeorm";
import { randomUUID } from "crypto";
import { Campaign } from "./entities/Campaign";
import { User } from "./entities/User";
import { World } from "./entities/World";

export abstract class ContentBase extends BaseEntity {

    id?: string
    id_prefix?: string

    @BeforeInsert()
    generateId() {
        if (!this.id) this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }

    @Column({ type: "varchar", length: 255, nullable: true })
    blueprint_id!: string;


    @Column({ type: "json", nullable: true })
    metadata?: Record<string, any>;

    @Column({ name: "targetEntity", type: "varchar" })
    targetEntity!: string;

    @BeforeInsert()
    @BeforeUpdate()
    private setTargetEntity(): void {
        this.targetEntity = this.constructor.name;
    }

    stackable = false
    maxQuantity = 1

    user!: User;
    campaign?: Campaign;
    world!: World;
}
