import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { World } from '../../class/entities/World';
import { RequestStatusEnum } from '../../enum/RequestStatusEnum';
import { WorldService } from '../../services/WorldService';
import { SearchQuery } from '../../class/search/SearchQuery';
import { QueryFilter } from '../../class/search/QueryFilter';
import { Context } from '../../class/Context';
import { User } from '../../class/entities/User';
import { LooseObject } from '../../types';

type WorldPlain = LooseObject

interface WorldState {
    data: WorldPlain[];
    status: RequestStatusEnum;
    error: string | null;
};

const initialState: WorldState = {
    data: [],
    status: RequestStatusEnum.IDLE,
    error: null,
};

// Async Thunks
export const searchWorlds = createAsyncThunk(
    'worlds/searchWorlds',
    async ({ query, context }: { query: SearchQuery, context: Context }): Promise<World[]> => {
        const worldService = new WorldService();
        const response: World[] = await worldService.search(query, context);
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
        },
        setWorlds: (state, action: PayloadAction<World[]>) => {
            state.data = action.payload.map((world: World) => world.toPlainObj());
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<WorldState>) => {
        builder
            .addCase(searchWorlds.pending, (state: WorldState) => {
                state.status = RequestStatusEnum.LOADING;
                state.error = null;
            })
            .addCase(searchWorlds.fulfilled, (state: WorldState, action: PayloadAction<World[]>) => {
                state.status = RequestStatusEnum.SUCCEEDED;
                state.data = action.payload.map((world: World) => world.toPlainObj());
            })
            .addCase(searchWorlds.rejected, (state: WorldState, action) => {
                state.status = RequestStatusEnum.FAILED;
                state.error = action.error.message || 'Failed to fetch worlds';
            })

            .addCase(createWorld.pending, (state: WorldState) => {
                state.status = RequestStatusEnum.LOADING;
                state.error = null;
            })
            .addCase(createWorld.fulfilled, (state: WorldState, action: PayloadAction<World>) => {
                state.status = RequestStatusEnum.SUCCEEDED;
                state.data.push(action.payload.toPlainObj());
            })
            .addCase(createWorld.rejected, (state: WorldState, action) => {
                state.status = RequestStatusEnum.FAILED;
                state.error = action.error.message || 'Failed to create world';
            })

            .addCase(deleteWorld.pending, (state: WorldState) => {
                state.status = RequestStatusEnum.LOADING;
                state.error = null;
            })
            .addCase(deleteWorld.fulfilled, (state: WorldState, action: PayloadAction<string>) => {
                state.status = RequestStatusEnum.SUCCEEDED;
                state.data = state.data.filter((w) => w.id !== action.payload);
            })
            .addCase(deleteWorld.rejected, (state: WorldState, action) => {
                state.status = RequestStatusEnum.FAILED;
                state.error = action.error.message || 'Failed to delete world';
            })

            .addCase(updateWorld.pending, (state: WorldState) => {
                state.status = RequestStatusEnum.LOADING;
                state.error = null;
            })
            .addCase(updateWorld.fulfilled, (state: WorldState, action: PayloadAction<World>) => {
                state.status = RequestStatusEnum.SUCCEEDED;
                state.data = state.data.map((w) => w.id === action.payload.id ? action.payload.toPlainObj() : w);
            })
            .addCase(updateWorld.rejected, (state: WorldState, action) => {
                state.status = RequestStatusEnum.FAILED;
                state.error = action.error.message || 'Failed to update world';
            })
    },
});

export const { clearWorlds } = worldSlice.actions;
export default worldSlice.reducer;
