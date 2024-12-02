import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AccountService } from './account.service';
import { Account } from './entities/Account';
import { AccountRoleEnum } from '../../common/enum/AccountRoleEnum';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { CreateAccountRequest, CreateAccountResponse, GetAccountRequest, GetAccountResponse } from '../../proto/account';

@Controller()
export class AccountController {

    constructor(
        private readonly accountService: AccountService,
    ) { }

    @GrpcMethod('AccountService', 'createAccountAndUser')
    public async createAccountAndUser(
        request: CreateAccountRequest,
    ): Promise<CreateAccountResponse> {
        console.log(`[AccountController - createAccountAndUser] request:`, request)
        const { username, passwordHash, email, role } = request

        // TODO validate that role is in AccountRoleEnum
        const validatedRole = role as AccountRoleEnum

        const { user, account } = await this.accountService.createAccountAndUser(username, passwordHash, email, validatedRole, DataSourceEnum.DATA_SOURCE_WORLD)
        console.log(`[AccountController - createAccountAndUser] user, account:`, user, account)

        const response: CreateAccountResponse = {
            userId: user.id,
            accountId: account.id
        }
        console.log(`[AccountController - createAccountAndUser] response:`, response)
        return response
    };

    @GrpcMethod('AccountService', 'getAccount')
    public async getAccount(
        request: GetAccountRequest,
    ): Promise<GetAccountResponse> {
        console.log(`[AccountController - getAccount] request:`, request)
        const { username } = request

        const accounts: Account[] = await this.accountService.getAccount(username, DataSourceEnum.DATA_SOURCE_WORLD)
        console.log(`[AccountController - getAccount] accounts:`, accounts)

        const response: GetAccountResponse = {
            account: accounts[0] ? accounts[0].toDTO() : undefined
        }
        console.log(`[AccountController - getAccount] response:`, response)
        return response
    };

}