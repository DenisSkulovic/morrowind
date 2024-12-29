import { Campaign } from "../modules/campaign/entities/Campaign";
import { User } from "../modules/user/entities/User";
import { World } from "../modules/world/entities/World";
import { ContextDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer, SerializeStrategyEnum } from "../serializer";

export class Context {
    @Serializable({ strategy: SerializeStrategyEnum.ID })
    public user!: User;

    @Serializable({ strategy: SerializeStrategyEnum.ID })
    public world?: World;

    @Serializable({ strategy: SerializeStrategyEnum.ID })
    public campaign?: Campaign;

    static build(body: Partial<Context>) {
        const context = new Context()
        Object.assign(context, body)
        return context
    }

    toDTO(): ContextDTO {
        return Serializer.toDTO(this)
    }

    static fromDTO(dto: ContextDTO): Context {
        return Serializer.fromDTO(dto, new Context())
    }
}