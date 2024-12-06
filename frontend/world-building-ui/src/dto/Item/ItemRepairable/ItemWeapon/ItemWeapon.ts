import { Serializable } from "../../../../decorator/serializable.decorator";
import { ItemRepairable } from "../ItemRepairable";

export class ItemWeapon extends ItemRepairable {
    @Serializable()
    damageSlash?: string;

    @Serializable()
    damagePierce?: string;

    @Serializable()
    damageBlunt?: string;

    @Serializable()
    range?: string; // Range in feet for ranged weapons, e.g., "30/120".

    @Serializable()
    twoHanded!: boolean; // Whether the weapon requires two hands.

}
