import { ChildEntity, Column } from "typeorm";
import { ItemRepairable } from "../ItemRepairable";
import { Serializable } from "../../../../../../decorator/serializable.decorator";

@ChildEntity()
export class ItemWeapon extends ItemRepairable {
    id_prefix = "ITEM_WEAPON";

    @Column({ type: "varchar", nullable: true })
    @Serializable()
    damage_slash?: string;

    @Column({ type: "varchar", nullable: true })
    @Serializable()
    damage_pierce?: string;

    @Column({ type: "varchar", nullable: true })
    @Serializable()
    damage_blunt?: string;

    @Column({ nullable: true })
    @Serializable()
    range?: string; // Range in feet for ranged weapons, e.g., "30/120".

    @Column({ default: false })
    @Serializable()
    two_handed!: boolean; // Whether the weapon requires two hands.

}
