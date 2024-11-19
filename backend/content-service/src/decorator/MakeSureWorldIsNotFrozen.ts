import { World } from "../entities/World";
import { WorldDataSource } from "../data-source";
import { DataSourceEnum } from "../enum/DataSourceEnum";

export function MakeSureWorldIsNotFrozen(
    worldIdParam: string,
    sourceParam: string
) {
    return function (
        target: any,
        propertyName: string,
        descriptor: PropertyDescriptor,
    ) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (...args: any[]) {
            const source = args.find((arg) => arg[sourceParam] !== undefined)?.[sourceParam];
            if (source === DataSourceEnum.WORLD) { // only ensure freezing for the WORLD data source as it is the only need atm; may generalize later
                // Extract the worldId from the method arguments
                const worldId = args.find((arg) => arg[worldIdParam] !== undefined)?.[worldIdParam];

                if (!worldId) throw new Error("World ID not found in method arguments.");

                // Check the frozen status of the world
                const worldRepository = WorldDataSource.getRepository(World)
                const world = await worldRepository.findOne(worldId);

                if (!world) throw new Error(`World with ID ${worldId} not found.`);
                if (world.frozen) throw new Error(`World with ID ${worldId} is frozen. No modifications are allowed.`);
            }

            // Proceed with the original method
            return originalMethod.apply(this, args);
        };
    };
}