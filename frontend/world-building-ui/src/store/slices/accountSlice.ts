import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Account } from "../../class/entities/Account";
import { RequestStatusEnum } from "../../enum/RequestStatusEnum";
import { AccountService } from "../../services/AccountService";
import { LooseObject } from "../../types";

const mockAccount = new Account()
mockAccount.id = "ACCOUNT_9c82f8af6f1342ca8549b8c3d6b104ca"
mockAccount.username = "testUser"
mockAccount.email = "test12@example.com"
mockAccount.role = "admin"
mockAccount.user = "USER_df3bd4a7c1334138a9edd3c953f93840"

type AccountPlain = LooseObject

interface AccountState {
    currentAccount: {
        data: AccountPlain | null;
        status: RequestStatusEnum;
        error: string | null;
    };
}
const initialState: AccountState = {
    currentAccount: {
        data: null,
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
    async (account: Account): Promise<Account> => {
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
        builder
            .addCase(fetchAccount.pending, (state) => {
                state.currentAccount.status = RequestStatusEnum.LOADING;
            })
            .addCase(fetchAccount.fulfilled, (state, action) => {
                state.currentAccount.status = RequestStatusEnum.SUCCEEDED;
                state.currentAccount.data = action.payload.toPlainObj();
            })
            .addCase(fetchAccount.rejected, (state, action) => {
                state.currentAccount.status = RequestStatusEnum.FAILED;
                state.currentAccount.error = action.error.message || 'Failed to fetch account';
            })

            .addCase(updateAccount.pending, (state) => {
                state.currentAccount.status = RequestStatusEnum.LOADING;
            })
            .addCase(updateAccount.fulfilled, (state, action) => {
                state.currentAccount.status = RequestStatusEnum.SUCCEEDED;
                state.currentAccount.data = action.payload.toPlainObj();
            })
            .addCase(updateAccount.rejected, (state, action) => {
                state.currentAccount.status = RequestStatusEnum.FAILED;
                state.currentAccount.error = action.error.message || 'Failed to update account';
            })

            .addCase(deleteAccount.pending, (state) => {
                state.currentAccount.status = RequestStatusEnum.LOADING;
            })
            .addCase(deleteAccount.fulfilled, (state) => {
                state.currentAccount.status = RequestStatusEnum.SUCCEEDED;
            })
            .addCase(deleteAccount.rejected, (state, action) => {
                state.currentAccount.status = RequestStatusEnum.FAILED;
                state.currentAccount.error = action.error.message || 'Failed to delete account';
            })
    }
});

export default accountSlice.reducer;