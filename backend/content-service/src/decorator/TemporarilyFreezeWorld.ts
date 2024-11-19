import { World } from "../entities/World";
import { WorldDataSource } from "../data-source";

const frozenWorlds = new Map<string, number>(); // Tracks frozen state with reentrant counters

export function TemporarilyFreezeWorld(worldIdParam: string) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            const worldId = args.find((arg) => arg[worldIdParam] !== undefined)?.[worldIdParam];
            if (!worldId) throw new Error("World ID not found in method arguments.");

            const worldRepository = WorldDataSource.getRepository(World);

            // Handle reentrancy
            const freezeCount = frozenWorlds.get(worldId) || 0;

            if (freezeCount > 0) {
                // World is already frozen; allow reentrant call
                frozenWorlds.set(worldId, freezeCount + 1);
                try {
                    return await originalMethod.apply(this, args);
                } finally {
                    frozenWorlds.set(worldId, frozenWorlds.get(worldId)! - 1);
                }
            }

            // First-level freeze
            const world = await worldRepository.findOne(worldId);
            if (!world) throw new Error(`World with ID ${worldId} not found.`);

            if (world.frozen) throw new Error(`World with ID ${worldId} is already frozen. Operation cannot proceed.`);

            // Temporarily freeze the world
            world.frozen = true;
            await worldRepository.save(world);
            frozenWorlds.set(worldId, 1);

            try {
                // Execute the original method
                const result = await originalMethod.apply(this, args);

                // Unfreeze the world
                frozenWorlds.delete(worldId);
                world.frozen = false;
                await worldRepository.save(world);

                return result;
            } catch (error) {
                // Ensure the world is unfrozen even if an error occurs
                frozenWorlds.delete(worldId);
                world.frozen = false;
                await worldRepository.save(world);
                throw error;
            }
        };
    };
}
