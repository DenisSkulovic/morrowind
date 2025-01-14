import { useQuery } from "@apollo/client"
import { useState, useEffect } from "react"
import { EntitySearchQueryInput } from "../../../../../class/search/graphql/EntitySearchQueryInput"
import { SearchContentInput } from "../../../../../class/search/graphql/SearchContentInput"
import { SearchContentResult } from "../../../../../class/search/graphql/SearchContentResult"
import { DataSourceEnum } from "../../../../../enum/DataSourceEnum"
import { EntityEnum } from "../../../../../enum/EntityEnum"
import { SEARCH_ITEMS } from "../../../../../graphql/queries/dialogue/knowledgeBase/ITEMS"
import { ItemKnowledgeBase } from "../../../class/KnowledgeBase/ItemKnowledgeBase"

export const useItemsKnowledgeBase = (itemIds: string[]) => {
    const [itemsKnowledgeBase, setItemsKnowledgeBase] = useState<ItemKnowledgeBase[]>([])
    const [itemQueryOptions, setItemQueryOptions] = useState<SearchContentInput[]>([])
    useEffect(() => {
        const missingIds: string[] = itemIds.filter(id => !itemsKnowledgeBase.some(item => item.id === id))
        const itemQueryOptions: SearchContentInput[] = missingIds.map(id => ({
            entityName: EntityEnum.Item,
            query: EntitySearchQueryInput.build({
                blueprintIds: [id]
            }),
            source: DataSourceEnum.DATA_SOURCE_WORLD
        }))
        setItemQueryOptions(itemQueryOptions)
    }, [itemIds])
    const { data, loading, error } = useQuery(
        SEARCH_ITEMS,
        {
            variables: {
                input: itemQueryOptions
            }
        }
    )
    useEffect(() => {
        if (!data) return
        const response: SearchContentResult = SearchContentResult.build(data)
        const builtData: ItemKnowledgeBase[] = response.items.map(item => ItemKnowledgeBase.build(item))
        setItemsKnowledgeBase(builtData)
    }, [data])
    return {
        itemsKnowledgeBase,
        itemsKnowledgeBaseQuery: {
            data,
            loading,
            error
        }
    }
}