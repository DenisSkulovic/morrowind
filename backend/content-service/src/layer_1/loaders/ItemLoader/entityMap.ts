import { Item } from "../../../entities/Item/Item";
import { ItemAlcohol } from "../../../entities/Item/ItemAlcohol";
import { ItemWeapon } from "../../../entities/Item/ItemWeapon/ItemWeapon";
import { ItemWeaponShortSword } from "../../../entities/Item/ItemWeapon/ItemWeaponShortSword";
import { ItemWeaponLongSword } from "../../../entities/Item/ItemWeapon/ItemWeaponLongSword";
import { ItemClothing } from "../../../entities/Item/ItemClothing/ItemClothing";
import { ItemClothingCuirass } from "../../../entities/Item/ItemClothing/ItemClothingCuirass";
import { ItemClothingHead } from "../../../entities/Item/ItemClothing/ItemClothingHead";
import { ItemClothingClothesPants } from "../../../entities/Item/ItemClothing/ItemClothingClothesPants";
import { ItemClothingClothesTorso } from "../../../entities/Item/ItemClothing/ItemClothingClothesTorso";
import { ItemClothingFeet } from "../../../entities/Item/ItemClothing/ItemClothingFeet";
import { ItemClothingGreaves } from "../../../entities/Item/ItemClothing/ItemClothingGreaves";
import { ItemMisc } from "../../../entities/Item/ItemMisc/ItemMisc";
import { ItemMiscCurrency } from "../../../entities/Item/ItemMisc/ItemMiscCurrency";

export type EntityConstructor<T> = new () => T;

export const entityMap: Record<string, EntityConstructor<Item>> = {
    "Item": Item,
    "ItemAlcohol": ItemAlcohol,
    "ItemWeapon": ItemWeapon,
    "ItemWeaponShortSword": ItemWeaponShortSword,
    "ItemWeaponLongSword": ItemWeaponLongSword,

    "ItemClothing": ItemClothing,
    "ItemClothingClothesPants": ItemClothingClothesPants,
    "ItemClothingClothesTorso": ItemClothingClothesTorso,
    "ItemClothingCuirass": ItemClothingCuirass,
    "ItemClothingFeet": ItemClothingFeet,
    "ItemClothingGreaves": ItemClothingGreaves,
    "ItemClothingHead": ItemClothingHead,
    
    "ItemMisc": ItemMisc,
    "ItemMiscCurrency": ItemMiscCurrency,
};