export class SceneContext {
    north?: DirectionSceneEntry
    northEast?: DirectionSceneEntry
    east?: DirectionSceneEntry
    southEast?: DirectionSceneEntry
    south?: DirectionSceneEntry
    southWest?: DirectionSceneEntry
    west?: DirectionSceneEntry
    northWest?: DirectionSceneEntry
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

export class DirectionSceneEntry {
    near?: SceneEntry;
    mid?: SceneEntry;
    far?: SceneEntry;

    static validate(data: any) {
        // Validate types
        if (data.near) {
            if (!(data.near instanceof SceneEntry)) throw new Error('DirectionSceneEntry: near must be instance of SceneEntry');
        }
        if (data.mid) {
            if (!(data.mid instanceof SceneEntry)) throw new Error('DirectionSceneEntry: mid must be instance of SceneEntry');
        }
        if (data.far) {
            if (!(data.far instanceof SceneEntry)) throw new Error('DirectionSceneEntry: far must be instance of SceneEntry');
        }
    }

    static build(data: any) {
        DirectionSceneEntry.validate(data);
        const state = new DirectionSceneEntry();
        state.near = data.near ? SceneEntry.build(data.near) : undefined;
        state.mid = data.mid ? SceneEntry.build(data.mid) : undefined;
        state.far = data.far ? SceneEntry.build(data.far) : undefined;
        return state;
    }
}

export class SceneEntry {
    biome?: string
    NPCs?: Array<{ npcId: string, activity: string }>;
    items?: Array<{ itemId: string }>;

    static validate(data: any) {
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