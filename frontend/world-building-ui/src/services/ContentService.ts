import { ContentBase } from '../class/ContentBase';
import { Context } from '../class/Context';
import { SearchQuery } from '../class/search/grpc/SearchQuery';
import { ContentEntityMapService } from '../CONTENT_ENTITY_MAP';
import { ContextDTO, DataSourceEnumDTO, SearchQueryDTO } from '../proto/entities_pb';
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
import { contentBackendURL } from '../config';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

export class SearchContentResults {
    results!: ContentBase[];
    totalResults!: number;
    totalPages!: number;
    currentPage!: number;
}

export class ContentService<T extends ContentBase> {
    private contentGRPCClient: ContentServiceClient;

    constructor() {
        this.contentGRPCClient = new ContentServiceClient(contentBackendURL);
    }

    async getContentStats(entityNames: string[] | null, context: Context): Promise<GetContentStatsResponse> {
        const request = new GetContentStatsRequest();
        request.setContext(Serializer.toDTO(context, new ContextDTO()));
        request.setEntitynamesList(entityNames || Object.keys(EntityEnum));
        return new Promise((resolve, reject) => {
            this.contentGRPCClient.getStats(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    async createContent(entityName: EntityEnum, contentObj: T, context: Context): Promise<T> {
        const request = new CreateContentRequest();
        request.setSource(DataSourceEnumDTO.DATA_SOURCE_WORLD);
        request.setEntityname(entityName);
        request.setContext(Serializer.toDTO(context, new ContextDTO()));
        const entityConstructor = ContentEntityMapService.getEntityConstructor<T>(entityName);
        const dtoConstructor = ContentEntityMapService.getDTOConstructor<T>(entityName);
        const dto = Serializer.toDTO(contentObj, new dtoConstructor());
        const contentBodyDTO: any = new ContentBodyDTO();
        const { setter } = Serializer.getSetterFuncName(contentBodyDTO, entityName);
        contentBodyDTO[setter](dto);
        request.setContentbody(contentBodyDTO);
        console.log('[createContent] request', request);
        return new Promise((resolve, reject) => {
            this.contentGRPCClient.create(request, {}, (err, response) => {
                console.log('[createContent] after createContent', err, response);
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    const contentBody = response.getContentbody();
                    const { getter } = Serializer.getGetterFuncName(contentBody, entityName);
                    const content = (contentBody as any)[getter]();
                    console.log('[createContent] content', content);
                    resolve(Serializer.fromDTO(content, new entityConstructor()));
                }
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
            this.contentGRPCClient.update(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    const contentBody = response.getContentbody();
                    const { getter } = Serializer.getGetterFuncName(contentBody, entityName);
                    const content = (contentBody as any)[getter]();
                    resolve(Serializer.fromDTO(content, new entityConstructor()));
                }
            });
        });
    }

    async deleteContent(entityName: EntityEnum, id: string, context: Context): Promise<void> {
        console.log(`[ContentService] deleteContent`, entityName, id, context);
        const request = new DeleteContentRequest();
        request.setEntityname(entityName);
        request.setId(id);
        request.setContext(Serializer.toDTO(context, new ContextDTO()));

        return new Promise((resolve, reject) => {
            this.contentGRPCClient.delete(request, {}, (err, response) => {
                console.log(`[ContentService] deleteContent response, err: ${err}, response: ${response}`);
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
            this.contentGRPCClient.search(request, {}, (err, response) => {
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
            this.contentGRPCClient.createBulk(request, {}, (err, response) => {
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
            this.contentGRPCClient.updateBulk(request, {}, (err, response) => {
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
            this.contentGRPCClient.deleteBulk(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve();
            });
        });
    }

}
