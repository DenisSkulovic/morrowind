import { Repository } from "typeorm";
import { ItemSet } from "../../../entities/Content/ItemSet";
import { DataSourceEnum } from "../../../enum/DataSourceEnum";
import { RepositoryServiceBase, RepositoryServiceSettings } from "../RepositoryServiceBase";

export class ItemSetService extends RepositoryServiceBase {
    constructor(settings: RepositoryServiceSettings) {
        super(settings)
    }

    protected _getItemSetRepo(source: DataSourceEnum): Repository<ItemSet> {
        return this.getRepository("ItemSet", source) as Repository<ItemSet>
    }

    // CRUD operations on ItemSet entities, for world building and then using ItemSets during Campaign to generate Items in ItemService

}