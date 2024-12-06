import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface World {
    id: string;
    name: string;
    description: string;
};

export enum RequestStatus {
    IDLE = 'idle',
    LOADING = 'loading',
    SUCCEEDED = 'succeeded',
    FAILED = 'failed'
}

interface WorldState {
    worlds: World[];
    status: RequestStatus;
    error: string | null;
};

const initialState: WorldState = {
    worlds: [],
    status: RequestStatus.IDLE,
    error: null,
};

// Async Thunks
export const fetchWorlds = createAsyncThunk('worlds/fetchWorlds', async () => {
    const response = await axios.get('/api/worlds');
    return response.data;
});

export const createWorld = createAsyncThunk('worlds/createWorld', async (world: Omit<World, 'id'>) => {
    const response = await axios.post('/api/worlds', world);
    return response.data;
});

export const updateWorld = createAsyncThunk('worlds/updateWorld', async (world: World) => {
    const response = await axios.put(`/api/worlds/${world.id}`, world);
    return response.data;
});

export const deleteWorld = createAsyncThunk('worlds/deleteWorld', async (id: string) => {
    await axios.delete(`/api/worlds/${id}`);
    return id;
});

// Slice
const worldSlice = createSlice({
    name: 'worlds',
    initialState,
    reducers: {
        clearWorlds: (state) => {
            state.worlds = [];
            state.status = RequestStatus.IDLE;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWorlds.pending, (state) => {
                state.status = RequestStatus.LOADING;
                state.error = null;
            })
            .addCase(fetchWorlds.fulfilled, (state, action) => {
                state.status = RequestStatus.SUCCEEDED;
                state.worlds = action.payload;
            })
            .addCase(fetchWorlds.rejected, (state, action) => {
                state.status = RequestStatus.FAILED;
                state.error = action.error.message || 'Failed to fetch worlds';
            })
            .addCase(createWorld.pending, (state) => {
                state.status = RequestStatus.LOADING;
                state.error = null;
            })
            .addCase(createWorld.fulfilled, (state, action) => {
                state.status = RequestStatus.SUCCEEDED;
                state.worlds.push(action.payload);
            })
            .addCase(createWorld.rejected, (state, action) => {
                state.status = RequestStatus.FAILED;
                state.error = action.error.message || 'Failed to create world';
            })
            .addCase(updateWorld.pending, (state) => {
                state.status = RequestStatus.LOADING;
                state.error = null;
            })
            .addCase(updateWorld.fulfilled, (state, action) => {
                state.status = RequestStatus.SUCCEEDED;
                const index = state.worlds.findIndex((w) => w.id === action.payload.id);
                if (index !== -1) {
                    state.worlds[index] = action.payload;
                }
            })
            .addCase(updateWorld.rejected, (state, action) => {
                state.status = RequestStatus.FAILED;
                state.error = action.error.message || 'Failed to update world';
            })
            .addCase(deleteWorld.pending, (state) => {
                state.status = RequestStatus.LOADING;
                state.error = null;
            })
            .addCase(deleteWorld.fulfilled, (state, action) => {
                state.status = RequestStatus.SUCCEEDED;
                state.worlds = state.worlds.filter((w) => w.id !== action.payload);
            })
            .addCase(deleteWorld.rejected, (state, action) => {
                state.status = RequestStatus.FAILED;
                state.error = action.error.message || 'Failed to delete world';
            });
    },
});

export const { clearWorlds } = worldSlice.actions;
export default worldSlice.reducer;
