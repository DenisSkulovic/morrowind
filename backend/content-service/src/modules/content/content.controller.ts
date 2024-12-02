import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ContentService } from './content.service';
import { ContentBase } from '../../ContentBase';
import { CreateContentRequest, CreateContentResponse } from '../../proto/content';
import { DataSourceEnumDTO } from '../../proto/common';
import { deserializeEnum } from '../../common/enum/util';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';

@Controller()
export class ContentController {
    constructor(
        @Inject('IContentService') private readonly contentService: ContentService<ContentBase>
    ) { }

    @GrpcMethod('ContentService', 'create')
    async create(request: CreateContentRequest): Promise<CreateContentResponse> {
        const { entityName, contentBody, source } = request;
        return this.contentService.create(entityName, contentBody, deserializeEnum(DataSourceEnumDTO, source) as DataSourceEnum);
    }

}