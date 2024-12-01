import { BeforeInsert, BeforeUpdate, Column } from "typeorm";
import { randomUUID } from "crypto";
import { Campaign } from "./entities/Campaign";
import { User } from "./entities/User";
import { World } from "./entities/World";
import { Base } from "./Base";

export abstract class ContentBase extends Base {

    id?: string
    id_prefix?: string
    type?: string

    @BeforeInsert()
    generateId() {
        if (!this.id) this.id = `${this.id_prefix}_${randomUUID().replace(/-/g, "")}`;
    }

    @Column({ type: "varchar", length: 255, nullable: true })
    blueprint_id!: string;


    @Column({ type: "json", nullable: true })
    metadata?: { [key: string]: string };

    @Column({ name: "targetEntity", type: "varchar" })
    targetEntity!: string;

    @BeforeInsert()
    @BeforeUpdate()
    private setTargetEntity(): void {
        this.targetEntity = this.constructor.name;
    }

    stackable = false
    maxQuantity = 1

    user!: Promise<User> | User;
    campaign?: Promise<Campaign> | Campaign;
    world!: Promise<World> | World;
}
