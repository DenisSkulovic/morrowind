import { Module, forwardRef } from '@nestjs/common';
import { CharacterGeneratorService } from './character-generator.service';
import { DataSourceEnum } from '../../../../common/enum/DataSourceEnum';
import { InjectDataSourceModule } from '../../../../data-source/inject-datasource.module';
import { ItemGeneratorModule } from '../item/item-generator.module';
import { StorageSlotModule } from '../../storage-slot/storage-slot.module';
import { EquipmentSlotModule } from '../../equipment-slot/equipment-slot.module';
import { InstructionProcessorModule } from '../../instruction/instruction-processor.module';

@Module({
    imports: [
        InjectDataSourceModule.register([
            DataSourceEnum.DATA_SOURCE_WORLD,
            DataSourceEnum.DATA_SOURCE_CAMPAIGN,
        ]),
        forwardRef(() => InstructionProcessorModule),
        forwardRef(() => ItemGeneratorModule),
        forwardRef(() => StorageSlotModule),
        forwardRef(() => EquipmentSlotModule),
    ],
    providers: [
        {
            provide: 'ICharacterGeneratorService',
            useClass: CharacterGeneratorService,
        },
        CharacterGeneratorService,
    ],
    exports: ['ICharacterGeneratorService', CharacterGeneratorService],
})
export class CharacterGeneratorModule { }