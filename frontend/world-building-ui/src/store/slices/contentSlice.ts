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

export class ContentSearchResult<T> {
    entityName!: EntityEnum | null;
    array!: T[];
    map!: { [id: string]: ContentPlain };
    totalResults!: number;
    totalPages!: number;
    currentPage!: number;
    status!: RequestStatusEnum;
    error!: string | null;

    static build<T>(body: any): ContentSearchResult<T> {
        const newResult = new ContentSearchResult<T>();
        Object.assign(newResult, body);
        return newResult;
    }
}

interface ContentState {
    searchedEntities: {
        [searchKey: string]: ContentSearchResult<ContentPlain>
    };

    crudStatus: RequestStatusEnum;
    crudError: string | null;
}

const initialState: ContentState = {
    searchedEntities: {},
    crudStatus: RequestStatusEnum.IDLE,
    crudError: null
};

export const getSearchKey = (entityName: EntityEnum, query: SearchQuery) => {
    return `${entityName}-${JSON.stringify(query)}`;
}


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
    async ({ entityName, ids, context }: { entityName: EntityEnum; ids: Set<string>; context: Context }) => {
        const contentService = new ContentService();
        return await contentService.deleteContentBulk(entityName, Array.from(ids), context);
    }
);

const contentSlice = createSlice({
    name: 'content',
    initialState,
    reducers: {
        clearSearchedContent: (state) => {
            state.searchedEntities = {};
        },
        clearSearchResultsForKey: (state, action: PayloadAction<string>) => {
            delete state.searchedEntities[action.payload];
        },
        setSearchResult: (state, action: PayloadAction<{ // to manually edit search results, for example when an entity was deleted/modified but we dont want to perform another search
            entityName: EntityEnum,
            query: SearchQuery,
            results: ContentSearchResult<ContentPlain>
        }>) => {
            const searchKey: string = getSearchKey(action.payload.entityName, action.payload.query);
            state.searchedEntities[searchKey] = action.payload.results;
        }
    },
    extraReducers: (builder) => {
        // Create
        builder.addCase(createContent.pending, (state) => handlePending(state.crudStatus))
        builder.addCase(createContent.fulfilled, (state, action) => {
            state.crudStatus = RequestStatusEnum.SUCCEEDED;
        })
        builder.addCase(createContent.rejected, (state, action) => handleRejected(state.crudStatus, action))

        // Update
        builder.addCase(updateContent.pending, (state) => handlePending(state.crudStatus))
        builder.addCase(updateContent.fulfilled, (state, action) => {
            state.crudStatus = RequestStatusEnum.SUCCEEDED;
        })
        builder.addCase(updateContent.rejected, (state, action) => handleRejected(state.crudStatus, action))

        // Delete
        builder.addCase(deleteContent.pending, (state) => handlePending(state.crudStatus))
        builder.addCase(deleteContent.fulfilled, (state, action) => {
            state.crudStatus = RequestStatusEnum.SUCCEEDED;
        })
        builder.addCase(deleteContent.rejected, (state, action) => handleRejected(state.crudStatus, action))

        // Search
        builder.addCase(searchContent.pending, (state) => handlePending(state.searchedEntities))
        builder.addCase(searchContent.fulfilled, (state, action) => {
            const searchKey: string = getSearchKey(action.meta.arg.entityName, action.meta.arg.query);
            const map: { [id: string]: ContentPlain } = {};
            const array: ContentPlain[] = [];
            action.payload.results.forEach((item: ContentPlain) => {
                map[item.id] = item;
                array.push(item);
            });
            const searchResult: ContentSearchResult<ContentPlain> = {
                entityName: action.meta.arg.entityName,
                array,
                map,
                totalResults: action.payload.totalResults,
                totalPages: action.payload.totalPages,
                currentPage: action.payload.currentPage,
                status: RequestStatusEnum.SUCCEEDED,
                error: null
            };
            state.searchedEntities[searchKey] = searchResult;
        })
        builder.addCase(searchContent.rejected, (state, action) => handleRejected(state.searchedEntities, action));
    },
});



export const { clearSearchedContent, clearSearchResultsForKey, setSearchResult } = contentSlice.actions;
export default contentSlice.reducer;
