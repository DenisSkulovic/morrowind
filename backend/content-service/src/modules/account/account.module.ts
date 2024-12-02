import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { Account } from './entities/Account';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { InjectDataSourceModule } from '../../data-source/inject-datasource.module';

@Module({
    imports: [
        InjectDataSourceModule.register([DataSourceEnum.DATA_SOURCE_WORLD, DataSourceEnum.DATA_SOURCE_CAMPAIGN]),
    ],
    controllers: [AccountController],
    providers: [AccountService],
})
export class AccountModule { }
