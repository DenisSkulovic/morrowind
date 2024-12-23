import { Campaign } from "../modules/campaign/entities/Campaign";
import { User } from "../modules/user/entities/User";
import { World } from "../modules/world/entities/World";
import { ContextDTO } from "../proto/common";
import { Serializable } from "../decorator/serializable.decorator";
import { Serializer } from "../serializer";

export class Context {
    @Serializable({ strategy: "id" })
    public user!: User;

    @Serializable({ strategy: "id" })
    public world?: World;

    @Serializable({ strategy: "id" })
    public campaign?: Campaign;

    static build(body: any) {
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