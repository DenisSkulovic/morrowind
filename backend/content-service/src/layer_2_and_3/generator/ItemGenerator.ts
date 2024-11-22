



import { Item } from "../../entities/Content/Item/Item";
import { AbstractProbGenerator } from "./AbstractProbGenerator";
import { cloneDeep } from "lodash";

export class ItemGenerator extends AbstractProbGenerator<Item> {

    public async generateOne(
        blueprintId: string
    ): Promise<Item> {
        const cacheExtract: (Item | null)[] = await this._getBlueprints_cacheOrRequest("item", Item, [blueprintId])
        const extractedBlueprint: Item | null = cacheExtract[0]
        if (!extractedBlueprint) throw new Error(`could not find Item blueprint for id: "${blueprintId}"`)

        // create clone for safety
        const blueprint: Item = cloneDeep(extractedBlueprint)

        // make sure TypeORM creates a new entry
        delete blueprint.id

        // create an instance with identical params to blueprint; assign instance id
        const instance: Item = Item.create({
            ...blueprint,
        });
        instance.instance_id = this._createInstanceId(blueprintId)

        // TODO assign storage slots, if any

        return instance;
    }

}
