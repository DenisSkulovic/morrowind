import { Serializable } from "../../decorator/serializable.decorator";
import { LooseObject } from "../../types";
import { Entity } from "../Entity";


export class User extends Entity {
    @Serializable()
    id!: string;

    @Serializable()
    account!: string;

    @Serializable()
    worlds?: string[];

    @Serializable()
    campaigns?: string[];

    public static build(obj: LooseObject): User {
        const user = new User();
        Object.assign(user, obj);
        return user;
    }


}