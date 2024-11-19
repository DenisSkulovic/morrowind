import { ChildEntity, Column } from "typeorm";
import { ItemRepairable } from "../ItemRepairable";

@ChildEntity()
export class ItemWearable extends ItemRepairable {
    id_prefix = "ITEM_WEARABLE"

    @Column({default: null, nullable: true})
    armor_class!: number | null; // AC provided to that body part.

    @Column({default: 0})
    durability!: number;

    @Column({default: 0})
    maxDurability!: number;

    @Column({ nullable: true })
    stealth_disadvantage?: boolean; // Whether wearing the armor imposes disadvantage on Stealth checks.

}
