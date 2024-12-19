import { Serializable } from "../decorator/serializable.decorator";
import { User } from "./entities/User";
import { World } from "./entities/World";
import { Campaign } from "./entities/Campaign";

export class Context {
    @Serializable({ strategy: "id" })
    public user!: User;

    @Serializable({ strategy: "id" })
    public world?: World;

    @Serializable({ strategy: "id" })
    public campaign?: Campaign;
    public static build(data: { [key: string]: any }): Context {
        if (!data.user) throw new Error('User is required for Context');
        if (typeof data.user !== 'object') throw new Error('User must be an object');
        if (!data.user.id) throw new Error('User must have an id');

        const context = new Context();
        Object.assign(context, data);
        return context;
    }
}