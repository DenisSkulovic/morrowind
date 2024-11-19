import { ChildEntity, Column } from "typeorm";
import { ItemConsumable } from "./ItemConsumable";

@ChildEntity()
export class ItemArrow extends ItemConsumable {
    id_prefix = "ITEM_ARROW";

    @Column({nullable: false})
    damage_pierce: string;

    @Column({default: true})
    stackable: boolean;

}