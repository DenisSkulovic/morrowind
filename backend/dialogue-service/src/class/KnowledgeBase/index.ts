import { FactionKnowledgeBase } from "./FactionKnowledgeBase";
import { ItemKnowledgeBase } from "./ItemKnowledgeBase";
import { LocationKnowledgeBase } from "./LocationKnowledgeBase";
import { CharacterKnowledgeBase } from "./CharacterKnowledgeBase";

export class KnowledgeBase {
    characters!: CharacterKnowledgeBase[];
    factions!: FactionKnowledgeBase[];
    locations!: LocationKnowledgeBase[];
    items!: ItemKnowledgeBase[];
    clazz = 'KnowledgeBase';

    static validate(data: Partial<KnowledgeBase>) {
        if (data.clazz !== 'KnowledgeBase') throw new Error("Invalid class");
        // Validate types
        if (data.characters) {
            if (!(data.characters instanceof Array)) throw new Error('KnowledgeBase: characters must be an array');
            for (const character of data.characters) {
                if (!(typeof character === 'object')) throw new Error('KnowledgeBase: characters must be an array of CharacterKnowledgeBase');
            }
        }
        if (data.factions) {
            if (!(data.factions instanceof Array)) throw new Error('KnowledgeBase: factions must be an array');
            for (const faction of data.factions) {
                if (!(typeof faction === 'object')) throw new Error('KnowledgeBase: factions must be an array of FactionKnowledgeBase');
            }
        }
        if (data.locations) {
            if (!(data.locations instanceof Array)) throw new Error('KnowledgeBase: locations must be an array');
            for (const location of data.locations) {
                if (!(typeof location === 'object')) throw new Error('KnowledgeBase: locations must be an array of LocationKnowledgeBase');
            }
        }
        if (data.items) {
            if (!(data.items instanceof Array)) throw new Error('KnowledgeBase: items must be an array');
            for (const item of data.items) {
                if (!(typeof item === 'object')) throw new Error('KnowledgeBase: items must be an array of ItemKnowledgeBase');
            }
        }
    }

    static build(data: Partial<KnowledgeBase>) {
        KnowledgeBase.validate(data);
        const state = new KnowledgeBase();
        state.characters = data.characters?.map((character) => CharacterKnowledgeBase.build(character)) || [];
        state.factions = data.factions?.map((faction) => FactionKnowledgeBase.build(faction)) || [];
        state.locations = data.locations?.map((location) => LocationKnowledgeBase.build(location)) || [];
        state.items = data.items?.map((item) => ItemKnowledgeBase.build(item)) || [];
        return state;
    }
}