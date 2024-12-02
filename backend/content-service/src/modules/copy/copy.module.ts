import { Module } from '@nestjs/common';
import { CopyService } from './copy.service';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { InjectDataSourceModule } from '../../data-source/inject-datasource.module';

@Module({
    imports: [
        InjectDataSourceModule.register([DataSourceEnum.DATA_SOURCE_WORLD, DataSourceEnum.DATA_SOURCE_CAMPAIGN]), // Custom module to handle multiple datasources
    ],
    providers: [
        CopyService,
    ],
    exports: [
        CopyService,
    ],
})
export class CopyModule { }
