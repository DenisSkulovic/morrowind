import { Serializable } from "../../../../decorator/serializable.decorator";
import { ItemConsumable } from "../ItemConsumable";

export class ItemDrinkable extends ItemConsumable {
    @Serializable()
    drinkable!: boolean;
}
