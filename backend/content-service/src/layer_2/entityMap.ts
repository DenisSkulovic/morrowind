import { ContentBase } from "../entities/ContentBase";
import { Item } from "../entities/Item/Item";
import { ItemAlcohol } from "../entities/Item/ItemAlcohol";
import { ItemWeapon } from "../entities/Item/ItemWeapon/ItemWeapon";
import { ItemWeaponShortSword } from "../entities/Item/ItemWeapon/ItemWeaponShortSword";
import { ItemWeaponLongSword } from "../entities/Item/ItemWeapon/ItemWeaponLongSword";
import { ItemClothing } from "../entities/Item/ItemClothing/ItemClothing";
import { ItemClothingCuirass } from "../entities/Item/ItemClothing/ItemClothingCuirass";
import { ItemClothingHelmet } from "../entities/Item/ItemClothing/ItemClothingHelmet";
import { ItemMisc } from "../entities/Item/ItemMisc/ItemMisc";
import { ItemMiscDrake } from "../entities/Item/ItemMisc/ItemMiscDrake";

export type EntityConstructor<T> = new () => T;

export const entityMap: Record<string, EntityConstructor<ContentBase>> = {
    "Item": Item,
    "ItemAlcohol": ItemAlcohol,
    "ItemWeapon": ItemWeapon,
    "ItemWeaponShortSword": ItemWeaponShortSword,
    "ItemWeaponLongSword": ItemWeaponLongSword,

    "ItemClothing": ItemClothing,
    "ItemClothingCuirass": ItemClothingCuirass,
    "ItemClothingHelmet": ItemClothingHelmet,
    
    "ItemMisc": ItemMisc,
    "ItemMiscDrake": ItemMiscDrake,
};