import { Serializable } from "../../../decorator/serializable.decorator";
import { Item } from "../Item";

export class ItemConsumable extends Item {
    @Serializable()
    consumable!: boolean;


}
