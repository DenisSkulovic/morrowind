import { Item } from "../../entities/Content/Item/Item";
import { ItemGenInstruction } from "../../layer_1/types";
import { randomUUID } from "crypto";

export class ItemGenerator {

    public static generateItem(
        instruction: ItemGenInstruction
    ): Item {
        const entity: Item = Item.create({ id: instruction.item_blueprint_id });
        entity.quantity = this._calcQuant(instruction);
        entity.instance_id = `${entity.id}_${randomUUID().replace(/-/g, "")}`
        return entity;
    }

    private static _calcQuant(
        item: ItemGenInstruction
    ): number {
        const avg = item.avg_quan || 1;
        const stDev = item.st_dev || 0;
        const skew = item.skew || 0;

        const randomValue = this._skewedRandom(stDev, skew);
        return Math.max(1, Math.round(avg + randomValue));
    }

    private static _skewedRandom(stDev: number, skew: number): number {
        if (stDev === 0) return 0 // exit before any unnecessary computations
        const u = Math.random();
        const v = Math.random();
        const z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        return z * stDev + skew;
    }

}
