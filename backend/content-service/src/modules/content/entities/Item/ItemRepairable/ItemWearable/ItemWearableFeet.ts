import { ChildEntity } from "typeorm";
import { ItemWearable } from "./ItemWearable";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@ChildEntity()
@GQLObjectType({ implements: ItemWearable })
export class ItemWearableFeet extends ItemWearable {
    idPrefix = "ITEM_WEARABLE_FEET"

}
