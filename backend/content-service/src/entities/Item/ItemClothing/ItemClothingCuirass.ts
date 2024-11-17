import { ChildEntity, Column } from "typeorm";
import { ItemClothing } from "./ItemClothing";

@ChildEntity()
export class ItemClothingCuirass extends ItemClothing {
    id_prefix = "ITEM_CLOTHING_CUIRASS";

    @Column()
    armor_class: number; // Base AC provided by the armor.

    @Column({ nullable: true })
    stealth_disadvantage?: boolean; // Whether wearing the armor imposes disadvantage on Stealth checks.

    @Column({ nullable: true })
    strength_requirement?: number; // Minimum Strength score required to wear the armor.
}
