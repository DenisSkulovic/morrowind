import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export interface World {
    id: string;
    name: string;
    description: string;
}

interface WorldState {
    worlds: World[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: WorldState = {
    worlds: [],
    status: 'idle',
    error: null,
};

// Async Thunks
export const fetchWorlds = createAsyncThunk('worlds/fetchWorlds', async () => {
    const response = await axios.get('/api/worlds');
    return response.data; // Assuming the backend returns an array of worlds
});

export const createWorld = createAsyncThunk('worlds/createWorld', async (world: Omit<World, 'id'>) => {
    const response = await axios.post('/api/worlds', world);
    return response.data; // Assuming the backend returns the created world
});

export const updateWorld = createAsyncThunk('worlds/updateWorld', async (world: World) => {
    const response = await axios.put(`/api/worlds/${world.id}`, world);
    return response.data; // Assuming the backend returns the updated world
});

export const deleteWorld = createAsyncThunk('worlds/deleteWorld', async (id: string) => {
    await axios.delete(`/api/worlds/${id}`);
    return id;
});

// Slice
const worldSlice = createSlice({
    name: 'worlds',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWorlds.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchWorlds.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.worlds = action.payload;
            })
            .addCase(fetchWorlds.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch worlds';
            })
            .addCase(createWorld.fulfilled, (state, action) => {
                state.worlds.push(action.payload);
            })
            .addCase(updateWorld.fulfilled, (state, action) => {
                const index = state.worlds.findIndex((w) => w.id === action.payload.id);
                if (index !== -1) {
                    state.worlds[index] = action.payload;
                }
            })
            .addCase(deleteWorld.fulfilled, (state, action) => {
                state.worlds = state.worlds.filter((w) => w.id !== action.payload);
            });
    },
});

export default worldSlice.reducer;
