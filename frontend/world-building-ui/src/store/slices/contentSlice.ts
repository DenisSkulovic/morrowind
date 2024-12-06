import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ContentState {
    [key: string]: { id: string; name: string }[]; // e.g., { tags: [{ id: '1', name: 'Tag1' }] }
    status: { [key: string]: 'idle' | 'loading' | 'succeeded' | 'failed' }; // Track loading state per entity type
    error: { [key: string]: string | null }; // Error messages per entity type
}

const initialState: ContentState = {
    status: {},
    error: {},
};

// Fetch content data thunk
export const fetchContentData = createAsyncThunk(
    'content/fetchContentData',
    async ({ entityName, query }: { entityName: string; query?: string }) => {
        const response = await axios.get(`/api/${entityName}`, { params: { search: query } });
        return { entityName, data: response.data };
    }
);

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchContentData.pending, (state, action) => {
                const { entityName } = action.meta.arg;
                state.status[entityName] = 'loading';
                state.error[entityName] = null;
            })
            .addCase(fetchContentData.fulfilled, (state, action) => {
                const { entityName, data } = action.payload;
                state.status[entityName] = 'succeeded';
                state[entityName] = data;
            })
            .addCase(fetchContentData.rejected, (state, action) => {
                const { entityName } = action.meta.arg;
                state.status[entityName] = 'failed';
                state.error[entityName] = action.error.message || 'Failed to fetch data';
            });
    },
});

export default contentSlice.reducer;
