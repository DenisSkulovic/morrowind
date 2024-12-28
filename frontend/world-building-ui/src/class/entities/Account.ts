import { Serializable } from "../../decorator/serializable.decorator";
import { LooseObject } from "../../types";
import { Entity } from "../Entity";

export class Account extends Entity {
    @Serializable()
    id!: string;

    @Serializable()
    username!: string;

    @Serializable()
    email!: string;

    @Serializable()
    role!: string;

    @Serializable()
    user!: string;

    public static build(obj: LooseObject): Account {
        const account = new Account();
        Object.assign(account, obj);
        return account;
    }

    toPlainObj(): LooseObject {
        return JSON.parse(JSON.stringify(this));
    }
}