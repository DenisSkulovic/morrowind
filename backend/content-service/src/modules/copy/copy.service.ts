import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, EntityTarget, FindOptionsWhere, Repository } from 'typeorm';
import { ContentBase } from '../../ContentBase';
import { DataSourceEnum } from '../../common/enum/DataSourceEnum';
import { TemporarilyFreezeWorld } from '../../decorator/TemporarilyFreezeWorld';
import { Campaign } from '../campaign/entities/Campaign';
import { ContentEntityMapService } from '../../CONTENT_ENTITY_MAP';
import { EntityEnum } from '../../enum/EntityEnum';
import { EntityConstructor } from '../../types';
import { sanitizeEntityName } from '../../util/sanitizeEntityName';

export interface ICopyService {
}

@Injectable()
export class CopyService<T extends ContentBase> implements ICopyService {
    constructor(
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_WORLD) private readonly worldDataSource: DataSource,
        @InjectDataSource(DataSourceEnum.DATA_SOURCE_CAMPAIGN) private readonly campaignDataSource: DataSource,
    ) { }

    private getDataSource(source: DataSourceEnum): DataSource {
        return source === DataSourceEnum.DATA_SOURCE_WORLD ? this.worldDataSource : this.campaignDataSource;
    }

    getRepository(entityName: string, source: DataSourceEnum): Repository<T> {
        const entityNameEnum: EntityEnum = sanitizeEntityName(entityName)
        const entityConstructor: EntityConstructor<T> = ContentEntityMapService.getEntityConstructor<T>(entityNameEnum)
        if (!entityConstructor) {
            throw new Error(`Entity "${entityName}" not found in CONTENT_ENTITY_MAP.`);
        }
        return this.getDataSource(source).getRepository(entityConstructor);
    }


    /**
     * Copies all content related to a specific world to a campaign.
     */
    @TemporarilyFreezeWorld(0)
    async copyWorldToCampaign(worldId: string, campaignId: string): Promise<void> {
        const idMapping = new Map<string, string>(); // Track original-to-new ID mapping

        // Begin transaction for safety
        await this.campaignDataSource.transaction(async (manager) => {
            for (const entityName of Object.values(EntityEnum)) {
                const entityNameEnum: EntityEnum = sanitizeEntityName(entityName)
                const entityConstructor: EntityConstructor<ContentBase> = ContentEntityMapService.getEntityConstructor<ContentBase>(entityNameEnum)
                const rootEntityConstructor: EntityConstructor<ContentBase> | null = ContentEntityMapService.getRootEntityConstructor(entityNameEnum)
                const isParentEntity: boolean = !rootEntityConstructor
                if (isParentEntity) continue;

                // Process one entity type at a time
                await this.copyEntityType(
                    entityConstructor,
                    worldId,
                    campaignId,
                    manager.getRepository(entityConstructor),
                    idMapping
                );
            }
        });

        console.log(`Successfully copied all content from world ${worldId} to campaign ${campaignId}.`);
    }

    /**
     * Copies all entities of a specific type related to the world.
     */
    private async copyEntityType<T extends ContentBase>(
        EntityClass: EntityTarget<T>,
        worldId: string,
        campaignId: string,
        targetRepository: Repository<T>,
        idMapping: Map<string, string>
    ): Promise<void> {
        const sourceRepository: Repository<T> = this.worldDataSource.getRepository(EntityClass);

        // Batch processing for large datasets
        const batchSize = 100;
        let offset = 0;
        let batch: T[];

        do {
            // Fetch a batch of entities from the source database
            batch = await sourceRepository.find({
                where: { world: { id: worldId } } as FindOptionsWhere<T>,
                relations: sourceRepository.metadata.relations.map((r) => r.propertyName),
                skip: offset,
                take: batchSize,
            });

            for (const entity of batch) {
                await this.copyEntity(entity, sourceRepository, targetRepository, idMapping, campaignId);
            }

            offset += batchSize;
        } while (batch.length === batchSize);
    }

    /**
     * Copies a single entity and its relations to the campaign database.
     */
    private async copyEntity<T extends ContentBase>(
        entity: T,
        sourceRepository: Repository<T>,
        targetRepository: Repository<T>,
        idMapping: Map<string, string>,
        campaignId: string
    ): Promise<void> {
        // Check if this entity was already copied
        if (!entity.id) throw new Error(`No id on entity when copying from db to db; how is this even possible? Is this id not the primary column?... Stringified entity: ${JSON.stringify(entity)}`)
        if (idMapping.has(entity.id)) return;

        // Create a clone of the entity
        const clonedEntity = targetRepository.create({ ...entity });
        const originalId = entity.id;

        // Assign the campaign reference
        clonedEntity.campaign = { id: campaignId } as Campaign;

        // Remove the ID to allow TypeORM to generate a new one
        delete (clonedEntity as any).id;

        // Handle relations
        for (const relation of sourceRepository.metadata.relations) {
            const relationValue = (entity as any)[relation.propertyName];

            if (Array.isArray(relationValue)) {
                // Handle OneToMany or ManyToMany relations
                const relatedEntities = [];
                for (const relatedEntity of relationValue) {
                    const copied = await this.copyEntity(
                        relatedEntity,
                        sourceRepository.manager.getRepository(relationValue.constructor),
                        targetRepository.manager.getRepository(relationValue.constructor),
                        idMapping,
                        campaignId
                    );
                    relatedEntities.push(copied);
                }
                (clonedEntity as any)[relation.propertyName] = relatedEntities;
            } else if (relationValue) {
                // Handle ManyToOne or OneToOne relations
                (clonedEntity as any)[relation.propertyName] = await this.copyEntity(
                    relationValue,
                    sourceRepository.manager.getRepository(relationValue.constructor),
                    targetRepository.manager.getRepository(relationValue.constructor),
                    idMapping,
                    campaignId
                );
            }
        }

        // Save the cloned entity and update the ID mapping
        const savedEntity = await targetRepository.save(clonedEntity);
        if (!savedEntity.id) throw new Error(`savedEntity.id cannot be undefined`)
        idMapping.set(originalId, savedEntity.id);
    }
}
