import { ContentBase } from '../class/ContentBase';
import { Context } from '../class/Context';
import { SearchQuery } from '../class/search/SearchQuery';
import { CONTENT_ENTITY_MAP } from '../CONTENT_ENTITY_MAP';
import { DataSourceEnumDTO } from '../proto/common';
import { ContentBodyDTO, ContentServiceClientImpl, CreateBulkContentRequest, CreateBulkContentResponse, CreateContentRequest, CreateContentResponse, DeleteBulkContentRequest, DeleteBulkContentResponse, DeleteContentRequest, DeleteContentResponse, GetContentStatsRequest, GetContentStatsResponse, SearchContentRequest, SearchContentResponse, UpdateBulkContentRequest, UpdateBulkContentResponse, UpdateContentRequest, UpdateContentResponse } from '../proto/content';
import { rpc } from '../rpc';
import { Serializer } from '../serialize/serializer';
import { ClassConstructor } from '../types';


export class ContentService<T extends ContentBase> {
    private client: ContentServiceClientImpl;

    constructor() {
        this.client = new ContentServiceClientImpl(rpc);
    }
    async getContentStats(entityNames: string[] | null, context: Context): Promise<GetContentStatsResponse> {
        const request: GetContentStatsRequest = {
            context: context.toDTO(),
            entityNames: entityNames || Object.keys(CONTENT_ENTITY_MAP)
        };
        return await this.client.getStats(request);
    }

    async createContent(entityName: string, content: T, context: Context): Promise<T> {
        const request: CreateContentRequest = {
            source: DataSourceEnumDTO.DATA_SOURCE_WORLD,
            contentBody: content.toDTO(),
            entityName,
            context: context.toDTO(),
        }
        const constructor: ClassConstructor<ContentBase> | undefined = CONTENT_ENTITY_MAP[entityName];
        if (!constructor) throw new Error(`Constructor for entity ${entityName} not found`);
        const response: CreateContentResponse = await this.client.create(request);
        const deserialized: T = Serializer.fromDTO(response.contentBody, constructor);
        return deserialized
    }

    async updateContent(entityName: string, content: T, context: Context): Promise<T> {
        const request: UpdateContentRequest = {
            contentBody: content.toDTO(),
            entityName,
            context: context.toDTO(),
        }
        const constructor: ClassConstructor<ContentBase> | undefined = CONTENT_ENTITY_MAP[entityName];
        if (!constructor) throw new Error(`Constructor for entity ${entityName} not found`);
        const response: UpdateContentResponse = await this.client.update(request);
        const deserialized: T = Serializer.fromDTO(response.contentBody, constructor);
        return deserialized
    }

    async deleteContent(entityName: string, id: string, context: Context): Promise<void> {
        const request: DeleteContentRequest = {
            entityName,
            id,
            context: context.toDTO(),
        }
        await this.client.delete(request);
    }

    async searchContent(
        entityName: string,
        query: SearchQuery,
        context: Context
    ): Promise<{
        results: ContentBase[];
        totalResults: number;
        totalPages: number;
        currentPage: number;
    }> {
        const request: SearchContentRequest = {
            entityName,
            query: query.toDTO(),
            context: context.toDTO(),
        }
        const constructor: ClassConstructor<ContentBase> | undefined = CONTENT_ENTITY_MAP[entityName];
        if (!constructor) throw new Error(`Constructor for entity ${entityName} not found`);
        const response: SearchContentResponse = await this.client.search(request);
        const deserialized: T[] = response.results.map((contentBody: ContentBodyDTO) => Serializer.fromDTO(contentBody, constructor));
        return {
            results: deserialized,
            totalResults: response.totalResults,
            totalPages: response.totalPages,
            currentPage: response.currentPage,
        }
    }

    async createContentBulk(entityName: string, contentBodies: T[], context: Context): Promise<T[]> {
        const requests: CreateContentRequest[] = contentBodies.map((contentBody: T) => ({
            source: DataSourceEnumDTO.DATA_SOURCE_WORLD,
            entityName,
            contentBody: contentBody.toDTO(),
            context: context.toDTO()
        }));
        const constructor: ClassConstructor<ContentBase> | undefined = CONTENT_ENTITY_MAP[entityName];
        if (!constructor) throw new Error(`Constructor for entity ${entityName} not found`);
        const request: CreateBulkContentRequest = {
            requests,
        }
        const response: CreateBulkContentResponse = await this.client.createBulk(request);
        const deserialized: T[] = response.responses.map((response: CreateContentResponse) =>
            Serializer.fromDTO(response.contentBody, constructor)
        );
        return deserialized
    }

    async updateContentBulk(entityName: string, contentBodies: T[], context: Context): Promise<T[]> {
        const requests: UpdateContentRequest[] = contentBodies.map((contentBody: T) => ({
            source: DataSourceEnumDTO.DATA_SOURCE_WORLD,
            entityName,
            contentBody: contentBody.toDTO(),
            context: context.toDTO()
        }));
        const constructor: ClassConstructor<ContentBase> | undefined = CONTENT_ENTITY_MAP[entityName];
        if (!constructor) throw new Error(`Constructor for entity ${entityName} not found`);
        const request: UpdateBulkContentRequest = {
            requests,
        }
        const response: UpdateBulkContentResponse = await this.client.updateBulk(request);
        const deserialized: T[] = response.responses.map((response: UpdateContentResponse) =>
            Serializer.fromDTO(response.contentBody, constructor)
        );
        return deserialized
    }

    async deleteContentBulk(entityName: string, ids: string[], context: Context): Promise<void> {
        const requests: DeleteContentRequest[] = ids.map((id) => ({
            entityName,
            id,
            context: context.toDTO()
        }));
        const request: DeleteBulkContentRequest = {
            requests,
        }
        await this.client.deleteBulk(request);
    }

}