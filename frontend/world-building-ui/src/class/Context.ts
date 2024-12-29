import { Serializable } from "../decorator/serializable.decorator";
import { User } from "./entities/User";
import { World } from "./entities/World";
import { Campaign } from "./entities/Campaign";
import { SerializeStrategyEnum } from "../serialize/serializer";
import { LooseObject } from "../types";

export type ContextPlain = LooseObject

export class Context {
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    public user!: User;

    @Serializable({ strategy: SerializeStrategyEnum.ID })
    public world?: World;

    @Serializable({ strategy: SerializeStrategyEnum.ID })
    public campaign?: Campaign;

    public static build(data: { [key: string]: any }): Context {
        if (!data.user) throw new Error('User is required for Context');
        if (typeof data.user !== 'object') throw new Error('User must be an object');
        if (!data.user.id) throw new Error('User must have an id');
        const context = new Context();
        Object.assign(context, data);
        return context;
    }

    toPlainObj(): LooseObject {
        return JSON.parse(JSON.stringify(this));
    }
}
