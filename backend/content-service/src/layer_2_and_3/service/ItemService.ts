import { DataSource, EntityManager, Repository } from "typeorm";
import { DataSourceEnum } from "../../enum/DataSourceEnum";
import { RepositoryServiceBase, RepositoryServiceSettings } from "./RepositoryServiceBase";
import { Item } from "../../entities/Content/Item/Item";
import { ItemGenerator } from "../generator/ItemGenerator";
import {  BlueprintSetInstruction } from "../../layer_1/types";
import { BlueprintSetProcessor } from "./InstructionProcessor";
import { IdAndQuant, BlueprintGenInstruction_Gaussian } from "../../class/blueprint_id_and_prob";

export class ItemService extends RepositoryServiceBase {
    constructor(settings: RepositoryServiceSettings) {
        super(settings)
    }

    protected _getItemRepo(source: DataSourceEnum): Repository<Item> {
        return this.getRepository("Item", source) as Repository<Item>
    }

    public async createItems(idAndQuant: IdAndQuant, source: DataSourceEnum): Promise<Item[]>;
    public async createItems(idAndQuants: IdAndQuant[], source: DataSourceEnum): Promise<Item[]>;
    public async createItems(arg1: IdAndQuant | IdAndQuant[], source: DataSourceEnum): Promise<Item[]> {
        const dataSource = this.settings.sourcesMap.get(source)
        if (!dataSource) throw new Error("dataSource cannot be undefined")
        const itemGenerator = new ItemGenerator(dataSource)
        const items: Item[] = Array.isArray(arg1) ? await itemGenerator.generateMany(arg1) : await itemGenerator.generateMany([arg1])
        const repository: Repository<Item> = this._getItemRepo(source)
        return await repository.save(items);
    }

    // TODO make this an overload of createItems
    public async createItems_probGaussian(instructions: BlueprintGenInstruction_Gaussian[], source: DataSourceEnum): Promise<Item[]> {
        const dataSource = this.settings.sourcesMap.get(source)
        if (!dataSource) throw new Error("dataSource cannot be undefined")
        const itemGenerator = new ItemGenerator(dataSource)
        const items: Item[] = await itemGenerator.generateMany_probGaussian(instructions)
        const itemRepo: Repository<Item> = this._getItemRepo(source)
        const res: Item[] = await itemRepo.save(items)
        return res
    }

    // TODO make this an overload of createItems
    public async createItemsFromSet(sets: BlueprintSetInstruction[], source: DataSourceEnum): Promise<Item[]> {
        const dataSource = this.settings.sourcesMap.get(source)
        if (!dataSource) throw new Error("dataSource cannot be undefined")
        const itemGenerator = new ItemGenerator(dataSource)
        const instructions: BlueprintGenInstruction_Gaussian[] = sets.map((set) => BlueprintSetProcessor.getInstructionsFromSet(set)).flat()
        const items: Item[] = await itemGenerator.generateMany_probGaussian(instructions)
        const itemRepo: Repository<Item> = this._getItemRepo(source)
        return await itemRepo.save(items)
    }

    public async balanceStackableItems<T extends Item>(items: T[], source: DataSourceEnum): Promise<T[]> {
        if (items.length === 0) throw new Error("No items provided for balancing.");
    
        const blueprintId = items[0].blueprint_id;
        if (!items.every(item => item.stackable && item.blueprint_id === blueprintId)) {
            throw new Error("All items must be stackable and have the same blueprint ID.");
        }
    
        const maxQuantity = items[0].maxQuantity;
        if (!maxQuantity) throw new Error("Item does not define a maxQuantity.");
    
        const dataSource: DataSource | undefined = this.settings.sourcesMap.get(source);
        if (!dataSource) throw new Error(`Failed to find data source for "${source}"`);
    
        return await dataSource.transaction(async (transactionManager: EntityManager) => {
            const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);
    
            const fullStacks = Math.floor(totalQuantity / maxQuantity);
            const remainder = totalQuantity % maxQuantity;
    
            const balancedItems: T[] = [];
    
            // Create full stacks
            for (let i = 0; i < fullStacks; i++) {
                const newItem = items[0]; // Clone the first item to create a new instance
                newItem.quantity = maxQuantity;
                balancedItems.push(await transactionManager.save(newItem));
            }
    
            // Handle the remainder
            if (remainder > 0) {
                const newItem = items[0]; // Clone the first item to create a new instance
                newItem.quantity = remainder;
                balancedItems.push(await transactionManager.save(newItem));
            }
    
            // Remove old items
            for (const item of items) {
                await transactionManager.remove(item);
            }
    
            return balancedItems;
        });
    }

}