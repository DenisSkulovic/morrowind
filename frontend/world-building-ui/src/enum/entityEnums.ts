export enum DiseaseSeverityEnum {
    DISEASE_SEVERITY_MILD = "MILD",
    DISEASE_SEVERITY_MODERATE = "MODERATE",
    DISEASE_SEVERITY_SEVERE = "SEVERE",
}

export enum EffectElementEnum {
    EFFECT_ELEMENT_FIRE = "FIRE",
    EFFECT_ELEMENT_FROST = "FROST",
    EFFECT_ELEMENT_POISON = "POISON",
    EFFECT_ELEMENT_SHOCK = "SHOCK",
}

export enum EffectModeEnum {
    EFFECT_MODE_INSTANT = "INSTANT",
    EFFECT_MODE_GRADUAL = "GRADUAL",
    EFFECT_MODE_PERSISTENT = "PERSISTENT",
}

export enum EffectTargetEnum {
    EFFECT_TARGET_HEALTH = "HEALTH",
    EFFECT_TARGET_STAMINA = "STAMINA",
    EFFECT_TARGET_MANA = "MANA",
}

export enum EffectTypeEnum {
    EFFECT_TYPE_DAMAGE = "DAMAGE",
    EFFECT_TYPE_HEALING = "HEALING",
    EFFECT_TYPE_BUFF = "BUFF",
    EFFECT_TYPE_DEBUFF = "DEBUFF",
    EFFECT_TYPE_RESISTANCE = "RESISTANCE",
    EFFECT_TYPE_STEALING = "STEALING",
    EFFECT_TYPE_NEUTRAL = "NEUTRAL",
    EFFECT_TYPE_UNRECOGNIZED = "UNRECOGNIZED",
}

export enum FactStatusEnum {
    FACT_STATUS_ACCESSIBLE = "ACCESSIBLE",
    FACT_STATUS_INACCESSIBLE = "INACCESSIBLE",
}

export enum ItemActionEnum {
    ITEM_ACTION_ATTACK = "ATTACK",
    ITEM_ACTION_BLOCK = "BLOCK",
    ITEM_ACTION_USE = "USE",
}

export enum NeedLayerEnum {
    NEED_LAYER_PHYSIOLOGICAL = "PHYSIOLOGICAL",
    NEED_LAYER_SAFETY = "SAFETY",
    NEED_LAYER_BELONGING_AND_LOVE = "BELONGING_AND_LOVE",
    NEED_LAYER_ESTEEM = "ESTEEM",
    NEED_LAYER_COGNITIVE = "COGNITIVE",
    NEED_LAYER_AESTHETIC = "AESTHETIC",
    NEED_LAYER_SELF_ACTUALIZATION = "SELF_ACTUALIZATION",
    NEED_LAYER_TRANSCENDENCE = "TRANSCENDENCE",
}

export enum NeedTypeEnum {
    NEED_TYPE_DYNAMIC = "DYNAMIC",
    NEED_TYPE_THRESHOLD = "THRESHOLD",
    NEED_TYPE_EXTERNAL = "EXTERNAL",
}

export enum SkillCategoryEnum {
    SKILL_CATEGORY_CRAFTING = "CRAFTING",
    SKILL_CATEGORY_MAGIC = "MAGIC",
    SKILL_CATEGORY_COMBAT = "COMBAT",
    SKILL_CATEGORY_STEALTH = "STEALTH",
    SKILL_CATEGORY_SOCIAL = "SOCIAL",
}

export enum TagSubtypeEnum {
    TAG_SUBTYPE_MATERIAL = "MATERIAL",
    TAG_SUBTYPE_CULTURE = "CULTURE",
    TAG_SUBTYPE_RELATION = "RELATION",
    TAG_SUBTYPE_FACTION = "FACTION",
    TAG_SUBTYPE_RELIGION = "RELIGION",
    TAG_SUBTYPE_WEAPON_QUALITY = "WEAPON_QUALITY",
    TAG_SUBTYPE_ARMOR_QUALITY = "ARMOR_QUALITY",
    TAG_SUBTYPE_WEAPON_TYPE = "WEAPON_TYPE",
    TAG_SUBTYPE_STATUS = "STATUS",
    TAG_SUBTYPE_QUEST = "QUEST"
}

export enum MemoryTypeEnum {
    MEMORY_TYPE_GLOBAL = "GLOBAL",
    MEMORY_TYPE_REGIONAL = "REGIONAL",
    MEMORY_TYPE_EVENT_RELATED = "EVENT_RELATED",
    MEMORY_TYPE_HISTORIC = "HISTORIC",
    MEMORY_TYPE_PERSONAL = "PERSONAL",
}

export enum RelationEnum {
    RELATION_SPOUSE = "SPOUSE",
    RELATION_SIBLING = "SIBLING",
    RELATION_COUSIN = "COUSIN",
    RELATION_PARENT = "PARENT",
    RELATION_GRANDPARENT = "GRANDPARENT",
    RELATION_DISTANT_RELATIVE = "DISTANT_RELATIVE",
    RELATION_ACQUAINTANCE = "ACQUAINTANCE",
    RELATION_FRIEND = "FRIEND",
    RELATION_BEST_FRIEND = "BEST_FRIEND",
    RELATION_RIVAL = "RIVAL",
    RELATION_PARTNER = "PARTNER",
    RELATION_NEIGHBOR = "NEIGHBOR",
}

export enum PresetEnum {
    PRESET_DEFAULT = "default",
    PRESET_MORROWIND = "morrowind"
}