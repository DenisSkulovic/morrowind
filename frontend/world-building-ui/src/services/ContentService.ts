import { ContentBase } from '../class/ContentBase';
import { Context } from '../class/Context';
import { SearchQuery } from '../class/search/SearchQuery';
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
import { EntityEnum } from '../enum/EntityEnum';

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

    async createContent(entityName: EntityEnum, contentObj: T, context: Context): Promise<T> {
        const request = new CreateContentRequest();
        request.setSource(DataSourceEnumDTO.DATA_SOURCE_WORLD);
        const entityConfig = CONTENT_ENTITY_MAP[entityName];
        if (!entityConfig) throw new Error(`Entity config for ${entityName} not found`);
        request.setContentbody(Serializer.toDTO(contentObj, new entityConfig.dto()));
        request.setEntityname(entityName);
        request.setContext(Serializer.toDTO(context, new ContextDTO()));

        return new Promise((resolve, reject) => {
            this.client.create(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(Serializer.fromDTO(response.getContentbody(), new entityConfig.entity()));
            });
        });
    }

    async updateContent(entityName: EntityEnum, contentObj: T, context: Context): Promise<T> {
        const request = new UpdateContentRequest();
        const entityConfig = CONTENT_ENTITY_MAP[entityName];
        if (!entityConfig) throw new Error(`Entity config for ${entityName} not found`);
        request.setContentbody(Serializer.toDTO(contentObj, new entityConfig.dto()));
        request.setEntityname(entityName);
        request.setContext(Serializer.toDTO(context, new ContextDTO()));

        return new Promise((resolve, reject) => {
            this.client.update(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(Serializer.fromDTO(response.getContentbody(), new entityConfig.entity()));
            });
        });
    }

    async deleteContent(entityName: EntityEnum, id: string, context: Context): Promise<void> {
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
        entityName: EntityEnum,
        query: SearchQuery,
        context: Context
    ): Promise<SearchContentResults> {
        const request = new SearchContentRequest();
        request.setEntityname(entityName);
        request.setQuery(Serializer.toDTO(query, new SearchQueryDTO()));
        request.setContext(Serializer.toDTO(context, new ContextDTO()));

        const entityConfig = CONTENT_ENTITY_MAP[entityName];
        if (!entityConfig) throw new Error(`Entity config for ${entityName} not found`);

        return new Promise((resolve, reject) => {
            this.client.search(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve({
                    results: response.getResultsList().map(contentBody =>
                        Serializer.fromDTO(contentBody, new entityConfig.entity())
                    ),
                    totalResults: response.getTotalresults(),
                    totalPages: response.getTotalpages(),
                    currentPage: response.getCurrentpage(),
                });
            });
        });
    }

    async createContentBulk(entityName: EntityEnum, contentBodies: T[], context: Context): Promise<T[]> {
        const entityConfig = CONTENT_ENTITY_MAP[entityName];
        if (!entityConfig) throw new Error(`Entity config for ${entityName} not found`);

        const requests = contentBodies.map(contentBody => {
            const req = new CreateContentRequest();
            req.setSource(DataSourceEnumDTO.DATA_SOURCE_WORLD);
            req.setEntityname(entityName);
            req.setContentbody(Serializer.toDTO(contentBody, new entityConfig.dto()));
            req.setContext(Serializer.toDTO(context, new ContextDTO()));
            return req;
        });

        const request = new CreateBulkContentRequest();
        request.setRequestsList(requests);

        return new Promise((resolve, reject) => {
            this.client.createBulk(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response.getResponsesList().map(response =>
                    Serializer.fromDTO(response.getContentbody(), new entityConfig.entity())
                ));
            });
        });
    }

    async updateContentBulk(entityName: EntityEnum, contentBodies: T[], context: Context): Promise<T[]> {
        const entityConfig = CONTENT_ENTITY_MAP[entityName];
        if (!entityConfig) throw new Error(`Entity config for ${entityName} not found`);

        const requests = contentBodies.map(contentBody => {
            const req = new UpdateContentRequest();
            req.setEntityname(entityName);
            req.setContentbody(Serializer.toDTO(contentBody, new entityConfig.dto()));
            req.setContext(Serializer.toDTO(context, new ContextDTO()));
            return req;
        });

        const request = new UpdateBulkContentRequest();
        request.setRequestsList(requests);

        return new Promise((resolve, reject) => {
            this.client.updateBulk(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response.getResponsesList().map(response =>
                    Serializer.fromDTO(response.getContentbody(), new entityConfig.entity())
                ));
            });
        });
    }

    async deleteContentBulk(entityName: EntityEnum, ids: string[], context: Context): Promise<void> {
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