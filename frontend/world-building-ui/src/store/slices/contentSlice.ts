import { createSlice, createAsyncThunk, PayloadAction, Action } from '@reduxjs/toolkit';
import { ContentService } from '../../services/ContentService';
import { ContentBase } from '../../class/ContentBase';
import { Context, ContextPlain } from '../../class/Context';
import { RequestStatusEnum } from '../../enum/RequestStatusEnum';
import { SearchQuery, SearchQueryPlain } from '../../class/search/grpc/SearchQuery';
import { ContentEntityMapService } from '../../CONTENT_ENTITY_MAP';
import { LooseObject } from '../../types';
import { EntityEnum } from '../../enum/EntityEnum';
import { handlePending, handleRejected } from '../common';

export type ContentPlain = LooseObject
export type ContentSearchResultPlain = LooseObject
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

    toPlainObj(): ContentSearchResultPlain {
        return JSON.parse(JSON.stringify(this));
    }
}

interface ContentState {
    searchedEntities: {
        [searchKey: string]: ContentSearchResultPlain
    };
    crud: {
        status: RequestStatusEnum;
        error: string | null;
    }
}

const initialState: ContentState = {
    searchedEntities: {},
    crud: {
        status: RequestStatusEnum.IDLE,
        error: null
    }
};

export const getSearchKey = (entityName: EntityEnum, query: SearchQuery) => {
    return `${entityName}-${JSON.stringify(query)}`;
}


// Async thunk for creating content
export const createContent = createAsyncThunk(
    'content/createContent',
    async ({ entityName, contentBody, context }: { entityName: EntityEnum | null; contentBody: ContentBase; context: ContextPlain }) => {
        console.log('[createContent] createContent', entityName, contentBody, context);
        if (!entityName) throw new Error(`Entity name not found`);
        const contentService = new ContentService();
        const dtoConstructor = ContentEntityMapService.getDTOConstructor<ContentBase>(entityName);
        if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
        console.log('[createContent] before contentService.createContent', contentBody);
        const response: ContentBase = await contentService.createContent(entityName, contentBody, Context.build(context));
        console.log('[createContent] after contentService.createContent', response);
        return response.toPlainObj();
    }
);

export const updateContent = createAsyncThunk(
    'content/updateContent',
    async ({ entityName, contentBody, context }: { entityName: EntityEnum | null; contentBody: ContentBase; context: ContextPlain }) => {
        if (!entityName) throw new Error(`Entity name not found`);
        const contentService = new ContentService();
        const dtoConstructor = ContentEntityMapService.getDTOConstructor<ContentBase>(entityName);
        if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
        const response: ContentBase = await contentService.updateContent(entityName, contentBody, Context.build(context));
        return response.toPlainObj();
    }
);

export const deleteContent = createAsyncThunk(
    'content/deleteContent',
    async ({ entityName, id, context }: { entityName: EntityEnum | null; id: string; context: ContextPlain }) => {
        if (!entityName) throw new Error(`Entity name not found`);
        const contentService = new ContentService();
        return await contentService.deleteContent(entityName, id, Context.build(context));
    }
);

