import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { World } from '../../class/entities/World';
import { RequestStatusEnum } from '../../enum/RequestStatusEnum';
import { WorldService } from '../../services/WorldService';
import { SearchQuery } from '../../class/search/SearchQuery';
import { Context } from '../../class/Context';
import { LooseObject } from '../../types';

type WorldPlain = LooseObject

interface WorldState {
    data: {
        searchedWorlds: WorldPlain[]
        currentWorld: WorldPlain | null
    };
    status: RequestStatusEnum;
    error: string | null;
};

const initialState: WorldState = {
    data: {
        searchedWorlds: [],
        currentWorld: null,
    },
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
        clearSearchedWorlds: (state) => {
            state.data.searchedWorlds = [];
            state.status = RequestStatusEnum.IDLE;
            state.error = null;
        },
        setSearchedWorlds: (state, action: PayloadAction<World[]>) => {
            state.data.searchedWorlds = action.payload.map((world: World) => world.toPlainObj());
        },
        setCurrentWorld: (state, action: PayloadAction<World>) => {
            state.data.currentWorld = action.payload.toPlainObj();
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
                state.data.searchedWorlds = action.payload.map((world: World) => world.toPlainObj());
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
                state.data.searchedWorlds.push(action.payload.toPlainObj());
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
                state.data.searchedWorlds = state.data.searchedWorlds.filter((w) => w.id !== action.payload);
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
                state.data.searchedWorlds = state.data.searchedWorlds.map((w) => w.id === action.payload.id ? action.payload.toPlainObj() : w);
            })
            .addCase(updateWorld.rejected, (state: WorldState, action) => {
                state.status = RequestStatusEnum.FAILED;
                state.error = action.error.message || 'Failed to update world';
            })
    },
});

export const { clearWorlds } = worldSlice.actions;
export default worldSlice.reducer;
