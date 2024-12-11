import { Serializable } from "../decorator/serializable.decorator";
import { common } from "../proto/common";
import { Serializer } from "../serialize/serializer";

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

    public toDTO(): common.AccountDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.AccountDTO): Account {
        const account = new Account();
        return Serializer.fromDTO(dto, account);
    }
}
