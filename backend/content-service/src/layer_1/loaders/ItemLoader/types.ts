
export abstract class ItemJSONObj {
    id: string;
    name: string;
    description: string;
    weight: number;
    value: number;
    abstract targetEntity: string;
}

export abstract class WeaponJSONObj extends ItemJSONObj {
    magical: boolean;
    damage: string;
    damage_type: "Slashing" | "Piercing" | "Bludgeoning";
    two_handed: boolean;
    finesse: boolean;
    heavy: boolean;
    light: boolean;
    targetEntity: "ItemWeaponShortSword" | "ItemWeaponLongSword";
};

export abstract class ClothingJSONObj extends ItemJSONObj {
    magical: boolean;
    armor_class: number;
    stealth_disadvantage?: boolean; // Optional, as not all clothing includes this
    strength_requirement?: number; // Optional, as not all clothing includes this
    targetEntity: "ItemWearableCuirass" | "ItemWearableHelmet";
};

export abstract class AlcoholJSONObj extends ItemJSONObj {
    magical: boolean;
    thirst_quenched: number; // Negative values for dehydration
    intoxication: number; // Level of intoxication caused
    mood_boost: number; // Positive effect on mood
    targetEntity: "ItemAlcohol";
};

export abstract class DrinkJSONObj extends ItemJSONObj {
    magical: boolean;
    thirst_quenched: number; // Positive values for hydration
    refills?: number; // Optional, for refillable containers
    targetEntity: "ItemDrink";
};

export abstract class FoodJSONObj extends ItemJSONObj {
    magical: boolean;
    nutrition: number; // Nutritional value provided
    spoilage: number; // Time before spoilage (in hours)
    targetEntity: "ItemFood";
};

export abstract class MiscJSONObj extends ItemJSONObj {
    magical: boolean;
    use?: string; // Optional, describes the item's use or purpose
    durability?: number; // Optional, represents the item's durability
    targetEntity: "ItemMisc";
};

export type ItemBlueprintKind = "alcohol" | "clothing" | "drink" | "food" | "misc" | "weapons" // must match names of the .json files

export const interfaceMap = {
    "alcohol": AlcoholJSONObj,
    "clothing": ClothingJSONObj,
    "drink": DrinkJSONObj,
    "food": FoodJSONObj,
    "misc": MiscJSONObj,
    "weapons": WeaponJSONObj,
}