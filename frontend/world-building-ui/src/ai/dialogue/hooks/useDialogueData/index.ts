import { useState } from "react"
import { KnowledgeBase } from "../../class/KnowledgeBase"
import { useCharactersKnowledgeBase } from "./knowledgebase/useCharactersKnowledgeBase"
import { useFactionsKnowledgeBase } from "./knowledgebase/useFactionsKnowledgeBase"
import { useItemsKnowledgeBase } from "./knowledgebase/useItemsKnowledgeBase"
import { useLocationsKnowledgeBase } from "./knowledgebase/useLocationsKnowledgeBase"
import { useCharacterProfiles } from "./useCharacterProfiles"


export const useDialogueData = (
    characterIds: string[],
) => {
    const [itemIds, setItemIds] = useState<string[]>([])
    const [factionIds, setFactionIds] = useState<string[]>([])
    const [locationIds, setLocationIds] = useState<string[]>([])


    const { characterProfiles, characterProfilesQuery } = useCharacterProfiles(characterIds)
    const { itemsKnowledgeBase, itemsKnowledgeBaseQuery } = useItemsKnowledgeBase(itemIds)
    const { charactersKnowledgeBase, charactersKnowledgeBaseQuery } = useCharactersKnowledgeBase(characterIds)
    const { factionsKnowledgeBase, factionsKnowledgeBaseQuery } = useFactionsKnowledgeBase(factionIds)
    const { locationsKnowledgeBase, locationsKnowledgeBaseQuery } = useLocationsKnowledgeBase(locationIds)

    useEffect(() => {
        const ids: string[] = []
        characterProfiles.forEach(profile => {
            profile.inventory. // TODO I need to reshape this too simplistic inventory field to better represent equipment and storage slots
                ids.push(profile.id)
        })
        setItemIds(ids)
    }, [characterProfiles])

    return {
        characterProfiles,
        knowledgeBase: KnowledgeBase.build({
            characters: charactersKnowledgeBase,
            items: itemsKnowledgeBase,
            factions: factionsKnowledgeBase,
            locations: locationsKnowledgeBase
        })
    }
}