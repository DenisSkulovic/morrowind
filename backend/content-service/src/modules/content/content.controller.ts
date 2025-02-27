import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ContentSearchResult, ContentService } from './content.service';
import { ContentBase } from '../../ContentBase';
import {
    ContentBodyDTO, CreateContentRequest, CreateContentResponse,
    UpdateContentRequest, UpdateContentResponse, DeleteContentRequest,
    DeleteContentResponse, SearchContentRequest, SearchContentResponse,
    CreateBulkContentRequest, CreateBulkContentResponse, UpdateBulkContentRequest,
    UpdateBulkContentResponse, DeleteBulkContentRequest, DeleteBulkContentResponse,
    GetContentStatsRequest, GetContentStatsResponse,
    ContentStatDTO
} from '../../proto/content';
import { deserializeEnum } from '../../common/enum/util';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { ContentEntityMapService } from '../../CONTENT_ENTITY_MAP';
import { EntityConstructor } from '../../types';
import { Serializer } from '../../serializer';
import { DataSourceEnumDTO } from '../../proto/entities';
import { Context } from '../../class/Context';
import { SearchQuery } from '../../class/search/grpc/SearchQuery';
import { ActivityService } from '../activity/activity.service';
import { ActivityRecord } from '../activity/entities/ActivityRecord';
import { ActivityEventNameEnum } from '../../enum/ActivityEventNameEnum';
import { EntityEnum } from '../../common/enum/EntityEnum';
import { sanitizeEntityName } from '../../util/sanitizeEntityName';
import { ContentStat } from '../../class/ContentStat';
import { World } from '../world/entities/World';
import { User } from '../user/entities/User';

@Controller()
export class ContentController {
    constructor(
        @Inject('IContentService') private readonly contentService: ContentService<ContentBase>,
        @Inject('IActivityService') private readonly activityService: ActivityService,
    ) { }

    @GrpcMethod('ContentService', 'create')
    async create(request: CreateContentRequest): Promise<CreateContentResponse> {
        console.log(`[ContentController] create`, request);
        const { entityName, contentBody, source, context } = request;
        const worldId = context?.world
        const userId = context?.user
        const campaignId = context?.campaign
        if (!worldId) throw new Error(`worldId cannot be undefined`)
        if (!userId) throw new Error(`userId cannot be undefined`)
        if (!contentBody) throw new Error(`contentBody cannot be undefined`)
        const entity = deserializeContentBodyDTO(contentBody)
        const sourceEnum: DataSourceEnum = deserializeEnum(DataSourceEnumDTO, DataSourceEnum, source)
        const result: ContentBase = await this.contentService.create(entityName, entity, sourceEnum, userId, worldId, campaignId);

        // record activity
        await this.activityService.create(
            ActivityRecord.build({
                eventName: ActivityEventNameEnum.CONTENT_CREATED,
                label: `Created content`,
                relatedTargetEntity: entityName,
                relatedTargetId: result.id,
                world: { id: worldId } as World,
                user: { id: userId } as User
            }),
            userId,
            worldId,
            deserializeEnum(DataSourceEnumDTO, DataSourceEnum, source)
        )

        return {
            contentBody: {
                [entityName]: Serializer.toDTO(result)
            }
        };
    }

    @GrpcMethod('ContentService', 'update')
    async update(request: UpdateContentRequest): Promise<UpdateContentResponse> {
        const { entityName, contentBody, context, source } = request;
        const worldId = context?.world
        const userId = context?.user
        const campaignId = context?.campaign
        if (!worldId) throw new Error(`worldId cannot be undefined`)
        if (!userId) throw new Error(`userId cannot be undefined`)
        if (!contentBody) throw new Error(`contentBody cannot be undefined`)
        const entity = deserializeContentBodyDTO(contentBody)

        const result = await this.contentService.update(entityName, entity, userId, worldId, campaignId);

        // record activity
        await this.activityService.create(
            ActivityRecord.build({
                eventName: ActivityEventNameEnum.CONTENT_UPDATED,
                label: `Updated content`,
                relatedTargetEntity: entityName,
                relatedTargetId: result.id,
                world: { id: worldId } as World,
                user: { id: userId } as User
            }),
            userId,
            worldId,
            deserializeEnum(DataSourceEnumDTO, DataSourceEnum, source)
        )

        return {
            contentBody: {
                [entityName]: Serializer.toDTO(result)
            }
        };
    }

