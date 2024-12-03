import { ChildEntity, Column, ManyToOne, OneToMany } from "typeorm";
import { ItemWeapon } from "./ItemWeapon";

@ChildEntity()
export class ItemWeaponRanged extends ItemWeapon {
    idPrefix = "ITEM_WEAPON_RANGED"

}
