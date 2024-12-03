import { Module } from '@nestjs/common';
import { CopyService } from './copy.service';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { InjectDataSourceModule } from '../../data-source/inject-datasource.module';

@Module({
    imports: [
        InjectDataSourceModule.register([
            DataSourceEnum.DATA_SOURCE_WORLD,
            DataSourceEnum.DATA_SOURCE_CAMPAIGN,
        ]),
    ],
    providers: [
        {
            provide: 'ICopyService',
            useClass: CopyService,
        },
        CopyService,
    ],
    exports: ['ICopyService', CopyService],
})
export class CopyModule { }
