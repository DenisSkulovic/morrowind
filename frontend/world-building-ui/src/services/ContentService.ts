import { ContentBase } from '../class/ContentBase';
import { backendURL } from '../config';
import { DataSourceEnumDTO, ContextDTO } from '../proto/common';
import { ContentBodyDTO, ContentServiceClientImpl, CreateContentRequest, CreateContentResponse } from '../proto/content';
import { rpc } from '../rpc';
import { Context } from '../types';

export class ContentService<T extends ContentBase> {
    private client: ContentServiceClientImpl;

    constructor() {
        this.client = new ContentServiceClientImpl(rpc);
    }

    async createContent(entityName: string, content: T, context: Context): Promise<CreateContentResponse> {
        const request: CreateContentRequest = {
            source: DataSourceEnumDTO.DATA_SOURCE_WORLD,
            contentBody: content.toDTO(),
            entityName,
            context: context.toDTO(),
        }
        return await this.client.create(request);
    }

    // Add methods for other operations: fetch, update, delete, etc.
}