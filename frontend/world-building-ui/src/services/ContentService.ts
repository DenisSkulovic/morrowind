import { ContentBase } from '../class/ContentBase';
import { Context } from '../class/Context';
import { SearchQuery } from '../class/search/SearchQuery';
import { CONTENT_ENTITY_DTO_MAP } from '../CONTENT_ENTITY_DTO_MAP';
import { CONTENT_ENTITY_MAP } from '../CONTENT_ENTITY_MAP';
import { ContextDTO, DataSourceEnumDTO, SearchQueryDTO } from '../proto/common_pb';
import {
    CreateContentRequest,
    UpdateContentRequest,
    DeleteContentRequest,
    SearchContentRequest,
    GetContentStatsRequest,
    CreateBulkContentRequest,
    UpdateBulkContentRequest,
    DeleteBulkContentRequest,
    GetContentStatsResponse,
} from "../proto/content_pb";
import { ContentServiceClient } from "../proto/ContentServiceClientPb";
import { Serializer } from '../serialize/serializer';
import { ClassConstructor } from '../types';

export class SearchContentResults {
    results!: ContentBase[];
    totalResults!: number;
    totalPages!: number;
    currentPage!: number;
}

export class ContentService<T extends ContentBase> {
    private client: ContentServiceClient;

    constructor() {
        this.client = new ContentServiceClient("http://localhost:8080");
    }

    async getContentStats(entityNames: string[] | null, context: Context): Promise<GetContentStatsResponse> {
        const request = new GetContentStatsRequest();
        request.setContext(Serializer.toDTO(context, new ContextDTO()));
        request.setEntitynamesList(entityNames || Object.keys(CONTENT_ENTITY_MAP));
        return new Promise((resolve, reject) => {
            this.client.getStats(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    async createContent(entityName: string, contentObj: T, context: Context): Promise<T> {
        const request = new CreateContentRequest();
        request.setSource(DataSourceEnumDTO.DATA_SOURCE_WORLD);
        const dtoConstructor = CONTENT_ENTITY_DTO_MAP[entityName];
        if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
        request.setContentbody(Serializer.toDTO(contentObj, new dtoConstructor()));
        request.setEntityname(entityName);
        request.setContext(Serializer.toDTO(context, new ContextDTO()));

        const constructor: ClassConstructor<ContentBase> | undefined = CONTENT_ENTITY_MAP[entityName];
        if (!constructor) throw new Error(`Constructor for entity ${entityName} not found`);

        return new Promise((resolve, reject) => {
            this.client.create(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(Serializer.fromDTO(response.getContentbody(), new constructor()));
            });
        });
    }

    async updateContent(entityName: string, contentObj: T, context: Context): Promise<T> {
        const request = new UpdateContentRequest();
        const dtoConstructor = CONTENT_ENTITY_DTO_MAP[entityName];
        if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
        request.setContentbody(Serializer.toDTO(contentObj, new dtoConstructor()));
        request.setEntityname(entityName);
        request.setContext(Serializer.toDTO(context, new ContextDTO()));

        const constructor: ClassConstructor<ContentBase> | undefined = CONTENT_ENTITY_MAP[entityName];
        if (!constructor) throw new Error(`Constructor for entity ${entityName} not found`);

        return new Promise((resolve, reject) => {
            this.client.update(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(Serializer.fromDTO(response.getContentbody(), new constructor()));
            });
        });
    }

    async deleteContent(entityName: string, id: string, context: Context): Promise<void> {
        const request = new DeleteContentRequest();
        request.setEntityname(entityName);
        request.setId(id);
        request.setContext(Serializer.toDTO(context, new ContextDTO()));

        return new Promise((resolve, reject) => {
            this.client.delete(request, {}, (err, response) => {
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
    ): Promise<SearchContentResults> {
        const request = new SearchContentRequest();
        request.setEntityname(entityName);
        request.setQuery(Serializer.toDTO(query, new SearchQueryDTO()));
        request.setContext(Serializer.toDTO(context, new ContextDTO()));

        const constructor: ClassConstructor<ContentBase> | undefined = CONTENT_ENTITY_MAP[entityName];
        if (!constructor) throw new Error(`Constructor for entity ${entityName} not found`);

        return new Promise((resolve, reject) => {
            this.client.search(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve({
                    results: response.getResultsList().map(contentBody =>
                        Serializer.fromDTO(contentBody, new constructor())
                    ),
                    totalResults: response.getTotalresults(),
                    totalPages: response.getTotalpages(),
                    currentPage: response.getCurrentpage(),
                });
            });
        });
    }

    async createContentBulk(entityName: string, contentBodies: T[], context: Context): Promise<T[]> {
        const requests = contentBodies.map(contentBody => {
            const req = new CreateContentRequest();
            req.setSource(DataSourceEnumDTO.DATA_SOURCE_WORLD);
            req.setEntityname(entityName);
            const dtoConstructor = CONTENT_ENTITY_DTO_MAP[entityName];
            if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
            req.setContentbody(Serializer.toDTO(contentBody, new dtoConstructor()));
            req.setContext(Serializer.toDTO(context, new ContextDTO()));
            return req;
        });

        const constructor: ClassConstructor<ContentBase> | undefined = CONTENT_ENTITY_MAP[entityName];
        if (!constructor) throw new Error(`Constructor for entity ${entityName} not found`);

        const request = new CreateBulkContentRequest();
        request.setRequestsList(requests);

        return new Promise((resolve, reject) => {
            this.client.createBulk(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response.getResponsesList().map(response =>
                    Serializer.fromDTO(response.getContentbody(), new constructor())
                ));
            });
        });
    }

    async updateContentBulk(entityName: string, contentBodies: T[], context: Context): Promise<T[]> {
        const requests = contentBodies.map(contentBody => {
            const req = new UpdateContentRequest();
            req.setEntityname(entityName);
            const dtoConstructor = CONTENT_ENTITY_DTO_MAP[entityName];
            if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
            req.setContentbody(Serializer.toDTO(contentBody, new dtoConstructor()));
            req.setContext(Serializer.toDTO(context, new ContextDTO()));
            return req;
        });

        const constructor: ClassConstructor<ContentBase> | undefined = CONTENT_ENTITY_MAP[entityName];
        if (!constructor) throw new Error(`Constructor for entity ${entityName} not found`);

        const request = new UpdateBulkContentRequest();
        request.setRequestsList(requests);

        return new Promise((resolve, reject) => {
            this.client.updateBulk(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response.getResponsesList().map(response =>
                    Serializer.fromDTO(response.getContentbody(), new constructor())
                ));
            });
        });
    }

    async deleteContentBulk(entityName: string, ids: string[], context: Context): Promise<void> {
        const requests = ids.map(id => {
            const req = new DeleteContentRequest();
            req.setEntityname(entityName);
            req.setId(id);
            req.setContext(Serializer.toDTO(context, new ContextDTO()));
            return req;
        });

        const request = new DeleteBulkContentRequest();
        request.setRequestsList(requests);

        return new Promise((resolve, reject) => {
            this.client.deleteBulk(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve();
            });
        });
    }
}