import { Serializable } from "../../../../../decorator/serializable.decorator";
import { SerializeStrategyEnum } from "../../../../../serialize/serializer";
import { SceneItem } from "./SceneItem";
import { SceneNPC } from "./SceneNPC";

export class SceneEntry {
    @Serializable()
    biome?: string

    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: SceneNPC })
    NPCs?: SceneNPC[];

    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: SceneItem })
    items?: SceneItem[];

    @Serializable()
    clazz = 'SceneEntry';

    static validate(data: any) {
        if (data.clazz !== 'SceneEntry') throw new Error("Invalid class");
        // Validate types
        if (data.biome) {
            if (!(data.biome instanceof String)) throw new Error('SceneEntry: biome must be a string');
        }
        if (data.NPCs) {
            if (!(data.NPCs instanceof Array)) throw new Error('SceneEntry: NPCs must be an array');
        }
        if (data.items) {
            if (!(data.items instanceof Array)) throw new Error('SceneEntry: items must be an array');
        }
    }

    static build(data: any) {
        SceneEntry.validate(data);
        const state = new SceneEntry();
        state.biome = data.biome;
        state.NPCs = data.NPCs;
        state.items = data.items;
        return state;
    }
}