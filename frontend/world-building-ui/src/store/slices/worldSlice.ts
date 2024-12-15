import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { World } from '../../class/entities/World';
import { RequestStatusEnum } from '../../enum/RequestStatusEnum';
import { WorldService } from '../../services/WorldService';
import { SearchQuery } from '../../class/search/SearchQuery';
import { QueryFilter } from '../../class/search/QueryFilter';
import { Context } from '../../class/Context';
import { User } from '../../class/entities/User';

interface WorldState {
    data: World[];
    status: RequestStatusEnum;
    error: string | null;
};

const initialState: WorldState = {
    data: [],
    status: RequestStatusEnum.IDLE,
    error: null,
};

// Async Thunks
export const fetchWorlds = createAsyncThunk(
    'worlds/fetchWorlds',
    async (userId: string): Promise<World[]> => {
        console.log(`[fetchWorlds] userId:`, userId)
        const user = new User();
        user.id = userId;

        const context = new Context();
        context.user = user;
        const worldService = new WorldService();

        const query = new SearchQuery();
        query.page = 1;
        query.pageSize = 100;

        const filter = new QueryFilter();
        filter.field = "user";
        filter.operator = "eq";
        filter.value = userId;
        query.filters = [filter];

        console.log(`before`)
        const response: World[] = await worldService.search("World", query, context);
        console.log(`after`, response)
        return response;
    }
);

export const createWorld = createAsyncThunk(
    'worlds/createWorld',
    async ({ world, userId }: { world: World, userId: string }): Promise<World> => {
        const worldService = new WorldService();
        const response: World = await worldService.createWorld(world, userId);
        return response;
    }
);

export const deleteWorld = createAsyncThunk(
    'worlds/deleteWorld',
    async (worldId: string): Promise<string> => {
        const worldService = new WorldService();
        await worldService.deleteWorld(worldId);
        return worldId;
    }
);

export const updateWorld = createAsyncThunk(
    'worlds/updateWorld',
    async (world: World): Promise<World> => {
        const worldService = new WorldService();
        const response: World = await worldService.updateWorld(world);
        return response;
    }
);

// Slice
const worldSlice = createSlice({
    name: 'worlds',
    initialState,
    reducers: {
        clearWorlds: (state) => {
            state.data = [];
            state.status = RequestStatusEnum.IDLE;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWorlds.pending, (state) => {
                console.log(`[fetchWorlds.pending] state:`, state)
                state.status = RequestStatusEnum.LOADING;
                state.error = null;
            })
            .addCase(fetchWorlds.fulfilled, (state, action) => {
                console.log(`[fetchWorlds.fulfilled] action.payload:`, action.payload)
                state.status = RequestStatusEnum.SUCCEEDED;
                state.data = action.payload;
            })
            .addCase(fetchWorlds.rejected, (state, action) => {
                console.log(`[fetchWorlds.rejected] action.error:`, action.error)
                state.status = RequestStatusEnum.FAILED;
                state.error = action.error.message || 'Failed to fetch worlds';
            })
            .addCase(createWorld.pending, (state) => {
                state.status = RequestStatusEnum.LOADING;
                state.error = null;
            })
            .addCase(createWorld.fulfilled, (state, action) => {
                state.status = RequestStatusEnum.SUCCEEDED;
                state.data.push(action.payload);
            })
            .addCase(createWorld.rejected, (state, action) => {
                state.status = RequestStatusEnum.FAILED;
                state.error = action.error.message || 'Failed to create world';
            })
            .addCase(deleteWorld.pending, (state) => {
                state.status = RequestStatusEnum.LOADING;
                state.error = null;
            })
            .addCase(deleteWorld.fulfilled, (state, action) => {
                state.status = RequestStatusEnum.SUCCEEDED;
                state.data = state.data.filter((w) => w.id !== action.payload);
            })
            .addCase(deleteWorld.rejected, (state, action) => {
                state.status = RequestStatusEnum.FAILED;
                state.error = action.error.message || 'Failed to delete world';
            });
    },
});

export const { clearWorlds } = worldSlice.actions;
export default worldSlice.reducer;
