import { Serializable } from "../../../../decorator/serializable.decorator";
import { ItemConsumable } from "../ItemConsumable";

export class ItemEdible extends ItemConsumable {
    @Serializable()
    edible!: boolean;
}
