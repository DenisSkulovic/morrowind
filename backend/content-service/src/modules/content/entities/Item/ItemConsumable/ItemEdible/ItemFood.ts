import { ChildEntity, Column } from "typeorm";
import { ItemConsumable } from "../ItemConsumable";
import { Serializable } from "../../../../../../decorator/serializable.decorator";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@ChildEntity()
@GQLObjectType({ implements: ItemConsumable })
export class ItemFood extends ItemConsumable {
    idPrefix = "ITEM_FOOD";

    @Column({ default: 0 })
    @Serializable()
    @GQLField()
    nutrition!: number; // Amount of hunger satisfied.

    @Column({ default: 0 })
    @Serializable()
    @GQLField()
    spoilage!: number; // Time in hours before the item spoils.
}
