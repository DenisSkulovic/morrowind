import { useQuery } from "@apollo/client"
import { useState, useEffect } from "react"
import { EntitySearchQueryInput } from "../../../../../class/search/graphql/EntitySearchQueryInput"
import { SearchContentInput } from "../../../../../class/search/graphql/SearchContentInput"
import { SearchContentResult } from "../../../../../class/search/graphql/SearchContentResult"
import { DataSourceEnum } from "../../../../../enum/DataSourceEnum"
import { EntityEnum } from "../../../../../enum/EntityEnum"
import { FactionKnowledgeBase } from "../../../class/KnowledgeBase/FactionKnowledgeBase"

export const useFactionsKnowledgeBase = (factionIds: string[]) => {
    const [factionsKnowledgeBase, setFactionsKnowledgeBase] = useState<FactionKnowledgeBase[]>([])
    const [factionQueryOptions, setFactionQueryOptions] = useState<SearchContentInput[]>([])
    useEffect(() => {
        const missingIds: string[] = factionIds.filter(id => !factionsKnowledgeBase.some(faction => faction.id === id))
        const factionQueryOptions: SearchContentInput[] = missingIds.map(id => ({
            entityName: EntityEnum.Faction,
            query: EntitySearchQueryInput.build({
                blueprintIds: [id]
            }),
            source: DataSourceEnum.DATA_SOURCE_WORLD
        }))
        setFactionQueryOptions(factionQueryOptions)
    }, [factionIds])
    const { data, loading, error } = useQuery(
        SEARCH_FACTIONS,
        {
            variables: {
                input: factionQueryOptions
            }
        }
    )
    useEffect(() => {
        if (!data) return
        const response: SearchContentResult = SearchContentResult.build(data)
        const builtData: FactionKnowledgeBase[] = response.items.map(item => FactionKnowledgeBase.build(item))
        setFactionsKnowledgeBase(builtData)
    }, [data])
    return {
        factionsKnowledgeBase,
        factionsKnowledgeBaseQuery: {
            data,
            loading,
            error
        }
    }
}