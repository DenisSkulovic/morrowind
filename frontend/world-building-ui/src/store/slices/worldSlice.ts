import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { World } from '../../class/entities/World';
import { RequestStatusEnum } from '../../enum/RequestStatusEnum';
import { WorldService } from '../../services/WorldService';
import { SearchQuery } from '../../class/search/SearchQuery';
import { Context } from '../../class/Context';
import { LooseObject } from '../../types';
import { handlePending, handleRejected } from '../common';
import { PresetEnum } from '../../enum/entityEnums';
import { ActivityRecord } from '../../class/entities/ActivityRecord';
import { ActivityRecordsService } from '../../services/ActivityRecordsService';
import { User } from '../../class/entities/User';

export type WorldPlain = LooseObject
export type ActivityRecordPlain = LooseObject

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

    activityRecordsSearch: {
        data: {
            activities: ActivityRecordPlain[];
            totalResults: number | null;
            totalPages: number | null;
            currentPage: number | null;
        } | null;
        status: RequestStatusEnum,
        error: string | null,
    }
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

    activityRecordsSearch: {
        data: null,
        status: RequestStatusEnum.IDLE,
        error: null,
    }
};

// Async Thunks
export const searchWorldsCall = async ({ query, context }: { query: SearchQuery, context: Context }): Promise<WorldPlain[]> => {
    const worldService = new WorldService();
    const response: World[] = await worldService.search(query, context);
    return response.map((world: World) => world.toPlainObj());
}
export const searchWorldsThunk = createAsyncThunk(
    'worlds/searchWorlds',
    searchWorldsCall
);
export const createWorldCall = async ({ worldPlain, userId }: { worldPlain: WorldPlain, userId: string }): Promise<WorldPlain> => {
    const world = World.build(worldPlain);
    const worldService = new WorldService();
    const response: World = await worldService.createWorld(world, userId);
    return response.toPlainObj();
}
export const createWorldThunk = createAsyncThunk(
    'worlds/createWorld',
    createWorldCall
);

export const deleteWorldCall = async (worldId: string): Promise<string> => {
    const worldService = new WorldService();
    await worldService.deleteWorld(worldId);
    return worldId;
}
export const deleteWorldThunk = createAsyncThunk(
    'worlds/deleteWorld',
    deleteWorldCall
);

export const updateWorldCall = async (worldPlain: WorldPlain): Promise<WorldPlain> => {
    const world = World.build(worldPlain);
    const worldService = new WorldService();
    const response: World = await worldService.updateWorld(world);
    return response.toPlainObj();
}
export const updateWorldThunk = createAsyncThunk(
    'worlds/updateWorld',
    updateWorldCall
);

export const getPresetsCall = async (): Promise<PresetEnum[]> => {
    const worldService = new WorldService();
    const response: PresetEnum[] = await worldService.getPresets();
    return response;
}
export const getPresetsThunk = createAsyncThunk(
    'worlds/getPresets',
    getPresetsCall
);

export const loadWorldPresetCall = async ({ preset, userId, worldId }: { preset: PresetEnum, userId: string, worldId: string }): Promise<void> => {
    const worldService = new WorldService();
    await worldService.loadWorldPreset(preset, userId, worldId);
}
export const loadWorldPresetThunk = createAsyncThunk(
    'worlds/loadWorldPreset',
    loadWorldPresetCall
);

