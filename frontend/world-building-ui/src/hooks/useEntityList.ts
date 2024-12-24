import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { EntityEnum } from "../enum/EntityEnum";
import { RequestStatusEnum } from "../enum/RequestStatusEnum";
import { AppDispatch, RootState } from "../store/store";
import { CONTENT_ENTITY_MAP } from "../CONTENT_ENTITY_MAP";
import { ContentBase, ContentBaseStatic } from "../class/ContentBase";
import { SearchQuery } from "../class/search/SearchQuery";
import { ContentPlain, ContentSearchResult, getSearchKey, searchContent, clearSearchResultsForKey } from "../store/slices/contentSlice";
import { Context } from "../class/Context";
import { useAccount } from "./useAccount";
import { World } from "../class/entities/World";
import { User } from "../class/entities/User";

export const useEntityList = <T extends ContentBase>(entityName: EntityEnum, query: SearchQuery, world_id: string): {
    result: ContentSearchResult<T>
} => {
    const dispatch = useDispatch<AppDispatch>();
    const account = useAccount();

    const context: Context = Context.build({
        user: { id: account?.user } as User,
        world: { id: world_id } as World
    });

    const entityConstructor: ContentBaseStatic<T> = CONTENT_ENTITY_MAP[entityName].entity as ContentBaseStatic<T>;
    const searchKey: string = getSearchKey(entityName, query);

    const searchResult: ContentSearchResult<ContentPlain> | null = useSelector((state: RootState) => state.content.searchedEntities[searchKey]);
    const previousSearchQuery = useRef<SearchQuery>(query);
    const previousSearchKey = useRef<string>(searchKey);

    useEffect(() => {
        if (!searchResult || searchResult.status === RequestStatusEnum.IDLE) {
            dispatch(searchContent({ entityName, query, context }))
                .then(() => {
                    // clear previous search results to avoid unused data accumulation
                    if (previousSearchKey.current !== searchKey) {
                        dispatch(clearSearchResultsForKey(previousSearchKey.current));
                        previousSearchKey.current = searchKey;
                        previousSearchQuery.current = query;
                    }
                });
        }
    }, [dispatch, entityName, query, searchKey, context, searchResult]);

    const entitiesArray: T[] = searchResult?.array ? searchResult.array.map((entity: ContentPlain) => entityConstructor.build(entity)) : [];
    const entitiesMap: { [key: string]: T } = {};
    if (searchResult?.map) {
        for (const entity of Object.values(searchResult.map)) {
            entitiesMap[entity.id] = entityConstructor.build(entity);
        }
    }

    return {
        result: ContentSearchResult.build({
            entityName: entityName,
            array: entitiesArray,
            map: entitiesMap,
            status: searchResult?.status,
            error: searchResult?.error,
            totalResults: searchResult?.totalResults,
            totalPages: searchResult?.totalPages,
            currentPage: searchResult?.currentPage
        })
    };
};