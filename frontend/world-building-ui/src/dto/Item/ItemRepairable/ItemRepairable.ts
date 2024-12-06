import { Serializable } from "../../../decorator/serializable.decorator";
import { Item } from "../Item";

export class ItemRepairable extends Item {
    @Serializable()
    repairable!: boolean;

    @Serializable()
    durability!: number;

    @Serializable()
    maxDurability!: number;
}
