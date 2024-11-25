import { AccountService } from "../layer_2_and_3/service/AccountService";
import { sourcesMap } from "../data-source";
import { DataSourceEnum } from "../enum/DataSourceEnum";
import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { CreateAccountRequest, CreateAccountResponse } from '../proto/account';
import { Account, AccountRoleEnum } from "../entities/Account";

export class AccountController {
    [key: string]: any

    public async createAccount(
        call: ServerUnaryCall<CreateAccountRequest, CreateAccountResponse>,
        callback: sendUnaryData<CreateAccountResponse>
    ): Promise<void> {
        console.log(`I was reached`)
        try {
            console.log(`call.request`, call.request)
            const { username, passwordHash, email, role } = call.request
            const accountService = new AccountService({ sourcesMap })

            // TODO validate that role is in AccountRoleEnum
            const validatedRole = role as AccountRoleEnum

            console.log(`before createAccountAndUser`)
            const { user, account } = await accountService.createAccountAndUser(username, passwordHash, email, validatedRole, DataSourceEnum.WORLD)
            console.log(`after createAccountAndUser`, user, account)

            const response: CreateAccountResponse = {
                userId: user.id,
                accountId: account.id
            }
            callback(null, response)
        } catch (err: any) {
            console.error(err)
            callback(err)
        }
    };


}