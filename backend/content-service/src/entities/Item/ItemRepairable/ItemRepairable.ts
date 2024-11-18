import { ChildEntity, Column } from "typeorm";
import { Item } from "../Item";

@ChildEntity()
export class ItemRepairable extends Item {
    id_prefix = "ITEM_REPAIRABLE";

    @Column()
    durability: number;

    @Column()
    maxDurability: number;
}
