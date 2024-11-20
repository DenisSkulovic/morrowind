import { FindOneOptions, Repository } from "typeorm";
import { DataSourceEnum } from "../../../enum/DataSourceEnum";
import { RepositoryServiceBase, RepositoryServiceSettings } from "../RepositoryServiceBase";
import { Background } from "../../../entities/Content/Background"

export class BackgroundService extends RepositoryServiceBase {
    constructor(settings: RepositoryServiceSettings) {
        super(settings)
    }

    protected _getBackgroundRepo(source: DataSourceEnum): Repository<Background> {
        return this.getRepository("Background", source) as Repository<Background>
    }

    public async findOneBackground(options: FindOneOptions<Background>, source: DataSourceEnum) {
        const backgroundRepository: Repository<Background> = this._getBackgroundRepo(source)
        return backgroundRepository.findOne(options)
    }
}