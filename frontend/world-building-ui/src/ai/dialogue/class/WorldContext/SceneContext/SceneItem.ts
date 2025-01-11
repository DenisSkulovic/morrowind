import { Serializable } from "../../../../../decorator/serializable.decorator";

export class SceneItem {
    @Serializable()
    id!: string;

    @Serializable()
    clazz = 'SceneItem';

    static validate(data: any) {
        if (data.clazz !== 'SceneItem') throw new Error("Invalid class");
        if (!data.id) throw new Error('SceneItem: id is required');
    }

    static build(data: any) {
        SceneItem.validate(data);
        const state = new SceneItem();
        state.id = data.id;
        return state;
    }
}