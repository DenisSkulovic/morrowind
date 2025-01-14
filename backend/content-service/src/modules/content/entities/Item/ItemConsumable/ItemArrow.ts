import { ChildEntity, Column } from "typeorm";
import { ItemConsumable } from "./ItemConsumable";
import { Serializable } from "../../../../../decorator/serializable.decorator";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@ChildEntity()
@GQLObjectType({ implements: ItemConsumable })
export class ItemArrow extends ItemConsumable {
    idPrefix = "ITEM_ARROW";

    @Column({ default: null, nullable: true })
    @Serializable()
    @GQLField()
    damagePierce!: string;

    @Column({ default: true })
    @Serializable()
    @GQLField()
    stackable!: boolean;

}