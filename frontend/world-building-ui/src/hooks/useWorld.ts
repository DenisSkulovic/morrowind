import { World } from "../class/entities/World";
import { QueryFilter, QueryFilterOperatorEnum } from "../class/search/QueryFilter";
import { SearchQuery } from "../class/search/SearchQuery";
import { WorldPlain } from "../store/slices/worldSlice";
import { useWorlds } from "./useWorlds";

export const useWorld = (worldId: string | null, userId: string | null): World | null => {
    const query: SearchQuery = SearchQuery.build({
        page: 1,
        pageSize: 100,
        filters: [
            QueryFilter.build({ field: "user", operator: QueryFilterOperatorEnum.EQUAL, value: userId })
        ]
    }) || null;
    const { result } = useWorlds(query, userId);
    const worldPlain: WorldPlain | null = result && worldId ? result.map[worldId] || null : null;
    const world: World | null = worldPlain ? World.build(worldPlain) : null;
    return world;
};