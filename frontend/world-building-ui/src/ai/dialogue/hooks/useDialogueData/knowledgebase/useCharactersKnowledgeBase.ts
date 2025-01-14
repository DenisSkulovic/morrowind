import { useQuery } from "@apollo/client"
import { useState, useEffect } from "react"
import { EntitySearchQueryInput } from "../../../../../class/search/graphql/EntitySearchQueryInput"
import { SearchContentInput } from "../../../../../class/search/graphql/SearchContentInput"
import { SearchContentResult } from "../../../../../class/search/graphql/SearchContentResult"
import { DataSourceEnum } from "../../../../../enum/DataSourceEnum"
import { EntityEnum } from "../../../../../enum/EntityEnum"
import { CharacterKnowledgeBase } from "../../../class/KnowledgeBase/CharacterKnowledgeBase"

export const useCharactersKnowledgeBase = (characterIds: string[]) => {
    const [charactersKnowledgeBase, setCharactersKnowledgeBase] = useState<CharacterKnowledgeBase[]>([])
    const [characterQueryOptions, setCharacterQueryOptions] = useState<SearchContentInput[]>([])
    useEffect(() => {
        const missingIds: string[] = characterIds.filter(id => !charactersKnowledgeBase.some(character => character.id === id))
        const characterQueryOptions: SearchContentInput[] = missingIds.map(id => ({
            entityName: EntityEnum.Character,
            query: EntitySearchQueryInput.build({
                blueprintIds: [id]
            }),
            source: DataSourceEnum.DATA_SOURCE_WORLD
        }))
        setCharacterQueryOptions(characterQueryOptions)
    }, [characterIds])
    const { data, loading, error } = useQuery(
        SEARCH_CHARACTERS,
        {
            variables: {
                input: characterQueryOptions
            }
        }
    )
    useEffect(() => {
        if (!data) return
        const response: SearchContentResult = SearchContentResult.build(data)
        const builtData: CharacterKnowledgeBase[] = response.items.map(item => CharacterKnowledgeBase.build(item))
        setCharactersKnowledgeBase(builtData)
    }, [data])
    return {
        charactersKnowledgeBase,
        charactersKnowledgeBaseQuery: {
            data,
            loading,
            error
        }
    }
}