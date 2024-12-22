import { Account } from "../class/entities/Account";
import { RootState } from "../store/store";
import { useSelectorAndBuilder } from "./useSelectorAndBuilder";

export const useAccount = () => {
    const account = useSelectorAndBuilder<Account | null>((state: RootState) => state.account.currentAccount.data, account => account ? Account.build(account) : null);
    return account;
};