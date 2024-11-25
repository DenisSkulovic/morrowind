import { DataSource, Repository } from "typeorm";
import { sourcesMap } from "../../data-source";
import { Account, AccountRoleEnum } from "../../entities/Account";
import { User } from "../../entities/User";
import { DataSourceEnum } from "../../enum/DataSourceEnum";
import { RepositoryServiceBase, RepositoryServiceSettings } from "./RepositoryServiceBase";

export class AccountService extends RepositoryServiceBase {

    constructor(settings: RepositoryServiceSettings) {
        super(settings)
    }

    public async createAccountAndUser(
        username: string,
        password_hash: string, // TODO clearly this is only for testing purposes; will use a proper auth approach
        email: string,
        role: AccountRoleEnum,
        source: DataSourceEnum,
    ): Promise<{ account: Account, user: User }> {
        const dataSource: DataSource | undefined = sourcesMap.get(source)
        if (!dataSource) throw new Error(`failed to get data source for source: "${source}"`)
        const userRepository: Repository<User> = dataSource.getRepository(User)
        console.log(`before create user`)
        const user: User = userRepository.create({

        })
        console.log(`after create user`)
        const accountRepository: Repository<Account> = dataSource.getRepository(Account)
        const account: Account = accountRepository.create({
            username,
            password_hash,
            email,
            role,
        })
        account.user = user
        user.account = account
        await account.save() // TODO as far as I know, typeorm saves all connected entities as well, if they are changed or new, so this should also save the user
        return { account, user }
    }
}