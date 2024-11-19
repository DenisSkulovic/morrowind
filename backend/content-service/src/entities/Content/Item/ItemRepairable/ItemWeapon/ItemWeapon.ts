import { ChildEntity, Column } from "typeorm";
import { ItemRepairable } from "../ItemRepairable";

@ChildEntity()
export class ItemWeapon extends ItemRepairable {
    id_prefix = "ITEM_WEAPON";

    @Column({type: "varchar", nullable: true})
    damage_slash?: string;

    @Column({type: "varchar", nullable: true})
    damage_pierce?: string;

    @Column({type: "varchar", nullable: true})
    damage_blunt?: string;

    @Column({ nullable: true })
    range?: string; // Range in feet for ranged weapons, e.g., "30/120".

    @Column({ default: false })
    two_handed!: boolean; // Whether the weapon requires two hands.

}
