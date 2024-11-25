import { DataSource, Repository } from "typeorm";
import { DataSourceEnum } from "../../enum/DataSourceEnum"
import { EntityConstructor } from "../../types";
import { contentEntityMap } from "../../contentEntityMap";
import { ContentBase } from "../../ContentBase";

export type RepositoryServiceSettings = {
    sourcesMap: Map<DataSourceEnum, DataSource>
}

export class RepositoryServiceBase {
    public settings: RepositoryServiceSettings

    constructor(settings: RepositoryServiceSettings) {
        this.settings = settings
    }

    protected getRepository(targetEntity: string, source: DataSourceEnum): Repository<ContentBase> {
        const dataSource: DataSource | undefined = this.settings.sourcesMap.get(source)
        if (!dataSource) throw new Error(`no data source found for "${source}"`)
        const entity: EntityConstructor<ContentBase> = contentEntityMap[targetEntity];
        return dataSource.getRepository(entity);
    }

}