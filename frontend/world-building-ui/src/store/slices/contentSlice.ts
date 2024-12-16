import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ContentService } from '../../services/ContentService';
import { ContentBase } from '../../class/ContentBase';
import { Context } from '../../class/Context';
import { RequestStatusEnum } from '../../enum/RequestStatusEnum';
import { SearchQuery } from '../../class/search/SearchQuery';
import { CONTENT_ENTITY_DTO_MAP } from '../../CONTENT_ENTITY_DTO_MAP';
import { LooseObject } from '../../types';

type ContentPlain = LooseObject

interface ContentState {
    data: { [entity: string]: { [id: string]: ContentPlain } };
    status: RequestStatusEnum;
    error: string | null;
}

const initialState: ContentState = {
    data: {},
    status: RequestStatusEnum.IDLE,
    error: null
};


// Async thunk for creating content
export const createContent = createAsyncThunk(
    'content/createContent',
    async ({ entityName, contentBody, context }: { entityName: string; contentBody: ContentBase; context: Context }) => {
        const contentService = new ContentService();
        const dtoConstructor = CONTENT_ENTITY_DTO_MAP[entityName];
        if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
        const response: ContentBase = await contentService.createContent(entityName, contentBody, context);
        return response.toPlainObj();
    }
);

export const updateContent = createAsyncThunk(
    'content/updateContent',
    async ({ entityName, contentBody, context }: { entityName: string; contentBody: ContentBase; context: Context }) => {
        const contentService = new ContentService();
        const dtoConstructor = CONTENT_ENTITY_DTO_MAP[entityName];
        if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
        const response: ContentBase = await contentService.updateContent(entityName, contentBody, context);
        return response.toPlainObj();
    }
);

export const deleteContent = createAsyncThunk(
    'content/deleteContent',
    async ({ entityName, id, context }: { entityName: string; id: string; context: Context }) => {
        const contentService = new ContentService();
        return await contentService.deleteContent(entityName, id, context);
    }
);

export const searchContent = createAsyncThunk(
    'content/searchContent',
    async ({ entityName, query, context }: { entityName: string; query: SearchQuery; context: Context }) => {
        const contentService = new ContentService();
        const dtoConstructor = CONTENT_ENTITY_DTO_MAP[entityName];
        if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
        const response = await contentService.searchContent(entityName, query, context);
        return {
            results: response.results.map(content => content.toPlainObj()),
            totalResults: response.totalResults,
            totalPages: response.totalPages,
            currentPage: response.currentPage
        };
    }
);

export const createContentBulk = createAsyncThunk(
    'content/createContentBulk',
    async ({ entityName, contentBodies, context }: { entityName: string; contentBodies: ContentBase[]; context: Context }) => {
        const contentService = new ContentService();
        const dtoConstructor = CONTENT_ENTITY_DTO_MAP[entityName];
        if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
        const response: ContentBase[] = await contentService.createContentBulk(entityName, contentBodies, context);
        return response.map(content => content.toPlainObj());
    }
);

export const updateContentBulk = createAsyncThunk(
    'content/updateContentBulk',
    async ({ entityName, contentBodies, context }: { entityName: string; contentBodies: ContentBase[]; context: Context }) => {
        const contentService = new ContentService();
        const dtoConstructor = CONTENT_ENTITY_DTO_MAP[entityName];
        if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
        const response: ContentBase[] = await contentService.updateContentBulk(entityName, contentBodies, context);
        return response.map(content => content.toPlainObj());
    }
);

export const deleteContentBulk = createAsyncThunk(
    'content/deleteContentBulk',
    async ({ entityName, ids, context }: { entityName: string; ids: string[]; context: Context }) => {
        const contentService = new ContentService();
        return await contentService.deleteContentBulk(entityName, ids, context);
    }
);

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        clearContent: (state) => {
            state.data = {};
            state.status = RequestStatusEnum.IDLE;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createContent.pending, (state) => {
                state.status = RequestStatusEnum.LOADING;
                state.error = null;
            })
            .addCase(createContent.fulfilled, (state, action) => {
                state.status = RequestStatusEnum.SUCCEEDED;
                if (!state.data[action.meta.arg.entityName]) {
                    state.data[action.meta.arg.entityName] = {};
                }
                state.data[action.meta.arg.entityName][action.payload.id] = action.payload;
            })
            .addCase(createContent.rejected, (state, action) => {
                state.status = RequestStatusEnum.FAILED;
                state.error = action.error.message || 'Failed to create content';
            })

            .addCase(updateContent.pending, (state) => {
                state.status = RequestStatusEnum.LOADING;
                state.error = null;
            })
            .addCase(updateContent.fulfilled, (state, action) => {
                state.status = RequestStatusEnum.SUCCEEDED;
                if (state.data[action.meta.arg.entityName]) {
                    state.data[action.meta.arg.entityName][action.payload.id] = action.payload;
                }
            })
            .addCase(updateContent.rejected, (state, action) => {
                state.status = RequestStatusEnum.FAILED;
                state.error = action.error.message || 'Failed to update content';
            })

            .addCase(deleteContent.pending, (state) => {
                state.status = RequestStatusEnum.LOADING;
                state.error = null;
            })
            .addCase(deleteContent.fulfilled, (state, action) => {
                state.status = RequestStatusEnum.SUCCEEDED;
                if (state.data[action.meta.arg.entityName]) {
                    delete state.data[action.meta.arg.entityName][action.meta.arg.id];
                }
            })
            .addCase(deleteContent.rejected, (state, action) => {
                state.status = RequestStatusEnum.FAILED;
                state.error = action.error.message || 'Failed to delete content';
            })

            .addCase(searchContent.pending, (state) => {
                state.status = RequestStatusEnum.LOADING;
                state.error = null;
            })
            .addCase(searchContent.fulfilled, (state, action) => {
                state.status = RequestStatusEnum.SUCCEEDED;
                if (!state.data[action.meta.arg.entityName]) {
                    state.data[action.meta.arg.entityName] = {};
                }
                action.payload.results.forEach((item: ContentPlain) => {
                    state.data[action.meta.arg.entityName][item.id] = item;
                });
            })
            .addCase(searchContent.rejected, (state, action) => {
                state.status = RequestStatusEnum.FAILED;
                state.error = action.error.message || 'Failed to search content';
            });
    },
});

export const { clearContent } = contentSlice.actions;
export default contentSlice.reducer;
