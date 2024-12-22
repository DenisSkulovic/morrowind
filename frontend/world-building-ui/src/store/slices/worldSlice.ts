import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { World } from '../../class/entities/World';
import { RequestStatusEnum } from '../../enum/RequestStatusEnum';
import { WorldService } from '../../services/WorldService';
import { SearchQuery } from '../../class/search/SearchQuery';
import { Context } from '../../class/Context';
import { LooseObject } from '../../types';
import { handlePending, handleRejected } from '../common';
import { PresetEnum } from '../../enum/entityEnums';
import { RootState } from '../store';

export type WorldPlain = LooseObject

interface WorldState {
    currentWorld: {
        data: WorldPlain | null;
        status: RequestStatusEnum;
        error: string | null;
    };
    searchedWorlds: {
        data: WorldPlain[];
        status: RequestStatusEnum;
        error: string | null;
    };
    presets: {
        data: PresetEnum[];
        status: RequestStatusEnum;
        error: string | null;
    };
    presetLoading: {
        status: RequestStatusEnum;
        error: string | null;
    };
};

const initialState: WorldState = {
    currentWorld: {
        data: null,
        status: RequestStatusEnum.IDLE,
        error: null,
    },
    searchedWorlds: {
        data: [],
        status: RequestStatusEnum.IDLE,
        error: null,
    },
    presets: {
        data: [],
        status: RequestStatusEnum.IDLE,
        error: null,
    },
    presetLoading: {
        status: RequestStatusEnum.IDLE,
        error: null,
    },
};

// Async Thunks
export const searchWorlds = createAsyncThunk(
    'worlds/searchWorlds',
    async ({ query, context }: { query: SearchQuery, context: Context }): Promise<WorldPlain[]> => {
        const worldService = new WorldService();
        const response: World[] = await worldService.search(query, context);
        return response.map((world: World) => world.toPlainObj());
    }
);

export const createWorld = createAsyncThunk(
    'worlds/createWorld',
    async ({ worldPlain, userId }: { worldPlain: WorldPlain, userId: string }): Promise<WorldPlain> => {
        const world = World.build(worldPlain);
        const worldService = new WorldService();
        const response: World = await worldService.createWorld(world, userId);
        return response.toPlainObj();
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
    async (worldPlain: WorldPlain): Promise<WorldPlain> => {
        const world = World.build(worldPlain);
        const worldService = new WorldService();
        const response: World = await worldService.updateWorld(world);
        return response.toPlainObj();
    }
);

export const getPresets = createAsyncThunk(
    'worlds/getPresets',
    async (): Promise<PresetEnum[]> => {
        const worldService = new WorldService();
        console.log('[WorldSlice] Getting presets');
        const response: PresetEnum[] = await worldService.getPresets();
        return response;
    }
);

export const loadWorldPreset = createAsyncThunk(
    'worlds/loadWorldPreset',
    async ({ preset, userId, worldId }: { preset: PresetEnum, userId: string, worldId: string }, { getState }): Promise<void> => {
        const state = getState() as RootState;
        const worldService = new WorldService();
        await worldService.loadWorldPreset(preset, userId, worldId);
    }
);

// Slice
const worldSlice = createSlice({
    name: 'worlds',
    initialState,
    reducers: {
        clearSearchedWorlds: (state) => {
            state.searchedWorlds.data = [];
            state.searchedWorlds.status = RequestStatusEnum.IDLE;
            state.searchedWorlds.error = null;
        },
        setSearchedWorlds: (state, action: PayloadAction<WorldPlain[]>) => {
            state.searchedWorlds.data = action.payload;
        },
        setCurrentWorld: (state, action: PayloadAction<WorldPlain>) => {
            state.currentWorld.data = action.payload;
        },
        resetPresetLoading: (state) => {
            state.presetLoading.status = RequestStatusEnum.IDLE;
            state.presetLoading.error = null;
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<WorldState>) => {
        // Search Worlds
        builder.addCase(searchWorlds.pending, (state: WorldState) => handlePending(state))
        builder.addCase(searchWorlds.fulfilled, (state: WorldState, action: PayloadAction<WorldPlain[]>) => {
            state.searchedWorlds.status = RequestStatusEnum.SUCCEEDED;
            state.searchedWorlds.data = action.payload;
        })
        builder.addCase(searchWorlds.rejected, (state: WorldState, action) => handleRejected(state, action))

        // Create World
        builder.addCase(createWorld.pending, (state: WorldState) => handlePending(state))
        builder.addCase(createWorld.fulfilled, (state: WorldState, action: PayloadAction<WorldPlain>) => {
            state.searchedWorlds.status = RequestStatusEnum.SUCCEEDED;
            state.searchedWorlds.data.push(action.payload);
        })
        builder.addCase(createWorld.rejected, (state: WorldState, action) => handleRejected(state, action))

        // Delete World
        builder.addCase(deleteWorld.pending, (state: WorldState) => handlePending(state))
        builder.addCase(deleteWorld.fulfilled, (state: WorldState, action: PayloadAction<string>) => {
            state.searchedWorlds.status = RequestStatusEnum.SUCCEEDED;
            state.searchedWorlds.data = state.searchedWorlds.data.filter((w: WorldPlain) => w.id !== action.payload);
        })
        builder.addCase(deleteWorld.rejected, (state: WorldState, action) => handleRejected(state, action))

        // Update World
        builder.addCase(updateWorld.pending, (state: WorldState) => handlePending(state))
        builder.addCase(updateWorld.fulfilled, (state: WorldState, action: PayloadAction<WorldPlain>) => {
            state.searchedWorlds.status = RequestStatusEnum.SUCCEEDED;
            state.searchedWorlds.data = state.searchedWorlds.data.map((w: WorldPlain) => w.id === action.payload.id ? action.payload : w);
        })
        builder.addCase(updateWorld.rejected, (state: WorldState, action) => handleRejected(state, action))

        // Get Presets
        builder.addCase(getPresets.pending, (state: WorldState) => handlePending(state))
        builder.addCase(getPresets.fulfilled, (state: WorldState, action: PayloadAction<PresetEnum[]>) => {
            state.presets.status = RequestStatusEnum.SUCCEEDED;
            state.presets.data = action.payload;
        })
        builder.addCase(getPresets.rejected, (state: WorldState, action) => handleRejected(state, action))

        // Load World Preset
        builder.addCase(loadWorldPreset.pending, (state: WorldState) => handlePending(state))
        builder.addCase(loadWorldPreset.fulfilled, (state: WorldState) => {
            state.presetLoading.status = RequestStatusEnum.SUCCEEDED;
        })
        builder.addCase(loadWorldPreset.rejected, (state: WorldState, action) => handleRejected(state, action))
    },
});

export const { clearSearchedWorlds, setSearchedWorlds, setCurrentWorld, resetPresetLoading } = worldSlice.actions;
export default worldSlice.reducer;