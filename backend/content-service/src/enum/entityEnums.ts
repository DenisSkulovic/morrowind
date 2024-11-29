export function serializeEnum<T extends object>(enumObj: T, value: string): number {
    const entry = Object.entries(enumObj).find(([key]) => key === value);
    if (!entry) throw new Error(`Enum serialization failed: ${value} not found in ${JSON.stringify(enumObj)}`);
    return entry[1] as number; // Enum values in Protobuf are numeric
}

export function deserializeEnum<T extends object>(enumObj: T, protoValue: number): string {
    const entry = Object.entries(enumObj).find(([_, val]) => val === protoValue);
    if (!entry) throw new Error(`Enum deserialization failed: ${protoValue} not found in ${JSON.stringify(enumObj)}`);
    return entry[0]; // Enum keys in TypeScript are string
}


export enum DiseaseSeverityEnum {
    MILD = "MILD",
    MODERATE = "MODERATE",
    SEVERE = "SEVERE",
}

export enum EffectElementEnum {
    FIRE = "FIRE",
    FROST = "FROST",
    POISON = "POISON",
    SHOCK = "SHOCK",
}

export enum EffectModeEnum {
    INSTANT = "INSTANT",
    GRADUAL = "GRADUAL",
    PERSISTENT = "PERSISTENT",
}

export enum EffectTargetEnum {
    HEALTH = "HEALTH",
    STAMINA = "STAMINA",
    MANA = "MANA",
}

export enum EffectTypeEnum {
    DAMAGE = "DAMAGE",
    HEALING = "HEALING",
    BUFF = "BUFF",
    DEBUFF = "DEBUFF",
    RESISTANCE = "RESISTANCE",
    STEALING = "STEALING",
    NEUTRAL = "NEUTRAL",
    UNRECOGNIZED = "UNRECOGNIZED",
}

export enum FactStatusEnum {
    ACCESSIBLE = "ACCESSIBLE",
    INACCESSIBLE = "INACCESSIBLE",
}

export enum ItemActionEnum {
    ATTACK = "ATTACK",
    BLOCK = "BLOCK",
    USE = "USE",
}

export enum NeedLayerEnum {
    PHYSIOLOGICAL = "PHYSIOLOGICAL",
    SAFETY = "SAFETY",
    BELONGING_AND_LOVE = "BELONGING_AND_LOVE",
    ESTEEM = "ESTEEM",
    COGNITIVE = "COGNITIVE",
    AESTHETIC = "AESTHETIC",
    SELF_ACTUALIZATION = "SELF_ACTUALIZATION",
    TRANSCENDENCE = "TRANSCENDENCE",
}

export enum NeedTypeEnum {
    DYNAMIC = "DYNAMIC",
    THRESHOLD = "THRESHOLD",
    EXTERNAL = "EXTERNAL",
}

export enum SkillCategoryEnum {
    CRAFTING = "CRAFTING",
    MAGIC = "MAGIC",
    COMBAT = "COMBAT",
    STEALTH = "STEALTH",
    SOCIAL = "SOCIAL",
}

export enum TagSubtypeEnum {
    MATERIAL = "MATERIAL",
    CULTURE = "CULTURE",
    RELATION = "RELATION",
    FACTION = "FACTION",
    RELIGION = "RELIGION",
    WEAPON_QUALITY = "WEAPON_QUALITY",
    ARMOR_QUALITY = "ARMOR_QUALITY",
    WEAPON_TYPE = "WEAPON_TYPE",
    STATUS = "STATUS",
    QUEST = "QUEST"
}

export enum MemoryTypeEnum {
    GLOBAL = "GLOBAL",
    REGIONAL = "REGIONAL",
    EVENT_RELATED = "EVENT_RELATED",
    HISTORIC = "HISTORIC",
    PERSONAL = "PERSONAL",
}

export enum RelationEnum {
    SPOUSE = "SPOUSE",
    SIBLING = "SIBLING",
    COUSIN = "COUSIN",
    PARENT = "PARENT",
    GRANDPARENT = "GRANDPARENT",
    DISTANT_RELATIVE = "DISTANT_RELATIVE",
    ACQUAINTANCE = "ACQUAINTANCE",
    FRIEND = "FRIEND",
    BEST_FRIEND = "BEST_FRIEND",
    RIVAL = "RIVAL",
    PARTNER = "PARTNER",
    NEIGHBOR = "NEIGHBOR",
}