import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { searchWorldsThunk, getSearchKey, WorldSearchResult, clearSearchResultsForKey, WorldPlain } from '../store/slices/worldSlice';
import { Context } from '../class/Context';
import { User } from '../class/entities/User';
import { SearchQuery } from '../class/search/SearchQuery';
import { AppDispatch, RootState } from '../store/store';
import { World } from '../class/entities/World';
import { useLoading } from "./useLoading";

export const useWorlds = (query: SearchQuery, userId: string | null): {
    result: WorldSearchResult<World> | null;
} => {
    const dispatch = useDispatch<AppDispatch>();
    const { addLoadingKey, removeLoadingKey } = useLoading();

    const searchKey = getSearchKey(query);
    const previousSearchKey = useRef<string>(searchKey);

    const searchResult: WorldSearchResult<World> | null = useSelector((state: RootState) => {
        const result: WorldSearchResult<WorldPlain> | undefined = state.worlds.searchedWorlds[searchKey];
        if (!result) return null;
        const worldsArray: World[] = result.array.map(world => World.build(world));
        const worldsMap: { [key: string]: World } = {};
        for (const world of result.array) {
            worldsMap[world.id] = World.build(world);
        }
        return WorldSearchResult.build({
            array: worldsArray,
            map: worldsMap,
            status: result.status,
            error: result.error,
            totalResults: result.totalResults,
            totalPages: result.totalPages,
            currentPage: result.currentPage
        });
    });

    useEffect(() => {
        if (!previousSearchKey.current || previousSearchKey.current !== searchKey || !searchResult) {
            const key = 'worlds-searchWorlds'
            addLoadingKey(key)
            dispatch(searchWorldsThunk({
                query,
                context: Context.build({
                    user: User.build({ id: userId })
                })
            })).then(() => {
                if (previousSearchKey.current !== searchKey) {
                    dispatch(clearSearchResultsForKey(previousSearchKey.current));
                    previousSearchKey.current = searchKey;
                }
            }).finally(() => {
                removeLoadingKey(key)
            });
        }
    }, [previousSearchKey.current, searchKey]);

    return {
        result: searchResult,
    };
};
