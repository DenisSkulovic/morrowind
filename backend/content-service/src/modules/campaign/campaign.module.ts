import { Module } from '@nestjs/common';
import { CampaignController } from './campaign.controller';
import { CampaignService } from './campaign.service';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { InjectDataSourceModule } from '../../data-source/inject-datasource.module';

@Module({
    imports: [
        InjectDataSourceModule.register([
            DataSourceEnum.DATA_SOURCE_WORLD,
            DataSourceEnum.DATA_SOURCE_CAMPAIGN
        ]),
    ],
    controllers: [CampaignController],
    providers: [
        {
            provide: 'ICampaignService',
            useClass: CampaignService,
        },
        CampaignService,
    ],
    exports: ['ICampaignService', CampaignService],
})
export class CampaignModule { }