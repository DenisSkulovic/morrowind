// TODO will most likely move to a different microservice, but for now - it be here

import { DataSource, Repository } from "typeorm";
import { sourcesMap } from "../../data-source";
import { User } from "../../entities/User";
import { DataSourceEnum } from "../../enum/DataSourceEnum";
import { RepositoryServiceBase, RepositoryServiceSettings } from "./RepositoryServiceBase";


export class UserService extends RepositoryServiceBase {
    constructor(settings: RepositoryServiceSettings) {
        super(settings)
    }

    protected _getUserRepo(source: DataSourceEnum): Repository<User> {
        const dataSource: DataSource | undefined = sourcesMap.get(source)
        if (!dataSource) throw new Error(`could not extract data source for source: "${source}"`)
        return dataSource.getRepository(User)
    }

    public async findUser(userId: string, source: DataSourceEnum): Promise<User | null> {
        const userRepository: Repository<User> = this._getUserRepo(source)
        const users: User[] = await userRepository.find({ where: { id: userId } })
        const user: User | null = users[0] || null
        return user
    }
}