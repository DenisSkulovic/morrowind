import { Serializable } from "../../decorator/serializable.decorator";

export class Account {
    @Serializable()
    id!: string;

    @Serializable()
    username!: string;

    @Serializable()
    email!: string;

    @Serializable()
    role!: string;

    @Serializable()
    user!: string
}