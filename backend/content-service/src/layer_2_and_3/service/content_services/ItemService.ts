import { DataSource, EntityManager, Repository } from "typeorm";
import { DataSourceEnum } from "../../../enum/DataSourceEnum";
import { RepositoryServiceBase, RepositoryServiceSettings } from "../RepositoryServiceBase";
import { WorldDataSource } from "../../../data-source";
import { Item } from "../../../entities/Content/Item/Item";
import { ItemSet } from "../../../entities/Content/ItemSet";
import { ItemGenerator } from "../../generator/ItemGenerator";
import { ItemGenInstruction, ItemSetInstruction } from "../../../layer_1/types";
import { ItemSetGenerator } from "../../generator/ItemSetGenerator";

export class ItemService extends RepositoryServiceBase {
    constructor(settings: RepositoryServiceSettings) {
        super(settings)
    }

    protected _getItemRepo(source: DataSourceEnum): Repository<Item> {
        return this.getRepository("Item", source) as Repository<Item>
    }

    public async createItems(instructions: ItemGenInstruction[], source: DataSourceEnum): Promise<Item[]> {
        const items = instructions.map((instruction) => ItemGenerator.generateItem(instruction))
        const itemRepo = this._getItemRepo(source)
        const res: Item[] = await itemRepo.save(items)
        return res
    }

    public async createItemsFromSet(setInstructions: ItemSetInstruction[], source: DataSourceEnum): Promise<Item[]> {
        const items = setInstructions.map(setInstruction => ItemSetGenerator.generateItemsFromSet(setInstruction)).flat()
        const itemRepo = this._getItemRepo(source)
        const res: Item[] = await itemRepo.save(items)
        return items
    }

    public async mergeTwoItems<T extends Item>(item1: T, item2: T, source: DataSourceEnum): Promise<T> {
        if (!item1.stackable || !item2.stackable) throw new Error("Items are not stackable and cannot be merged.");
        if (item1.blueprint_id !== item2.blueprint_id) throw new Error("Items must have the same blueprint ID to be merged.");

        const dataSource: DataSource | undefined = this.settings.sourcesMap.get(source)
        if (!dataSource) throw new Error(`failed to find data source for "${source}"`)
        return await dataSource.transaction(async (transactionManager: EntityManager) => {
            item1.quantity += item2.quantity;
            const mergedItem = await transactionManager.save(item1);
            await transactionManager.remove(item2);
            return mergedItem;
        });
    }
}