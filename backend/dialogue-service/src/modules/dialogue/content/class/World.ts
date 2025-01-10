import { Serializable } from "../../../../common/decorator/serializable.decorator";

export class World {
    @Serializable()
    id!: string;

    public static build(obj: any): World {
        const world = new World();
        Object.assign(world, obj);
        return world;
    }

}