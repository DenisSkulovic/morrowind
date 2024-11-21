import { ItemAlcohol } from "./entities/Content/Item/ItemConsumable/ItemDrinkable/ItemAlcohol";
import { ItemDrinkable } from "./entities/Content/Item/ItemConsumable/ItemDrinkable/ItemDrinkable";
import { ItemPotion } from "./entities/Content/Item/ItemConsumable/ItemDrinkable/ItemPotion";
import { ItemWater } from "./entities/Content/Item/ItemConsumable/ItemDrinkable/ItemWater";
import { ItemEdible } from "./entities/Content/Item/ItemConsumable/ItemEdible/ItemEdible";
import { ItemFood } from "./entities/Content/Item/ItemConsumable/ItemEdible/ItemFood";
import { ItemArrow } from "./entities/Content/Item/ItemConsumable/ItemArrow";
import { ItemConsumable } from "./entities/Content/Item/ItemConsumable/ItemConsumable";
import { ItemMisc } from "./entities/Content/Item/ItemMisc/ItemMisc";
import { ItemMiscCurrency } from "./entities/Content/Item/ItemMisc/ItemMiscCurrency";
import { ItemWeapon } from "./entities/Content/Item/ItemRepairable/ItemWeapon/ItemWeapon";
import { ItemWeaponLongSword } from "./entities/Content/Item/ItemRepairable/ItemWeapon/ItemWeaponLongSword";
import { ItemWeaponShortSword } from "./entities/Content/Item/ItemRepairable/ItemWeapon/ItemWeaponShortSword";
import { ItemWearable } from "./entities/Content/Item/ItemRepairable/ItemWearable/ItemWearable";
import { ItemWearableClothesPants } from "./entities/Content/Item/ItemRepairable/ItemWearable/ItemWearableClothesPants";
import { ItemWearableClothesTorso } from "./entities/Content/Item/ItemRepairable/ItemWearable/ItemWearableClothesTorso";
import { ItemWearableCuirass } from "./entities/Content/Item/ItemRepairable/ItemWearable/ItemWearableCuirass";
import { ItemWearableFeet } from "./entities/Content/Item/ItemRepairable/ItemWearable/ItemWearableFeet";
import { ItemWearableGreaves } from "./entities/Content/Item/ItemRepairable/ItemWearable/ItemWearableGreaves";
import { ItemWearableHead } from "./entities/Content/Item/ItemRepairable/ItemWearable/ItemWearableHead";
import { ItemWearableShield } from "./entities/Content/Item/ItemRepairable/ItemWearable/ItemWearableShield";
import { ItemRepairable } from "./entities/Content/Item/ItemRepairable/ItemRepairable";
import { Item } from "./entities/Content/Item/Item";
import { CharacterMemory } from "./entities/Content/Knowledge/CharacterMemory";
import { Memory } from "./entities/Content/Knowledge/Memory";
import { MemoryPool } from "./entities/Content/Knowledge/MemoryPool";
import { MemoryPoolEntry } from "./entities/Content/Knowledge/MemoryPoolEntry";
import { PastExperience } from "./entities/Content/Knowledge/PastExperience/PastExperience";
import { PastExperienceAdult } from "./entities/Content/Knowledge/PastExperience/PastExperienceAdult";
import { PastExperienceChild } from "./entities/Content/Knowledge/PastExperience/PastExperienceChild";
import { Skill } from "./entities/Content/Skill/Skill";
import { Trait } from "./entities/Content/Trait/Trait";
import { TraitCongenital } from "./entities/Content/Trait/TraitCongenital";
import { TraitCoping } from "./entities/Content/Trait/TraitCoping";
import { TraitEducation } from "./entities/Content/Trait/TraitEducation";
import { TraitFaith } from "./entities/Content/Trait/TraitFaith";
import { TraitHealth } from "./entities/Content/Trait/TraitHealth";
import { TraitInfamy } from "./entities/Content/Trait/TraitInfamy";
import { TraitLeveled } from "./entities/Content/Trait/TraitLeveled";
import { TraitLifestyle } from "./entities/Content/Trait/TraitLifestyle";
import { TraitPersonality } from "./entities/Content/Trait/TraitPersonality";
import { TraitPhysical } from "./entities/Content/Trait/TraitPhysical";
import { Birthsign } from "./entities/Content/Birthsign";
import { Character } from "./entities/Content/Character";
import { CharacterProfession } from "./entities/Content/CharacterProfession";
import { ContentBase } from "./ContentBase";
import { Disease } from "./entities/Content/Disease";
import { Effect } from "./entities/Content/Effect";
import { Fact } from "./entities/Content/Fact";
import { ItemSet } from "./entities/Content/ItemSet";
import { Mood } from "./entities/Content/Mood";
import { Need } from "./entities/Content/Need";
import { PersonalityProfile } from "./entities/Content/PersonalityProfile";
import { Race } from "./entities/Content/Race";
import { Religion } from "./entities/Content/Religion";
import { Resistance } from "./entities/Content/Resistance";
import { Status } from "./entities/Content/Status";
import { Tag } from "./entities/Content/Tag";

