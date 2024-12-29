import { BaseEntity, BeforeInsert, BeforeUpdate, Column } from "typeorm";
import { randomUUID } from "crypto";
import { Campaign } from "./modules/campaign/entities/Campaign";
import { User } from "./modules/user/entities/User";
import { World } from "./modules/world/entities/World";
import { Serializable } from "./decorator/serializable.decorator";
import { SerializeStrategyEnum } from "./serializer";

export abstract class ContentBase extends BaseEntity {

    id?: string
    name!: string
    idPrefix?: string
    type?: string

    @BeforeInsert()
    generateId() {
        if (!this.id) this.id = `${this.idPrefix}_${randomUUID().replace(/-/g, "")}`;
    }

    @Column({ type: "varchar", length: 255, nullable: true })
    @Serializable()
    blueprintId!: string;

    @Column({ type: "timestamp", nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.DATE })
    createdAt?: Date;

    @Column({ type: "json", nullable: true })
    @Serializable()
    metadata?: { [key: string]: string };

    @Column({ name: "targetEntity", type: "varchar" })
    @Serializable()
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
