import { ChildEntity, Column } from "typeorm";
import { Item } from "../Item";
import { Serializable } from "../../../../../decorator/serializable.decorator";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@ChildEntity()
@GQLObjectType({ implements: Item })
export class ItemRepairable extends Item {
    idPrefix = "ITEM_REPAIRABLE";

    @Column({ default: true })
    @GQLField()
    @Serializable()
    repairable!: boolean;

    @Column({ default: 0 })
    @GQLField()
    @Serializable()
    durability!: number;

    @Column({ default: 0 })
    @GQLField()
    @Serializable()
    maxDurability!: number;
}
