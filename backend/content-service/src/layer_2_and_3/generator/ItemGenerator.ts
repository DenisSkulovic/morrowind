



import { Item } from "../../entities/Content/Item/Item";
import { AbstractProbGenerator, IdAndQuant } from "./AbstractProbGenerator";
import { cloneDeep } from "lodash";

enum CacheKeyEnum {
    ITEM = "item",
}

export class ItemGenerator extends AbstractProbGenerator<Item> {

    public async generateOne(idAndQuant: IdAndQuant): Promise<Item> {
        const cacheExtract: (Item | null)[] = await this._getBlueprints_cacheOrRequest(CacheKeyEnum.ITEM, Item, [idAndQuant.blueprint_id])
        const extractedBlueprint: Item | null = cacheExtract[0]
        if (!extractedBlueprint) throw new Error(`could not find Item blueprint for id: "${idAndQuant.blueprint_id}"`)

        // create clone for safety
        const blueprint: Item = cloneDeep(extractedBlueprint)

        // make sure TypeORM creates a new entry
        delete blueprint.id

        // create an instance with identical params to blueprint
        const instance: Item = Item.create({ ...blueprint });

        // assign quantity for stackables
        if (!instance.stackable && instance.quantity > 1) throw new Error(`received generation request with quantity > 1, but entity is not stackable; use "generateMany" and other appropriate methods for non-stackables`)
        if (instance.stackable) instance.quantity = idAndQuant.quantity || 1

        // TODO assign storage slots, if any

        return instance;
    }

}
