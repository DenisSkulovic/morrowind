import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ContentService } from './content.service';
import { ContentBase } from '../../ContentBase';
import {
    ContentBodyDTO, CreateContentRequest, CreateContentResponse,
    UpdateContentRequest, UpdateContentResponse, DeleteContentRequest,
    DeleteContentResponse, SearchContentRequest, SearchContentResponse,
    CreateBulkContentRequest, CreateBulkContentResponse, UpdateBulkContentRequest,
    UpdateBulkContentResponse, DeleteBulkContentRequest, DeleteBulkContentResponse,
    GetContentStatsRequest, GetContentStatsResponse
} from '../../proto/content';
import { deserializeEnum } from '../../common/enum/util';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { CONTENT_ENTITY_MAP } from '../../CONTENT_ENTITY_MAP';
import { EntityConstructor } from '../../types';
import { Serializer } from '../../serializer';
import { DataSourceEnumDTO } from '../../proto/common';
import { Context } from '../../class/Context';
import { SearchQuery } from '../../class/search/SearchQuery';

@Controller()
export class ContentController {
    constructor(
        @Inject('IContentService') private readonly contentService: ContentService<ContentBase>
    ) { }

    @GrpcMethod('ContentService', 'create')
    async create(request: CreateContentRequest): Promise<CreateContentResponse> {
        const { entityName, contentBody, source } = request;
        if (!contentBody) throw new Error(`contentBody cannot be undefined`)
        const entity = deserializeContentBodyDTO(contentBody)
        return this.contentService.create(entityName, entity, deserializeEnum(DataSourceEnumDTO, DataSourceEnum, source));
    }

    @GrpcMethod('ContentService', 'update')
    async update(request: UpdateContentRequest): Promise<UpdateContentResponse> {
        const { entityName, contentBody, context } = request;
        if (!contentBody) throw new Error(`contentBody cannot be undefined`)
        if (!context) throw new Error(`context cannot be undefined`)
        const entity = deserializeContentBodyDTO(contentBody)
        return this.contentService.update(entityName, entity, Context.fromDTO(context));
    }

    @GrpcMethod('ContentService', 'delete')
    async delete(request: DeleteContentRequest): Promise<DeleteContentResponse> {
        const { entityName, id, context } = request;
        if (!context) throw new Error(`context cannot be undefined`)
        await this.contentService.delete(entityName, id, Context.fromDTO(context));
        return { success: true };
    }

    @GrpcMethod('ContentService', 'search')
    async search(request: SearchContentRequest): Promise<SearchContentResponse> {
        const { entityName, query, context } = request;
        if (!context) throw new Error(`context cannot be undefined`)
        if (!query) throw new Error(`query cannot be undefined`)
        return this.contentService.search(entityName, SearchQuery.fromDTO(query), Context.fromDTO(context));
    }

    @GrpcMethod('ContentService', 'createBulk')
    async createBulk(request: CreateBulkContentRequest): Promise<CreateBulkContentResponse> {
        const { requests } = request;
        const entityName = requests[0]?.entityName;
        const source = requests[0]?.source;
        const entities = requests.map(req => {
            if (!req.contentBody) throw new Error(`contentBody cannot be undefined`);
            return deserializeContentBodyDTO(req.contentBody);
        });

        const results = await this.contentService.createBulk(entityName, entities, deserializeEnum(DataSourceEnumDTO, DataSourceEnum, source));
        const responses: CreateContentResponse[] = results.map(result => ({ contentBody: Serializer.toDTO(result) }));
        return { responses };
    }

    @GrpcMethod('ContentService', 'updateBulk')
    async updateBulk(request: UpdateBulkContentRequest): Promise<UpdateBulkContentResponse> {
        const { requests } = request;
        const entityName = requests[0]?.entityName;
        const context = requests[0]?.context;
        if (!context) throw new Error(`context cannot be undefined`)
        const entities = requests.map(req => {
            if (!req.contentBody) throw new Error(`contentBody cannot be undefined`);
            return deserializeContentBodyDTO(req.contentBody);
        });

        const results = await this.contentService.updateBulk(entityName, entities, Context.fromDTO(context));
        const responses: UpdateContentResponse[] = results.map(result => ({ contentBody: Serializer.toDTO(result) }));
        return { responses };
    }

    @GrpcMethod('ContentService', 'deleteBulk')
    async deleteBulk(request: DeleteBulkContentRequest): Promise<DeleteBulkContentResponse> {
        const { requests } = request;
        const entityName = requests[0]?.entityName; // Assuming all requests are for same entity type
        const ids = requests.map(req => req.id);
        const context = requests[0]?.context;
        if (!context) throw new Error(`context cannot be undefined`)
        await this.contentService.deleteBulk(entityName, ids, Context.fromDTO(context));
        const responses = requests.map(() => ({ success: true }));
        return { responses };
    }
    @GrpcMethod('ContentService', 'getStats')
    async getStats(request: GetContentStatsRequest): Promise<GetContentStatsResponse> {
        const { context, entityNames } = request;
        if (!context) throw new Error(`context cannot be undefined`)
        const stats = await this.contentService.getStats(entityNames, Context.fromDTO(context));
        return { stats };
    }
}

function deserializeContentBodyDTO(contentBody: ContentBodyDTO) {
    const [entityName, data] = Object.entries(contentBody)[0] // taking the first because prot syntax for "oneof" allows for only one key-value pair
    const entityConstructor: EntityConstructor<ContentBase> | undefined = CONTENT_ENTITY_MAP[entityName] as EntityConstructor<ContentBase> | undefined
    if (!entityConstructor) throw new Error(`unrecognized entityName: "${entityName}"`)
    const entity = new entityConstructor()
    return Serializer.fromDTO(data, entity)
}