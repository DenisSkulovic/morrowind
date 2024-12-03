import { Module, forwardRef } from '@nestjs/common';
import { ItemGeneratorService } from './item-generator.service';
import { DataSourceEnum } from '../../../../common/enum/DataSourceEnum';
import { InjectDataSourceModule } from '../../../../data-source/inject-datasource.module';
import { InstructionProcessorModule } from '../../instruction/instruction-processor.module';
import { ContentModule } from '../../content.module';

@Module({
    imports: [
        InjectDataSourceModule.register([
            DataSourceEnum.DATA_SOURCE_WORLD,
            DataSourceEnum.DATA_SOURCE_CAMPAIGN,
        ]),
        forwardRef(() => InstructionProcessorModule),
        forwardRef(() => ContentModule),
    ],
    providers: [
        {
            provide: 'IItemGeneratorService',
            useClass: ItemGeneratorService,
        },
        ItemGeneratorService
    ],
    exports: ['IItemGeneratorService', ItemGeneratorService],
})
export class ItemGeneratorModule { }