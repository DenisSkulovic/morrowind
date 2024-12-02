import { Module } from '@nestjs/common';
import { CharacterGeneratorService } from './character-generator.service';
import { DataSourceEnum } from '../../../../common/enum/DataSourceEnum';
import { InjectDataSourceModule } from '../../../../data-source/inject-datasource.module';
import { ItemGeneratorModule } from '../item/item-generator.module';
import { StorageSlotModule } from '../../storage-slot/storage-slot.module';
import { EquipmentSlotModule } from '../../equipment-slot/equipment-slot.module';
import { InstructionProcessorModule } from '../../instruction/instruction-processor.module';

@Module({
    imports: [
        InjectDataSourceModule.register([DataSourceEnum.DATA_SOURCE_WORLD, DataSourceEnum.DATA_SOURCE_CAMPAIGN]),
        InstructionProcessorModule,
        ItemGeneratorModule,
        StorageSlotModule,
        EquipmentSlotModule,
    ],
    providers: [CharacterGeneratorService],
    exports: [CharacterGeneratorService],
})
export class CharacterGeneratorModule { }