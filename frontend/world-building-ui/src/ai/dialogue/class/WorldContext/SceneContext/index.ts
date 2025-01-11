import { Serializable } from "../../../../../decorator/serializable.decorator"
import { SerializeStrategyEnum } from "../../../../../serialize/serializer"
import { DirectionSceneEntry } from "./DirectionSceneEntry"

export class SceneContext {
    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: DirectionSceneEntry })
    north?: DirectionSceneEntry

    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: DirectionSceneEntry })
    northEast?: DirectionSceneEntry

    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: DirectionSceneEntry })
    east?: DirectionSceneEntry

    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: DirectionSceneEntry })
    southEast?: DirectionSceneEntry

    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: DirectionSceneEntry })
    south?: DirectionSceneEntry

    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: DirectionSceneEntry })
    southWest?: DirectionSceneEntry

    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: DirectionSceneEntry })
    west?: DirectionSceneEntry

    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: DirectionSceneEntry })
    northWest?: DirectionSceneEntry

    @Serializable()
    clazz = 'SceneContext';

    static validate(data: any) {
        if (data.clazz !== 'SceneContext') throw new Error("Invalid class");
        // Validate types
        if (data.north) {
            if (!(data.north instanceof DirectionSceneEntry)) throw new Error('SceneContext: north must be instance of DirectionSceneEntry');
        }
        if (data.northEast) {
            if (!(data.northEast instanceof DirectionSceneEntry)) throw new Error('SceneContext: northEast must be instance of DirectionSceneEntry');
        }
        if (data.east) {
            if (!(data.east instanceof DirectionSceneEntry)) throw new Error('SceneContext: east must be instance of DirectionSceneEntry');
        }
        if (data.southEast) {
            if (!(data.southEast instanceof DirectionSceneEntry)) throw new Error('SceneContext: southEast must be instance of DirectionSceneEntry');
        }
        if (data.south) {
            if (!(data.south instanceof DirectionSceneEntry)) throw new Error('SceneContext: south must be instance of DirectionSceneEntry');
        }
        if (data.southWest) {
            if (!(data.southWest instanceof DirectionSceneEntry)) throw new Error('SceneContext: southWest must be instance of DirectionSceneEntry');
        }
        if (data.west) {
            if (!(data.west instanceof DirectionSceneEntry)) throw new Error('SceneContext: west must be instance of DirectionSceneEntry');
        }
        if (data.northWest) {
            if (!(data.northWest instanceof DirectionSceneEntry)) throw new Error('SceneContext: northWest must be instance of DirectionSceneEntry');
        }
    }

    static build(data: any) {
        SceneContext.validate(data);
        const state = new SceneContext();
        state.north = data.north ? DirectionSceneEntry.build(data.north) : undefined;
        state.northEast = data.northEast ? DirectionSceneEntry.build(data.northEast) : undefined;
        state.east = data.east ? DirectionSceneEntry.build(data.east) : undefined;
        state.southEast = data.southEast ? DirectionSceneEntry.build(data.southEast) : undefined;
        state.south = data.south ? DirectionSceneEntry.build(data.south) : undefined;
        state.southWest = data.southWest ? DirectionSceneEntry.build(data.southWest) : undefined;
        state.west = data.west ? DirectionSceneEntry.build(data.west) : undefined;
        state.northWest = data.northWest ? DirectionSceneEntry.build(data.northWest) : undefined;
        return state;
    }
}

