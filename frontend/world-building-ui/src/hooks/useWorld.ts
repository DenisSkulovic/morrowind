import { World } from "../class/entities/World";
import { QueryFilter, QueryFilterOperatorEnum } from "../class/search/QueryFilter";
import { SearchQuery } from "../class/search/SearchQuery";
import { WorldPlain } from "../store/slices/worldSlice";
import { useWorlds } from "./useWorlds";

export const useWorld = (worldId: string | null, userId: string | null): World | null => {
    if (!userId) return null
    if (!worldId) return null
    const query: SearchQuery = SearchQuery.build({
        page: 1, pageSize: 100, filters: [
            QueryFilter.build({ field: "user", operator: QueryFilterOperatorEnum.EQUAL, value: userId })
        ]
    });
    const { result } = useWorlds(query, userId);
    const worldPlain: WorldPlain | null = result?.map[worldId] || null;
    const world: World | null = worldPlain ? World.build(worldPlain) : null;
    return world;
};