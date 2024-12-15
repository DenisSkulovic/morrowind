import { Serializable } from "../../decorator/serializable.decorator";

export class Campaign {
    @Serializable()
    id!: string;

    @Serializable()
    name!: string;

    @Serializable()
    description?: string;

    @Serializable()
    dynamicState?: any;

    @Serializable()
    world!: string;

    @Serializable()
    createdAt!: number;

    @Serializable()
    user!: string;

}
