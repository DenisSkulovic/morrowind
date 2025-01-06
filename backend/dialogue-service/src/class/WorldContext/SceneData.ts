
export class SceneData {
    near?: SceneEntry;
    mid?: SceneEntry;
    far?: SceneEntry;

    static validate(data: any) {
        // Validate types
        if (data.near) {
            if (!(data.near instanceof SceneEntry)) throw new Error('SceneData: near must be instance of SceneEntry');
        }
        if (data.mid) {
            if (!(data.mid instanceof SceneEntry)) throw new Error('SceneData: mid must be instance of SceneEntry');
        }
        if (data.far) {
            if (!(data.far instanceof SceneEntry)) throw new Error('SceneData: far must be instance of SceneEntry');
        }
    }

    static build(data: any) {
        SceneData.validate(data);
        const state = new SceneData();
        Object.assign(state, data);
        return state;
    }
}

export class SceneEntry {
    NPCs?: Array<{ npcId: string, activity: string }>;
    items?: Array<{ itemId: string }>;

    static validate(data: any) {
        // Validate types
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
        Object.assign(state, data);
        return state;
    }
}