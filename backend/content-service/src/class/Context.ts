import { Campaign } from "../modules/campaign/entities/Campaign";
import { User } from "../modules/user/entities/User";
import { World } from "../modules/world/entities/World";
import { ContextDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";

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