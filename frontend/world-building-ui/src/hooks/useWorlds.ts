import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RequestStatusEnum } from '../enum/RequestStatusEnum';
import { searchWorlds } from '../store/slices/worldSlice';
import { Context } from '../class/Context';
import { User } from '../class/entities/User';
import { QueryFilter } from '../class/search/QueryFilter';
import { SearchQuery } from '../class/search/SearchQuery';
import { useSelectorAndBuilder } from './useSelectorAndBuilder';
import { AppDispatch, RootState } from '../store/store';
import { World } from '../class/entities/World';

export const useWorlds = (userId: string) => {
    const dispatch = useDispatch<AppDispatch>();
    const searchedWorldsStatus = useSelector((state: RootState) => state.worlds.searchedWorlds.status);
    const searchedWorldsError = useSelector((state: RootState) => state.worlds.searchedWorlds.error);
    const worlds = useSelectorAndBuilder<World[]>((state: RootState) => state.worlds.searchedWorlds.data, worlds => worlds.map(World.build));

    useEffect(() => {
        if (searchedWorldsStatus === RequestStatusEnum.IDLE) {
            const user: User = User.build({ id: userId });
            const context: Context = Context.build({ user });
            const filter: QueryFilter = QueryFilter.build({ field: "user", operator: "eq", value: userId });
            const query: SearchQuery = SearchQuery.build({ page: 1, pageSize: 100, filters: [filter] });
            dispatch(searchWorlds({ query, context }));
        }
    }, [dispatch, searchedWorldsStatus, userId]);

    return {
        worlds,
        searchedWorldsStatus,
        searchedWorldsError
    };
};
