import { ContentBase } from "./class/ContentBase";
import { Addiction } from "./dto/content/Addiction";
import { Background } from "./dto/content/Background";
import { Birthsign } from "./dto/content/Birthsign";
import { Character } from "./dto/content/Character";
import { CharacterGenInstruction } from "./dto/content/CharacterGenInstruction";
import { CharacterGroupGenInstruction } from "./dto/content/CharacterGroupGenInstruction";
import { CharacterMemory } from "./dto/content/CharacterMemory";
import { CharacterProfession } from "./dto/content/CharacterProfession";
import { Disease } from "./dto/content/Disease";
import { Effect } from "./dto/content/Effect";
import { Fact } from "./dto/content/Fact";
import { Faction } from "./dto/content/Faction";
import { Item } from "./dto/content/Item/Item";
import { ItemArrow } from "./dto/content/Item/ItemConsumable/ItemArrow";
import { ItemConsumable } from "./dto/content/Item/ItemConsumable/ItemConsumable";
import { ItemAlcohol } from "./dto/content/Item/ItemConsumable/ItemDrinkable/ItemAlcohol";
import { ItemDrinkable } from "./dto/content/Item/ItemConsumable/ItemDrinkable/ItemDrinkable";
import { ItemPotion } from "./dto/content/Item/ItemConsumable/ItemDrinkable/ItemPotion";
import { ItemWater } from "./dto/content/Item/ItemConsumable/ItemDrinkable/ItemWater";
import { ItemEdible } from "./dto/content/Item/ItemConsumable/ItemEdible/ItemEdible";
import { ItemFood } from "./dto/content/Item/ItemConsumable/ItemEdible/ItemFood";
import { ItemMisc } from "./dto/content/Item/ItemMisc/ItemMisc";
import { ItemMiscCurrency } from "./dto/content/Item/ItemMisc/ItemMiscCurrency";
import { ItemRepairable } from "./dto/content/Item/ItemRepairable/ItemRepairable";
import { ItemWeapon } from "./dto/content/Item/ItemRepairable/ItemWeapon/ItemWeapon";
import { ItemWeaponLongSword } from "./dto/content/Item/ItemRepairable/ItemWeapon/ItemWeaponLongSword";
import { ItemWeaponRanged } from "./dto/content/Item/ItemRepairable/ItemWeapon/ItemWeaponRanged";
import { ItemWeaponShortSword } from "./dto/content/Item/ItemRepairable/ItemWeapon/ItemWeaponShortSword";
import { ItemWearable } from "./dto/content/Item/ItemRepairable/ItemWearable/ItemWearable";
import { ItemWearableBackpack } from "./dto/content/Item/ItemRepairable/ItemWearable/ItemWearableBackpack";
import { ItemWearableClothesPants } from "./dto/content/Item/ItemRepairable/ItemWearable/ItemWearableClothesPants";
import { ItemWearableClothesTorso } from "./dto/content/Item/ItemRepairable/ItemWearable/ItemWearableClothesTorso";
import { ItemWearableCuirass } from "./dto/content/Item/ItemRepairable/ItemWearable/ItemWearableCuirass";
import { ItemWearableFeet } from "./dto/content/Item/ItemRepairable/ItemWearable/ItemWearableFeet";
import { ItemWearableGreaves } from "./dto/content/Item/ItemRepairable/ItemWearable/ItemWearableGreaves";
import { ItemWearableHead } from "./dto/content/Item/ItemRepairable/ItemWearable/ItemWearableHead";
import { ItemWearableShield } from "./dto/content/Item/ItemRepairable/ItemWearable/ItemWearableShield";
import { ItemSet } from "./dto/content/ItemSet";
import { Memory } from "./dto/content/Memory";
import { MemoryPool } from "./dto/content/MemoryPool";
import { MemoryPoolEntry } from "./dto/content/MemoryPoolEntry";
import { Mood } from "./dto/content/Mood";
import { Need } from "./dto/content/Need";
import { PastExperience } from "./dto/content/PastExperience";
import { PersonalityProfile } from "./dto/content/PersonalityProfile";
import { Race } from "./dto/content/Race";
import { Religion } from "./dto/content/Religion";
import { Resistance } from "./dto/content/Resistance";
import { Skill } from "./dto/content/Skill/Skill";
import { SkillSet } from "./dto/content/Skill/SkillSet";
import { EquipmentSlot } from "./dto/content/Slot/EquipmentSlot";
import { StorageSlot } from "./dto/content/Slot/StorageSlot";
import { Status } from "./dto/content/Status";
import { Tag } from "./dto/content/Tag";
import { Trait } from "./dto/content/Trait";
import { ClassConstructor } from "./types";


export const CONTENT_ENTITY_MAP: { [name: string]: ClassConstructor<ContentBase> } = {
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