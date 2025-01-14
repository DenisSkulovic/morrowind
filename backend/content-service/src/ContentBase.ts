import { BaseEntity, BeforeInsert, BeforeUpdate, Column } from "typeorm";
import { randomUUID } from "crypto";
import { Campaign } from "./modules/campaign/entities/Campaign";
import { User } from "./modules/user/entities/User";
import { World } from "./modules/world/entities/World";
import { Serializable } from "./decorator/serializable.decorator";
import { SerializeStrategyEnum } from "./serializer";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';
import { SearchQuery } from "./class/search/grpc/SearchQuery";
import { Context } from "./class/Context";
import { LooseObject } from "./types";

export interface ContentBaseStatic<T extends ContentBase> {
    new(): T; // content base constructor
    build(obj: LooseObject): T;
    search(filter: SearchQuery, context: Context): Promise<T[]>;
}

@GQLObjectType()
export abstract class ContentBase extends BaseEntity {

    @GQLField(() => GQLID)
    id?: string

    @GQLField()
    name!: string

    @GQLField(() => GQLID, { nullable: true })
    idPrefix?: string

    @GQLField({ nullable: true })
    type?: string

    @BeforeInsert()
    generateId() {
        if (!this.id) this.id = `${this.idPrefix}_${randomUUID().replace(/-/g, "")}`;
    }

    @Column({ type: "varchar", length: 255, nullable: true })
    @GQLField(() => GQLID, { nullable: true })
    @Serializable()
    blueprintId!: string;

    @Column({ type: "timestamp", nullable: true })
    @GQLField(() => Date, { nullable: true })
    @Serializable({ strategy: SerializeStrategyEnum.DATE })
    createdAt?: Date;

    @Column({ type: "json", nullable: true })
    @GQLField(() => JSON, { nullable: true })
    @Serializable()
    metadata?: { [key: string]: string };

    @Column({ name: "targetEntity", type: "varchar" })
    @GQLField()
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
