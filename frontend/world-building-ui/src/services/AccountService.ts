import { common } from '../proto/common';
import { account } from '../proto/account';
import { grpc } from '@improbable-eng/grpc-web';

export class AccountService {
    private client: account.AccountServiceClient;

    constructor() {
        this.client = new account.AccountServiceClient("localhost:8080", grpc.credentials.createInsecure());
    }

    async createAccountAndUser(username: string, passwordHash: string, email: string, role: string): Promise<account.CreateAccountResponse> {
        const request = new account.CreateAccountRequest();
        request.username = username;
        request.passwordHash = passwordHash;
        request.email = email;
        request.role = role;
        return new Promise((resolve, reject) => {
            this.client.createAccountAndUser(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    async getAccount(username: string): Promise<account.GetAccountResponse> {
        const request = new account.GetAccountRequest();
        request.username = username;
        return new Promise((resolve, reject) => {
            this.client.getAccount(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    async updateAccount(accountDto: common.AccountDTO): Promise<account.UpdateAccountResponse> {
        const request = new account.UpdateAccountRequest({
            account: accountDto
        });
        return new Promise((resolve, reject) => {
            this.client.updateAccount(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }

    async deleteAccount(username: string): Promise<account.DeleteAccountResponse> {
        const request = new account.DeleteAccountRequest();
        request.username = username;
        return new Promise((resolve, reject) => {
            this.client.deleteAccount(request, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve(response);
            });
        });
    }
}
