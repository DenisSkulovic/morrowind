import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { EntityEnum } from "../enum/EntityEnum";
import { RequestStatusEnum } from "../enum/RequestStatusEnum";
import { AppDispatch, RootState } from "../store/store";
import { ContentEntityMapService } from "../CONTENT_ENTITY_MAP";
import { ContentBase, ContentBaseStatic } from "../class/ContentBase";
import { SearchQuery } from "../class/search/grpc/SearchQuery";
import { QueryFilter } from "../class/search/grpc/QueryFilter";
import { getSearchKey, searchContent } from "../store/slices/contentSlice";
import { Context } from "../class/Context";
import { useAccount } from "./useAccount";
import { Account } from "../class/entities/Account";
import { World } from "../class/entities/World";
import { User } from "../class/entities/User";
import { useLoading } from "./useLoading";
import { QueryFilterOperatorEnum } from "../enum/QueryFilterOperatorEnum";

export const useEntityDetail = (entityName: EntityEnum | null, entityId: string | null, worldId: string | null) => {
    const dispatch = useDispatch<AppDispatch>();

    const { addLoadingKey, removeLoadingKey } = useLoading();

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
    const searchesCache = useSelector((state: RootState) => state.content.searchedEntities);
    const [contentData, setContentData] = useState<ContentBase | null>(null);
    useEffect(() => {
        if (!searchKey) return;
        if (!entityId) return;
        const entity = searchesCache[searchKey];
        if (!entity || !entity.map) return;
        const builtEntity = entityConstructor ? entityConstructor.build(entity.map[entityId]) : null;
        setContentData(builtEntity);
    }, [searchKey, searchesCache, entityId]);

    const [status, setStatus] = useState(RequestStatusEnum.IDLE);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!searchKey) {
            setStatus(RequestStatusEnum.IDLE);
            setError(null);
            return;
        }
        const entity = searchesCache[searchKey];
        if (!entity || !entity.map) {
            setStatus(RequestStatusEnum.IDLE);
            setError(null);
            return;
        }
        setStatus(entity.status);
        setError(entity.error);
    }, [searchKey, searchesCache]);

    useEffect(() => {
        if (status === RequestStatusEnum.IDLE && entityName) {
            const loadingKey = 'entityDetail-searchContent'
            addLoadingKey(loadingKey)
            dispatch(searchContent({ entityName, query, context })).finally(() => {
                removeLoadingKey(loadingKey)
            });
        }
    }, [dispatch, entityName, entityId]);

    return {
        contentData,
        status,
        error
    }
}