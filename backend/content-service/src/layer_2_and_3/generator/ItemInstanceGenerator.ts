import { DataSource, EntityManager, Repository } from "typeorm";
import { WorldDataSource } from "../../data-source";
import { Item } from "../../entities/Content/Item/Item";
import { ItemGenInstruction } from "../../layer_1/types";
import { randomUUID } from "crypto";

export class ItemInstanceService {
    dataSource: DataSource
    itemRepository: Repository<Item>

    constructor(dataSource: DataSource) {
        this.dataSource = dataSource
        this.itemRepository = dataSource.getRepository(Item);
    }

    /**
     * Creates an Item instance based on item definition.
     */
    public generateItem(
        item: ItemGenInstruction,
        quantity: number
    ): Item {
        const entity: Item = this.itemRepository.create({ id: item.item_blueprint_id });
        entity.quantity = quantity;
        entity.instance_id = `${entity.id}_${randomUUID().replace(/-/g, "")}`
        return entity;
    }

    /**
     * Merges two items if they are compatible.
     */
    public static async merge<T extends Item>(item1: T, item2: T): Promise<T> {
        if (!item1.stackable || !item2.stackable) throw new Error("Items are not stackable and cannot be merged.");
        if (item1.id !== item2.id) throw new Error("Items must have the same blueprint ID to be merged.");

        return await WorldDataSource.transaction(async (transactionManager: EntityManager) => {
            item1.quantity += item2.quantity;
            const mergedItem = await transactionManager.save(item1);
            await transactionManager.remove(item2);
            return mergedItem;
        });
    }

}
