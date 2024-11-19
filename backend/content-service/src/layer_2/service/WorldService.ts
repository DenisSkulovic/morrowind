// This service creates a World, populates it with initial default content, resets it or deletes it.


import { contentEntityMap as cEM, isParentEntity } from "../../contentEntityMap";
import { WorldDataSource } from "../../data-source"; // Import your configured data source
import { PresetLoader } from "../../layer_1/PresetLoader";
import { ContentServiceBase, ContentServiceSettings } from "../../layer_2_and_3/service/ContentServiceBase";
import { DataSourceEnum } from "../../enum/DataSourceEnum";
import { World } from "../../entities/World";
import { PresetEnum } from "../../enum/PresetEnum";
import { ContentBase } from "../../ContentBase";
import { TemporarilyFreezeWorld } from "../../decorator/TemporarilyFreezeWorld";

export class WorldService extends ContentServiceBase {

    constructor(settings: ContentServiceSettings) {
        super(settings)
    }



    /**
     * Creates a new world.
     */
    public async createWorld(name: string, description: string): Promise<World> {
        const worldRepository = WorldDataSource.getRepository(World)
        const newWorld = worldRepository.create({ name, description });
        return await worldRepository.save(newWorld);
    }



    /**
     * Loads blueprints from a preset folder and upserts them into the database in batches.
     */
    @TemporarilyFreezeWorld("worldId")
    public async loadPresetIntoWorld(
        preset: PresetEnum,
        worldId: string,
        batchSize: number = 50,
        dropPreviousContent = true
    ): Promise<void> {
        // remove any previous content
        if (dropPreviousContent) await this.dropWorldContents(worldId)

        // Load blueprints from the preset folder
        const allBlueprints: Record<string, Record<string, ContentBase>> = await PresetLoader.loadPreset(preset);

        for (const [targetEntity, blueprintMap] of Object.entries(allBlueprints)) {
            const blueprintRepository = this.getContentRepository(targetEntity, DataSourceEnum.WORLD);

            // Process blueprints in batches
            const blueprints = Object.values(blueprintMap);
            for (let i = 0; i < blueprints.length; i += batchSize) {
                const batch = blueprints.slice(i, i + batchSize);

                // Upsert each batch
                const entitiesToSave = batch.map((blueprint) => {
                    blueprint.world = { id: worldId } as World; // Attach the world context
                    return blueprintRepository.create(blueprint);
                });

                // Save the batch to the database
                await blueprintRepository.save(entitiesToSave);
            }
        }
    }


    /**
     * Drops all content from a world.
     */
    @TemporarilyFreezeWorld("worldId")
    public async dropWorldContents(worldId: string): Promise<void> {

        await WorldDataSource.transaction(async (transactionManager) => {
            const worldRepository = transactionManager.getRepository(cEM.World);
            const world = await worldRepository.findOne({ where: { id: worldId } });

            if (!world) throw new Error(`World with ID ${worldId} not found.`);

            // Iterate over all entities in entityMap
            for (const [targetEntity, EntityClass] of Object.entries(cEM)) {
                if (!isParentEntity(EntityClass)) continue; // Skip ChildEntity

                const repository = transactionManager.getRepository(EntityClass);

                // Delete all content related to the world
                await repository.delete({ world: { id: worldId } });
            }

            console.log(`All content for world ${worldId} has been deleted.`);
        });
    }

    /**
     * Retrieves a world and its content.
     * @param worldId ID of the world to retrieve
     */
    public static async getWorld(worldId: string): Promise<World | null> {
        const worldRepository = WorldDataSource.getRepository(World);
        return worldRepository.findOne({ where: { id: worldId } });
    }

}
