import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AccountService } from './account.service';
import { Account } from './entities/Account';
import { AccountRoleEnum } from '../../common/enum/AccountRoleEnum';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { CreateAccountRequest, CreateAccountResponse, GetAccountRequest, GetAccountResponse, UpdateAccountRequest, UpdateAccountResponse, DeleteAccountRequest, DeleteAccountResponse } from '../../proto/account';

@Controller()
export class AccountController {

    constructor(
        @Inject('IAccountService') private readonly accountService: AccountService,
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
            account: account.toDTO()
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

    @GrpcMethod('AccountService', 'updateAccount')
    public async updateAccount(
        request: UpdateAccountRequest,
    ): Promise<UpdateAccountResponse> {
        console.log(`[AccountController - updateAccount] request:`, request)
        if (!request.account) throw new Error("Account is required")
        const account = await this.accountService.updateAccount(Account.fromDTO(request.account), DataSourceEnum.DATA_SOURCE_WORLD);
        const response: UpdateAccountResponse = {
            account: account.toDTO()
        }
        console.log(`[AccountController - updateAccount] response:`, response)
        return response
    };

    @GrpcMethod('AccountService', 'deleteAccount')
    public async deleteAccount(
        request: DeleteAccountRequest,
    ): Promise<DeleteAccountResponse> {
        console.log(`[AccountController - deleteAccount] request:`, request)
        await this.accountService.deleteAccount(request.username, DataSourceEnum.DATA_SOURCE_WORLD);
        const response: DeleteAccountResponse = {}
        console.log(`[AccountController - deleteAccount] response:`, response)
        return response
    };

}