import { useQuery } from "@apollo/client"
import { useState, useEffect } from "react"
import { EntitySearchQueryInput } from "../../../../class/search/graphql/EntitySearchQueryInput"
import { SearchContentInput } from "../../../../class/search/graphql/SearchContentInput"
import { SearchContentResult } from "../../../../class/search/graphql/SearchContentResult"
import { DataSourceEnum } from "../../../../enum/DataSourceEnum"
import { EntityEnum } from "../../../../enum/EntityEnum"
import { LocationKnowledgeBase } from "../../class/KnowledgeBase/LocationKnowledgeBase"


export const useLocationsKnowledgeBase = (locationIds: string[]) => {
    const [locationsKnowledgeBase, setLocationsKnowledgeBase] = useState<LocationKnowledgeBase[]>([])
    const [locationQueryOptions, setLocationQueryOptions] = useState<SearchContentInput[]>([])
    useEffect(() => {
        const missingIds: string[] = locationIds.filter(id => !locationsKnowledgeBase.some(location => location.id === id))
        const locationQueryOptions: SearchContentInput[] = missingIds.map(id => ({
            entityName: EntityEnum.Location,
            query: EntitySearchQueryInput.build({
                blueprintIds: [id]
            }),
            source: DataSourceEnum.DATA_SOURCE_WORLD
        }))
        setLocationQueryOptions(locationQueryOptions)
    }, [locationIds])
    const { data, loading, error } = useQuery(
        SEARCH_LOCATIONS,
        {
            variables: {
                input: locationQueryOptions
            }
        }
    )
    useEffect(() => {
        if (!data) return
        const response: SearchContentResult = SearchContentResult.build(data)
        const builtData: LocationKnowledgeBase[] = response.items.map(item => LocationKnowledgeBase.build(item))
        setLocationsKnowledgeBase(builtData)
    }, [data])
    return {
        locationsKnowledgeBase,
        locationsKnowledgeBaseQuery: {
            data,
            loading,
            error
        }
    }
}