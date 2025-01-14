import { createSlice, createAsyncThunk, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { World } from '../../class/entities/World';
import { RequestStatusEnum } from '../../enum/RequestStatusEnum';
import { WorldService } from '../../services/WorldService';
import { SearchQuery } from '../../class/search/grpc/SearchQuery';
import { Context, ContextPlain } from '../../class/Context';
import { LooseObject } from '../../types';
import { handlePending, handleRejected } from '../common';
import { PresetEnum } from '../../enum/entityEnums';
import { ActivityRecord } from '../../class/entities/ActivityRecord';
import { ActivityRecordsService } from '../../services/ActivityRecordsService';

export type WorldPlain = LooseObject
export type ActivityRecordPlain = LooseObject

export class WorldSearchResult<T> {
    array!: T[];
    map!: { [id: string]: T };
    totalResults!: number;
    totalPages!: number;
    currentPage!: number;
    status!: RequestStatusEnum;
    error!: string | null;

    static build<T>(body: any): WorldSearchResult<T> {
        const newResult = new WorldSearchResult<T>();
        Object.assign(newResult, body);
        return newResult;
    }
}

export const getSearchKey = (query: SearchQuery) => {
    return `worlds-${JSON.stringify(query)}`;
}

interface WorldState {
    crud: {
        data: WorldPlain | null;
        status: RequestStatusEnum;
        error: string | null;
    };
    searchedWorlds: {
        [searchKey: string]: WorldSearchResult<WorldPlain>;
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
    crud: {
        data: null,
        status: RequestStatusEnum.IDLE,
        error: null,
    },
    searchedWorlds: {},
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
export const searchWorldsCall = async ({ query, context }: { query: SearchQuery, context: ContextPlain }): Promise<{
    results: WorldPlain[],
    totalResults: number,
    totalPages: number,
    currentPage: number
}> => {
    const worldService = new WorldService();
    const response: World[] = await worldService.search(query, Context.build(context));
    return {
        results: response.map((world: World) => world.toPlainObj()),
        totalResults: response.length,
        totalPages: 1,
        currentPage: 1
    };
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

export const searchActivityRecordsCall = async ({ query, context }: { query: SearchQuery, context: ContextPlain }) => {
    const activityService = new ActivityRecordsService()
    const response: {
        activities: ActivityRecord[];
        totalResults: number;
        totalPages: number;
        currentPage: number;
    } = await activityService.search(query, Context.build(context))
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
            state.searchedWorlds = {};
        },
        clearSearchResultsForKey: (state, action: PayloadAction<string>) => {
            delete state.searchedWorlds[action.payload];
        },
        resetPresetLoading: (state) => {
            state.presetLoading.status = RequestStatusEnum.IDLE;
            state.presetLoading.error = null;
        },
    },
    extraReducers: (builder: ActionReducerMapBuilder<WorldState>) => {
        // Search Worlds
        builder.addCase(searchWorldsThunk.pending, (state: WorldState, action) => {
            const searchKey: string = getSearchKey(action.meta.arg.query);
            state.searchedWorlds[searchKey] = WorldSearchResult.build({
                array: [],
                map: {},
                status: RequestStatusEnum.LOADING,
                error: null
            });
        })
        builder.addCase(searchWorldsThunk.fulfilled, (state: WorldState, action) => {
            const searchKey: string = getSearchKey(action.meta.arg.query);
            const map: { [id: string]: WorldPlain } = {};
            const array: WorldPlain[] = [];
            action.payload.results.forEach((item: WorldPlain) => {
                map[item.id] = item;
                array.push(item);
            });
            state.searchedWorlds[searchKey] = WorldSearchResult.build({
                array,
                map,
                totalResults: action.payload.totalResults,
                totalPages: action.payload.totalPages,
                currentPage: action.payload.currentPage,
                status: RequestStatusEnum.SUCCEEDED,
                error: null
            });
        })
        builder.addCase(searchWorldsThunk.rejected, (state: WorldState, action) => {
            const searchKey: string = getSearchKey(action.meta.arg.query);
            state.searchedWorlds[searchKey] = WorldSearchResult.build({
                array: [],
                map: {},
                status: RequestStatusEnum.FAILED,
                error: action.error.message || 'Failed to search worlds'
            });
        })

        // Create World
        builder.addCase(createWorldThunk.pending, (state: WorldState) => handlePending(state))
        builder.addCase(createWorldThunk.fulfilled, (state: WorldState, action: PayloadAction<WorldPlain>) => {
            state.crud.status = RequestStatusEnum.SUCCEEDED;
        })
        builder.addCase(createWorldThunk.rejected, (state: WorldState, action) => handleRejected(state, action))

        // Delete World
        builder.addCase(deleteWorldThunk.pending, (state: WorldState) => handlePending(state))
        builder.addCase(deleteWorldThunk.fulfilled, (state: WorldState, action: PayloadAction<string>) => {
            state.crud.status = RequestStatusEnum.SUCCEEDED;
            // Update all search results to remove the deleted world
            Object.keys(state.searchedWorlds).forEach(key => {
                const result = state.searchedWorlds[key];
                result.array = result.array.filter(w => w.id !== action.payload);
                delete result.map[action.payload];
            });
        })
        builder.addCase(deleteWorldThunk.rejected, (state: WorldState, action) => handleRejected(state, action))

        // Update World
        builder.addCase(updateWorldThunk.pending, (state: WorldState) => handlePending(state))
        builder.addCase(updateWorldThunk.fulfilled, (state: WorldState, action: PayloadAction<WorldPlain>) => {
            state.crud.status = RequestStatusEnum.SUCCEEDED;
            // Update all search results with the updated world
            Object.keys(state.searchedWorlds).forEach(key => {
                const result = state.searchedWorlds[key];
                result.array = result.array.map(w => w.id === action.payload.id ? action.payload : w);
                result.map[action.payload.id] = action.payload;
            });
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

export const { clearSearchedWorlds, clearSearchResultsForKey, resetPresetLoading } = worldSlice.actions;
export default worldSlice.reducer;