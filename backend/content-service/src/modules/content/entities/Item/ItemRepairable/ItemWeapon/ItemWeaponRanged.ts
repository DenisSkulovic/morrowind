import { ChildEntity } from "typeorm";
import { ItemWeapon } from "./ItemWeapon";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@ChildEntity()
@GQLObjectType({ implements: ItemWeapon })
export class ItemWeaponRanged extends ItemWeapon {
    idPrefix = "ITEM_WEAPON_RANGED"

}
