// This service creates a World, populates it with initial default content, resets it or deletes it.


import { CONTENT_ENTITY_MAP } from "../../CONTENT_ENTITY_MAP";
import { World } from "./entities/World";
import { TemporarilyFreezeWorld } from "../../decorator/TemporarilyFreezeWorld";
import { DataSource, FindManyOptions, FindOptionsWhere, Repository } from "typeorm";
import { User } from "../user/entities/User";
import { PresetEnum } from "../../common/enum/entityEnums";
import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource } from "@nestjs/typeorm";
import { ContentService } from "../content/content.service";
import { DataSourceEnum } from "../../common/enum/DataSourceEnum";
import { UserService } from "../user/user.service";
import { ContentBase } from "../../ContentBase";
import { Preset, PresetService } from "../preset/preset.service";
import { join } from "path";


const pathToPresetsFolder = join(__dirname, "../../../world_presets")

export interface IWorldService {

}

@Injectable()
export class WorldService {
    constructor(
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_WORLD) private readonly worldDataSource: DataSource,
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_CAMPAIGN) private readonly campaignDataSource: DataSource,
        @Inject('IContentService') private readonly contentService: ContentService<ContentBase>,
        @Inject('IUserService') private readonly userService: UserService,
        @Inject('IPresetService') private readonly presetService: PresetService,
    ) { }

    private getDataSource(source: DataSourceEnum): DataSource {
        return source === DataSourceEnum.DATA_SOURCE_WORLD ? this.worldDataSource : this.campaignDataSource;
    }

    getRepository(source: DataSourceEnum): Repository<any> { return this.getDataSource(source).getRepository(World) }


    /**
     * Creates a new world.
     */
    public async createWorld(name: string, description: string | undefined, user: User): Promise<World> {
        const source = DataSourceEnum.DATA_SOURCE_WORLD // can create worlds only in WORLD database
        const newWorld: World = this.getRepository(source).create({
            name,
            description,
            user
        });
        return await this.getRepository(source).save(newWorld);
    }

    public async findWorld(worldId: string, userId: string, source: DataSourceEnum): Promise<World | null> {
        const worldRepository = this.getRepository(source)
        const worlds: World[] = await worldRepository.find({
            where: {
                id: worldId,
                user: { id: userId }
            }
        })
        const world: World | null = worlds[0] || null
        return world
    }



    /**
     * Loads blueprints from a preset folder and upserts them into the database in batches.
     */
    @TemporarilyFreezeWorld(1)
    public async loadPresetIntoWorld(
        presetName: PresetEnum,
        worldId: string,
        userId: string,
        batchSize = 50,
        dropPreviousContent = true,
    ): Promise<void> {
        // Get repositories dynamically
        const source = DataSourceEnum.DATA_SOURCE_WORLD
        const worldRepository = this.getRepository(source);

        // Fetch world and user
        const world: World = await worldRepository.findOne({ where: { id: worldId } });
        if (!world) throw new Error(`World not found: ${worldId}`);

        const user = await this.userService.findUser(userId, source);
        if (!user) throw new Error(`User not found: ${userId}`);

        if (dropPreviousContent) {
            await this.dropWorldContents(worldId);
        }

        // Load preset and process it
        const preset: Preset = await this.presetService.loadPreset(presetName, pathToPresetsFolder);

        for (const [entityName, blueprintsMap] of Object.entries(preset)) {
            const repository: Repository<ContentBase> = this.contentService.getRepository(entityName, source);
            const blueprintsArr: ContentBase[] = Object.values(blueprintsMap)

            for (let i = 0; i < blueprintsArr.length; i += batchSize) {
                const batch = blueprintsArr.slice(i, i + batchSize).map((blueprint) => {
                    const entity = repository.create(blueprint);
                    entity.world = world;
                    entity.user = user;
                    entity.id = blueprint.blueprintId;
                    return entity;
                });
                await repository.save(batch);
            }
        }
    }


    /**
     * Drops all content from a world. Does not delete the world, only all ContentBase entities that are recorded in contentEntityMap.
     */
    @TemporarilyFreezeWorld(0)
    public async dropWorldContents(worldId: string): Promise<void> {
        const source = DataSourceEnum.DATA_SOURCE_WORLD
        for (const entityName in CONTENT_ENTITY_MAP) {
            const repository = this.contentService.getRepository(entityName, source);
            await repository.delete({ world: { id: worldId } });
        }
    }
    /**
     * Drops all content from a world. Does not delete the world, only all ContentBase entities that are recorded in contentEntityMap.
     */
    @TemporarilyFreezeWorld(0)
    public async deleteWorld(worldId: string): Promise<void> {
        const source = DataSourceEnum.DATA_SOURCE_WORLD
        await this.getRepository(source).delete(worldId)
    }

    /**
     * Retrieves a world and its content.
     * @param worldId ID of the world to retrieve
     */
    public async getWorld(worldId: string): Promise<World | null> {
        const source = DataSourceEnum.DATA_SOURCE_WORLD
        return this.getRepository(source).findOne({ where: { id: worldId }, relations: ['user'] });
    }

    public async searchWorlds(search: { userId?: string }): Promise<World[]> {
        const source = DataSourceEnum.DATA_SOURCE_WORLD
        const where: FindOptionsWhere<World> | FindOptionsWhere<World>[] = {}
        const findOptions: FindManyOptions<World> = { where }
        if (search.userId) where.user = { id: search.userId }
        return await this.getRepository(source).find(findOptions)
    }

}
