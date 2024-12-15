import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ContentService } from '../../services/ContentService';
import { ContentBase } from '../../class/ContentBase';
import { Context } from '../../class/Context';
import { RequestStatusEnum } from '../../enum/RequestStatusEnum';
import { SearchQuery } from '../../class/search/SearchQuery';
import { Serializer } from '../../serialize/serializer';
import { CONTENT_ENTITY_DTO_MAP } from '../../CONTENT_ENTITY_DTO_MAP';


type ContentDTO = any

interface ContentState {
    data: { [entity: string]: { [id: string]: ContentDTO } };
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
        return Serializer.toDTO(response, new dtoConstructor());
    }
);

export const updateContent = createAsyncThunk(
    'content/updateContent',
    async ({ entityName, contentBody, context }: { entityName: string; contentBody: ContentBase; context: Context }) => {
        const contentService = new ContentService();
        const dtoConstructor = CONTENT_ENTITY_DTO_MAP[entityName];
        if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
        const response: ContentBase = await contentService.updateContent(entityName, contentBody, context);
        return Serializer.toDTO(response, new dtoConstructor());
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
            results: response.results.map(content => Serializer.toDTO(content, new dtoConstructor())),
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
        return response.map(content => Serializer.toDTO(content, new dtoConstructor()));
    }
);

export const updateContentBulk = createAsyncThunk(
    'content/updateContentBulk',
    async ({ entityName, contentBodies, context }: { entityName: string; contentBodies: ContentBase[]; context: Context }) => {
        const contentService = new ContentService();
        const dtoConstructor = CONTENT_ENTITY_DTO_MAP[entityName];
        if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
        const response: ContentBase[] = await contentService.updateContentBulk(entityName, contentBodies, context);
        return response.map(content => Serializer.toDTO(content, new dtoConstructor()));
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
                state.data[action.meta.arg.entityName][action.payload.id] = Serializer.fromDTO(action.payload, action.meta.arg.entityName);
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
                action.payload.results.forEach((item: ContentBase) => {
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
