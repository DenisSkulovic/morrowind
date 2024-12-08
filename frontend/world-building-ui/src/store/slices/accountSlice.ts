import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Account } from "../../dto/Account";
import { RequestStatusEnum } from "../../enum/RequestStatusEnum";
import { AccountService } from "../../services/AccountService";
import { GetAccountResponse } from "../../proto/account";

interface AccountState {
    data: Account | null;
    status: RequestStatusEnum;
    error: string | null;
}
const initialState: AccountState = {
    data: null,
    status: RequestStatusEnum.IDLE,
    error: null
};

export const fetchAccount = createAsyncThunk(
    'account/fetchAccount',
    async (username: string): Promise<Account> => {
        const accountService = new AccountService();
        const { account } = await accountService.getAccount(username);
        if (!account) throw new Error('Account not found');
        return Account.fromDTO(account);
    }
);

export const updateAccount = createAsyncThunk(
    'account/updateAccount',
    async (account: Account): Promise<Account> => {
        const accountService = new AccountService();
        const response = await accountService.updateAccount(account.toDTO());
        if (!response.account) throw new Error('Failed to update account');
        return Account.fromDTO(response.account);
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
                state.status = RequestStatusEnum.LOADING;
            })
            .addCase(fetchAccount.fulfilled, (state, action) => {
                state.status = RequestStatusEnum.SUCCEEDED;
                state.data = action.payload;
            })
            .addCase(fetchAccount.rejected, (state, action) => {
                state.status = RequestStatusEnum.FAILED;
                state.error = action.error.message || 'Failed to fetch account';
            })

            .addCase(updateAccount.pending, (state) => {
                state.status = RequestStatusEnum.LOADING;
            })
            .addCase(updateAccount.fulfilled, (state, action) => {
                state.status = RequestStatusEnum.SUCCEEDED;
                state.data = action.payload;
            })
            .addCase(updateAccount.rejected, (state, action) => {
                state.status = RequestStatusEnum.FAILED;
                state.error = action.error.message || 'Failed to update account';
            })

            .addCase(deleteAccount.pending, (state) => {
                state.status = RequestStatusEnum.LOADING;
            })
            .addCase(deleteAccount.fulfilled, (state) => {
                state.status = RequestStatusEnum.SUCCEEDED;
            })
            .addCase(deleteAccount.rejected, (state, action) => {
                state.status = RequestStatusEnum.FAILED;
                state.error = action.error.message || 'Failed to delete account';
            })
    }
});

export default accountSlice.reducer;