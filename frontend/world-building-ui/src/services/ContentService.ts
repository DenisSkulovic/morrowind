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
import { contentBackendURL, dialogueBackendURL } from '../config';
import { io, Socket } from 'socket.io-client';

export class SearchContentResults {
    results!: ContentBase[];
    totalResults!: number;
    totalPages!: number;
    currentPage!: number;
}

export class ContentService<T extends ContentBase> {
    private contentClient: ContentServiceClient;
    private dialogueSocket: Socket;

    constructor() {
        this.contentClient = new ContentServiceClient(contentBackendURL);
        this.dialogueSocket = io(dialogueBackendURL);
    }

    async getContentStats(entityNames: string[] | null, context: Context): Promise<GetContentStatsResponse> {
        const request = new GetContentStatsRequest();
        request.setContext(Serializer.toDTO(context, new ContextDTO()));
        request.setEntitynamesList(entityNames || Object.keys(EntityEnum));
        return new Promise((resolve, reject) => {
            this.contentClient.getStats(request, {}, (err, response) => {
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
            this.contentClient.create(request, {}, (err, response) => {
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
            this.contentClient.update(request, {}, (err, response) => {
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
            this.contentClient.delete(request, {}, (err, response) => {
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
            this.contentClient.search(request, {}, (err, response) => {
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
            this.contentClient.createBulk(request, {}, (err, response) => {
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
            this.contentClient.updateBulk(request, {}, (err, response) => {
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
            this.contentClient.deleteBulk(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve();
            });
        });
    }

    generateContentAI(request: {
        contentType: string;
        parameters: any;
        requestId: string;
    }): Promise<any> {
        return new Promise((resolve, reject) => {
            this.dialogueSocket.emit('generateContent', request);

            this.dialogueSocket.on('contentGenerated', (data) => {
                resolve(data);
            });

            this.dialogueSocket.on('error', (error) => {
                reject(error);
            });
        });
    }

    generateContentAIStreaming(request: {
        contentType: string;
        parameters: any;
        requestId: string;
    }, onChunk: (chunk: any) => void): Promise<void> {
        return new Promise((resolve, reject) => {
            // Emit the initial request
            this.dialogueSocket.emit('generateContent', request);

            // Listen for data chunks
            this.dialogueSocket.on('contentChunk', (chunk) => {
                onChunk(chunk); // Pass the chunk to the callback for handling in the app state
            });

            // Listen for the end of the stream
            this.dialogueSocket.on('streamEnd', () => {
                resolve(); // Stream completed
            });

            // Handle errors
            this.dialogueSocket.on('error', (error) => {
                reject(error);
            });
        });
    }
}
