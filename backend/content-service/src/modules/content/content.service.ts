import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, EntityTarget, FindOptionsWhere, Repository } from 'typeorm';
import { CONTENT_ENTITY_MAP } from '../../CONTENT_ENTITY_MAP';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { ContentBase } from '../../ContentBase';
import { MakeSureWorldIsNotFrozen } from '../../decorator/MakeSureWorldIsNotFrozen';
import { WorldService } from '../world/world.service';
import { ContentStat } from '../../class/ContentStat';
import { SearchQuery } from '../../class/search/SearchQuery';
import { Context } from '../../class/Context';
import { ContentStatDTO } from '../../proto/content';
import { World } from '../world/entities/World';

type DynamicWhere<T> = FindOptionsWhere<T> & {
    [key: string]: any;
};

@Injectable()
export class ContentService<T extends ContentBase> {
    constructor(
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_WORLD) private readonly worldDataSource: DataSource,
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_CAMPAIGN) private readonly campaignDataSource: DataSource,
        @Inject(forwardRef(() => WorldService)) private worldService: WorldService,
    ) { }

    private getDataSource(source: DataSourceEnum): DataSource {
        return source === DataSourceEnum.DATA_SOURCE_WORLD ? this.worldDataSource : this.campaignDataSource;
    }

    public getRepository(entityName: string, source: DataSourceEnum): Repository<T> {
        const entity: EntityTarget<T> = CONTENT_ENTITY_MAP[entityName] as EntityTarget<T>;
        if (!entity) {
            throw new Error(`Entity "${entityName}" not found in CONTENT_ENTITY_MAP.`);
        }
        return this.getDataSource(source).getRepository(entity);
    }

    async create(entityName: string, entity: T, source: DataSourceEnum): Promise<any> {
        const repository = this.getRepository(entityName, source);
        return await repository.save(entity);
    }

    async update(entityName: string, entity: T, context: Context): Promise<any> {
        const repository = this.getRepository(entityName, DataSourceEnum.DATA_SOURCE_WORLD);
        return await repository.save(entity);
    }

    async delete(entityName: string, id: string, context: Context): Promise<void> {
        const repository = this.getRepository(entityName, DataSourceEnum.DATA_SOURCE_WORLD);
        await repository.delete(id);
    }
    async search(entityName: string, query: SearchQuery, context: Context): Promise<any> {
        const repository = this.getRepository(entityName, DataSourceEnum.DATA_SOURCE_WORLD);

        // Build where clause from query filters
        const where: any = {};
        if (query.filters) {
            for (const filter of query.filters) {
                where[filter.field] = {};
                switch (filter.operator) {
                    case 'eq':
                        where[filter.field] = filter.value;
                        break;
                    case 'neq':
                        where[filter.field] = { not: filter.value };
                        break;
                    case 'gt':
                        where[filter.field] = { gt: filter.value };
                        break;
                    case 'gte':
                        where[filter.field] = { gte: filter.value };
                        break;
                    case 'lt':
                        where[filter.field] = { lt: filter.value };
                        break;
                    case 'lte':
                        where[filter.field] = { lte: filter.value };
                        break;
                    case 'contains':
                        where[filter.field] = { contains: filter.value };
                        break;
                    case 'regex':
                        where[filter.field] = { regex: filter.value };
                        break;
                }
            }

            // Build order options from sortBy
            const order: any = {};
            if (query.sortBy) {
                order[query.sortBy.field] = query.sortBy.direction;
            }

            const [results, total] = await repository.findAndCount({
                where,
                order,
                skip: (query.page - 1) * query.pageSize,
                take: query.pageSize
            });

            return {
                results,
                totalResults: total,
                totalPages: Math.ceil(total / query.pageSize),
                currentPage: query.page
            };
        }
    }

    async createBulk(entityName: string, entities: T[], source: DataSourceEnum): Promise<T[]> {
        const repository = this.getRepository(entityName, source);
        return await repository.save(entities);
    }

    async updateBulk(entityName: string, entities: T[], context: Context): Promise<T[]> {
        const repository = this.getRepository(entityName, DataSourceEnum.DATA_SOURCE_WORLD);
        return await repository.save(entities);
    }

    async deleteBulk(entityName: string, ids: string[], context: Context): Promise<void> {
        const repository = this.getRepository(entityName, DataSourceEnum.DATA_SOURCE_WORLD);
        await repository.delete(ids);
    }
    async getStats(entityNames: string[], context: Context): Promise<ContentStatDTO[]> {
        if (!context.world) throw new Error('World is required');
        const stats: ContentStatDTO[] = [];
        for (const entityName of entityNames) {
            const repository = this.getRepository(entityName, DataSourceEnum.DATA_SOURCE_WORLD);
            const count = await repository.count({
                where: {
                    world: { id: context.world.id }
                } as FindOptionsWhere<T>
            });
            stats.push({
                title: entityName,
                type: entityName,
                count: count,
                icon: ''
            });
        }
        return stats;
    }
}
