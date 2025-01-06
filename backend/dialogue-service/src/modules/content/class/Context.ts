import { Serializable } from "../../../common/decorator/serializable.decorator";
import { User } from "./User";
import { World } from "./World";
import { Campaign } from "./Campaign";
import { SerializeStrategyEnum } from "../../../common/serializer/serializer";

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

}
