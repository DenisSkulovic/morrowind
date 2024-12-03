import { ChildEntity, Column } from "typeorm";
import { ItemDrinkable } from "./ItemDrinkable";
import { Serializable } from "../../../../../../decorator/serializable.decorator";

@ChildEntity()
export class ItemWater extends ItemDrinkable {
    idPrefix = "ITEM_WATER";

    @Column({ default: 0 })
    @Serializable()
    thirstQuenched!: number; // Amount of thirst satisfied.
}
