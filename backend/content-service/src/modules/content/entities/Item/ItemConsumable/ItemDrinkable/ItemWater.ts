import { ChildEntity, Column } from "typeorm";
import { ItemDrinkable } from "./ItemDrinkable";
import { Serializable } from "../../../../../../decorator/serializable.decorator";

@ChildEntity()
export class ItemWater extends ItemDrinkable {
    id_prefix = "ITEM_WATER";

    @Column({ default: 0 })
    @Serializable()
    thirst_quenched!: number; // Amount of thirst satisfied.
}
