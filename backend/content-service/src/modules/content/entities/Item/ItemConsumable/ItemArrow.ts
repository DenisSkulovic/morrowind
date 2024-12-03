import { ChildEntity, Column } from "typeorm";
import { ItemConsumable } from "./ItemConsumable";
import { Serializable } from "../../../../../decorator/serializable.decorator";

@ChildEntity()
export class ItemArrow extends ItemConsumable {
    idPrefix = "ITEM_ARROW";

    @Column({ default: null, nullable: true })
    @Serializable()
    damagePierce!: string;

    @Column({ default: true })
    @Serializable()
    stackable!: boolean;

}