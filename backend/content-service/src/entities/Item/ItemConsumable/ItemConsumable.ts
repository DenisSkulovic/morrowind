import { ChildEntity, Column } from "typeorm";
import { Item } from "../Item";

@ChildEntity()
export class ItemConsumable extends Item {
    id_prefix = "ITEM_CONSUMABLE";

    @Column({ default: true })
    consumable: boolean;

    @Column({default: true})
    stackable: boolean;

}
