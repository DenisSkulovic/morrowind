import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountModule } from './modules/account/account.module';
import { WorldModule } from './modules/world/world.module';
import { ContentModule } from './modules/content/content.module';
import { DataSourceEnum } from './common/enum/DataSourceEnum';
import { CampaignModule } from './modules/campaign/campaign.module';
import { CharacterGeneratorModule } from './modules/content/generator/character/character-generator.module';
import { ItemGeneratorModule } from './modules/content/generator/item/item-generator.module';
import { GeneratorModule } from './modules/content/generator/generator.module';
import { PresetModule } from './modules/preset/preset.module';
import { UserModule } from './modules/user/user.module';
import { campaignDbOptions, worldDbOptions } from './data-source/datasource-config';
import { CopyModule } from './modules/copy/copy.module';
import { InstructionProcessorModule } from './modules/content/instruction/instruction-processor.module';
import { StorageSlotModule } from './modules/content/storage-slot/storage-slot.module';

@Module({
    imports: [
        // Register World Database
        TypeOrmModule.forRootAsync({
            name: DataSourceEnum.DATA_SOURCE_WORLD,
            useFactory: async () => worldDbOptions,
        }),
        // Register Campaign Database
        TypeOrmModule.forRootAsync({
            name: DataSourceEnum.DATA_SOURCE_CAMPAIGN,
            useFactory: async () => campaignDbOptions,
        }),

        // Feature Modules
        AccountModule,
        CampaignModule,
        CharacterGeneratorModule,
        ItemGeneratorModule,
        GeneratorModule,
        InstructionProcessorModule,
        StorageSlotModule,
        ContentModule,
        CopyModule,
        PresetModule,
        UserModule,
        WorldModule,
    ],
})
export class AppModule { }
