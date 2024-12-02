import { ChildEntity, Column } from "typeorm";
import { ItemConsumable } from "../ItemConsumable";
import { Serializable } from "../../../../../../decorator/serializable.decorator";

@ChildEntity()
export class ItemDrinkable extends ItemConsumable {
    id_prefix = "ITEM_DRINKABLE";

    @Column({ default: true })
    @Serializable()
    drinkable!: boolean;
}
