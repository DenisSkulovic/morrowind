import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { EntityEnum } from "../enum/EntityEnum";
import { AppDispatch, RootState } from "../store/store";
import { ContentBase, ContentBaseStatic } from "../class/ContentBase";
import { SearchQuery } from "../class/search/SearchQuery";
import { ContentPlain, ContentSearchResult, getSearchKey, searchContent, clearSearchResultsForKey } from "../store/slices/contentSlice";
import { Context } from "../class/Context";
import { useAccount } from "./useAccount";
import { World } from "../class/entities/World";
import { User } from "../class/entities/User";
import { ContentEntityMapService } from "../CONTENT_ENTITY_MAP";

export const useEntityList = <T extends ContentBase>(entityName: EntityEnum | null, query: SearchQuery, world_id: string | null): {
    forceSearch: () => void;
    result: ContentSearchResult<T> | null;
} => {
    const dispatch = useDispatch<AppDispatch>();
    const account = useAccount();

    const [context, setContext] = useState<Context | null>(null);
    useEffect(() => {
        if (!account?.user || !world_id) return;
        setContext(Context.build({
            user: { id: account?.user } as User,
            world: { id: world_id } as World
        }));
    }, [account?.user, world_id]);

    const entityConstructor: ContentBaseStatic<T> | null = entityName ? ContentEntityMapService.getEntityConstructor<T>(entityName) as ContentBaseStatic<T> : null;
    const searchKey: string = entityName ? getSearchKey(entityName, query) : '';

    const searchResult: ContentSearchResult<T> | null = useSelector((state: RootState) => {
        const searchResult: ContentSearchResult<ContentPlain> | undefined = state.content.searchedEntities[searchKey];
        if (!searchResult || !entityConstructor) return null;
        const entitiesArray: T[] = searchResult.array.map(entity => entityConstructor.build(entity));
        const entitiesMap: { [key: string]: T } = {};
        for (const entity of searchResult.array) {
            entitiesMap[entity.id] = entityConstructor.build(entity);
        }
        return ContentSearchResult.build({
            array: entitiesArray,
            map: entitiesMap,
            status: searchResult.status,
            error: searchResult.error,
            totalResults: searchResult.totalResults,
            totalPages: searchResult.totalPages,
            currentPage: searchResult.currentPage
        });
    });
    const previousSearchQuery = useRef<SearchQuery>(query);
    const previousSearchKey = useRef<string>(searchKey);

    const search = (entityName: EntityEnum | null, query: SearchQuery) => {
        console.log('[useEntityList] search', entityName, query, context);
        if (!context) throw new Error('Context not found');
        dispatch(searchContent({ entityName, query, context })).then(() => {
            if (previousSearchKey.current !== searchKey) {
                dispatch(clearSearchResultsForKey(previousSearchKey.current));
                previousSearchKey.current = searchKey;
                previousSearchQuery.current = query;
            }
        });
    }

    useEffect(() => {
        console.log('[useEntityList] useEffect', previousSearchKey.current, searchKey, searchResult, context);
        if (!previousSearchKey.current || previousSearchKey.current !== searchKey || !searchResult) {
            console.log('[useEntityList] passed negative conditions');
            if (context && entityName && query) {
                console.log('[useEntityList] passed positive conditions');
                search(entityName, query);
            }
        }
    }, [previousSearchKey.current, searchKey, searchResult, context]);

    return {
        result: searchResult,
        forceSearch: () => search(entityName, query)
    };
};