import { EntityConstructor } from "./types";

import { getMetadataArgsStorage } from "typeorm";
import { EntityTarget } from "typeorm/common/EntityTarget";

/**
 * Checks if the given entity is a parent entity with its own table.
 */
export function isParentEntity(entity: EntityTarget<any>): boolean {
    const metadata = getMetadataArgsStorage();
    const entityMetadata = metadata.tables.find(
        (table) => table.target === entity
    );
    return !!entityMetadata; // Returns true if the entity has its own table
}


export const contentEntityMap: {[name: string]: EntityConstructor<ContentBase>} = {
    "ItemAlcohol": ItemAlcohol,
    "ItemDrinkable": ItemDrinkable,
    "ItemPotion": ItemPotion,
    "ItemWater": ItemWater,
    "ItemEdible": ItemEdible,
    "ItemFood": ItemFood,
    "ItemArrow": ItemArrow,
    "ItemConsumable": ItemConsumable,
    "ItemMisc": ItemMisc,
    "ItemMiscCurrency": ItemMiscCurrency,
    "ItemWeapon": ItemWeapon,
    "ItemWeaponLongSword": ItemWeaponLongSword,
    "ItemWeaponShortSword": ItemWeaponShortSword,
    "ItemWearable": ItemWearable,
    "ItemWearableClothesPants": ItemWearableClothesPants,
    "ItemWearableClothesTorso": ItemWearableClothesTorso,
    "ItemWearableCuirass": ItemWearableCuirass,
    "ItemWearableFeet": ItemWearableFeet,
    "ItemWearableGreaves": ItemWearableGreaves,
    "ItemWearableHead": ItemWearableHead,
    "ItemWearableShield": ItemWearableShield,
    "ItemRepairable": ItemRepairable,
    "Item": Item,
    "CharacterMemory": CharacterMemory,
    "Memory": Memory,
    "MemoryPool": MemoryPool,
    "MemoryPoolEntry": MemoryPoolEntry,
    "PastExperience": PastExperience,
    "PastExperienceChild": PastExperienceChild,
    "PastExperienceAdult": PastExperienceAdult,
    "Skill": Skill,
    "Trait": Trait,
    "TraitCongenital": TraitCongenital,
    "TraitCoping": TraitCoping,
    "TraitEducation": TraitEducation,
    "TraitFaith": TraitFaith,
    "TraitHealth": TraitHealth,
    "TraitInfamy": TraitInfamy,
    "TraitLeveled": TraitLeveled,
    "TraitLifestyle": TraitLifestyle,
    "TraitPersonality": TraitPersonality,
    "TraitPhysical": TraitPhysical,
    "Birthsign": Birthsign,
    "Character": Character,
    "CharacterProfession": CharacterProfession,
    "Disease": Disease,
    "Effect": Effect,
    "Fact": Fact,
    "ItemSet": ItemSet,
    "Mood": Mood,
    "Need": Need,
    "PersonalityProfile": PersonalityProfile,
    "Race": Race,
    "Religion": Religion,
    "Resistance": Resistance,
    "Status": Status,
    "Tag": Tag,
}