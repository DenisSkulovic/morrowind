import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { EntityEnum } from "../enum/EntityEnum";
import { RequestStatusEnum } from "../enum/RequestStatusEnum";
import { AppDispatch, RootState } from "../store/store";
import { useSelectorAndBuilder } from "./useSelectorAndBuilder";
import { CONTENT_ENTITY_MAP } from "../CONTENT_ENTITY_MAP";
import { ContentBase, ContentBaseStatic } from "../class/ContentBase";
import { SearchQuery } from "../class/search/SearchQuery";
import { QueryFilter, QueryFilterOperatorEnum } from "../class/search/QueryFilter";
import { getSearchKey, searchContent } from "../store/slices/contentSlice";
import { Context } from "../class/Context";
import { useAccount } from "./useAccount";
import { Account } from "../class/entities/Account";
import { World } from "../class/entities/World";
import { User } from "../class/entities/User";

export const useEntityDetail = (entityName: EntityEnum, entityId: string, world_id: string) => {
    const dispatch = useDispatch<AppDispatch>();

    const account: Account | null = useAccount();

    const context: Context = Context.build({
        user: { id: account?.user } as User,
        world: { id: world_id } as World
    })
    const entityConstructor: ContentBaseStatic<ContentBase> = CONTENT_ENTITY_MAP[entityName].entity as ContentBaseStatic<ContentBase>;
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
    const searchKey: string = getSearchKey(entityName, query);
    const contentData: ContentBase | null = useSelectorAndBuilder((state: RootState) => {
        const entity = state.content.searchedEntities[searchKey];
        if (!entity || !entity.map) return null;
        return entity.map[entityId];
    }, (data) => entityConstructor.build(data));
    const { status, error } = useSelector((state: RootState) => state.content.searchedEntities[searchKey]);

    useEffect(() => {
        if (status === RequestStatusEnum.IDLE) {
            dispatch(searchContent({ entityName, query, context }));
        }
    }, [dispatch, entityName, entityId]);

    return {
        contentData,
        status,
        error
    }
}