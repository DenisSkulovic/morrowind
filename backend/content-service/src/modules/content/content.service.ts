import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, FindOptionsWhere, Repository, Like } from 'typeorm';
import { ContentEntityMapService } from '../../CONTENT_ENTITY_MAP';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { ContentBase } from '../../ContentBase';
import { WorldService } from '../world/world.service';
import { SearchQuery } from '../../class/search/SearchQuery';
import { Context } from '../../class/Context';
import { ContentStatDTO } from '../../proto/content';
import { QueryFilterOperatorEnum } from '../../class/search/QueryFilter';
import { EntityEnum } from '../../common/enum/EntityEnum';
import { EntityConstructor } from '../../types';
import { sanitizeEntityName } from '../../util/sanitizeEntityName';
import { ContentStat } from '../../class/ContentStat';
import { Serializer } from '../../serializer';
import { World } from '../world/entities/World';
import { User } from '../user/entities/User';
import { Campaign } from '../campaign/entities/Campaign';

type DynamicWhere<T> = FindOptionsWhere<T> & {
    [key: string]: any;
};

export class ContentSearchResult<T> {
    results!: T[];
    totalResults!: number;
    totalPages!: number;
    currentPage!: number;

    static build<T>(body: any) {
        const result = new ContentSearchResult<T>();
        Object.assign(result, body);
        return result;
    }
}

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
        const entityNameEnum: EntityEnum = sanitizeEntityName(entityName)
        const entityConstructor: EntityConstructor<T> = ContentEntityMapService.getEntityConstructor<T>(entityNameEnum)
        if (!entityConstructor) {
            throw new Error(`Entity "${entityName}" not found in CONTENT_ENTITY_MAP.`);
        }
        return this.getDataSource(source).getRepository(entityConstructor);
    }

    async create(entityName: string, entity: T, source: DataSourceEnum, userId: string, worldId: string, campaignId?: string): Promise<any> {
        const repository = this.getRepository(entityName, source);
        entity.world = { id: worldId } as World
        entity.user = { id: userId } as User
        if (campaignId) entity.campaign = { id: campaignId } as Campaign
        console.log(`[ContentService] create`, entity)

        return await repository.save(entity);
    }

    async update(entityName: string, entity: T, userId: string, worldId: string, campaignId?: string): Promise<any> {
        const repository = this.getRepository(entityName, DataSourceEnum.DATA_SOURCE_WORLD);
        entity.world = { id: worldId } as World
        entity.user = { id: userId } as User
        if (campaignId) entity.campaign = { id: campaignId } as Campaign
        console.log(`[ContentService] update`, entity)
        return await repository.save(entity);
    }

    async delete(entityName: string, id: string, userId: string, worldId: string, campaignId?: string): Promise<void> {
        const repository = this.getRepository(entityName, DataSourceEnum.DATA_SOURCE_WORLD);
        const where: any = {
            id,
            user: { id: userId },
            world: { id: worldId },
        };
        if (campaignId) where.campaign = { id: campaignId };
        console.log(`[ContentService] delete`, where)
        await repository.delete(where);
    }

    async search(entityName: string, query: SearchQuery, userId: string, worldId: string, campaignId?: string): Promise<ContentSearchResult<T>> {
        console.log(`[ContentService] search`, entityName, query, userId, worldId, campaignId)
        const repository = this.getRepository(entityName, DataSourceEnum.DATA_SOURCE_WORLD);

        // Build where clause from query filters
        const where: any = {
            user: { id: userId },
            world: { id: worldId }
        };
        if (campaignId) where.campaign = { id: campaignId };

        if (query.filters) {
            for (const filter of query.filters) {
                where[filter.field] = {};
                switch (filter.operator) {
                    case QueryFilterOperatorEnum.EQUAL:
                        if (!["string", "number"].includes(typeof filter.value)) throw new Error(`Filter value for EQUAL must be a string or number, got ${typeof filter.value}`);
                        where[filter.field] = filter.value;
                        break;
                    case QueryFilterOperatorEnum.NOT_EQUAL:
                        if (!["string", "number"].includes(typeof filter.value)) throw new Error(`Filter value for NOT_EQUAL must be a string or number, got ${typeof filter.value}`);
                        where[filter.field] = { not: filter.value };
                        break;
                    case QueryFilterOperatorEnum.GREATER_THAN:
                        if (!["number"].includes(typeof filter.value)) throw new Error(`Filter value for GREATER_THAN must be a string, got ${typeof filter.value}`);
                        where[filter.field] = { gt: filter.value };
                        break;
                    case QueryFilterOperatorEnum.GREATER_THAN_OR_EQUAL:
                        if (!["number"].includes(typeof filter.value)) throw new Error(`Filter value for GREATER_THAN_OR_EQUAL must be a number, got ${typeof filter.value}`);
                        where[filter.field] = { gte: filter.value };
                        break;
                    case QueryFilterOperatorEnum.LESS_THAN:
                        if (!["number"].includes(typeof filter.value)) throw new Error(`Filter value for LESS_THAN must be a number, got ${typeof filter.value}`);
                        where[filter.field] = { lt: filter.value };
                        break;
                    case QueryFilterOperatorEnum.LESS_THAN_OR_EQUAL:
                        if (!["number"].includes(typeof filter.value)) throw new Error(`Filter value for LESS_THAN_OR_EQUAL must be a number, got ${typeof filter.value}`);
                        where[filter.field] = { lte: filter.value };
                        break;
                    case QueryFilterOperatorEnum.CONTAINS:
                        if (!["string"].includes(typeof filter.value)) throw new Error(`Filter value for CONTAINS must be a string, got ${typeof filter.value}`);
                        where[filter.field] = Like(`%${filter.value}%`);
                        break;
                    case QueryFilterOperatorEnum.REGEX:
                        if (!["string"].includes(typeof filter.value)) throw new Error(`Filter value for REGEX must be a string, got ${typeof filter.value}`);
                        where[filter.field] = { regex: filter.value };
                        break;
                }
            }
        }

        // Build order options from sortBy
        const order: any = {};
        if (query.sortBy) {
            order[query.sortBy.field] = query.sortBy.direction;
        }

        const skip = (query.page - 1) * query.pageSize
        const take = query.pageSize
        console.log(`[ContentService] search where, order, skip, take`, where, order, skip, take)
        const [results, total] = await repository.findAndCount({
            where,
            order,
            skip,
            take
        });

        const result = new ContentSearchResult<T>();
        result.results = results;
        result.totalResults = total;
        result.totalPages = Math.ceil(total / query.pageSize);
        result.currentPage = query.page;
        return result;
    }

    async createBulk(entityName: string, entities: T[], source: DataSourceEnum): Promise<T[]> {
        const repository = this.getRepository(entityName, source);
        return await repository.save(entities);
    }

    async updateBulk(entityName: string, entities: T[], userId: string, worldId: string, campaignId?: string): Promise<T[]> {
        const repository = this.getRepository(entityName, DataSourceEnum.DATA_SOURCE_WORLD);
        return await repository.save(entities);
    }

    async deleteBulk(entityName: string, ids: string[], userId: string, worldId: string, campaignId?: string): Promise<void> {
        const repository = this.getRepository(entityName, DataSourceEnum.DATA_SOURCE_WORLD);
        await repository.delete(ids);
    }

    async getStats(entityNames: EntityEnum[], userId: string, worldId: string, campaignId?: string): Promise<ContentStat[]> {
        const stats: ContentStat[] = [];
        for (const entityName of entityNames) {
            const repository = this.getRepository(entityName, DataSourceEnum.DATA_SOURCE_WORLD);
            const where: any = {
                user: { id: userId },
                world: { id: worldId }
            };
            if (campaignId) where.campaign = { id: campaignId };
            const count = await repository.count({ where });
            const stat: ContentStat = ContentStat.build({
                title: entityName,
                type: entityName,
                count: count,
                icon: '',
                entity: entityName,
            })
            stats.push(stat);
        }
        return stats
    }
}
