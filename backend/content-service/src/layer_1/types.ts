export type BlueprintKind = "alcohol" | "clothing" | "drink" | "food" | "misc" | "weapons" // must match names of the .json files


export type Weapon = {
    name: string;
    description: string;
    weight: number;
    value: number;
    magical: boolean;
    damage: string;
    damage_type: "Slashing" | "Piercing" | "Bludgeoning";
    two_handed: boolean;
    finesse: boolean;
    heavy: boolean;
    light: boolean;
    targetEntity: "ItemWeaponShortSword" | "ItemWeaponLongSword";
};

export type Clothing = {
    name: string;
    description: string;
    weight: number;
    value: number;
    magical: boolean;
    armor_class: number;
    stealth_disadvantage?: boolean; // Optional, as not all clothing includes this
    strength_requirement?: number; // Optional, as not all clothing includes this
    targetEntity: "ItemClothingCuirass" | "ItemClothingHelmet";
};

export type Alcohol = {
    name: string;
    description: string;
    weight: number;
    value: number;
    magical: boolean;
    thirst_quenched: number; // Negative values for dehydration
    intoxication: number; // Level of intoxication caused
    mood_boost: number; // Positive effect on mood
    targetEntity: "ItemAlcohol";
};

export type Drink = {
    name: string;
    description: string;
    weight: number;
    value: number;
    magical: boolean;
    thirst_quenched: number; // Positive values for hydration
    refills?: number; // Optional, for refillable containers
    targetEntity: "ItemDrink";
};

export type Food = {
    name: string;
    description: string;
    weight: number;
    value: number;
    magical: boolean;
    nutrition: number; // Nutritional value provided
    spoilage: number; // Time before spoilage (in hours)
    targetEntity: "ItemFood";
};

export type Misc = {
    name: string;
    description: string;
    weight: number;
    value: number;
    magical: boolean;
    use?: string; // Optional, describes the item's use or purpose
    durability?: number; // Optional, represents the item's durability
    targetEntity: "ItemMisc";
};