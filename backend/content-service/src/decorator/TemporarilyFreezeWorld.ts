import { World } from "../modules/world/entities/World";

const frozenWorlds = new Map<string, number>(); // Tracks frozen state with reentrant counters // TODO clearly this needs to be done differently

export function TemporarilyFreezeWorld(worldIdParamIndex: number) {
    return function (target: any, propertyName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            // TODO redo this with a NestJS pattern
            // console.log(`[TemporarilyFreezeWorld] args`, args)
            // const worldId = args[worldIdParamIndex];
            // if (!worldId) throw new Error("[TemporarilyFreezeWorld] World ID not found in method arguments.");

            // const worldRepository = WorldDataSource.getRepository(World);

            // // Handle reentrancy
            // const freezeCount = frozenWorlds.get(worldId) || 0;
            // console.log(`[TemporarilyFreezeWorld] freezeCount`, freezeCount)

            // if (freezeCount > 0) {
            //     // World is already frozen; allow reentrant call
            //     frozenWorlds.set(worldId, freezeCount + 1);
            //     try {
            //         return await originalMethod.apply(this, args);
            //     } finally {
            //         frozenWorlds.set(worldId, frozenWorlds.get(worldId)! - 1);
            //     }
            // }

            // // First-level freeze
            // console.log(`[TemporarilyFreezeWorld] searching world: `, worldId)
            // const world = await worldRepository.findOne({ where: { id: worldId } });
            // console.log(`[TemporarilyFreezeWorld] found world: `, world)
            // if (!world) throw new Error(`World with ID ${worldId} not found.`);
            // // if (world.frozen) throw new Error(`World with ID ${worldId} is already frozen. Operation cannot proceed.`); // TODO uncomment

            // // Temporarily freeze the world
            // world.frozen = true;
            // console.log(`[TemporarilyFreezeWorld] freezing method`)
            // await worldRepository.save(world);
            // console.log(`[TemporarilyFreezeWorld] froze worldId: ${world.id}`)
            // frozenWorlds.set(worldId, 1);

            // try {
            //     // Execute the original method
            //     console.log(`[TemporarilyFreezeWorld] applying method`)
            const result = await originalMethod.apply(this, args);
            //         console.log(`[TemporarilyFreezeWorld] applied method`)
            //         return result;
            //     } catch (error) {
            //         throw error;
            //     } finally {
            //         // Unfreeze the world
            //         frozenWorlds.delete(worldId);
            //         world.frozen = false;
            //         await worldRepository.save(world);
            //         console.log(`[TemporarilyFreezeWorld] unfroze worldId: ${world.id}`)
            //     }
        };
    };
}