export const searchContent = createAsyncThunk(
    'content/searchContent',
    async ({ entityName, query, context }: { entityName: EntityEnum | null; query: SearchQuery; context: ContextPlain }) => {
        console.log('[searchContent] searchContent', entityName, query, context);
        if (!entityName) throw new Error(`Entity name not found`);
        const contentService = new ContentService();
        const dtoConstructor = ContentEntityMapService.getDTOConstructor<ContentBase>(entityName);
        if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
        console.log('[searchContent] before contentService.searchContent', query);
        const response = await contentService.searchContent(entityName, query, Context.build(context));
        console.log('[searchContent] after contentService.searchContent', response);
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
    async ({ entityName, contentBodies, context }: { entityName: EntityEnum | null; contentBodies: ContentBase[]; context: ContextPlain }) => {
        if (!entityName) throw new Error(`Entity name not found`);
        const contentService = new ContentService();
        const dtoConstructor = ContentEntityMapService.getDTOConstructor<ContentBase>(entityName);
        if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
        const response: ContentBase[] = await contentService.createContentBulk(entityName, contentBodies, Context.build(context));
        return response.map(content => content.toPlainObj());
    }
);

export const updateContentBulk = createAsyncThunk(
    'content/updateContentBulk',
    async ({ entityName, contentBodies, context }: { entityName: EntityEnum | null; contentBodies: ContentBase[]; context: ContextPlain }) => {
        if (!entityName) throw new Error(`Entity name not found`);
        const contentService = new ContentService();
        const dtoConstructor = ContentEntityMapService.getDTOConstructor<ContentBase>(entityName);
        if (!dtoConstructor) throw new Error(`DTO constructor for entity ${entityName} not found`);
        const response: ContentBase[] = await contentService.updateContentBulk(entityName, contentBodies, Context.build(context));
        return response.map(content => content.toPlainObj());
    }
);

export const deleteContentBulk = createAsyncThunk(
    'content/deleteContentBulk',
    async ({ entityName, ids, context }: { entityName: EntityEnum | null; ids: Set<string>; context: ContextPlain }) => {
        if (!entityName) throw new Error(`Entity name not found`);
        const contentService = new ContentService();
        return await contentService.deleteContentBulk(entityName, Array.from(ids), Context.build(context));
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
            entityName: EntityEnum | null,
            query: SearchQueryPlain,
            results: ContentSearchResultPlain
        }>) => {
            if (!action.payload.entityName) throw new Error(`Entity name not found at setSearchResult`);
            const searchKey: string = getSearchKey(action.payload.entityName, SearchQuery.build(action.payload.query));
            state.searchedEntities[searchKey] = action.payload.results;
        }
    },
    extraReducers: (builder) => {
        // Create
        builder.addCase(createContent.pending, (state) => handlePending(state.crud))
        builder.addCase(createContent.fulfilled, (state, action) => {
            state.crud.status = RequestStatusEnum.SUCCEEDED;
        })
        builder.addCase(createContent.rejected, (state, action) => handleRejected(state.crud, action))

        // Update
        builder.addCase(updateContent.pending, (state) => handlePending(state.crud))
        builder.addCase(updateContent.fulfilled, (state, action) => {
            state.crud.status = RequestStatusEnum.SUCCEEDED;
        })
        builder.addCase(updateContent.rejected, (state, action) => handleRejected(state.crud, action))

        // Delete
        builder.addCase(deleteContent.pending, (state) => handlePending(state.crud))
        builder.addCase(deleteContent.fulfilled, (state, action) => {
            state.crud.status = RequestStatusEnum.SUCCEEDED;
        })
        builder.addCase(deleteContent.rejected, (state, action) => handleRejected(state.crud, action))

        // Search
        builder.addCase(searchContent.pending, (state) => handlePending(state.searchedEntities))
        builder.addCase(searchContent.fulfilled, (state, action) => {
            if (!action.meta.arg.entityName) throw new Error(`Entity name not found at fulfilled case of searchContent, which means the search was performed with an invalid entity name`);
            const searchKey: string = getSearchKey(action.meta.arg.entityName, action.meta.arg.query);
            const map: { [id: string]: ContentPlain } = {};
            const array: ContentPlain[] = [];
            action.payload.results.forEach((item: ContentPlain) => {
                map[item.id] = item;
                array.push(item);
            });
            const searchResult: ContentSearchResultPlain = ContentSearchResult.build({
                entityName: action.meta.arg.entityName,
                array,
                map,
                totalResults: action.payload.totalResults,
                totalPages: action.payload.totalPages,
                currentPage: action.payload.currentPage,
                status: RequestStatusEnum.SUCCEEDED,
                error: null
            }).toPlainObj();
            state.searchedEntities[searchKey] = searchResult;
        })
        builder.addCase(searchContent.rejected, (state, action) => handleRejected(state.searchedEntities, action));
    },
});



export const { clearSearchedContent, clearSearchResultsForKey, setSearchResult } = contentSlice.actions;
export default contentSlice.reducer;
