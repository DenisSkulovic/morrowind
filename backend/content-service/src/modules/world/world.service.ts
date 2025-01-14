// This service creates a World, populates it with initial default content, resets it or deletes it.

import { ContentEntityMapService } from "../../CONTENT_ENTITY_MAP";
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
import { SearchQuery } from "../../class/search/grpc/SearchQuery";
import { EntityEnum } from "../../common/enum/EntityEnum";

const pathToPresetsFolder = join(__dirname, "../../../world_presets")

export interface IWorldService {
    createWorld(name: string, description: string | undefined, user: User): Promise<World>;
    findWorld(worldId: string, userId: string, source: DataSourceEnum): Promise<World | null>;
    loadPresetIntoWorld(presetName: PresetEnum, worldId: string, userId: string, batchSize?: number, dropPreviousContent?: boolean): Promise<void>;
    dropWorldContents(worldId: string): Promise<void>;
    deleteWorld(worldId: string): Promise<void>;
    getWorld(worldId: string): Promise<World | null>;
    searchWorlds(search: SearchQuery): Promise<{ worlds: World[], totalResults: number, totalPages: number, currentPage: number }>;
    updateWorld(worldDTO: World): Promise<World>;
}

@Injectable()
export class WorldService implements IWorldService {
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

    private getRepository(source: DataSourceEnum): Repository<World> {
        return this.getDataSource(source).getRepository(World);
    }

    /**
     * Creates a new world.
     */
    public async createWorld(name: string, description: string | undefined, user: User): Promise<World> {
        const source = DataSourceEnum.DATA_SOURCE_WORLD // can create worlds only in WORLD database
        console.log(`[WorldService - createWorld] creating world`)
        const newWorld: World = this.getRepository(source).create({
            name,
            description,
            user
        });
        console.log(`[WorldService - createWorld] created world`)
        return await this.getRepository(source).save(newWorld);
    }

    public async findWorld(worldId: string, userId: string, source: DataSourceEnum): Promise<World | null> {
        const worldRepository = this.getRepository(source)
        console.log(`[WorldService - findWorld] finding world`)
        const worlds: World[] = await worldRepository.find({
            where: {
                id: worldId,
                user: { id: userId }
            }
        })
        const world: World | null = worlds[0] || null
        console.log(`[WorldService - findWorld] found world`, world)
        return world
    }

    public async updateWorld(worldDTO: World): Promise<World> {
        const source = DataSourceEnum.DATA_SOURCE_WORLD;
        const repository = this.getRepository(source);
        console.log(`[WorldService - updateWorld] finding world`)
        const world = await repository.findOne({ where: { id: worldDTO.id } });
        if (!world) {
            throw new Error(`World not found with id ${worldDTO.id}`);
        }
        console.log(`[WorldService - updateWorld] found world`)
        console.log(`[WorldService - updateWorld] updating world`)
        world.name = worldDTO.name;
        world.description = worldDTO.description;
        console.log(`[WorldService - updateWorld] saving world`)
        return await repository.save(world);
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
        console.log(`[WorldService - loadPresetIntoWorld] fetching world`)
        const world: World | null = await worldRepository.findOne({ where: { id: worldId } });
        if (!world) throw new Error(`World not found: ${worldId}`);
        console.log(`[WorldService - loadPresetIntoWorld] fetched world`)

        console.log(`[WorldService - loadPresetIntoWorld] fetching user`)
        const user = await this.userService.findUser(userId, source);
        if (!user) throw new Error(`User not found: ${userId}`);
        console.log(`[WorldService - loadPresetIntoWorld] fetched user`)

        if (dropPreviousContent) {
            console.log(`[WorldService - loadPresetIntoWorld] dropping previous content`)
            await this.dropWorldContents(worldId);
            console.log(`[WorldService - loadPresetIntoWorld] dropped previous content`)
        }

        // Load preset and process it
        console.log(`[WorldService - loadPresetIntoWorld] loading preset`)
        const preset: Preset = await this.presetService.loadPreset(presetName, pathToPresetsFolder);
        console.log(`[WorldService - loadPresetIntoWorld] loaded preset`)

        for (const [entityName, blueprintsMap] of Object.entries(preset)) {
            const repository: Repository<ContentBase> = this.contentService.getRepository(entityName, source);
            const blueprintsArr: ContentBase[] = Object.values(blueprintsMap);
            const totalBatches = Math.ceil(blueprintsArr.length / batchSize);

            for (let batchNum = 0; batchNum < totalBatches; batchNum++) {
                const start = batchNum * batchSize;
                const end = Math.min(start + batchSize, blueprintsArr.length);

                console.log(`[WorldService - loadPresetIntoWorld] processing batch ${batchNum + 1} of ${totalBatches} for entity ${entityName}`);

                const batch = blueprintsArr.slice(start, end).map((blueprint) => {
                    const entity = repository.create(blueprint);
                    entity.world = world;
                    entity.user = user;
                    entity.id = blueprint.blueprintId;
                    return entity;
                });

                await repository.save(batch);
                console.log(`[WorldService - loadPresetIntoWorld] saved batch ${batchNum + 1} of ${totalBatches} for entity ${entityName}`);
            }
        }
        console.log(`[WorldService - loadPresetIntoWorld] finished loading preset`)
    }

