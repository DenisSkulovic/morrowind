import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ContentService } from './content.service';
import { ContentBase } from '../../ContentBase';
import { ContentBodyDTO, CreateContentRequest, CreateContentResponse } from '../../proto/content';
import { deserializeEnum } from '../../common/enum/util';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { CONTENT_ENTITY_MAP } from '../../CONTENT_ENTITY_MAP';
import { EntityConstructor } from '../../types';
import { Serializer } from '../../serializer';
import { DataSourceEnumDTO } from '../../proto/common';

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

}

function deserializeContentBodyDTO(contentBody: ContentBodyDTO) {
    const [entityName, data] = Object.entries(contentBody)[0] // taking the first because prot syntax for "oneof" allows for only one key-value pair
    const entityConstructor: EntityConstructor<ContentBase> | undefined = CONTENT_ENTITY_MAP[entityName] as EntityConstructor<ContentBase> | undefined
    if (!entityConstructor) throw new Error(`unrecognized entityName: "${entityName}"`)
    const entity = new entityConstructor()
    return Serializer.fromDTO(data, entity)
}