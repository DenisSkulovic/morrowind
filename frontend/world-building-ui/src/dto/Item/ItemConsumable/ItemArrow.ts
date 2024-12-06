import { Serializable } from "../../../decorator/serializable.decorator";
import { ItemConsumable } from "./ItemConsumable";

export class ItemArrow extends ItemConsumable {
    @Serializable()
    damagePierce!: string;

}