// This service creates a World, populates it with initial default content, resets it or deletes it.


import { World } from "../../entities/World";
import { ContentBase } from "../../entities/ContentBase";
import { AppDataSource } from "../../data-source"; // Import your configured data source
import { BlueprintPopulationService } from "./BlueprintPopulationService";
import { BlueprintKind } from "../../layer_1/types";

export class WorldService {

    private static _worldRepository = AppDataSource.getRepository(World);
    private static _contentRepository = AppDataSource.getRepository(ContentBase);



    /**
     * Creates a new world.
     * @param name Name of the world
     * @param description Description of the world
     * @returns Newly created world
     */
    public static async createWorld(name: string, description: string): Promise<World> {
        const newWorld = this._worldRepository.create({ name, description });
        return await this._worldRepository.save(newWorld);
    }



    /**
     * Populates a world with blueprints.
     * @param worldId ID of the world to populate
     * @param blueprintKinds List of blueprint kinds to populate the world with
     * @param reset Whether to drop all existing content before populating
     */
    public static async populateWorld(worldId: string, blueprintKinds: BlueprintKind[], reset = false): Promise<void> {
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
     * Drops all content from a world.
     * @param worldId ID of the world to clear
     */
    public static async dropWorldContents(world: World): Promise<void> {
        await this._contentRepository.delete({ world });
    }



    /**
     * Resets a world by dropping all content and repopulating with blueprints.
     * @param worldId ID of the world to reset
     * @param blueprintKinds List of blueprint kinds to populate the world with
     */
    public static async resetWorld(worldId: string, blueprintKinds: BlueprintKind[]): Promise<void> {
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
