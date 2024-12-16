import {
    CreateAccountRequest,
    GetAccountRequest,
    UpdateAccountRequest,
    DeleteAccountRequest
} from "../proto/account_pb";
import { AccountServiceClient } from "../proto/AccountServiceClientPb";
import { Account } from '../class/entities/Account';
import { Serializer } from '../serialize/serializer';
import { AccountDTO } from "../proto/common_pb";

export class AccountService {
    private client: AccountServiceClient;

    constructor() {
        this.client = new AccountServiceClient("http://localhost:8080");
    }

    async createAccountAndUser(username: string, passwordHash: string, email: string, role: string): Promise<Account> {
        const request = new CreateAccountRequest();
        request.setUsername(username);
        request.setPasswordhash(passwordHash);
        request.setEmail(email);
        request.setRole(role);
        return new Promise((resolve, reject) => {
            this.client.createAccountAndUser(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    const accountDTO = response.getAccount();
                    const accountResp = Serializer.fromDTO(accountDTO, new Account());
                    resolve(accountResp);
                }
            });
        });
    }

    async getAccount(username: string): Promise<Account> {
        const request = new GetAccountRequest();
        request.setUsername(username);
        return new Promise((resolve, reject) => {
            this.client.getAccount(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    const accountDTO = response.getAccount();
                    const accountResp = Serializer.fromDTO(accountDTO, new Account());
                    resolve(accountResp);
                }
            });
        });
    }

    async updateAccount(account: Account): Promise<Account> {
        const request = new UpdateAccountRequest();
        request.setAccount(Serializer.toDTO(account, new AccountDTO()));
        return new Promise((resolve, reject) => {
            this.client.updateAccount(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else {
                    const accountDTO = response.getAccount();
                    const accountResp = Serializer.fromDTO(accountDTO, new Account());
                    resolve(accountResp);
                }
            });
        });
    }

    async deleteAccount(username: string): Promise<void> {
        const request = new DeleteAccountRequest();
        request.setUsername(username);
        return new Promise((resolve, reject) => {
            this.client.deleteAccount(request, {}, (err, response) => {
                if (err) reject(err);
                else if (!response) reject(new Error('No response from server'));
                else resolve();
            });
        });
    }
}
