import { ChildEntity, Column } from "typeorm";
import { ItemConsumable } from "../ItemConsumable";
import { Serializable } from "../../../../../../decorator/serializable.decorator";

@ChildEntity()
export class ItemEdible extends ItemConsumable {
    idPrefix = "ITEM_EDIBLE";

    @Column({ default: true })
    @Serializable()
    edible!: boolean;
}
