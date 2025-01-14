import { ChildEntity } from "typeorm";
import { Item } from "../Item";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@ChildEntity()
@GQLObjectType({ implements: Item })
export class ItemMisc extends Item {
    idPrefix = "ITEM_MISC";

}
