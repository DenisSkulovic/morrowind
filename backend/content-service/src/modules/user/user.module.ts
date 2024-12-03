import { Module } from '@nestjs/common';
import { UserService } from './user.service';
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
            provide: 'IUserService',
            useClass: UserService,
        },
        UserService,
    ],
    exports: ['IUserService', UserService],
})
export class UserModule { }
