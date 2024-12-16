import { Serializable } from "../../decorator/serializable.decorator";
import { LooseObject } from "../../types";

export class User {
    @Serializable()
    id!: string;

    @Serializable()
    account!: string

    @Serializable()
    worlds?: string[];

    @Serializable()
    campaigns?: string[];

    public static build(obj: LooseObject): User {
        const user = new User();
        Object.assign(user, obj);
        return user;
    }

    toPlainObj(): LooseObject {
        return JSON.parse(JSON.stringify(this));
    }
}