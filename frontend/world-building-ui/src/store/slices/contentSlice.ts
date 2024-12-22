import { createSlice, createAsyncThunk, PayloadAction, Action } from '@reduxjs/toolkit';
import { ContentService } from '../../services/ContentService';
import { ContentBase } from '../../class/ContentBase';
import { Context } from '../../class/Context';
import { RequestStatusEnum } from '../../enum/RequestStatusEnum';
import { SearchQuery } from '../../class/search/SearchQuery';
import { CONTENT_ENTITY_MAP } from '../../CONTENT_ENTITY_MAP';
import { LooseObject } from '../../types';
import { EntityEnum } from '../../enum/EntityEnum';
import { handlePending, handleRejected } from '../common';

export type ContentPlain = LooseObject

interface ContentState {
    entityNameInPath: EntityEnum | null;
    currentEntity: {
        entityName: EntityEnum | null;
        data: ContentPlain | null;
        status: RequestStatusEnum;
        error: string | null;
    };
    searchedEntities: {
        entityName: EntityEnum | null;
        array: ContentPlain[] | null;
        map: { [id: string]: ContentPlain } | null;
        totalResults: number;
        totalPages: number;
        currentPage: number;
        status: RequestStatusEnum;
        error: string | null;
    };

    crudStatus: RequestStatusEnum;
    crudError: string | null;
}

const initialState: ContentState = {
    entityNameInPath: null,
    currentEntity: {
        entityName: null,
        data: null,
        status: RequestStatusEnum.IDLE,
        error: null
    },
    searchedEntities: {
        entityName: null,
        array: null,
        map: null,
        totalResults: 0,
        totalPages: 0,
        currentPage: 0,
        status: RequestStatusEnum.IDLE,
        error: null
    },
    crudStatus: RequestStatusEnum.IDLE,
    crudError: null
};


// Async thunk for creating content
export const createContent = createAsyncThunk(
    'content/createContent',
    async ({ entityName, contentBody, context }: { entityName: EntityEnum; contentBody: ContentBase; context: Context }) => {
        const contentService = new ContentService();
        const dtoConstructor = CONTENT_ENTITY_MAP[entityName].dto;
        if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
        const response: ContentBase = await contentService.createContent(entityName, contentBody, context);
        return response.toPlainObj();
    }
);

export const updateContent = createAsyncThunk(
    'content/updateContent',
    async ({ entityName, contentBody, context }: { entityName: EntityEnum; contentBody: ContentBase; context: Context }) => {
        const contentService = new ContentService();
        const dtoConstructor = CONTENT_ENTITY_MAP[entityName].dto;
        if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
        const response: ContentBase = await contentService.updateContent(entityName, contentBody, context);
        return response.toPlainObj();
    }
);

export const deleteContent = createAsyncThunk(
    'content/deleteContent',
    async ({ entityName, id, context }: { entityName: EntityEnum; id: string; context: Context }) => {
        const contentService = new ContentService();
        return await contentService.deleteContent(entityName, id, context);
    }
);

export const searchContent = createAsyncThunk(
    'content/searchContent',
    async ({ entityName, query, context }: { entityName: EntityEnum; query: SearchQuery; context: Context }) => {
        const contentService = new ContentService();
        const dtoConstructor = CONTENT_ENTITY_MAP[entityName].dto;
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
    async ({ entityName, contentBodies, context }: { entityName: EntityEnum; contentBodies: ContentBase[]; context: Context }) => {
        const contentService = new ContentService();
        const dtoConstructor = CONTENT_ENTITY_MAP[entityName].dto;
        if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
        const response: ContentBase[] = await contentService.createContentBulk(entityName, contentBodies, context);
        return response.map(content => content.toPlainObj());
    }
);

export const updateContentBulk = createAsyncThunk(
    'content/updateContentBulk',
    async ({ entityName, contentBodies, context }: { entityName: EntityEnum; contentBodies: ContentBase[]; context: Context }) => {
        const contentService = new ContentService();
        const dtoConstructor = CONTENT_ENTITY_MAP[entityName].dto;
        if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
        const response: ContentBase[] = await contentService.updateContentBulk(entityName, contentBodies, context);
        return response.map(content => content.toPlainObj());
    }
);

export const deleteContentBulk = createAsyncThunk(
    'content/deleteContentBulk',
    async ({ entityName, ids, context }: { entityName: EntityEnum; ids: string[]; context: Context }) => {
        const contentService = new ContentService();
        return await contentService.deleteContentBulk(entityName, ids, context);
    }
);

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        setEntityNameInPath: (state, action) => {
            state.entityNameInPath = action.payload;
        },
        clearSearchedContent: (state) => {
            state.searchedEntities.map = {};
            state.searchedEntities.status = RequestStatusEnum.IDLE;
            state.searchedEntities.error = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createContent.pending, (state) => handlePending(state.currentEntity))
        builder.addCase(createContent.fulfilled, (state, action) => {
            state.currentEntity.status = RequestStatusEnum.SUCCEEDED;
            if (state.currentEntity.data && !state.currentEntity.data[action.meta.arg.entityName]) {
                state.currentEntity.data[action.meta.arg.entityName] = {};
            }
            if (state.currentEntity.data) {
                state.currentEntity.data[action.meta.arg.entityName][action.payload.id] = action.payload;
            }
        })
        builder.addCase(createContent.rejected, (state, action) => handleRejected(state.currentEntity, action))

        builder.addCase(updateContent.pending, (state) => handlePending(state.currentEntity))
        builder.addCase(updateContent.fulfilled, (state, action) => {
            state.currentEntity.status = RequestStatusEnum.SUCCEEDED;
            if (state.currentEntity.data && state.currentEntity.data[action.meta.arg.entityName]) {
                state.currentEntity.data[action.meta.arg.entityName][action.payload.id] = action.payload;
            }
        })
        builder.addCase(updateContent.rejected, (state, action) => handleRejected(state.currentEntity, action))

        builder.addCase(deleteContent.pending, (state) => handlePending(state.currentEntity))
        builder.addCase(deleteContent.fulfilled, (state, action) => {
            state.currentEntity.status = RequestStatusEnum.SUCCEEDED;
            if (state.currentEntity.data && state.currentEntity.data[action.meta.arg.entityName]) {
                delete state.currentEntity.data[action.meta.arg.entityName][action.meta.arg.id];
            }
        })
        builder.addCase(deleteContent.rejected, (state, action) => handleRejected(state.currentEntity, action))

        builder.addCase(searchContent.pending, (state) => handlePending(state.searchedEntities))
        builder.addCase(searchContent.fulfilled, (state, action) => {
            state.searchedEntities.status = RequestStatusEnum.SUCCEEDED;
            if (!state.searchedEntities.map) {
                state.searchedEntities.map = {};
            }
            if (!state.searchedEntities.map[action.meta.arg.entityName]) {
                state.searchedEntities.map[action.meta.arg.entityName] = {};
            }
            action.payload.results.forEach((item: ContentPlain) => {
                if (state.searchedEntities.map) {
                    state.searchedEntities.map[action.meta.arg.entityName][item.id] = item;
                }
            });
        })
        builder.addCase(searchContent.rejected, (state, action) => handleRejected(state.searchedEntities, action));
    },
});



export const { clearSearchedContent, setEntityNameInPath } = contentSlice.actions;
export default contentSlice.reducer;
