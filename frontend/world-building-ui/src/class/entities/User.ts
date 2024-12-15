import { Serializable } from "../../decorator/serializable.decorator";

export class User {
    @Serializable()
    id!: string;

    @Serializable()
    account!: string

    @Serializable()
    worlds?: string[];

    @Serializable()
    campaigns?: string[];
}
