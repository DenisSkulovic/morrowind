import { ChildEntity, Column } from "typeorm";
import { ItemWearable } from "./ItemWearable";

@ChildEntity()
export class ItemWearableCuirass extends ItemWearable {
    id_prefix = "ITEM_WEARABLE_CUIRASS";

    @Column()
    armor_class: number; // Base AC provided by the armor.

    @Column({ nullable: true })
    stealth_disadvantage?: boolean; // Whether wearing the armor imposes disadvantage on Stealth checks.

    @Column({ nullable: true })
    strength_requirement?: number; // Minimum Strength score required to wear the armor.
}
