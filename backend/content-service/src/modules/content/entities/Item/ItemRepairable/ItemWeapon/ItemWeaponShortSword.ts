import { ChildEntity } from "typeorm";
import { ItemWeapon } from "./ItemWeapon";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';

@ChildEntity()
@GQLObjectType({ implements: ItemWeapon })
export class ItemWeaponShortSword extends ItemWeapon {
    idPrefix = "ITEM_WEAPON_SHORT_SWORD"

}
