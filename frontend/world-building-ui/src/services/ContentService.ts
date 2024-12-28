import { ContentBase } from '../class/ContentBase';
import { Context } from '../class/Context';
import { SearchQuery } from '../class/search/SearchQuery';
import { ContentEntityMapService } from '../CONTENT_ENTITY_MAP';
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
    ContentBodyDTO,
} from "../proto/content_pb";
import { ContentServiceClient } from "../proto/ContentServiceClientPb";
import Serializer from '../serialize/serializer';
import { EntityEnum } from '../enum/EntityEnum';
import { ClassConstructor } from '../types';
import { backendURL } from '../config';

export class SearchContentResults {
    results!: ContentBase[];
    totalResults!: number;
    totalPages!: number;
    currentPage!: number;
}

export class ContentService<T extends ContentBase> {
    private client: ContentServiceClient;

    constructor() {
        this.client = new ContentServiceClient(backendURL);
    }

    async getContentStats(entityNames: string[] | null, context: Context): Promise<GetContentStatsResponse> {
        const request = new GetContentStatsRequest();
        request.setContext(Serializer.toDTO(context, new ContextDTO()));
        request.setEntitynamesList(entityNames || Object.keys(EntityEnum));
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
        const entityConstructor = ContentEntityMapService.getEntityConstructor<T>(entityName);
        const dtoConstructor = ContentEntityMapService.getDTOConstructor<T>(entityName);
        request.setContentbody(Serializer.toDTO(contentObj, new dtoConstructor()));
        request.setEntityname(entityName);
        request.setContext(Serializer.toDTO(context, new ContextDTO()));

        return new Promise((resolve, reject) => {
            this.client.create(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(Serializer.fromDTO(response.getContentbody(), new entityConstructor()));
            });
        });
    }

    async updateContent(entityName: EntityEnum, contentObj: T, context: Context): Promise<T> {
        const request = new UpdateContentRequest();
        const entityConstructor = ContentEntityMapService.getEntityConstructor<T>(entityName);
        const dtoConstructor = ContentEntityMapService.getDTOConstructor<T>(entityName);

        request.setContentbody(Serializer.toDTO(contentObj, new dtoConstructor()));
        request.setEntityname(entityName);
        request.setContext(Serializer.toDTO(context, new ContextDTO()));

        return new Promise((resolve, reject) => {
            this.client.update(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(Serializer.fromDTO(response.getContentbody(), new entityConstructor()));
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

        const entityConstructor: ClassConstructor<T> = ContentEntityMapService.getEntityConstructor<T>(entityName);
        const rootEntityConstructor: ClassConstructor<T> | null = ContentEntityMapService.getRootEntityConstructor<T>(entityName);

        return new Promise((resolve, reject) => {
            this.client.search(request, {}, (err, response) => {
                console.log(`[ContentService] search result`, response);
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve({
                    results: response.getResultsList().map((contentBodyDTO: ContentBodyDTO) => {
                        const dtoFieldName: string = rootEntityConstructor ? rootEntityConstructor.name : entityName;
                        console.log('dtoFieldName', dtoFieldName);
                        const { getter } = Serializer.getGetterFuncName(contentBodyDTO, dtoFieldName);
                        console.log('getter', getter);
                        const contentBody = (contentBodyDTO as any)[getter]();
                        console.log('contentBody', contentBody);
                        return Serializer.fromDTO(contentBody, new entityConstructor())
                    }),
                    totalResults: response.getTotalresults(),
                    totalPages: response.getTotalpages(),
                    currentPage: response.getCurrentpage(),
                });
            });
        });
    }

    async createContentBulk(entityName: EntityEnum, contentBodies: T[], context: Context): Promise<T[]> {
        const entityConstructor: ClassConstructor<T> = ContentEntityMapService.getEntityConstructor<T>(entityName);
        const dtoConstructor: ClassConstructor<T> = ContentEntityMapService.getDTOConstructor<T>(entityName);

        const requests = contentBodies.map(contentBody => {
            const req = new CreateContentRequest();
            req.setSource(DataSourceEnumDTO.DATA_SOURCE_WORLD);
            req.setEntityname(entityName);
            req.setContentbody(Serializer.toDTO(contentBody, new dtoConstructor()));
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
                    Serializer.fromDTO(response.getContentbody(), new entityConstructor())
                ));
            });
        });
    }

    async updateContentBulk(entityName: EntityEnum, contentBodies: T[], context: Context): Promise<T[]> {
        const entityConstructor: ClassConstructor<T> = ContentEntityMapService.getEntityConstructor<T>(entityName);
        const dtoConstructor: ClassConstructor<T> = ContentEntityMapService.getDTOConstructor<T>(entityName);

        const requests = contentBodies.map(contentBody => {
            const req = new UpdateContentRequest();
            req.setEntityname(entityName);
            req.setContentbody(Serializer.toDTO(contentBody, new dtoConstructor()));
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
                    Serializer.fromDTO(response.getContentbody(), new entityConstructor())
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