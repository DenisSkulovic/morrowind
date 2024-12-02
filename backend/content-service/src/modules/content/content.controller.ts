import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { ContentService } from './content.service';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { ContentBase } from '../../ContentBase';

@Controller()
export class ContentController {
    constructor(
        @Inject('IContentService') private readonly contentService: ContentService<ContentBase>
    ) { }

    @GrpcMethod('ContentService', 'create')
    async create(data: { entityName: string; contentData: any, source: DataSourceEnum }): Promise<any> {
        const { entityName, contentData, source } = data;
        return this.contentService.create(entityName, contentData, source);
    }

}
