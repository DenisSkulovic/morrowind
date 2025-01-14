import { Module } from '@nestjs/common';
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
import { CopyModule } from './modules/copy/copy.module';
import { InstructionProcessorModule } from './modules/content/instruction/instruction-processor.module';
import { StorageSlotModule } from './modules/content/storage-slot/storage-slot.module';
import { InjectDataSourceModule } from './data-source/inject-datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { worldDbOptions, campaignDbOptions } from './data-source/datasource-config';
import { ActivityModule } from './modules/activity/activity.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'), // Auto-generate schema file
            playground: true, // Enable GraphQL Playground
        }),
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

        InjectDataSourceModule.register([
            DataSourceEnum.DATA_SOURCE_WORLD,
            DataSourceEnum.DATA_SOURCE_CAMPAIGN,
        ]),

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
        ActivityModule,
    ],
})
export class AppModule { }
