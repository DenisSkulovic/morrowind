import { Serializable } from "../decorator/serializable.decorator";
import { User } from "../dto/User";
import { World } from "../dto/World";
import { ContextDTO } from "../proto/common";
import { Campaign } from "../dto/Campaign";

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

    toDTO(): ContextDTO {
        return {
            userId: this.user?.id ?? "",
            worldId: this.world?.id ?? "",
            campaignId: this.campaign?.id ?? "",
        }
    }

    static fromDTO(dto: ContextDTO): Context {
        return new Context(
            { id: dto.userId } as User,
            { id: dto.worldId } as World,
            dto.campaignId ? { id: dto.campaignId } as Campaign : undefined,
        )
    }
}