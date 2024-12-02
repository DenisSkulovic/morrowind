import { DataSource, Repository } from "typeorm";
import { User } from "../user/entities/User";
import { DataSourceEnum } from "../../common/enum/DataSourceEnum";
import { Account } from "./entities/Account";
import { AccountRoleEnum } from "../../common/enum/AccountRoleEnum";
import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';

export interface IAccountService {
    getAccount(
        username: string,
        source: DataSourceEnum,
    ): Promise<Account[]>

    createAccountAndUser(
        username: string,
        password_hash: string, // TODO clearly this is only for testing purposes; will use a proper auth approach
        email: string,
        role: AccountRoleEnum,
        source: DataSourceEnum,
    ): Promise<{ account: Account, user: User }>

}

@Injectable()
export class AccountService implements IAccountService {

    constructor(
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_WORLD) private readonly worldDataSource: DataSource,
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_CAMPAIGN) private readonly campaignDataSource: DataSource,
    ) { }

    private getDataSource(source: DataSourceEnum): DataSource {
        return source === DataSourceEnum.DATA_SOURCE_WORLD ? this.worldDataSource : this.campaignDataSource;
    }

    private getRepository(source: DataSourceEnum): Repository<any> { return this.getDataSource(source).getRepository(Account) }

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
        password_hash: string, // TODO clearly this is only for testing purposes; will use a proper auth approach
        email: string,
        role: AccountRoleEnum,
        source: DataSourceEnum,
    ): Promise<{ account: Account, user: User }> {
        console.log(`[AccountService - createAccountAndUser] entry:`, JSON.stringify({ username, password_hash, email, role, source }))

        const user: User = User.create()
        console.log(`[AccountService - createAccountAndUser] created user`)
        const account: Account = this.getRepository(source).create({
            username,
            password_hash,
            email,
            role,
        })
        console.log(`[AccountService - createAccountAndUser] created account`)
        user.account = account
        account.user = user
        console.log(`[AccountService - createAccountAndUser] user, account:`, user, account)
        await this.getRepository(source).save(account) // TODO as far as I know, typeorm saves all connected entities as well, if they are changed or new, so this should also save the user
        return { account, user }
    }
}