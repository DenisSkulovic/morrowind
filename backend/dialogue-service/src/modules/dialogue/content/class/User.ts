import { Serializable } from "../../../../common/decorator/serializable.decorator";

export class User {
    @Serializable()
    id!: string;

    public static build(obj: any): User {
        const user = new User();
        Object.assign(user, obj);
        return user;
    }

}