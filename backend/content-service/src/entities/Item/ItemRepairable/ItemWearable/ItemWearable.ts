import { ChildEntity, Column } from "typeorm";
import { ItemRepairable } from "../ItemRepairable";

@ChildEntity()
export class ItemWearable extends ItemRepairable {
    id_prefix = "ITEM_WEARABLE"

    @Column()
    protection: number; // Protection provided to that body part.

    @Column()
    durability: number;

    @Column()
    maxDurability: number;

}
