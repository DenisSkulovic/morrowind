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
        passwordHash: string, // TODO clearly this is only for testing purposes; will use a proper auth approach
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
        await this.getRepository(source).save(account) // TODO as far as I know, typeorm saves all connected entities as well, if they are changed or new, so this should also save the user
        return { account, user }
    }
}