import { User } from "../dto/User";
import { World } from "../dto/World";
import { ContextDTO } from "../proto/common";

export class Context {
    constructor(
        public user: User,
        public world: World,
    ) { }

    toDTO(): ContextDTO {
        return {
            userId: this.user?.id ?? "",
            worldId: this.world?.id ?? "",
            campaignId: "",
        }
    }
}