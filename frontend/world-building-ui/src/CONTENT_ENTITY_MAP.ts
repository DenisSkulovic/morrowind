import { ClassConstructor } from "./types";
import {
    AddictionDTO, BackgroundDTO, BirthsignDTO,
    CharacterDTO, CharacterGenInstructionDTO,
    CharacterGroupGenInstructionDTO, CharacterMemoryDTO,
    CharacterProfessionDTO, DiseaseDTO, EffectDTO,
    EquipmentSlotDTO, FactDTO, FactionDTO, ItemDTO,
    ItemSetDTO, MemoryDTO, MemoryPoolDTO, MemoryPoolEntryDTO,
    MoodDTO, NeedDTO, PastExperienceDTO, PersonalityProfileDTO,
    RaceDTO, ReligionDTO, ResistanceDTO, SkillDTO,
    SkillSetDTO, StatusDTO, StorageSlotDTO, TagDTO, TraitDTO
} from "./proto/common_pb";
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
import { EntityEnum } from "./enum/EntityEnum";
import { ContentBase } from "./class/ContentBase";

export type EntityMap = {
    [key in keyof typeof EntityEnum]: {
        entity: ClassConstructor<ContentBase>;
        dto: ClassConstructor<any>;
        rootEntity?: ClassConstructor<any>;
    }
}

export const CONTENT_ENTITY_MAP: EntityMap = {
    [EntityEnum.ItemAlcohol]: {
        entity: ItemAlcohol,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemDrinkable]: {
        entity: ItemDrinkable,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemPotion]: {
        entity: ItemPotion,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemWater]: {
        entity: ItemWater,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemEdible]: {
        entity: ItemEdible,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemFood]: {
        entity: ItemFood,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemArrow]: {
        entity: ItemArrow,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemConsumable]: {
        entity: ItemConsumable,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemMisc]: {
        entity: ItemMisc,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemMiscCurrency]: {
        entity: ItemMiscCurrency,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemWeapon]: {
        entity: ItemWeapon,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemWeaponRanged]: {
        entity: ItemWeaponRanged,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemWeaponLongSword]: {
        entity: ItemWeaponLongSword,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemWeaponShortSword]: {
        entity: ItemWeaponShortSword,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemWearable]: {
        entity: ItemWearable,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemWearableBackpack]: {
        entity: ItemWearableBackpack,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemWearableClothesPants]: {
        entity: ItemWearableClothesPants,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemWearableClothesTorso]: {
        entity: ItemWearableClothesTorso,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemWearableCuirass]: {
        entity: ItemWearableCuirass,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemWearableFeet]: {
        entity: ItemWearableFeet,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemWearableGreaves]: {
        entity: ItemWearableGreaves,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemWearableHead]: {
        entity: ItemWearableHead,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemWearableShield]: {
        entity: ItemWearableShield,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.ItemRepairable]: {
        entity: ItemRepairable,
        dto: ItemDTO,
        rootEntity: Item
    },
    [EntityEnum.Item]: {
        entity: Item,
        dto: ItemDTO,
    },
    [EntityEnum.PastExperience]: {
        entity: PastExperience,
        dto: PastExperienceDTO,
    },
    [EntityEnum.CharacterMemory]: {
        entity: CharacterMemory,
        dto: CharacterMemoryDTO,
    },
    [EntityEnum.Memory]: {
        entity: Memory,
        dto: MemoryDTO,
    },
    [EntityEnum.MemoryPool]: {
        entity: MemoryPool,
        dto: MemoryPoolDTO,
    },
    [EntityEnum.MemoryPoolEntry]: {
        entity: MemoryPoolEntry,
        dto: MemoryPoolEntryDTO,
    },
    [EntityEnum.Skill]: {
        entity: Skill,
        dto: SkillDTO,
    },
    [EntityEnum.SkillSet]: {
        entity: SkillSet,
        dto: SkillSetDTO,
    },
    [EntityEnum.EquipmentSlot]: {
        entity: EquipmentSlot,
        dto: EquipmentSlotDTO,
    },
    [EntityEnum.StorageSlot]: {
        entity: StorageSlot,
        dto: StorageSlotDTO,
    },
    [EntityEnum.Trait]: {
        entity: Trait,
        dto: TraitDTO,
    },
    [EntityEnum.Addiction]: {
        entity: Addiction,
        dto: AddictionDTO,
    },
    [EntityEnum.Background]: {
        entity: Background,
        dto: BackgroundDTO,
    },
    [EntityEnum.Birthsign]: {
        entity: Birthsign,
        dto: BirthsignDTO,
        rootEntity: Birthsign
    },
    [EntityEnum.Character]: {
        entity: Character,
        dto: CharacterDTO,
    },
    [EntityEnum.CharacterGenInstruction]: {
        entity: CharacterGenInstruction,
        dto: CharacterGenInstructionDTO,
    },
    [EntityEnum.CharacterGroupGenInstruction]: {
        entity: CharacterGroupGenInstruction,
        dto: CharacterGroupGenInstructionDTO,
    },
    [EntityEnum.CharacterProfession]: {
        entity: CharacterProfession,
        dto: CharacterProfessionDTO,
    },
    [EntityEnum.Disease]: {
        entity: Disease,
        dto: DiseaseDTO,
    },
    [EntityEnum.Effect]: {
        entity: Effect,
        dto: EffectDTO,
    },
    [EntityEnum.Fact]: {
        entity: Fact,
        dto: FactDTO,
    },
    [EntityEnum.Faction]: {
        entity: Faction,
        dto: FactionDTO,
    },
    [EntityEnum.ItemSet]: {
        entity: ItemSet,
        dto: ItemSetDTO,
    },
    [EntityEnum.Mood]: {
        entity: Mood,
        dto: MoodDTO,
    },
    [EntityEnum.Need]: {
        entity: Need,
        dto: NeedDTO,
    },
    [EntityEnum.PersonalityProfile]: {
        entity: PersonalityProfile,
        dto: PersonalityProfileDTO,
    },
    [EntityEnum.Race]: {
        entity: Race,
        dto: RaceDTO,
    },
    [EntityEnum.Religion]: {
        entity: Religion,
        dto: ReligionDTO,
        rootEntity: Religion
    },
    [EntityEnum.Resistance]: {
        entity: Resistance,
        dto: ResistanceDTO,
    },
    [EntityEnum.Status]: {
        entity: Status,
        dto: StatusDTO,
    },
    [EntityEnum.Tag]: {
        entity: Tag,
        dto: TagDTO,
    }
};