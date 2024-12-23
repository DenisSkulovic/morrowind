import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ContentService } from "../../services/ContentService";
import { User } from "../../class/entities/User";
import { World } from "../../class/entities/World";
import { Context } from "../../class/Context";
import { RequestStatusEnum } from "../../enum/RequestStatusEnum";
import { ContentStat } from "../../class/ContentStat";
import { entityNamesToDisplayInStats } from "../../config/worldDashboard";
import { LooseObject } from "../../types";
import { Serializer } from "../../serialize/serializer";
import { ActivityRecordPlain } from "./worldSlice";
import { ActivityRecordsService } from "../../services/ActivityRecordsService";

export type ContentStatPlain = LooseObject

interface DashboardState {
    stats: {
        data: ContentStatPlain[] | null;
        status: RequestStatusEnum;
        error: string | null;
    }
    activityRecordsHead: {
        data: ActivityRecordPlain[] | null;
        status: RequestStatusEnum,
        error: string | null,
    },
    status: RequestStatusEnum;
    error: string | null;
}

const initialState: DashboardState = {
    stats: {
        data: null,
        status: RequestStatusEnum.IDLE,
        error: null
    },
    activityRecordsHead: {
        data: null,
        status: RequestStatusEnum.IDLE,
        error: null,
    },
    status: RequestStatusEnum.IDLE,
    error: null
}

export const loadDashboardData = createAsyncThunk(
    'dashboard/loadDashboardData',
    async ({ worldId, userId }: { worldId: string, userId: string }) => {
        const context = new Context();
        context.world = { id: worldId } as World;
        context.user = { id: userId } as User;

        const contentService = new ContentService();
        const activityService = new ActivityRecordsService();

        const [stats, activities] = await Promise.all([
            contentService.getContentStats(entityNamesToDisplayInStats, context),
            activityService.head(context)
        ]);

        const contentStats = stats.getStatsList().map(stat =>
            Serializer.fromDTO(stat, new ContentStat()).toPlainObj()
        );
        const activityRecords = activities.map(activity => activity.toPlainObj());

        return {
            stats: contentStats,
            activities: activityRecords
        };
    }
);

export const refreshStats = createAsyncThunk(
    'dashboard/refreshStats',
    async ({ worldId, userId }: { worldId: string, userId: string }) => {
        const context = new Context();
        context.world = { id: worldId } as World;
        context.user = { id: userId } as User;

        const contentService = new ContentService();
        const stats = await contentService.getContentStats(entityNamesToDisplayInStats, context);
        return stats.getStatsList().map(stat =>
            Serializer.fromDTO(stat, new ContentStat()).toPlainObj()
        );
    }
);

export const refreshActivities = createAsyncThunk(
    'dashboard/refreshActivities',
    async ({ worldId, userId }: { worldId: string, userId: string }) => {
        const context = new Context();
        context.world = { id: worldId } as World;
        context.user = { id: userId } as User;

        const activityService = new ActivityRecordsService();
        const activities = await activityService.head(context);
        return activities.map(activity => activity.toPlainObj());
    }
);

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        resetActivityRecordsHead: (state) => {
            state.activityRecordsHead.data = null;
            state.activityRecordsHead.status = RequestStatusEnum.IDLE;
            state.activityRecordsHead.error = null;
        }
    },
    extraReducers: (builder) => {
        // Load Dashboard Data
        builder.addCase(loadDashboardData.pending, (state) => {
            state.status = RequestStatusEnum.LOADING;
            state.stats.status = RequestStatusEnum.LOADING;
            state.activityRecordsHead.status = RequestStatusEnum.LOADING;
        });
        builder.addCase(loadDashboardData.fulfilled, (state, action) => {
            state.stats.data = action.payload.stats;
            state.stats.status = RequestStatusEnum.SUCCEEDED;
            state.stats.error = null;

            state.activityRecordsHead.data = action.payload.activities;
            state.activityRecordsHead.status = RequestStatusEnum.SUCCEEDED;
            state.activityRecordsHead.error = null;

            state.status = RequestStatusEnum.SUCCEEDED;
            state.error = null;
        });
        builder.addCase(loadDashboardData.rejected, (state, action) => {
            state.status = RequestStatusEnum.FAILED;
            state.error = action.error.message || 'Failed to load dashboard data';

            state.stats.status = RequestStatusEnum.FAILED;
            state.stats.error = action.error.message || 'Failed to load stats';

            state.activityRecordsHead.status = RequestStatusEnum.FAILED;
            state.activityRecordsHead.error = action.error.message || 'Failed to load activities';
        });

        // Refresh Stats
        builder.addCase(refreshStats.pending, (state) => {
            state.stats.status = RequestStatusEnum.LOADING;
        });
        builder.addCase(refreshStats.fulfilled, (state, action) => {
            state.stats.data = action.payload;
            state.stats.status = RequestStatusEnum.SUCCEEDED;
            state.stats.error = null;
        });
        builder.addCase(refreshStats.rejected, (state, action) => {
            state.stats.status = RequestStatusEnum.FAILED;
            state.stats.error = action.error.message || 'Failed to refresh stats';
        });

        // Refresh Activities
        builder.addCase(refreshActivities.pending, (state) => {
            state.activityRecordsHead.status = RequestStatusEnum.LOADING;
        });
        builder.addCase(refreshActivities.fulfilled, (state, action) => {
            state.activityRecordsHead.data = action.payload;
            state.activityRecordsHead.status = RequestStatusEnum.SUCCEEDED;
            state.activityRecordsHead.error = null;
        });
        builder.addCase(refreshActivities.rejected, (state, action) => {
            state.activityRecordsHead.status = RequestStatusEnum.FAILED;
            state.activityRecordsHead.error = action.error.message || 'Failed to refresh activities';
        });
    }
})

export const { resetActivityRecordsHead } = dashboardSlice.actions;
export default dashboardSlice.reducer;