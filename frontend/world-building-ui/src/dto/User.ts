import { Serializable } from "../decorator/serializable.decorator";
import { UserDTO } from "../proto/common";
import { Serializer } from "../serialize/serializer";

export class User {
    @Serializable()
    id!: string;

    @Serializable()
    account!: string

    @Serializable()
    worlds?: string[];

    @Serializable()
    campaigns?: string[];

    public toDTO(): UserDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: UserDTO): User {
        const user = new User();
        return Serializer.fromDTO(dto, user);
    }

}
