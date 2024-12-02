import { ChildEntity, Column } from "typeorm";
import { ItemConsumable } from "./ItemConsumable";
import { Serializable } from "../../../../../decorator/serializable.decorator";

@ChildEntity()
export class ItemArrow extends ItemConsumable {
    id_prefix = "ITEM_ARROW";

    @Column({ default: null, nullable: true })
    @Serializable()
    damage_pierce!: string;

    @Column({ default: true })
    @Serializable()
    stackable!: boolean;

}