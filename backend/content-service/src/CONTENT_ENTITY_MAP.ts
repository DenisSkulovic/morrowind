import { EntityTarget, getMetadataArgsStorage } from "typeorm";
import { ContentBase } from "./ContentBase";
import { Addiction } from "./modules/content/entities/Addiction";
import { Background } from "./modules/content/entities/Background";
import { Birthsign } from "./modules/content/entities/Birthsign";
import { Character } from "./modules/content/entities/Character";
import { CharacterGenInstruction } from "./modules/content/entities/CharacterGenInstruction";
import { CharacterGroupGenInstruction } from "./modules/content/entities/CharacterGroupGenInstruction";
import { CharacterProfession } from "./modules/content/entities/CharacterProfession";
import { Disease } from "./modules/content/entities/Disease";
import { Effect } from "./modules/content/entities/Effect";
import { Fact } from "./modules/content/entities/Fact";
import { Faction } from "./modules/content/entities/Faction";
import { Item } from "./modules/content/entities/Item/Item";
import { ItemArrow } from "./modules/content/entities/Item/ItemConsumable/ItemArrow";
import { ItemConsumable } from "./modules/content/entities/Item/ItemConsumable/ItemConsumable";
import { ItemAlcohol } from "./modules/content/entities/Item/ItemConsumable/ItemDrinkable/ItemAlcohol";
import { ItemDrinkable } from "./modules/content/entities/Item/ItemConsumable/ItemDrinkable/ItemDrinkable";
import { ItemPotion } from "./modules/content/entities/Item/ItemConsumable/ItemDrinkable/ItemPotion";
import { ItemWater } from "./modules/content/entities/Item/ItemConsumable/ItemDrinkable/ItemWater";
import { ItemEdible } from "./modules/content/entities/Item/ItemConsumable/ItemEdible/ItemEdible";
import { ItemFood } from "./modules/content/entities/Item/ItemConsumable/ItemEdible/ItemFood";
import { ItemMisc } from "./modules/content/entities/Item/ItemMisc/ItemMisc";
import { ItemMiscCurrency } from "./modules/content/entities/Item/ItemMisc/ItemMiscCurrency";
import { ItemRepairable } from "./modules/content/entities/Item/ItemRepairable/ItemRepairable";
import { ItemWeapon } from "./modules/content/entities/Item/ItemRepairable/ItemWeapon/ItemWeapon";
import { ItemWeaponLongSword } from "./modules/content/entities/Item/ItemRepairable/ItemWeapon/ItemWeaponLongSword";
import { ItemWeaponRanged } from "./modules/content/entities/Item/ItemRepairable/ItemWeapon/ItemWeaponRanged";
import { ItemWeaponShortSword } from "./modules/content/entities/Item/ItemRepairable/ItemWeapon/ItemWeaponShortSword";
import { ItemWearable } from "./modules/content/entities/Item/ItemRepairable/ItemWearable/ItemWearable";
import { ItemWearableBackpack } from "./modules/content/entities/Item/ItemRepairable/ItemWearable/ItemWearableBackpack";
import { ItemWearableClothesPants } from "./modules/content/entities/Item/ItemRepairable/ItemWearable/ItemWearableClothesPants";
import { ItemWearableClothesTorso } from "./modules/content/entities/Item/ItemRepairable/ItemWearable/ItemWearableClothesTorso";
import { ItemWearableCuirass } from "./modules/content/entities/Item/ItemRepairable/ItemWearable/ItemWearableCuirass";
import { ItemWearableFeet } from "./modules/content/entities/Item/ItemRepairable/ItemWearable/ItemWearableFeet";
import { ItemWearableGreaves } from "./modules/content/entities/Item/ItemRepairable/ItemWearable/ItemWearableGreaves";
import { ItemWearableHead } from "./modules/content/entities/Item/ItemRepairable/ItemWearable/ItemWearableHead";
import { ItemWearableShield } from "./modules/content/entities/Item/ItemRepairable/ItemWearable/ItemWearableShield";
import { ItemSet } from "./modules/content/entities/ItemSet";
import { CharacterMemory } from "./modules/content/entities/CharacterMemory";
import { Memory } from "./modules/content/entities/Memory";
import { MemoryPool } from "./modules/content/entities/MemoryPool";
import { MemoryPoolEntry } from "./modules/content/entities/MemoryPoolEntry";
import { PastExperience } from "./modules/content/entities/PastExperience";
import { Mood } from "./modules/content/entities/Mood";
import { Need } from "./modules/content/entities/Need";
import { PersonalityProfile } from "./modules/content/entities/PersonalityProfile";
import { Race } from "./modules/content/entities/Race";
import { Religion } from "./modules/content/entities/Religion";
import { Resistance } from "./modules/content/entities/Resistance";
import { Skill } from "./modules/content/entities/Skill/Skill";
import { SkillSet } from "./modules/content/entities/Skill/SkillSet";
import { EquipmentSlot } from "./modules/content/entities/Slot/EquipmentSlot";
import { StorageSlot } from "./modules/content/entities/Slot/StorageSlot";
import { Tag } from "./modules/content/entities/Tag";
import { Trait } from "./modules/content/entities/Trait";
import { Status } from "./modules/content/entities/Status";


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


export const CONTENT_ENTITY_MAP: { [name: string]: EntityTarget<ContentBase> } = {
    ItemAlcohol,
    ItemDrinkable,
    ItemPotion,
    ItemWater,
    ItemEdible,
    ItemFood,
    ItemArrow,
    ItemConsumable,
    ItemMisc,
    ItemMiscCurrency,
    ItemWeapon,
    ItemWeaponRanged,
    ItemWeaponLongSword,
    ItemWeaponShortSword,
    ItemWearable,
    ItemWearableBackpack,
    ItemWearableClothesPants,
    ItemWearableClothesTorso,
    ItemWearableCuirass,
    ItemWearableFeet,
    ItemWearableGreaves,
    ItemWearableHead,
    ItemWearableShield,
    ItemRepairable,
    Item,
    PastExperience,
    CharacterMemory,
    Memory,
    MemoryPool,
    MemoryPoolEntry,
    Skill,
    SkillSet,
    EquipmentSlot,
    StorageSlot,
    Trait,
    Addiction,
    Background,
    Birthsign,
    Character,
    CharacterGenInstruction,
    CharacterGroupGenInstruction,
    CharacterProfession,
    Disease,
    Effect,
    Fact,
    Faction,
    ItemSet,
    Mood,
    Need,
    PersonalityProfile,
    Race,
    Religion,
    Resistance,
    Status,
    Tag,
}