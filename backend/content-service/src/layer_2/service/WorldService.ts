// This service creates a World, populates it with initial default content, resets it or deletes it.


import { World } from "../../entities/World";
import { ContentBase } from "../../entities/ContentBase";
import { WorldDataSource } from "../../data-source"; // Import your configured data source
import { BlueprintPopulationService } from "./BlueprintPopulationService";
import { ItemBlueprintKind } from "../../layer_1/types";
import { entityMap } from "../../entityMap";
import { PresetLoader } from "../../layer_1/PresetLoader";

export class WorldService {

    private static _worldRepository = WorldDataSource.getRepository(World);
    private static _contentRepository = WorldDataSource.getRepository(ContentBase);



    /**
     * Creates a new world.
     */
    public static async createWorld(name: string, description: string): Promise<World> {
        const newWorld = this._worldRepository.create({ name, description });
        return await this._worldRepository.save(newWorld);
    }



    public static async setWorldFrozen(worldId: string, frozen: boolean): Promise<void> {
        const worldRepository = WorldDataSource.getRepository(World);
        await worldRepository.update({ id: worldId }, { frozen });
    }


    /**
     * Populates a world with blueprints.
     */
    public static async populateWorld(worldId: string, blueprintKinds: ItemBlueprintKind[], reset = false): Promise<void> {
        const world = await this._worldRepository.findOne({ where: { id: worldId } });
        if (!world) {
            throw new Error(`World with ID ${worldId} not found`);
        }

        if (reset) {
            // Drop all content related to this world
            await this.dropWorldContents(world)
        }

        for (const kind of blueprintKinds) {
            const blueprints = BlueprintPopulationService.loadBlueprintJSON(kind);
            for (const blueprint of Object.values(blueprints)) {
                blueprint.world = world; // Link blueprint to the world
                await this._contentRepository.save(blueprint);
            }
        }
    }



    
    /**
     * Loads blueprints from a preset folder and upserts them into the database in batches.
     */
    public static async loadPresetIntoWorld(
        preset: string,
        worldId: string,
        batchSize: number = 50
    ): Promise<void> {
        // Load blueprints from the preset folder
        const allBlueprints = await PresetLoader.loadPreset(preset);

        for (const [targetEntity, blueprintMap] of Object.entries(allBlueprints)) {
            const blueprintRepository = this.getContentRepository(targetEntity);

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
    public static async dropWorldContents(worldId: string): Promise<void> {
        const worldRepository = WorldDataSource.getRepository(World);
        const world = await worldRepository.findOne({ where: { id: worldId } });
    
        if (!world) throw new Error(`World with ID ${worldId} not found.`);
    
        // Iterate over all entities in entityMap
        for (const [targetEntity, EntityClass] of Object.entries(entityMap)) {
            const repository = WorldDataSource.getRepository(EntityClass);
    
            // Delete all content related to the world
            await repository.delete({ world: { id: worldId } });
        }
    
        console.log(`All content for world ${worldId} has been deleted.`);
    }


    /**
     * Resets a world by dropping all content and repopulating with blueprints.
     */
    public static async resetWorld(worldId: string, blueprintKinds: ItemBlueprintKind[]): Promise<void> {
        const world = await this._worldRepository.findOne({ where: { id: worldId } });
        if (!world) {
            throw new Error(`World with ID ${worldId} not found`);
        }
        await this.dropWorldContents(world);
        await this.populateWorld(worldId, blueprintKinds);
    }



    /**
     * Retrieves a world and its content.
     * @param worldId ID of the world to retrieve
     */
    public static async getWorld(worldId: string): Promise<World | null> {
        return this._worldRepository.findOne({ where: { id: worldId } });
    }

}
