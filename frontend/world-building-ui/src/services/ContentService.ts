import { ContentBase } from '../class/ContentBase';
import { Context } from '../class/Context';
import { SearchQuery } from '../class/search/SearchQuery';
import { CONTENT_ENTITY_MAP } from '../CONTENT_ENTITY_MAP';
import { common } from '../proto/common';
import { content } from '../proto/content';
import { grpc } from '@improbable-eng/grpc-web';
import { Serializer } from '../serialize/serializer';
import { ClassConstructor } from '../types';

export class ContentService<T extends ContentBase> {
    private client: content.ContentServiceClient;

    constructor() {
        this.client = new content.ContentServiceClient("localhost:8080", grpc.credentials.createInsecure());
    }

    async getContentStats(entityNames: string[] | null, context: Context): Promise<content.GetContentStatsResponse> {
        const request = new content.GetContentStatsRequest();
        request.context = context.toDTO();
        request.entityNames = entityNames || Object.keys(CONTENT_ENTITY_MAP);
        return new Promise((resolve, reject) => {
            this.client.getStats(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    async createContent(entityName: string, contentObj: T, context: Context): Promise<T> {
        const request = new content.CreateContentRequest();
        request.source = common.DataSourceEnumDTO.DATA_SOURCE_WORLD;
        request.contentBody = contentObj.toDTO();
        request.entityName = entityName;
        request.context = context.toDTO();

        const constructor: ClassConstructor<ContentBase> | undefined = CONTENT_ENTITY_MAP[entityName];
        if (!constructor) throw new Error(`Constructor for entity ${entityName} not found`);

        return new Promise((resolve, reject) => {
            this.client.create(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(Serializer.fromDTO(response.contentBody, constructor));
            });
        });
    }

    async updateContent(entityName: string, contentObj: T, context: Context): Promise<T> {
        const request = new content.UpdateContentRequest();
        request.contentBody = contentObj.toDTO();
        request.entityName = entityName;
        request.context = context.toDTO();

        const constructor: ClassConstructor<ContentBase> | undefined = CONTENT_ENTITY_MAP[entityName];
        if (!constructor) throw new Error(`Constructor for entity ${entityName} not found`);

        return new Promise((resolve, reject) => {
            this.client.update(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(Serializer.fromDTO(response.contentBody, constructor));
            });
        });
    }

    async deleteContent(entityName: string, id: string, context: Context): Promise<void> {
        const request = new content.DeleteContentRequest();
        request.entityName = entityName;
        request.id = id;
        request.context = context.toDTO();

        return new Promise((resolve, reject) => {
            this.client.delete(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve();
            });
        });
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
        const request = new content.SearchContentRequest();
        request.entityName = entityName;
        request.query = query.toDTO();
        request.context = context.toDTO();

        const constructor: ClassConstructor<ContentBase> | undefined = CONTENT_ENTITY_MAP[entityName];
        if (!constructor) throw new Error(`Constructor for entity ${entityName} not found`);

        return new Promise((resolve, reject) => {
            this.client.search(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve({
                    results: response.results.map(contentBody =>
                        Serializer.fromDTO(contentBody, constructor)
                    ),
                    totalResults: response.totalResults,
                    totalPages: response.totalPages,
                    currentPage: response.currentPage,
                });
            });
        });
    }

    async createContentBulk(entityName: string, contentBodies: T[], context: Context): Promise<T[]> {
        const requests = contentBodies.map(contentBody => {
            const req = new content.CreateContentRequest();
            req.source = common.DataSourceEnumDTO.DATA_SOURCE_WORLD;
            req.entityName = entityName;
            req.contentBody = contentBody.toDTO();
            req.context = context.toDTO();
            return req;
        });

        const constructor: ClassConstructor<ContentBase> | undefined = CONTENT_ENTITY_MAP[entityName];
        if (!constructor) throw new Error(`Constructor for entity ${entityName} not found`);

        const request = new content.CreateBulkContentRequest();
        request.requests = requests;

        return new Promise((resolve, reject) => {
            this.client.createBulk(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response.responses.map(response =>
                    Serializer.fromDTO(response.contentBody, constructor)
                ));
            });
        });
    }

    async updateContentBulk(entityName: string, contentBodies: T[], context: Context): Promise<T[]> {
        const requests = contentBodies.map(contentBody => {
            const req = new content.UpdateContentRequest();
            req.entityName = entityName;
            req.contentBody = contentBody.toDTO();
            req.context = context.toDTO();
            return req;
        });

        const constructor: ClassConstructor<ContentBase> | undefined = CONTENT_ENTITY_MAP[entityName];
        if (!constructor) throw new Error(`Constructor for entity ${entityName} not found`);

        const request = new content.UpdateBulkContentRequest();
        request.requests = requests;

        return new Promise((resolve, reject) => {
            this.client.updateBulk(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response.responses.map(response =>
                    Serializer.fromDTO(response.contentBody, constructor)
                ));
            });
        });
    }

    async deleteContentBulk(entityName: string, ids: string[], context: Context): Promise<void> {
        const requests = ids.map(id => {
            const req = new content.DeleteContentRequest();
            req.entityName = entityName;
            req.id = id;
            req.context = context.toDTO();
            return req;
        });

        const request = new content.DeleteBulkContentRequest();
        request.requests = requests;

        return new Promise((resolve, reject) => {
            this.client.deleteBulk(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve();
            });
        });
    }
}