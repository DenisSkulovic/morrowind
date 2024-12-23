import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, FindManyOptions, FindOptionsWhere, Repository } from 'typeorm';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { ActivityRecord } from './entities/ActivityRecord';
import { SearchQuery } from '../../class/search/SearchQuery';

export interface IActivityService {
    create(data: any, userId: string, worldId: string, source: DataSourceEnum): Promise<ActivityRecord[]>
    search(source: DataSourceEnum, userId: string, worldId: string, search?: SearchQuery): Promise<{ activities: ActivityRecord[], totalResults: number, totalPages: number, currentPage: number }>
    clearAll(source: DataSourceEnum, userId: string, worldId: string): Promise<void>
}

@Injectable()
export class ActivityService implements IActivityService {
    constructor(
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_WORLD) private readonly worldDataSource: DataSource,
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_CAMPAIGN) private readonly campaignDataSource: DataSource,
    ) { }

    private getDataSource(source: DataSourceEnum): DataSource {
        return source === DataSourceEnum.DATA_SOURCE_WORLD ? this.worldDataSource : this.campaignDataSource;
    }

    getRepository(source: DataSourceEnum): Repository<ActivityRecord> {
        return this.getDataSource(source).getRepository(ActivityRecord);
    }

    async create(data: any, userId: string, worldId: string, source: DataSourceEnum): Promise<ActivityRecord[]> {
        const repository = this.getRepository(source);
        const entity = repository.create({
            ...data,
            user: { id: userId },
            world: { id: worldId },
            createdAt: new Date()
        });
        return await repository.save(entity);
    }

    async clearAll(source: DataSourceEnum, userId: string, worldId: string): Promise<void> {
        const repository = this.getRepository(source);
        await repository.delete({
            user: { id: userId },
            world: { id: worldId }
        });
    }

    async search(
        source: DataSourceEnum,
        userId: string,
        worldId: string,
        search?: SearchQuery
    ): Promise<{ activities: ActivityRecord[], totalResults: number, totalPages: number, currentPage: number }> {
        const pageSize = search?.pageSize || 10;
        const page = search?.page || 1;

        const where: FindOptionsWhere<ActivityRecord> | FindOptionsWhere<ActivityRecord>[] = {
            user: { id: userId },
            world: { id: worldId }
        };
        const findOptions: FindManyOptions<ActivityRecord> = {
            where,
            skip: (page - 1) * pageSize,
            take: pageSize,
            order: search?.sortBy
                ? { [search.sortBy.field]: search.sortBy.direction }
                : { createdAt: 'DESC' }
        };

        if (search?.filters) {
            search.filters.forEach(filter => {
                if (filter.operator === 'eq') {
                    (where as any)[filter.field] = filter.value;
                }
            });
        }

        const [activities, total] = await this.getRepository(source).findAndCount(findOptions);
        const totalPages = Math.ceil(total / pageSize);

        return {
            activities,
            totalResults: total,
            totalPages,
            currentPage: page
        };
    }
}