import { Module, forwardRef } from '@nestjs/common';
import { WorldController } from './world.controller';
import { WorldService } from './world.service';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { InjectDataSourceModule } from '../../data-source/inject-datasource.module';
import { ContentModule } from '../content/content.module';
import { PresetModule } from '../preset/preset.module';
import { UserModule } from '../user/user.module';

@Module({
    imports: [
        InjectDataSourceModule.register([
            DataSourceEnum.DATA_SOURCE_WORLD,
            DataSourceEnum.DATA_SOURCE_CAMPAIGN,
        ]),
        forwardRef(() => ContentModule),
        forwardRef(() => UserModule),
        forwardRef(() => PresetModule),
    ],
    controllers: [WorldController],
    providers: [
        {
            provide: 'IWorldService',
            useClass: WorldService,
        },
        WorldService,
    ],
    exports: ['IWorldService', WorldService],
})
export class WorldModule { }
