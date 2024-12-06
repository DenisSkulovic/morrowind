import { Serializable } from "../decorator/serializable.decorator";
import { WorldDTO } from "../proto/common";
import { Serializer } from "../serialize/serializer";
import { User } from "./User";

export class World {
    @Serializable()
    id!: string;

    @Serializable()
    user!: string;

    @Serializable()
    name!: string; // Name of the world, e.g., "Morrowind", "Middle-earth".

    @Serializable()
    description?: string; // Optional description or lore of the world.

    @Serializable()
    settings?: any; // Custom world settings (e.g., starting conditions, mechanics).

    @Serializable()
    campaigns!: string[]

    public toDTO(): WorldDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: WorldDTO): World {
        const world = new World();
        return Serializer.fromDTO(dto, world);
    }
}
