import { ContentBase } from "./class/ContentBase";
import { Addiction } from "./class/entities/content/Addiction";
import { Background } from "./class/entities/content/Background";
import { Birthsign } from "./class/entities/content/Birthsign";
import { Character } from "./class/entities/content/Character";
import { CharacterGenInstruction } from "./class/entities/content/CharacterGenInstruction";
import { CharacterGroupGenInstruction } from "./class/entities/content/CharacterGroupGenInstruction";
import { CharacterMemory } from "./class/entities/content/CharacterMemory";
import { CharacterProfession } from "./class/entities/content/CharacterProfession";
import { Disease } from "./class/entities/content/Disease";
import { Effect } from "./class/entities/content/Effect";
import { Fact } from "./class/entities/content/Fact";
import { Faction } from "./class/entities/content/Faction";
import { Item } from "./class/entities/content/Item/Item";
import { ItemArrow } from "./class/entities/content/Item/ItemConsumable/ItemArrow";
import { ItemConsumable } from "./class/entities/content/Item/ItemConsumable/ItemConsumable";
import { ItemAlcohol } from "./class/entities/content/Item/ItemConsumable/ItemDrinkable/ItemAlcohol";
import { ItemDrinkable } from "./class/entities/content/Item/ItemConsumable/ItemDrinkable/ItemDrinkable";
import { ItemPotion } from "./class/entities/content/Item/ItemConsumable/ItemDrinkable/ItemPotion";
import { ItemWater } from "./class/entities/content/Item/ItemConsumable/ItemDrinkable/ItemWater";
import { ItemEdible } from "./class/entities/content/Item/ItemConsumable/ItemEdible/ItemEdible";
import { ItemFood } from "./class/entities/content/Item/ItemConsumable/ItemEdible/ItemFood";
import { ItemMisc } from "./class/entities/content/Item/ItemMisc/ItemMisc";
import { ItemMiscCurrency } from "./class/entities/content/Item/ItemMisc/ItemMiscCurrency";
import { ItemRepairable } from "./class/entities/content/Item/ItemRepairable/ItemRepairable";
import { ItemWeapon } from "./class/entities/content/Item/ItemRepairable/ItemWeapon/ItemWeapon";
import { ItemWeaponLongSword } from "./class/entities/content/Item/ItemRepairable/ItemWeapon/ItemWeaponLongSword";
import { ItemWeaponRanged } from "./class/entities/content/Item/ItemRepairable/ItemWeapon/ItemWeaponRanged";
import { ItemWeaponShortSword } from "./class/entities/content/Item/ItemRepairable/ItemWeapon/ItemWeaponShortSword";
import { ItemWearable } from "./class/entities/content/Item/ItemRepairable/ItemWearable/ItemWearable";
import { ItemWearableBackpack } from "./class/entities/content/Item/ItemRepairable/ItemWearable/ItemWearableBackpack";
import { ItemWearableClothesPants } from "./class/entities/content/Item/ItemRepairable/ItemWearable/ItemWearableClothesPants";
import { ItemWearableClothesTorso } from "./class/entities/content/Item/ItemRepairable/ItemWearable/ItemWearableClothesTorso";
import { ItemWearableCuirass } from "./class/entities/content/Item/ItemRepairable/ItemWearable/ItemWearableCuirass";
import { ItemWearableFeet } from "./class/entities/content/Item/ItemRepairable/ItemWearable/ItemWearableFeet";
import { ItemWearableGreaves } from "./class/entities/content/Item/ItemRepairable/ItemWearable/ItemWearableGreaves";
import { ItemWearableHead } from "./class/entities/content/Item/ItemRepairable/ItemWearable/ItemWearableHead";
import { ItemWearableShield } from "./class/entities/content/Item/ItemRepairable/ItemWearable/ItemWearableShield";
import { ItemSet } from "./class/entities/content/ItemSet";
import { Memory } from "./class/entities/content/Memory";
import { MemoryPool } from "./class/entities/content/MemoryPool";
import { MemoryPoolEntry } from "./class/entities/content/MemoryPoolEntry";
import { Mood } from "./class/entities/content/Mood";
import { Need } from "./class/entities/content/Need";
import { PastExperience } from "./class/entities/content/PastExperience";
import { PersonalityProfile } from "./class/entities/content/PersonalityProfile";
import { Race } from "./class/entities/content/Race";
import { Religion } from "./class/entities/content/Religion";
import { Resistance } from "./class/entities/content/Resistance";
import { Skill } from "./class/entities/content/Skill/Skill";
import { SkillSet } from "./class/entities/content/Skill/SkillSet";
import { EquipmentSlot } from "./class/entities/content/Slot/EquipmentSlot";
import { StorageSlot } from "./class/entities/content/Slot/StorageSlot";
import { Status } from "./class/entities/content/Status";
import { Tag } from "./class/entities/content/Tag";
import { Trait } from "./class/entities/content/Trait";
import { ClassConstructor } from "./types";


export const CONTENT_ENTITY_MAP: { [name: string]: typeof ContentBase } = {
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