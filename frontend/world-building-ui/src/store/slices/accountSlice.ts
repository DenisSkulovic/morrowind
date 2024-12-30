import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Account } from "../../class/entities/Account";
import { RequestStatusEnum } from "../../enum/RequestStatusEnum";
import { AccountService } from "../../services/AccountService";
import { LooseObject } from "../../types";
import { handlePending, handleRejected } from "../common";
import { User } from "../../class/entities/User";

const mockAccount = Account.build({
    id: "ACCOUNT_9c82f8af6f1342ca8549b8c3d6b104ca",
    username: "testUser",
    email: "test12@example.com",
    role: "admin",
    user: "USER_df3bd4a7c1334138a9edd3c953f93840"
})


export type AccountPlain = LooseObject

export interface AccountState {
    currentAccount: {
        data: AccountPlain | null;
        status: RequestStatusEnum;
        error: string | null;
    };
}
const initialState: AccountState = {
    currentAccount: {
        data: mockAccount.toPlainObj(),
        status: RequestStatusEnum.IDLE,
        error: null
    }
};

export const fetchAccount = createAsyncThunk(
    'account/fetchAccount',
    async (username: string): Promise<Account> => {
        const accountService = new AccountService();
        const response: Account = await accountService.getAccount(username);
        return response;
    }
);

export const updateAccount = createAsyncThunk(
    'account/updateAccount',
    async (accountPlain: AccountPlain): Promise<Account> => {
        const account = Account.build(accountPlain);
        const accountService = new AccountService();
        const response: Account = await accountService.updateAccount(account);
        return response;
    }
);

export const deleteAccount = createAsyncThunk(
    'account/deleteAccount',
    async (username: string): Promise<void> => {
        const accountService = new AccountService();
        await accountService.deleteAccount(username);
    }
);

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAccount.pending, (state) => handlePending(state.currentAccount))
        builder.addCase(fetchAccount.fulfilled, (state, action) => {
            state.currentAccount.status = RequestStatusEnum.SUCCEEDED;
            state.currentAccount.data = action.payload.toPlainObj();
        })
        builder.addCase(fetchAccount.rejected, (state, action) => handleRejected(state.currentAccount, action))

        builder.addCase(updateAccount.pending, (state) => handlePending(state.currentAccount))
        builder.addCase(updateAccount.fulfilled, (state, action) => {
            state.currentAccount.status = RequestStatusEnum.SUCCEEDED;
            state.currentAccount.data = action.payload.toPlainObj();
        })
        builder.addCase(updateAccount.rejected, (state, action) => handleRejected(state.currentAccount, action))

        builder.addCase(deleteAccount.pending, (state) => handlePending(state.currentAccount))
        builder.addCase(deleteAccount.fulfilled, (state) => {
            state.currentAccount.status = RequestStatusEnum.SUCCEEDED;
        })
        builder.addCase(deleteAccount.rejected, (state, action) => handleRejected(state.currentAccount, action))
    }
});

export default accountSlice.reducer;