    @GrpcMethod('ContentService', 'delete')
    async delete(request: DeleteContentRequest): Promise<DeleteContentResponse> {
        const { entityName, id, context, source } = request;
        const worldId = context?.world
        const userId = context?.user
        const campaignId = context?.campaign
        if (!worldId) throw new Error(`worldId cannot be undefined`)
        if (!userId) throw new Error(`userId cannot be undefined`)
        await this.contentService.delete(entityName, id, userId, worldId, campaignId);

        // record activity
        await this.activityService.create(
            ActivityRecord.build({
                eventName: ActivityEventNameEnum.CONTENT_DELETED,
                label: `Deleted content`,
                relatedTargetEntity: entityName,
                relatedTargetId: id,
                world: { id: worldId } as World,
                user: { id: userId } as User
            }),
            userId,
            worldId,
            deserializeEnum(DataSourceEnumDTO, DataSourceEnum, source)
        )
        return { success: true };
    }

    @GrpcMethod('ContentService', 'search')
    async search(request: SearchContentRequest): Promise<SearchContentResponse> {
        console.log(`[ContentController] search`, request);
        const { entityName, query, context } = request;
        const entityNameEnum: EntityEnum = sanitizeEntityName(entityName)

        const rootEntityConstructor: EntityConstructor<ContentBase> | null = ContentEntityMapService.getRootEntityConstructor<ContentBase>(entityNameEnum)

        if (!context) throw new Error(`context cannot be undefined`)
        if (!query) throw new Error(`query cannot be undefined`)
        const userId = context?.user
        const worldId = context?.world
        const campaignId = context?.campaign
        if (!userId) throw new Error(`userId cannot be undefined`)
        if (!worldId) throw new Error(`worldId cannot be undefined`)
        const result: ContentSearchResult<ContentBase> = await this.contentService.search(entityName, SearchQuery.fromDTO(query), userId, worldId, campaignId);
        const response: SearchContentResponse = {
            results: result.results.map((content: ContentBase) => {
                const dtoFieldName: string = rootEntityConstructor ? rootEntityConstructor.name : entityName;
                return {
                    [dtoFieldName]: Serializer.toDTO(content)
                }
            }),
            totalResults: result.totalResults,
            totalPages: result.totalPages,
            currentPage: result.currentPage
        }
        console.log(`[ContentController] search result`, response);
        return response;
    }

    @GrpcMethod('ContentService', 'createBulk')
    async createBulk(request: CreateBulkContentRequest): Promise<CreateBulkContentResponse> {
        const { requests } = request;
        const entityName = requests[0]?.entityName;
        const source = requests[0]?.source;
        const context = requests[0]?.context;
        if (!context) throw new Error(`context cannot be undefined`)
        const worldId = context?.world
        const userId = context?.user
        if (!worldId) throw new Error(`worldId cannot be undefined`)
        if (!userId) throw new Error(`userId cannot be undefined`)
        const entities = requests.map(req => {
            if (!req.contentBody) throw new Error(`contentBody cannot be undefined`);
            return deserializeContentBodyDTO(req.contentBody);
        });

        const results = await this.contentService.createBulk(entityName, entities, deserializeEnum(DataSourceEnumDTO, DataSourceEnum, source));
        const responses: CreateContentResponse[] = results.map(result => ({ contentBody: Serializer.toDTO(result) }));

        // record activity
        await this.activityService.create(
            ActivityRecord.build({
                eventName: ActivityEventNameEnum.CONTENT_CREATED_BULK,
                label: `Created ${entities.length} content in bulk`,
                relatedTargetEntity: entityName,
                world: { id: worldId } as World,
                user: { id: userId } as User
            }),
            userId,
            worldId,
            deserializeEnum(DataSourceEnumDTO, DataSourceEnum, source)
        )
        return { responses };
    }

