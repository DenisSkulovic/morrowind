import { FactionData } from "./FactionData";
import { ItemData } from "./ItemData";
import { LocationData } from "./LocationData";

export class KnowledgeBase {
    locations: LocationData[] = [];
    factions: FactionData[] = [];
    characters: CharacterData[] = [];
    items: ItemData[] = [];

    static validate(data: any) {
        // Validate types
        if (data.locations) {
            if (!(data.locations instanceof Array)) throw new Error('KnowledgeBase: locations must be an array');
            for (const location of data.locations) {
                if (!(location instanceof LocationData)) throw new Error('KnowledgeBase: locations must be an array of LocationData');
            }
        }
        if (data.factions) {
            if (!(data.factions instanceof Array)) throw new Error('KnowledgeBase: factions must be an array');
            for (const faction of data.factions) {
                if (!(faction instanceof FactionData)) throw new Error('KnowledgeBase: factions must be an array of FactionData');
            }
        }
        if (data.characters) {
            if (!(data.characters instanceof Array)) throw new Error('KnowledgeBase: characters must be an array');
            for (const character of data.characters) {
                if (!(character instanceof CharacterData)) throw new Error('KnowledgeBase: characters must be an array of CharacterData');
            }
        }
        if (data.items) {
            if (!(data.items instanceof Array)) throw new Error('KnowledgeBase: items must be an array');
            for (const item of data.items) {
                if (!(item instanceof ItemData)) throw new Error('KnowledgeBase: items must be an array of ItemData');
            }
        }
    }

    static build(data: any) {
        KnowledgeBase.validate(data);
        const state = new KnowledgeBase();
        Object.assign(state, data);
        return state;
    }
}