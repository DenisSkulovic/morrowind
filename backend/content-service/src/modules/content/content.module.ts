import { Module, forwardRef } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { InjectDataSourceModule } from '../../data-source/inject-datasource.module';
import { WorldModule } from '../world/world.module';
import { CampaignModule } from '../campaign/campaign.module';

@Module({
    imports: [
        InjectDataSourceModule.register([
            DataSourceEnum.DATA_SOURCE_WORLD,
            DataSourceEnum.DATA_SOURCE_CAMPAIGN,
        ]),
        forwardRef(() => WorldModule),
        forwardRef(() => CampaignModule),
    ],
    controllers: [ContentController],
    providers: [
        {
            provide: 'IContentService',
            useClass: ContentService,
        },
        ContentService,
    ],
    exports: ['IContentService', ContentService],
})
export class ContentModule { }
