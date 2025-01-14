import { ChildEntity } from "typeorm";
import { ItemDrinkable } from "./ItemDrinkable";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@ChildEntity()
@GQLObjectType({ implements: ItemDrinkable })
export class ItemAlcohol extends ItemDrinkable {
    idPrefix = "ITEM_ALCOHOL";

}
