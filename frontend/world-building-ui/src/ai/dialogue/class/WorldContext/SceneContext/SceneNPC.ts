import { Serializable } from "../../../../../decorator/serializable.decorator";

export class SceneNPC {
    @Serializable()
    id!: string;

    @Serializable()
    activity?: string;

    @Serializable()
    clazz = 'SceneNPC';

    static validate(data: any) {
        if (data.clazz !== 'SceneNPC') throw new Error("Invalid class");
        if (!data.id) throw new Error('SceneNPC: id is required');
    }

    static build(data: any) {
        SceneNPC.validate(data);
        const state = new SceneNPC();
        state.id = data.id;
        state.activity = data.activity;
        return state;
    }
}