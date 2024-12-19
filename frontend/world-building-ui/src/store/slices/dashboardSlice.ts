import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ContentService } from "../../services/ContentService";
import { GetContentStatsResponse } from "../../proto/content_pb";
import { User } from "../../class/entities/User";
import { World } from "../../class/entities/World";
import { Context } from "../../class/Context";
import { RequestStatusEnum } from "../../enum/RequestStatusEnum";
import { ContentStat } from "../../class/ContentStat";
import { CONTENT_ENTITY_MAP } from "../../CONTENT_ENTITY_MAP";
import { RootState } from "../store";
import { Account } from "../../class/entities/Account";
import { entityNamesToDisplayInStats } from "../../config/worldDashboard";


interface DashboardState {
    stats: ContentStat[] | null; // I can store the object directly as I will not serialize it again and it does not have fancy decorators and such; React wont complain about non-serializable objects
    status: RequestStatusEnum;
    error: string | null;
}

const initialState: DashboardState = {
    stats: null,
    status: RequestStatusEnum.IDLE,
    error: null
}
export const loadDashboardStats = createAsyncThunk(
    'dashboard/loadDashboardStats',
    async ({ context }: { context: Context }) => {
        const contentService = new ContentService();
        const stats: GetContentStatsResponse = await contentService.getContentStats(
            entityNamesToDisplayInStats,
            context
        );
        return stats.getStatsList();
    }
);

export const loadDashboardData = createAsyncThunk(
    'dashboard/loadDashboardData',
    async ({ world_id }: { world_id: string }, { getState, dispatch }) => {
        const state = getState() as RootState;
        const accountData = state.account.currentAccount.data;
        if (!accountData) throw new Error('Account not found; cannot load dashboard data');
        const account: Account = Account.build(accountData);
        const user_id: string = account.user;
        const context: Context = Context.build({
            user: { id: user_id } as User,
            world: { id: world_id } as World
        });

        const [stats] = await Promise.all([
            dispatch(loadDashboardStats({ context })).unwrap(),
        ]);

        return { stats };
    }
);

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadDashboardData.fulfilled, (state, action) => {
            state.stats = action.payload.stats.map(stat => ContentStat.build(stat));
            state.error = null;
            state.status = RequestStatusEnum.SUCCEEDED;
        });
        builder.addCase(loadDashboardData.rejected, (state, action) => {
            state.error = action.error.message || 'Failed to load dashboard data';
            state.status = RequestStatusEnum.FAILED;
        });
        builder.addCase(loadDashboardData.pending, (state, action) => {
            state.status = RequestStatusEnum.LOADING;
        });
    }
})

export default dashboardSlice.reducer;