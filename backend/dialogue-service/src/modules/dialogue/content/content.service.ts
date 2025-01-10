import { Injectable } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import {
    SearchContentRequest,
    SearchContentResponse,
    ContentService as GrpcContentService
} from '../../../proto/content';
import {
    SearchQueryDTO,
    ContextDTO,
    DataSourceEnumDTO
} from '../../../proto/entities';
import { SearchQuery } from './class/search/SearchQuery';
import { Context } from './class/Context';
import { serializeEnum } from '../../../common/enum/util';
import { Serializer } from '../../../common/serializer/serializer';
import { DataSourceEnum } from './enum/DataSourceEnum';
import { EntityEnum } from './enum/EntityEnum';

// I added this service just in case I would need to additionally fetch content for expanded dialogue context.
// For example the knowledge base contains only 5 known things from the total 50 that a character knows.
// These 5 things were enough to start the dialogue, but more info may be needed, so it could be fetched and cached in the knowledge base.
// IMPORTANT: I do not want to use this for any WRITE operations, only READ. For anything write related an event must be emitted into the campaign RabbitMQ.

@Injectable()
export class ContentService {
    @Client({
        transport: Transport.GRPC,
        options: {
            package: 'content',
            protoPath: 'proto/content.proto',
        },
    })
    private client!: ClientGrpc;

    private grpcContentService: GrpcContentService;

    onModuleInit() {
        this.grpcContentService = this.client.getService<GrpcContentService>('ContentService');
    }

    async search(
        entityName: EntityEnum,
        query: SearchQuery,
        context: Context,
        source: DataSourceEnum
    ): Promise<SearchContentResponse> {
        const queryDTO: SearchQueryDTO = Serializer.toDTO(query)
        const contextDTO: ContextDTO = Serializer.toDTO(context)
        const sourceDTO: DataSourceEnumDTO = serializeEnum(DataSourceEnum, DataSourceEnumDTO, source)
        const request: SearchContentRequest = {
            entityName,
            query: queryDTO,
            context: contextDTO,
            source: sourceDTO
        };
        return firstValueFrom(this.grpcContentService.search(request));
    }

}
