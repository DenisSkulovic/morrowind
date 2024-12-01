import { DataSource, Repository } from "typeorm";
import { sourcesMap } from "../../data-source";
import { User } from "../../entities/User";
import { DataSourceEnum } from "../../enum/DataSourceEnum";
import { RepositoryServiceBase, RepositoryServiceSettings } from "./RepositoryServiceBase";
import { Account } from "../../entities/Account";
import { AccountRoleEnum } from "../../enum/AccountRoleEnum";

export class AccountService extends RepositoryServiceBase {

    constructor(settings: RepositoryServiceSettings) {
        super(settings)
    }

    public async getAccount(
        username: string,
        source: DataSourceEnum,
    ): Promise<Account[]> {
        const dataSource: DataSource | undefined = sourcesMap.get(source)
        if (!dataSource) throw new Error(`failed to get data source for source: "${source}"`)
        const accountRepository: Repository<Account> = dataSource.getRepository(Account)
        const accounts: Account[] = await accountRepository.find({
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
        const dataSource: DataSource | undefined = sourcesMap.get(source)
        if (!dataSource) throw new Error(`failed to get data source for source: "${source}"`)

        const userRepository: Repository<User> = dataSource.getRepository(User)
        const accountRepository: Repository<Account> = dataSource.getRepository(Account)

        const user: User = userRepository.create()
        console.log(`[AccountService - createAccountAndUser] created user`)
        const account: Account = accountRepository.create({
            username,
            password_hash,
            email,
            role,
        })
        console.log(`[AccountService - createAccountAndUser] created account`)
        user.account = account
        account.user = user
        console.log(`[AccountService - createAccountAndUser] user, account:`, user, account)
        await accountRepository.save(account) // TODO as far as I know, typeorm saves all connected entities as well, if they are changed or new, so this should also save the user
        return { account, user }
    }
}