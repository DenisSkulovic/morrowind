import { ChildEntity, Column } from "typeorm";
import { ItemRepairable } from "../ItemRepairable";
import { Serializable } from "../../../../../../decorator/serializable.decorator";

@ChildEntity()
export class ItemWeapon extends ItemRepairable {
    idPrefix = "ITEM_WEAPON";

    @Column({ type: "varchar", nullable: true })
    @Serializable()
    damageSlash?: string;

    @Column({ type: "varchar", nullable: true })
    @Serializable()
    damagePierce?: string;

    @Column({ type: "varchar", nullable: true })
    @Serializable()
    damageBlunt?: string;

    @Column({ nullable: true })
    @Serializable()
    range?: string; // Range in feet for ranged weapons, e.g., "30/120".

    @Column({ default: false })
    @Serializable()
    twoHanded!: boolean; // Whether the weapon requires two hands.

}