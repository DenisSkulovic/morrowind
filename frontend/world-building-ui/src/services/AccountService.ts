import {
    AccountServiceClientImpl, CreateAccountRequest, CreateAccountResponse,
    GetAccountRequest, GetAccountResponse, UpdateAccountRequest,
    UpdateAccountResponse, DeleteAccountRequest, DeleteAccountResponse
} from '../proto/account';
import { AccountDTO } from '../proto/common';
import { rpc } from '../rpc';

export class AccountService {
    private client: AccountServiceClientImpl;

    constructor() {
        this.client = new AccountServiceClientImpl(rpc, {
            service: "AccountService"
        });
    }

    async createAccountAndUser(username: string, passwordHash: string, email: string, role: string): Promise<CreateAccountResponse> {
        const request: CreateAccountRequest = {
            username,
            passwordHash,
            email,
            role
        };
        return await this.client.createAccountAndUser(request);
    }

    async getAccount(username: string): Promise<GetAccountResponse> {
        const request: GetAccountRequest = {
            username
        };
        return await this.client.getAccount(request);
    }

    async updateAccount(account: AccountDTO): Promise<UpdateAccountResponse> {
        const request: UpdateAccountRequest = {
            account
        };
        return await this.client.updateAccount(request);
    }

    async deleteAccount(username: string): Promise<DeleteAccountResponse> {
        const request: DeleteAccountRequest = {
            username
        };
        return await this.client.deleteAccount(request);
    }
}
