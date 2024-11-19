import { ChildEntity, Column } from "typeorm";
import { ItemConsumable } from "../ItemConsumable";

@ChildEntity()
export class ItemEdible extends ItemConsumable {
    id_prefix = "ITEM_EDIBLE";

    @Column({default: true})
    edible!: boolean;
}
