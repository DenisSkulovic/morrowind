import * as ent from "./entities";
import { ContentBase } from "./entities";

export type EntityConstructor<T> = new () => T;

export const entityMap: Record<string, EntityConstructor<ContentBase>> = {
    "ItemMisc": ent.ItemMisc,
    "ItemMiscCurrency": ent.ItemMiscCurrency,
    "ItemWeapon": ent.ItemWeapon,
    "ItemWeaponLongSword": ent.ItemWeaponLongSword,
    "ItemWeaponShortSword": ent.ItemWeaponShortSword,
    "ItemWearable": ent.ItemWearable,
    "ItemWearableClothesPants": ent.ItemWearableClothesPants,
    "ItemWearableClothesTorso": ent.ItemWearableClothesTorso,
    "ItemWearableCuirass": ent.ItemWearableCuirass,
    "ItemWearableFeet": ent.ItemWearableFeet,
    "ItemWearableGreaves": ent.ItemWearableGreaves,
    "ItemWearableHead": ent.ItemWearableHead,
    "ItemWearableShield": ent.ItemWearableShield,
    "ItemRepairable": ent.ItemRepairable,
    "Item": ent.Item,
    "ItemAlcohol": ent.ItemAlcohol,
    "ItemDrink": ent.ItemDrink,
    "ItemFood": ent.ItemFood,
    "CharacterMemory": ent.CharacterMemory,
    "Memory": ent.Memory,
    "MemoryPool": ent.MemoryPool,
    "MemoryPoolEntry": ent.MemoryPoolEntry,
    "PastExperience": ent.PastExperience,
    "Skill": ent.Skill,
    "Trait": ent.Trait,
    "TraitCongenital": ent.TraitCongenital,
    "TraitCoping": ent.TraitCoping,
    "TraitEducation": ent.TraitEducation,
    "TraitFaith": ent.TraitFaith,
    "TraitHealth": ent.TraitHealth,
    "TraitInfamy": ent.TraitInfamy,
    "TraitLeveled": ent.TraitLeveled,
    "TraitLifestyle": ent.TraitLifestyle,
    "TraitPersonality": ent.TraitPersonality,
    "TraitPhysical": ent.TraitPhysical,
    "Birthsign": ent.Birthsign,
    "Character": ent.Character,
    "CharacterProfession": ent.CharacterProfession,
    "ContentBase": ent.ContentBase,
    "Disease": ent.Disease,
    "Effect": ent.Effect,
    "Fact": ent.Fact,
    "Inventory": ent.Inventory,
    "ItemPool": ent.ItemPool,
    "ItemSet": ent.ItemSet,
    "Mood": ent.Mood,
    "Need": ent.Need,
    "PersonalityProfile": ent.PersonalityProfile,
    "Race": ent.Race,
    "Religion": ent.Religion,
    "Resistance": ent.Resistance,
    "Status": ent.Status,
    "Tag": ent.Tag,
};