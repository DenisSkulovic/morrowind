import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { searchWorldsThunk, getSearchKey, WorldSearchResult, clearSearchResultsForKey, WorldPlain } from '../store/slices/worldSlice';
import { Context } from '../class/Context';
import { User } from '../class/entities/User';
import { SearchQuery } from '../class/search/SearchQuery';
import { AppDispatch, RootState } from '../store/store';
import { World } from '../class/entities/World';

export const useWorlds = (query: SearchQuery, userId: string | null): {
    result: WorldSearchResult<World> | null;
} => {
    const dispatch = useDispatch<AppDispatch>();

    const searchKey = getSearchKey(query);
    const previousSearchKey = useRef<string>(searchKey);

    const searchResult: WorldSearchResult<World> | null = useSelector((state: RootState) => {
        console.log('1')
        const result: WorldSearchResult<WorldPlain> | undefined = state.worlds.searchedWorlds[searchKey];
        console.log('2')
        if (!result) return null;
        console.log('3')
        const worldsArray: World[] = result.array.map(world => World.build(world));
        console.log('4')
        const worldsMap: { [key: string]: World } = {};
        for (const world of result.array) {
            worldsMap[world.id] = World.build(world);
        }
        console.log('5')
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
            });
        }
    }, [previousSearchKey.current, searchKey]);

    return {
        result: searchResult,
    };
};