    /**
     * Drops all content from a world. Does not delete the world, only all ContentBase entities that are recorded in contentEntityMap.
     */
    @TemporarilyFreezeWorld(0)
    public async dropWorldContents(worldId: string): Promise<void> {
        const source = DataSourceEnum.DATA_SOURCE_WORLD
        console.log(`[WorldService - dropWorldContents] dropping contents`)
        for (const entityName of Object.values(EntityEnum)) {
            const repository = this.contentService.getRepository(entityName, source);
            await repository.delete({ world: { id: worldId } });
        }
        console.log(`[WorldService - dropWorldContents] dropped contents`)
    }

    /**
     * Drops all content from a world. Does not delete the world, only all ContentBase entities that are recorded in contentEntityMap.
     */
    @TemporarilyFreezeWorld(0)
    public async deleteWorld(worldId: string): Promise<void> {
        const source = DataSourceEnum.DATA_SOURCE_WORLD
        console.log(`[WorldService - deleteWorld] deleting world`)
        await this.getRepository(source).delete(worldId)
        console.log(`[WorldService - deleteWorld] deleted world`)
    }

    /**
     * Retrieves a world and its content.
     * @param worldId ID of the world to retrieve
     */
    public async getWorld(worldId: string): Promise<World | null> {
        const source = DataSourceEnum.DATA_SOURCE_WORLD
        console.log(`[WorldService - getWorld] getting world`)
        const world = await this.getRepository(source).findOne({ where: { id: worldId }, relations: ['user'] });
        console.log(`[WorldService - getWorld] got world`)
        return world
    }

    public async searchWorlds(search: SearchQuery): Promise<{ worlds: World[], totalResults: number, totalPages: number, currentPage: number }> {
        const source = DataSourceEnum.DATA_SOURCE_WORLD;
        const where: FindOptionsWhere<World> | FindOptionsWhere<World>[] = {};
        const findOptions: FindManyOptions<World> = {
            where,
            relations: ['user'],
            skip: (search.page - 1) * search.pageSize,
            take: search.pageSize
        };

        if (search.filters) {
            search.filters.forEach(filter => {
                if (filter.field === 'user.id' && filter.operator === 'eq') {
                    where.user = { id: filter.value as string };
                }
            });
        }

        if (search.sortBy) {
            findOptions.order = {
                [search.sortBy.field]: search.sortBy.direction
            };
        }

        const [worlds, total] = await this.getRepository(source).findAndCount(findOptions);
        const totalPages = Math.ceil(total / search.pageSize);

        return {
            worlds,
            totalResults: total,
            totalPages,
            currentPage: search.page
        };
    }
}