export const searchActivityRecordsCall = async ({ query, context }: { query: SearchQuery, context: Context }) => {
    const activityService = new ActivityRecordsService()
    const response: {
        activities: ActivityRecord[];
        totalResults: number;
        totalPages: number;
        currentPage: number;
    } = await activityService.search(query, context)
    return response
}
export const searchActivityRecordsThunk = createAsyncThunk(
    'worlds/searchActivityRecords',
    searchActivityRecordsCall
)


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
        },

    },
    extraReducers: (builder: ActionReducerMapBuilder<WorldState>) => {
        // Search Worlds
        builder.addCase(searchWorldsThunk.pending, (state: WorldState) => handlePending(state))
        builder.addCase(searchWorldsThunk.fulfilled, (state: WorldState, action: PayloadAction<WorldPlain[]>) => {
            state.searchedWorlds.status = RequestStatusEnum.SUCCEEDED;
            state.searchedWorlds.data = action.payload;
        })
        builder.addCase(searchWorldsThunk.rejected, (state: WorldState, action) => handleRejected(state, action))

        // Create World
        builder.addCase(createWorldThunk.pending, (state: WorldState) => handlePending(state))
        builder.addCase(createWorldThunk.fulfilled, (state: WorldState, action: PayloadAction<WorldPlain>) => {
            state.searchedWorlds.status = RequestStatusEnum.SUCCEEDED;
            state.searchedWorlds.data.push(action.payload);
        })
        builder.addCase(createWorldThunk.rejected, (state: WorldState, action) => handleRejected(state, action))

        // Delete World
        builder.addCase(deleteWorldThunk.pending, (state: WorldState) => handlePending(state))
        builder.addCase(deleteWorldThunk.fulfilled, (state: WorldState, action: PayloadAction<string>) => {
            state.searchedWorlds.status = RequestStatusEnum.SUCCEEDED;
            state.searchedWorlds.data = state.searchedWorlds.data.filter((w: WorldPlain) => w.id !== action.payload);
        })
        builder.addCase(deleteWorldThunk.rejected, (state: WorldState, action) => handleRejected(state, action))

        // Update World
        builder.addCase(updateWorldThunk.pending, (state: WorldState) => handlePending(state))
        builder.addCase(updateWorldThunk.fulfilled, (state: WorldState, action: PayloadAction<WorldPlain>) => {
            state.searchedWorlds.status = RequestStatusEnum.SUCCEEDED;
            state.searchedWorlds.data = state.searchedWorlds.data.map((w: WorldPlain) => w.id === action.payload.id ? action.payload : w);
        })
        builder.addCase(updateWorldThunk.rejected, (state: WorldState, action) => handleRejected(state, action))

        // Get Presets
        builder.addCase(getPresetsThunk.pending, (state: WorldState) => handlePending(state))
        builder.addCase(getPresetsThunk.fulfilled, (state: WorldState, action: PayloadAction<PresetEnum[]>) => {
            state.presets.status = RequestStatusEnum.SUCCEEDED;
            state.presets.data = action.payload;
        })
        builder.addCase(getPresetsThunk.rejected, (state: WorldState, action) => handleRejected(state, action))

        // Load World Preset
        builder.addCase(loadWorldPresetThunk.pending, (state: WorldState) => handlePending(state))
        builder.addCase(loadWorldPresetThunk.fulfilled, (state: WorldState) => {
            state.presetLoading.status = RequestStatusEnum.SUCCEEDED;
        })
        builder.addCase(loadWorldPresetThunk.rejected, (state: WorldState, action) => handleRejected(state, action))

        // Search Activity Records
        builder.addCase(searchActivityRecordsThunk.pending, (state: WorldState) => handlePending(state))
        builder.addCase(searchActivityRecordsThunk.fulfilled, (state: WorldState, action) => {
            state.activityRecordsSearch.status = RequestStatusEnum.SUCCEEDED;
            state.activityRecordsSearch.data = {
                activities: action.payload.activities.map((activity: ActivityRecord) => activity.toPlainObj()),
                totalResults: action.payload.totalResults,
                totalPages: action.payload.totalPages,
                currentPage: action.payload.currentPage
            }
        })
        builder.addCase(searchActivityRecordsThunk.rejected, (state: WorldState, action) => handleRejected(state, action))

    },
});

export const { clearSearchedWorlds, setSearchedWorlds, setCurrentWorld, resetPresetLoading } = worldSlice.actions;
export default worldSlice.reducer;