import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ContentService } from '../../services/ContentService';
import { ContentBase } from '../../class/ContentBase';
import { Context } from '../../types';

export enum RequestStatus {
    IDLE = 'idle',
    LOADING = 'loading',
    SUCCEEDED = 'succeeded',
    FAILED = 'failed'
}

interface ContentState {
    data: { [entity: string]: { [id: string]: ContentBase } };
    status: RequestStatus;
    error: string | null;
}

const initialState: ContentState = {
    data: {},
    status: RequestStatus.IDLE,
    error: null
};

// Async thunk for creating content
export const createContent = createAsyncThunk(
    'content/createContent',
    async ({ entityName, contentBody, context }: { entityName: string; contentBody: any; context: Context }) => {
        const contentService = new ContentService();
        return await contentService.createContent(entityName, contentBody, context);
    }
);

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        clearContent: (state) => {
            state.data = {};
            state.status = RequestStatus.IDLE;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createContent.pending, (state) => {
                state.status = RequestStatus.LOADING;
                state.error = null;
            })
            .addCase(createContent.fulfilled, (state) => {
                state.status = RequestStatus.SUCCEEDED;
            })
            .addCase(createContent.rejected, (state, action) => {
                state.status = RequestStatus.FAILED;
                state.error = action.error.message || 'Failed to create content';
            });
    },
});

export const { clearContent } = contentSlice.actions;
export default contentSlice.reducer;
