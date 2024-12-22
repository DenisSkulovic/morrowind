import { Module } from "@nestjs/common";
import { ActivityService } from "./activity.service";
import { ActivityController } from "./activity.controller";
import { DataSourceEnum } from "../../common/enum/DataSourceEnum";
import { InjectDataSourceModule } from "../../data-source/inject-datasource.module";

@Module({
    imports: [
        InjectDataSourceModule.register([
            DataSourceEnum.DATA_SOURCE_WORLD,
            DataSourceEnum.DATA_SOURCE_CAMPAIGN
        ]),
    ],
    controllers: [ActivityController],
    providers: [
        {
            provide: 'IActivityService',
            useClass: ActivityService,
        },
        ActivityService,
    ],
    exports: ['IActivityService', ActivityService],
})
export class ActivityModule { }