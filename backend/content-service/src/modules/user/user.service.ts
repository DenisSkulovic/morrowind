// TODO will most likely move to a different microservice, but for now - it be here

import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, Repository } from "typeorm";
import { User } from "./entities/User";
import { DataSourceEnum } from "../../common/enum/DataSourceEnum";


export interface IUserService {
    findUser(userId: string, source: DataSourceEnum): Promise<User | null>
    create(data: any, source: DataSourceEnum): Promise<User[]>
}

@Injectable()
export class UserService implements IUserService {
    constructor(
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_WORLD) private readonly worldDataSource: DataSource,
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_CAMPAIGN) private readonly campaignDataSource: DataSource,
    ) { }

    private getDataSource(source: DataSourceEnum): DataSource {
        return source === DataSourceEnum.DATA_SOURCE_WORLD ? this.worldDataSource : this.campaignDataSource;
    }

    protected getRepository(source: DataSourceEnum): Repository<User> {
        return this.getDataSource(source).getRepository(User);
    }

    public async findUser(userId: string, source: DataSourceEnum): Promise<User | null> {
        const userRepository = this.getRepository(source)
        const users: User[] = await userRepository.find({ where: { id: userId } })
        const user: User | null = users[0] || null
        return user
    }

    public async create(data: any, source: DataSourceEnum): Promise<User[]> {
        const userRepository: Repository<User> = this.getRepository(source)
        const entity: User[] = userRepository.create(data);
        return await userRepository.save(entity);
    }
}