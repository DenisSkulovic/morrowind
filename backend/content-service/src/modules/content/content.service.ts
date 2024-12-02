import { Inject, Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, EntityTarget, FindOptionsWhere, Repository } from 'typeorm';
import { CONTENT_ENTITY_MAP, isParentEntity } from '../../CONTENT_ENTITY_MAP';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { ContentBase } from '../../ContentBase';
import { MakeSureWorldIsNotFrozen } from '../../decorator/MakeSureWorldIsNotFrozen';
import { WorldService } from '../world/world.service';
import { TemporarilyFreezeWorld } from '../../decorator/TemporarilyFreezeWorld';
import { CampaignService } from '../campaign/campaign.service';

export interface IContentService {
    create(entityName: string, data: any, source: DataSourceEnum): Promise<ContentBase>
}

@Injectable()
export class ContentService<T extends ContentBase> implements IContentService {
    constructor(
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_WORLD) private readonly worldDataSource: DataSource,
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_CAMPAIGN) private readonly campaignDataSource: DataSource,
        @Inject('IWorldService') private worldService: WorldService,
        @Inject('ICampaignService') private campaignService: CampaignService,
    ) { }

    private getDataSource(source: DataSourceEnum): DataSource {
        return source === DataSourceEnum.DATA_SOURCE_WORLD ? this.worldDataSource : this.campaignDataSource;
    }

    getRepository(entityName: string, source: DataSourceEnum): Repository<T> {
        const entity: EntityTarget<T> = CONTENT_ENTITY_MAP[entityName] as EntityTarget<T>;
        if (!entity) {
            throw new Error(`Entity "${entityName}" not found in CONTENT_ENTITY_MAP.`);
        }
        return this.getDataSource(source).getRepository(entity);
    }

    async create(entityName: string, data: any, source: DataSourceEnum): Promise<any> {
        const repository = this.getRepository(entityName, source);
        const entity = repository.create(data);
        return await repository.save(entity);
    }




    /**
     * Upserts a single blueprint into the database.
     */
    @MakeSureWorldIsNotFrozen("worldId", "source")
    public async upsertBlueprint(
        worldId: string,
        source: DataSourceEnum,
        blueprintData: Partial<T>
    ): Promise<T> {
        // Validate input data
        if (!blueprintData.id) throw new Error("Blueprint must have an ID.");
        if (!blueprintData.targetEntity) throw new Error("'targetEntity' was not present on the imported blueprint.");

        // Fetch the world and validate existence
        const world = await this.worldService.getWorld(worldId);
        if (!world) throw new Error(`World with ID ${worldId} not found.`);

        // Get the appropriate repository for the target entity
        const blueprintRepository: Repository<T> = this.getRepository(blueprintData.targetEntity, source);

        // Check for an existing blueprint in the repository
        const existingBlueprint = await blueprintRepository.findOne({ where: { id: blueprintData.id } as FindOptionsWhere<T> });
        const existingBlueprintString = JSON.stringify(existingBlueprint) || "";
        const isPreexisting = !!existingBlueprint;

        // Create or update the blueprint entity
        const blueprintToSave = isPreexisting
            ? Object.assign(existingBlueprint!, blueprintData) // Update existing blueprint
            : blueprintRepository.create(blueprintData as T); // Create a new blueprint

        // Check if the blueprint has changed
        const isChanged = isPreexisting && JSON.stringify(blueprintToSave) !== existingBlueprintString;

        // If nothing has changed and the blueprint already exists, return it as-is
        if (isPreexisting && !isChanged) return blueprintToSave;

        // Save the new or updated blueprint to the database
        return await blueprintRepository.save(blueprintToSave);
    }



    /**
     * Deletes a blueprint from the database.
     */
    @MakeSureWorldIsNotFrozen("worldId", "source")
    public async deleteBlueprint(
        blueprintId: string,
        source: DataSourceEnum,
        targetEntity: string
    ): Promise<void> {
        const blueprintRepository: Repository<T> = this.getRepository(targetEntity, source);
        const blueprint = await blueprintRepository.findOne({ where: { id: blueprintId } as FindOptionsWhere<T> });
        if (!blueprint) throw new Error(`Blueprint with ID ${blueprintId} not found`);
        await blueprintRepository.remove(blueprint);
    }



    /**
     * Searches blueprints in the database with pagination.
     */
    @MakeSureWorldIsNotFrozen("worldId", "source")
    public async searchBlueprints(
        targetEntity: string,
        source: DataSourceEnum,
        worldId: string,
        searchCriteria: Partial<ContentBase>,
        page: number,
        limit: number
    ): Promise<ContentBase[]> {
        const blueprintRepository: Repository<T> = this.getRepository(targetEntity, source);
        const queryBuilder = blueprintRepository.createQueryBuilder("content")
            .where("content.worldId = :worldId", { worldId });

        for (const [key, value] of Object.entries(searchCriteria)) {
            queryBuilder.andWhere(`content.${key} LIKE :${key}`, { [key]: `%${value}%` });
        }

        return queryBuilder
            .skip((page - 1) * limit)
            .take(limit)
            .getMany();
    }

}
