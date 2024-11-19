import { ChildEntity, Column } from "typeorm";
import { Item } from "../Item";

@ChildEntity()
export class ItemRepairable extends Item {
    id_prefix = "ITEM_REPAIRABLE";

    @Column({default: true})
    repairable!: boolean;

    @Column({default: 0})
    durability!: number;

    @Column({default: 0})
    maxDurability!: number;
}
