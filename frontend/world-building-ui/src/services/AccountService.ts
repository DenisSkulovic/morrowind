import { AccountServiceClientImpl, CreateAccountRequest, CreateAccountResponse, GetAccountRequest, GetAccountResponse } from '../proto/account';
import { rpc } from '../rpc';

export class AccountService {
    private client: AccountServiceClientImpl;

    constructor() {
        this.client = new AccountServiceClientImpl(rpc);
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
}