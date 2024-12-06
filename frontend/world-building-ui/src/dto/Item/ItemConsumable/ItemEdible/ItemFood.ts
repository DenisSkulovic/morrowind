import { Serializable } from "../../../../decorator/serializable.decorator";
import { ItemConsumable } from "../ItemConsumable";

export class ItemFood extends ItemConsumable {
    @Serializable()
    nutrition!: number; // Amount of hunger satisfied.

    @Serializable()
    spoilage!: number; // Time in hours before the item spoils.
}
