import { ChildEntity, Column, ManyToOne, OneToMany } from "typeorm";
import { ItemWeapon } from "./ItemWeapon";

@ChildEntity()
export class ItemWeaponLongSword extends ItemWeapon {
    id_prefix = "ITEM_WEAPON_LONG_SWORD"

}
