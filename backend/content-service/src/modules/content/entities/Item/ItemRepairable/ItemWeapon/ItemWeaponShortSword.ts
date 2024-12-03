import { ChildEntity } from "typeorm";
import { ItemWeapon } from "./ItemWeapon";

@ChildEntity()
export class ItemWeaponShortSword extends ItemWeapon {
    idPrefix = "ITEM_WEAPON_SHORT_SWORD"

}
