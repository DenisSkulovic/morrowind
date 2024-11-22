import { DataSource, EntityManager, Repository } from "typeorm";
import { DataSourceEnum } from "../../enum/DataSourceEnum";
import { RepositoryServiceBase, RepositoryServiceSettings } from "./RepositoryServiceBase";
import { Item } from "../../entities/Content/Item/Item";
import { ItemGenerator } from "../generator/ItemGenerator";
import { BlueprintGenInstruction_Gaussian, BlueprintSetInstruction } from "../../layer_1/types";
import { BlueprintSetProcessor } from "./BlueprintSetProcessor";
import { IdAndQuant } from "../generator/AbstractProbGenerator";

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