import { useEffect } from "react";
import { useState } from "react";
import { Account } from "../class/entities/Account";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

export const useAccount = () => {
    const [account, setAccount] = useState<Account | null>(null);
    const { data: accountData } = useSelector((state: RootState) => state.account.currentAccount);
    useEffect(() => {
        const builtAccount = accountData ? Account.build(accountData) : null;
        setAccount(builtAccount);
    }, [accountData]);
    return account;
};