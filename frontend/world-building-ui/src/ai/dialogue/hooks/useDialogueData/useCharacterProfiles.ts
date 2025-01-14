import { useQuery } from "@apollo/client"
import { useState, useEffect } from "react"
import { EntitySearchQueryInput } from "../../../../class/search/graphql/EntitySearchQueryInput"
import { SearchContentInput } from "../../../../class/search/graphql/SearchContentInput"
import { SearchContentResult } from "../../../../class/search/graphql/SearchContentResult"
import { DataSourceEnum } from "../../../../enum/DataSourceEnum"
import { EntityEnum } from "../../../../enum/EntityEnum"
import { CHARACTER_PROFILES } from "../../../../graphql/queries/dialogue/CHARACTER_PROFILE"
import { CharacterProfile } from "../../class/CharacterProfile"

export const useCharacterProfiles = (characterIds: string[]) => {
    const [characterProfiles, setCharacterProfiles] = useState<CharacterProfile[]>([])
    const [characterQueryOptions, setCharacterQueryOptions] = useState<SearchContentInput[]>([])
    useEffect(() => {
        const missingIds: string[] = characterIds.filter(id => !characterProfiles.some(profile => profile.id === id))
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
        CHARACTER_PROFILES,
        {
            variables: {
                input: characterQueryOptions
            }
        }
    )
    useEffect(() => {
        if (!data) return
        const response: SearchContentResult = SearchContentResult.build(data)
        const builtData: CharacterProfile[] = response.items.map(item => CharacterProfile.build(item))
        setCharacterProfiles(builtData)
    }, [data])
    return {
        characterProfiles,
        characterProfilesQuery: {
            data,
            loading,
            error
        }
    }
}