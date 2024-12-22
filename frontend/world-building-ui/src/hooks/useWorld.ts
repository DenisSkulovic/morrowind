import { World } from "../class/entities/World";
import { useWorlds } from "./useWorlds";

export const useWorld = (worldId: string, userId: string | null): World | null => {
    if (!userId) return null
    const { worlds } = useWorlds(userId);
    const world: World | null = worlds?.find(world => world.id === worldId) || null;
    return world;
};