import { Serializable } from "../../../../decorator/serializable.decorator";
import { ItemDrinkable } from "./ItemDrinkable";

export class ItemWater extends ItemDrinkable {
    @Serializable()
    thirstQuenched!: number; // Amount of thirst satisfied.
}
