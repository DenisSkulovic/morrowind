import { Serializable } from "../decorator/serializable.decorator";
import { User } from "../dto/User";
import { World } from "../dto/World";
import { Campaign } from "../dto/Campaign";
import { common } from "../proto/common";
import { Serializer } from "../serialize/serializer";

export class Context {
    @Serializable()
    public user: User;

    @Serializable()
    public world?: World;

    @Serializable()
    public campaign?: Campaign;

    constructor(user: User, world?: World, campaign?: Campaign) {
        this.user = user;
        this.world = world;
        this.campaign = campaign;
    }

    public toDTO(): common.ContextDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.ContextDTO): Context {
        const context = new Context(
            { id: dto.userId } as User,
            { id: dto.worldId } as World,
            dto.campaignId ? { id: dto.campaignId } as Campaign : undefined
        );
        return Serializer.fromDTO(dto, context);
    }
}