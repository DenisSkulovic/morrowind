import { Module, forwardRef } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { InjectDataSourceModule } from '../../data-source/inject-datasource.module';
import { UserModule } from '../user/user.module';

@Module({
    imports: [
        InjectDataSourceModule.register([
            DataSourceEnum.DATA_SOURCE_WORLD,
            DataSourceEnum.DATA_SOURCE_CAMPAIGN,
        ]),
        forwardRef(() => UserModule),
    ],
    controllers: [AccountController],
    providers: [
        {
            provide: 'IAccountService',
            useClass: AccountService,
        },
        AccountService
    ],
    exports: ['IAccountService', AccountService],
})
export class AccountModule { }
