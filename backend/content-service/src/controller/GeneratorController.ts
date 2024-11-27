import { AccountService } from "../layer_2_and_3/service/AccountService";
import { sourcesMap } from "../data-source";
import { DataSourceEnum } from "../enum/DataSourceEnum";
import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { CreateAccountRequest, CreateAccountResponse, GetAccountRequest, GetAccountResponse } from '../proto/account';
import { Account, AccountRoleEnum } from "../entities/Account";

export class GeneratorController {
    [key: string]: any

    public async generateItems(
        call: ServerUnaryCall<GenerateItemsRequest, GenerateItemsResponse>,
        callback: sendUnaryData<GenerateItemsResponse>
    ): Promise<void> {
        try {
            console.log(`[AccountController - createAccount] request:`, call.request)
            const { username, passwordHash, email, role } = call.request
            const accountService = new AccountService({ sourcesMap })

            // TODO validate that role is in AccountRoleEnum
            const validatedRole = role as AccountRoleEnum

            const { user, account } = await accountService.createAccountAndUser(username, passwordHash, email, validatedRole, DataSourceEnum.WORLD)
            console.log(`[AccountController - createAccount] user, account:`, user, account)

            const response: GenerateItemsResponse = {
                userId: user.id,
                accountId: account.id
            }
            console.log(`[AccountController - createAccount] response:`, response)
            callback(null, response)
        } catch (err: any) {
            console.error(`[AccountController - createAccount] error:`, err)
            callback(err)
        }
    };

    public async generateCharacters(
        call: ServerUnaryCall<GenerateCharactersRequest, GenerateCharactersResponse>,
        callback: sendUnaryData<GenerateCharactersResponse>
    ): Promise<void> {
        try {
            console.log(`[AccountController - createAccount] request:`, call.request)
            const { username } = call.request
            const accountService = new AccountService({ sourcesMap })

            const accounts: Account[] = await accountService.getAccount(username, DataSourceEnum.WORLD)
            console.log(`[AccountController - createAccount] accounts:`, accounts)

            const response: GenerateCharactersResponse = {
                account: accounts[0]
            }
            console.log(`[AccountController - createAccount] response:`, response)
            callback(null, response)
        } catch (err: any) {
            console.error(`[AccountController - createAccount] error:`, err)
            callback(err)
        }
    };

    public async generateCharacterGroups(
        call: ServerUnaryCall<GenerateCharacterGroupsRequest, GenerateCharacterGroupsResponse>,
        callback: sendUnaryData<GenerateCharacterGroupsResponse>
    ): Promise<void> {
        try {
            console.log(`[AccountController - createAccount] request:`, call.request)
            const { username } = call.request
            const accountService = new AccountService({ sourcesMap })

            const accounts: Account[] = await accountService.getAccount(username, DataSourceEnum.WORLD)
            console.log(`[AccountController - createAccount] accounts:`, accounts)

            const response: GenerateCharacterGroupsResponse = {
                account: accounts[0]
            }
            console.log(`[AccountController - createAccount] response:`, response)
            callback(null, response)
        } catch (err: any) {
            console.error(`[AccountController - createAccount] error:`, err)
            callback(err)
        }
    };

}