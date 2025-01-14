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
export class ItemConsumable extends Item {
    idPrefix = "ITEM_CONSUMABLE";

    @Column({ default: true })
    @Serializable()
    @GQLField()
    consumable!: boolean;

    @Column({ default: true })
    @Serializable()
    @GQLField()
    stackable!: boolean;

}
