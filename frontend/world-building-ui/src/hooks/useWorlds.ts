import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { searchWorldsThunk, getSearchKey, WorldSearchResult, clearSearchResultsForKey } from '../store/slices/worldSlice';
import { Context } from '../class/Context';
import { User } from '../class/entities/User';
import { SearchQuery } from '../class/search/grpc/SearchQuery';
import { AppDispatch, RootState } from '../store/store';
import { World } from '../class/entities/World';
import { useLoading } from "./useLoading";

export const useWorlds = (query: SearchQuery, userId: string | null): {
    result: WorldSearchResult<World> | null;
} => {
    const dispatch = useDispatch<AppDispatch>();
    const { addLoadingKey, removeLoadingKey } = useLoading();

    const previousSearchKey = useRef<string>(getSearchKey(query));
    const [searchResult, setSearchResult] = useState<WorldSearchResult<World> | null>(null);

    const searchesCache = useSelector((state: RootState) => state.worlds.searchedWorlds);

    useEffect(() => {
        if (!searchesCache) return;
        const searchKey = getSearchKey(query);
        const result = searchesCache[searchKey];
        if (!result) return;

        const worldsArray: World[] = result.array.map(world => World.build(world));
        const worldsMap: { [key: string]: World } = {};
        for (const world of result.array) {
            worldsMap[world.id] = World.build(world);
        }

        const builtResult: WorldSearchResult<World> = WorldSearchResult.build<World>({
            array: worldsArray,
            map: worldsMap,
            status: result.status,
            error: result.error,
            totalResults: result.totalResults,
            totalPages: result.totalPages,
            currentPage: result.currentPage
        })
        setSearchResult(builtResult);
    }, [searchesCache]);

    useEffect(() => {
        if (!previousSearchKey.current || previousSearchKey.current !== getSearchKey(query) || !searchResult) {
            const key = 'worlds-searchWorlds'
            addLoadingKey(key)
            dispatch(searchWorldsThunk({
                query,
                context: Context.build({
                    user: User.build({ id: userId })
                })
            })).then(() => {
                if (previousSearchKey.current !== getSearchKey(query)) {
                    dispatch(clearSearchResultsForKey(previousSearchKey.current));
                    previousSearchKey.current = getSearchKey(query);
                }
            }).finally(() => {
                removeLoadingKey(key)
            });
        }
    }, [previousSearchKey.current, getSearchKey(query)]);

    return {
        result: searchResult,
    };
};
