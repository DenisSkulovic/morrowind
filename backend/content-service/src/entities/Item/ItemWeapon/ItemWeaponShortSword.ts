import { ChildEntity } from "typeorm";
import { ItemWeapon } from "./ItemWeapon";

@ChildEntity()
export class ItemWeaponShortSword extends ItemWeapon {
    id_prefix = "ITEM_WEAPON_SHORT_SWORD"

}
