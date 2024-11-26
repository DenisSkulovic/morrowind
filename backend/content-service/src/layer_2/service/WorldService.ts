// This service creates a World, populates it with initial default content, resets it or deletes it.


import { contentEntityMap as cEM, isParentEntity } from "../../contentEntityMap";
import { sourcesMap, WorldDataSource } from "../../data-source"; // Import your configured data source
import { Preset, PresetLoader } from "../../layer_1/PresetLoader";
import { RepositoryServiceBase, RepositoryServiceSettings } from "../../layer_2_and_3/service/RepositoryServiceBase";
import { DataSourceEnum } from "../../enum/DataSourceEnum";
import { World } from "../../entities/World";
import { ContentBase } from "../../ContentBase";
import { TemporarilyFreezeWorld } from "../../decorator/TemporarilyFreezeWorld";
import { DeleteResult, FindManyOptions, FindOptionsWhere, Repository } from "typeorm";
import { User } from "../../entities/User";
import { UserService } from "../../layer_2_and_3/service/UserService";
import { PresetEnum } from "../../proto/world";

const pathToPresetsFolder = "../../world_presets"

export class WorldService extends RepositoryServiceBase {
    constructor(settings: RepositoryServiceSettings) {
        super(settings)
    }


    /**
     * Creates a new world.
     */
    public async createWorld(name: string, description: string | undefined, user: User): Promise<World> {
        const worldRepository: Repository<World> = WorldDataSource.getRepository(World)
        const newWorld: World = worldRepository.create({
            name,
            description,
            user
        });
        return await worldRepository.save(newWorld);
    }



    /**
     * Loads blueprints from a preset folder and upserts them into the database in batches.
     */
    @TemporarilyFreezeWorld(1)
    public async loadPresetIntoWorld(
        presetName: PresetEnum,
        worldId: string,
        userId: string,
        batchSize: number = 50,
        dropPreviousContent = true
    ): Promise<void> {
        console.log(`[WorldService - loadPresetIntoWorld] presetName, entry; worldId, userId, batchSize, dropPreviousContent: `, presetName, worldId, userId, batchSize, dropPreviousContent)

        const userService: UserService = new UserService({ sourcesMap })
        const [world, user] = await Promise.all([
            this.getWorld(worldId),
            userService.findUser(userId, DataSourceEnum.WORLD)
        ])
        if (!world) throw new Error(`could not find world for id: "${worldId}"`)
        if (!user) throw new Error(`failed to find user for id: "${userId}"`)
        console.log(`[WorldService - loadPresetIntoWorld] after extract World and User: `, world, user)

        // remove any previous content
        console.log(`[WorldService - loadPresetIntoWorld] before drop world contents`)
        if (dropPreviousContent) await this.dropWorldContents(world.id)
        console.log(`[WorldService - loadPresetIntoWorld] after drop world contents`)

        // Load blueprints from the preset folder
        console.log(`[WorldService - loadPresetIntoWorld] before load preset`)
        const preset: Preset = await PresetLoader.loadPreset(presetName, pathToPresetsFolder);
        console.log(`[WorldService - loadPresetIntoWorld] after load preset; Object.keys(preset).length: `, Object.keys(preset).length)

        for (const [targetEntity, blueprintMap] of Object.entries(preset)) {
            console.log(`[WorldService - loadPresetIntoWorld] -${targetEntity}- processing start`)
            const blueprintRepository: Repository<ContentBase> = this.getRepository(targetEntity, DataSourceEnum.WORLD);

            // Process blueprints in batches
            const blueprints = Object.values(blueprintMap);
            for (let i = 0; i < blueprints.length; i += batchSize) {
                const batch = blueprints.slice(i, i + batchSize);
                console.log(`[WorldService - loadPresetIntoWorld] -${targetEntity}- received a batch of ${batch.length}`)

                // Upsert each batch
                const entitiesToSave = batch.map((blueprint) => {
                    console.log(`[WorldService - loadPresetIntoWorld] -${targetEntity}- creating blueprint for id: ${blueprint.blueprint_id}`)
                    blueprint.world = world;
                    blueprint.user = user;
                    return blueprintRepository.create(blueprint);
                });
                
                // Save the batch to the database
                console.log(`[WorldService - loadPresetIntoWorld] -${targetEntity}- saving ${entitiesToSave.length} entities`)
                await blueprintRepository.save(entitiesToSave);
                console.log(`[WorldService - loadPresetIntoWorld] -${targetEntity}- saved ${entitiesToSave.length} entities`)

            }
        }
    }


    /**
     * Drops all content from a world. Does not delete the world, only all ContentBase entities that are recorded in contentEntityMap.
     */
    @TemporarilyFreezeWorld(0)
    public async dropWorldContents(worldId: string): Promise<void> {

        await WorldDataSource.transaction(async (transactionManager) => {
            const worldRepository: Repository<World> = transactionManager.getRepository(World);
            const world: World | null = await worldRepository.findOne({ where: { id: worldId } });

            if (!world) throw new Error(`World with ID ${worldId} not found.`);

            // Iterate over all entities in entityMap
            for (const [targetEntity, EntityClass] of Object.entries(cEM)) {
                if (!isParentEntity(EntityClass)) continue; // Skip ChildEntity, meaning only process entities that create tables

                const repository: Repository<ContentBase> = transactionManager.getRepository(EntityClass);

                // Delete all entries related to the world
                await repository.delete({ world });
            }

            console.log(`All content for world ${worldId} has been deleted.`);
        });
    }
    /**
     * Drops all content from a world. Does not delete the world, only all ContentBase entities that are recorded in contentEntityMap.
     */
    @TemporarilyFreezeWorld(0)
    public async deleteWorld(worldId: string): Promise<void> {
        const worldRepository: Repository<World> = WorldDataSource.getRepository(World);
        await worldRepository.delete(worldId)
    }

    /**
     * Retrieves a world and its content.
     * @param worldId ID of the world to retrieve
     */
    public async getWorld(worldId: string): Promise<World | null> {
        const worldRepository = WorldDataSource.getRepository(World);
        return worldRepository.findOne({ where: { id: worldId } });
    }

    public async searchWorlds(search: { userId?: string }): Promise<World[]> {
        const worldRepository = WorldDataSource.getRepository(World);
        const where: FindOptionsWhere<World> | FindOptionsWhere<World>[] = {}
        const findOptions: FindManyOptions<World> = { where }
        if (search.userId) where.user = { id: search.userId }
        return await worldRepository.find(findOptions)
    }

}
