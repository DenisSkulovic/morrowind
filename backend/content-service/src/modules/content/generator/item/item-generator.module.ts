import { Module } from '@nestjs/common';
import { ItemGeneratorService } from './item-generator.service';
import { DataSourceEnum } from '../../../../common/enum/DataSourceEnum';
import { InjectDataSourceModule } from '../../../../data-source/inject-datasource.module';

@Module({
    imports: [
        InjectDataSourceModule.register([DataSourceEnum.DATA_SOURCE_WORLD, DataSourceEnum.DATA_SOURCE_CAMPAIGN]),
    ],
    providers: [ItemGeneratorService],
    exports: [ItemGeneratorService],
})
export class ItemGeneratorModule { }