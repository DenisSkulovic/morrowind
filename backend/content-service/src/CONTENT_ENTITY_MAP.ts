import { EntityTarget, getMetadataArgsStorage } from "typeorm";
import { ContentBase, ContentBaseStatic } from "./ContentBase";
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
import { EntityEnum } from "./common/enum/EntityEnum";
import { EntityConstructor } from "./types";

export type EntityMap<T extends ContentBase> = {
    [key in keyof typeof EntityEnum]: {
        entity: EntityTarget<T>;
        rootEntity?: EntityTarget<T>;
    }
}


export class ContentEntityMapService {
    static getEntityConstructor<T extends ContentBase>(entityName: EntityEnum): ContentBaseStatic<T> {
        const entityConfig = CONTENT_ENTITY_MAP[entityName]
        if (!entityConfig) throw new Error(`unrecognized entityName: "${entityName}"`)
        return entityConfig.entity as ContentBaseStatic<T>
    }

    static getRootEntityConstructor<T extends ContentBase>(entityName: EntityEnum): ContentBaseStatic<T> | null {
        const entityConfig = CONTENT_ENTITY_MAP[entityName]
        if (!entityConfig) throw new Error(`unrecognized entityName: "${entityName}"`)
        return entityConfig.rootEntity ? entityConfig.rootEntity as ContentBaseStatic<T> : null
    }
}

const CONTENT_ENTITY_MAP: EntityMap<ContentBase> = {
    [EntityEnum.ItemAlcohol]: {
        entity: ItemAlcohol,
        rootEntity: Item
    },
    [EntityEnum.ItemDrinkable]: {
        entity: ItemDrinkable,
        rootEntity: Item
    },
    [EntityEnum.ItemPotion]: {
        entity: ItemPotion,
        rootEntity: Item
    },
    [EntityEnum.ItemWater]: {
        entity: ItemWater,
        rootEntity: Item
    },
    [EntityEnum.ItemEdible]: {
        entity: ItemEdible,
        rootEntity: Item
    },
    [EntityEnum.ItemFood]: {
        entity: ItemFood,
        rootEntity: Item
    },
    [EntityEnum.ItemArrow]: {
        entity: ItemArrow,
        rootEntity: Item
    },
    [EntityEnum.ItemConsumable]: {
        entity: ItemConsumable,
        rootEntity: Item
    },
    [EntityEnum.ItemMisc]: {
        entity: ItemMisc,
        rootEntity: Item
    },
    [EntityEnum.ItemMiscCurrency]: {
        entity: ItemMiscCurrency,
        rootEntity: Item
    },
    [EntityEnum.ItemWeapon]: {
        entity: ItemWeapon,
        rootEntity: Item
    },
    [EntityEnum.ItemWeaponRanged]: {
        entity: ItemWeaponRanged,
        rootEntity: Item
    },
    [EntityEnum.ItemWeaponLongSword]: {
        entity: ItemWeaponLongSword,
        rootEntity: Item
    },
    [EntityEnum.ItemWeaponShortSword]: {
        entity: ItemWeaponShortSword,
        rootEntity: Item
    },
    [EntityEnum.ItemWearable]: {
        entity: ItemWearable,
        rootEntity: Item
    },
    [EntityEnum.ItemWearableBackpack]: {
        entity: ItemWearableBackpack,
        rootEntity: Item
    },
    [EntityEnum.ItemWearableClothesPants]: {
        entity: ItemWearableClothesPants,
        rootEntity: Item
    },
    [EntityEnum.ItemWearableClothesTorso]: {
        entity: ItemWearableClothesTorso,
        rootEntity: Item
    },
    [EntityEnum.ItemWearableCuirass]: {
        entity: ItemWearableCuirass,
        rootEntity: Item
    },
    [EntityEnum.ItemWearableFeet]: {
        entity: ItemWearableFeet,
        rootEntity: Item
    },
    [EntityEnum.ItemWearableGreaves]: {
        entity: ItemWearableGreaves,
        rootEntity: Item
    },
    [EntityEnum.ItemWearableHead]: {
        entity: ItemWearableHead,
        rootEntity: Item
    },
    [EntityEnum.ItemWearableShield]: {
        entity: ItemWearableShield,
        rootEntity: Item
    },
    [EntityEnum.ItemRepairable]: {
        entity: ItemRepairable,
        rootEntity: Item
    },
    [EntityEnum.Item]: {
        entity: Item
    },
    [EntityEnum.PastExperience]: {
        entity: PastExperience
    },
    [EntityEnum.CharacterMemory]: {
        entity: CharacterMemory
    },
    [EntityEnum.Memory]: {
        entity: Memory
    },
    [EntityEnum.MemoryPool]: {
        entity: MemoryPool
    },
    [EntityEnum.MemoryPoolEntry]: {
        entity: MemoryPoolEntry
    },
    [EntityEnum.Skill]: {
        entity: Skill
    },
    [EntityEnum.SkillSet]: {
        entity: SkillSet
    },
    [EntityEnum.EquipmentSlot]: {
        entity: EquipmentSlot
    },
    [EntityEnum.StorageSlot]: {
        entity: StorageSlot
    },
    [EntityEnum.Trait]: {
        entity: Trait
    },
    [EntityEnum.Addiction]: {
        entity: Addiction
    },
    [EntityEnum.Background]: {
        entity: Background
    },
    [EntityEnum.Birthsign]: {
        entity: Birthsign,
        rootEntity: Birthsign
    },
    [EntityEnum.Character]: {
        entity: Character
    },
    [EntityEnum.CharacterGenInstruction]: {
        entity: CharacterGenInstruction
    },
    [EntityEnum.CharacterGroupGenInstruction]: {
        entity: CharacterGroupGenInstruction
    },
    [EntityEnum.CharacterProfession]: {
        entity: CharacterProfession
    },
    [EntityEnum.Disease]: {
        entity: Disease
    },
    [EntityEnum.Effect]: {
        entity: Effect
    },
    [EntityEnum.Fact]: {
        entity: Fact
    },
    [EntityEnum.Faction]: {
        entity: Faction
    },
    [EntityEnum.ItemSet]: {
        entity: ItemSet
    },
    [EntityEnum.Mood]: {
        entity: Mood
    },
    [EntityEnum.Need]: {
        entity: Need
    },
    [EntityEnum.PersonalityProfile]: {
        entity: PersonalityProfile
    },
    [EntityEnum.Race]: {
        entity: Race
    },
    [EntityEnum.Religion]: {
        entity: Religion,
        rootEntity: Religion
    },
    [EntityEnum.Resistance]: {
        entity: Resistance
    },
    [EntityEnum.Status]: {
        entity: Status
    },
    [EntityEnum.Tag]: {
        entity: Tag
    }
};