import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { World } from '../../dto/World';
import { RequestStatusEnum } from '../../enum/RequestStatusEnum';
import { WorldService } from '../../services/WorldService';

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
    async (userId: string) => {
        const worldService = new WorldService();
        const response = await worldService.getWorldsForUser(userId);
        return response.worlds.map(world => World.fromDTO(world));
    }
);

export const createWorld = createAsyncThunk(
    'worlds/createWorld',
    async ({ world, userId }: { world: World, userId: string }) => {
        const worldService = new WorldService();
        const response = await worldService.createWorld(world, userId);
        if (!response.world) throw new Error('Failed to create world');
        return World.fromDTO(response.world);
    }
);

export const deleteWorld = createAsyncThunk(
    'worlds/deleteWorld',
    async (worldId: string) => {
        const worldService = new WorldService();
        await worldService.deleteWorld(worldId);
        return worldId;
    }
);

export const updateWorld = createAsyncThunk(
    'worlds/updateWorld',
    async (world: World) => {
        const worldService = new WorldService();
        const response = await worldService.updateWorld(world);
        if (!response.world) throw new Error('Failed to update world');
        return World.fromDTO(response.world);
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
                state.status = RequestStatusEnum.LOADING;
                state.error = null;
            })
            .addCase(fetchWorlds.fulfilled, (state, action) => {
                state.status = RequestStatusEnum.SUCCEEDED;
                state.data = action.payload;
            })
            .addCase(fetchWorlds.rejected, (state, action) => {
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
