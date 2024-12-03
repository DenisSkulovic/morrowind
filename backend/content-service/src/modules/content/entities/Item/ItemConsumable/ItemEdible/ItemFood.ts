import { ChildEntity, Column } from "typeorm";
import { ItemConsumable } from "../ItemConsumable";
import { Serializable } from "../../../../../../decorator/serializable.decorator";

@ChildEntity()
export class ItemFood extends ItemConsumable {
    idPrefix = "ITEM_FOOD";

    @Column({ default: 0 })
    @Serializable()
    nutrition!: number; // Amount of hunger satisfied.

    @Column({ default: 0 })
    @Serializable()
    spoilage!: number; // Time in hours before the item spoils.
}
