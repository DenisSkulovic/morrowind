import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serialize/serializer";
import { common } from "../proto/common";
import { Context } from "../class/Context";
import { ContentService } from "../services/ContentService";
import { SearchQuery } from "../class/search/SearchQuery";

export class User {
    @Serializable()
    id!: string;

    @Serializable()
    account!: string

    @Serializable()
    worlds?: string[];

    @Serializable()
    campaigns?: string[];

    public toDTO(): common.UserDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.UserDTO): User {
        const user = new User();
        return Serializer.fromDTO(dto, user);
    }

}
