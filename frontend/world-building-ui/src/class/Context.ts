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
        const context = new Context();
        Object.assign(context, data);
        return context;
    }
}