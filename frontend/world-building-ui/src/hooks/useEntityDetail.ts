import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { EntityEnum } from "../enum/EntityEnum";
import { RequestStatusEnum } from "../enum/RequestStatusEnum";
import { AppDispatch, RootState } from "../store/store";
import { useSelectorAndBuilder } from "./useSelectorAndBuilder";
import { ContentEntityMapService } from "../CONTENT_ENTITY_MAP";
import { ContentBase, ContentBaseStatic } from "../class/ContentBase";
import { SearchQuery } from "../class/search/SearchQuery";
import { QueryFilter, QueryFilterOperatorEnum } from "../class/search/QueryFilter";
import { getSearchKey, searchContent } from "../store/slices/contentSlice";
import { Context } from "../class/Context";
import { useAccount } from "./useAccount";
import { Account } from "../class/entities/Account";
import { World } from "../class/entities/World";
import { User } from "../class/entities/User";
import { ClassConstructor } from "../types";

export const useEntityDetail = (entityName: EntityEnum | null, entityId: string | null, worldId: string | null) => {
    const dispatch = useDispatch<AppDispatch>();

    const account: Account | null = useAccount();

    const context: Context = Context.build({
        user: { id: account?.user } as User,
        world: { id: worldId } as World
    })
    const entityConstructor: ContentBaseStatic<ContentBase> | null = entityName ? ContentEntityMapService.getEntityConstructor<ContentBase>(entityName) as ContentBaseStatic<ContentBase> : null;
    const query: SearchQuery = SearchQuery.build({
        page: 1,
        pageSize: 1,
        filters: [
            QueryFilter.build({
                field: 'id',
                operator: QueryFilterOperatorEnum.EQUAL,
                value: entityId
            })
        ]
    });
    const searchKey: string | null = entityName ? getSearchKey(entityName, query) : null;
    const contentData: ContentBase | null = useSelectorAndBuilder((state: RootState) => {
        if (!searchKey) return null;
        if (!entityId) return null;
        const entity = state.content.searchedEntities[searchKey];
        if (!entity || !entity.map) return null;
        return entity.map[entityId];
    }, (data) => entityConstructor ? entityConstructor.build(data) : null);
    const { status, error } = useSelector((state: RootState) => {
        if (!searchKey) return { status: RequestStatusEnum.IDLE, error: null };
        const entity = state.content.searchedEntities[searchKey];
        if (!entity || !entity.map) return { status: RequestStatusEnum.IDLE, error: null };
        return { status: entity.status, error: entity.error };
    });

    useEffect(() => {
        if (status === RequestStatusEnum.IDLE && entityName) {
            dispatch(searchContent({ entityName, query, context }));
        }
    }, [dispatch, entityName, entityId]);

    return {
        contentData,
        status,
        error
    }
}