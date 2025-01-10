import { SceneEntry } from "./SceneEntry";
import { Serializable } from "../../../common/decorator/serializable.decorator";

export class DirectionSceneEntry {
    @Serializable()
    near?: SceneEntry;

    @Serializable()
    mid?: SceneEntry;

    @Serializable()
    far?: SceneEntry;

    @Serializable()
    clazz = 'DirectionSceneEntry';

    static validate(data: any) {
        if (data.clazz !== 'DirectionSceneEntry') throw new Error("Invalid class");
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