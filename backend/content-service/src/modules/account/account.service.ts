import { DataSource, Repository } from "typeorm";
import { User } from "../user/entities/User";
import { DataSourceEnum } from "../../common/enum/DataSourceEnum";
import { Account } from "./entities/Account";
import { AccountRoleEnum } from "../../common/enum/AccountRoleEnum";
import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { UserService } from "../user/user.service";

export interface IAccountService {
    getAccount(
        username: string,
        source: DataSourceEnum,
    ): Promise<Account[]>

    createAccountAndUser(
        username: string,
        password_hash: string,
        email: string,
        role: AccountRoleEnum,
        source: DataSourceEnum,
    ): Promise<{ account: Account, user: User }>

    updateAccount(
        account: Account,
        source: DataSourceEnum,
    ): Promise<Account>

    deleteAccount(
        username: string,
        source: DataSourceEnum,
    ): Promise<void>
}

@Injectable()
export class AccountService implements IAccountService {

    constructor(
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_WORLD) private readonly worldDataSource: DataSource,
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_CAMPAIGN) private readonly campaignDataSource: DataSource,
        @Inject(forwardRef(() => UserService)) private readonly userService: UserService
    ) { }

    private getDataSource(source: DataSourceEnum): DataSource {
        return source === DataSourceEnum.DATA_SOURCE_WORLD ? this.worldDataSource : this.campaignDataSource;
    }

    private getRepository(source: DataSourceEnum): Repository<Account> { return this.getDataSource(source).getRepository(Account) }

    public async getAccount(
        username: string,
        source: DataSourceEnum,
    ): Promise<Account[]> {
        const accounts: Account[] = await this.getRepository(source).find({
            where: { username },
            relations: { user: true }
        })
        console.log(`[AccountService - getAccount] accounts:`, accounts)
        return accounts
    }

    public async createAccountAndUser(
        username: string,
        passwordHash: string,
        email: string,
        role: AccountRoleEnum,
        source: DataSourceEnum,
    ): Promise<{ account: Account, user: User }> {
        console.log(`[AccountService - createAccountAndUser] entry:`, JSON.stringify({ username, passwordHash, email, role, source }))

        const userRepository: Repository<User> = this.userService.getRepository(source)
        const user: User = userRepository.create()
        console.log(`[AccountService - createAccountAndUser] created user`)
        const account: Account = this.getRepository(source).create({
            username,
            passwordHash,
            email,
            role,
            user,
        })
        console.log(`[AccountService - createAccountAndUser] created account`)
        user.account = account
        account.user = user
        console.log(`[AccountService - createAccountAndUser] user, account:`, user, account)
        await this.getRepository(source).save(account)
        return { account, user }
    }

    public async updateAccount(
        account: Account,
        source: DataSourceEnum,
    ): Promise<Account> {
        return await this.getRepository(source).save(account);
    }

    public async deleteAccount(
        username: string,
        source: DataSourceEnum,
    ): Promise<void> {
        const accounts = await this.getAccount(username, source);
        if (accounts.length > 0) {
            await this.getRepository(source).remove(accounts[0]);
        }
    }
}