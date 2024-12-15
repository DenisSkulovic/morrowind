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
            user: this.user?.id ?? "",
            world: this.world?.id ?? "",
            campaign: this.campaign?.id ?? "",
        }
    }

    static fromDTO(dto: ContextDTO): Context {
        return new Context(
            { id: dto.user } as User,
            { id: dto.world } as World,
            dto.campaign ? { id: dto.campaign } as Campaign : undefined,
        )
    }
}