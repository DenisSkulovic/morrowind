import { DataSource, Repository } from "typeorm";
import * as entC from "../entities/Content";
import { DataSourceEnum } from "../enum/DataSourceEnum"
import { EntityConstructor } from "../types";

export type ContentServiceSettings = {
    sources: Map<DataSourceEnum, DataSource>
}

export class ContentServiceBase {
    settings: ContentServiceSettings

    constructor(settings: ContentServiceSettings) {
        this.settings = settings
    }

    public getContentRepository(targetEntity: string, source: DataSourceEnum): Repository<entC.ContentBase> {
        const dataSource: DataSource | undefined = this.settings.sources.get(source)
        if (!dataSource) throw new Error(`no data source found for "${source}"`)
        const entity: EntityConstructor<entC.ContentBase> = entC[targetEntity];
        return dataSource.getRepository(entity);
    }

}