    @GrpcMethod('ContentService', 'updateBulk')
    async updateBulk(request: UpdateBulkContentRequest): Promise<UpdateBulkContentResponse> {
        const { requests } = request;
        const entityName = requests[0]?.entityName;
        const source = requests[0]?.source;
        const context = requests[0]?.context;
        if (!context) throw new Error(`context cannot be undefined`)
        const worldId = context?.world
        const userId = context?.user
        const campaignId = context?.campaign
        if (!worldId) throw new Error(`worldId cannot be undefined`)
        if (!userId) throw new Error(`userId cannot be undefined`)
        const entities = requests.map(req => {
            if (!req.contentBody) throw new Error(`contentBody cannot be undefined`);
            return deserializeContentBodyDTO(req.contentBody);
        });

        const results = await this.contentService.updateBulk(entityName, entities, userId, worldId, campaignId);
        const responses: UpdateContentResponse[] = results.map(result => ({ contentBody: Serializer.toDTO(result) }));

        // record activity
        await this.activityService.create(
            ActivityRecord.build({
                eventName: ActivityEventNameEnum.CONTENT_UPDATED_BULK,
                label: `Updated ${entities.length} content in bulk`,
                relatedTargetEntity: entityName,
                world: { id: worldId } as World,
                user: { id: userId } as User
            }),
            userId,
            worldId,
            deserializeEnum(DataSourceEnumDTO, DataSourceEnum, source)
        )
        return { responses };
    }

    @GrpcMethod('ContentService', 'deleteBulk')
    async deleteBulk(request: DeleteBulkContentRequest): Promise<DeleteBulkContentResponse> {
        const { requests } = request;
        const entityName = requests[0]?.entityName; // Assuming all requests are for same entity type
        const ids = requests.map(req => req.id);
        const context = requests[0]?.context; // Assuming all requests are for same context
        const source = requests[0]?.source; // Assuming all requests are for same source
        if (!context) throw new Error(`context cannot be undefined`)
        const worldId: string | undefined = context?.world
        const userId: string | undefined = context?.user
        const campaignId = context?.campaign
        if (!worldId) throw new Error(`worldId cannot be undefined`)
        if (!userId) throw new Error(`userId cannot be undefined`)
        await this.contentService.deleteBulk(entityName, ids, userId, worldId, campaignId);
        const responses = requests.map(() => ({ success: true }));

        // record activity
        await this.activityService.create(
            ActivityRecord.build({
                eventName: ActivityEventNameEnum.CONTENT_DELETED_BULK,
                label: `Deleted ${ids.length} content in bulk`,
                relatedTargetEntity: entityName,
                world: { id: worldId } as World,
                user: { id: userId } as User
            }),
            userId,
            worldId,
            deserializeEnum(DataSourceEnumDTO, DataSourceEnum, source)
        )
        return { responses };
    }
    @GrpcMethod('ContentService', 'getStats')
    async getStats(request: GetContentStatsRequest): Promise<GetContentStatsResponse> {
        const { context, entityNames } = request;
        if (!context) throw new Error(`context cannot be undefined`)
        const entityNamesEnum: EntityEnum[] = entityNames.map((entityName: string) => sanitizeEntityName(entityName))
        const userId = context?.user
        const worldId = context?.world
        const campaignId = context?.campaign
        if (!userId) throw new Error(`userId cannot be undefined`)
        if (!worldId) throw new Error(`worldId cannot be undefined`)
        const stats: ContentStat[] = await this.contentService.getStats(entityNamesEnum, userId, worldId, campaignId);
        const dtoStats: ContentStatDTO[] = stats.map(stat => Serializer.toDTO(stat));
        const response: GetContentStatsResponse = { stats: dtoStats };
        console.log(`[ContentController] getStats response`, response);
        return response;
    }
}

function deserializeContentBodyDTO(contentBody: ContentBodyDTO) {
    const [entityName, data] = Object.entries(contentBody)[0] // taking the first because prot syntax for "oneof" allows for only one key-value pair
    const entityNameEnum: EntityEnum = sanitizeEntityName(entityName)
    const entityConstructor: EntityConstructor<ContentBase> | undefined = ContentEntityMapService.getEntityConstructor<ContentBase>(entityNameEnum)
    if (!entityConstructor) throw new Error(`unrecognized entityName: "${entityName}"`)
    const entity = new entityConstructor()
    return Serializer.fromDTO(data, entity)
}