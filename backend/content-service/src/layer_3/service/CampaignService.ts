import { WorldDataSource, CampaignDataSource } from "../../data-source";
import { TemporarilyFreezeWorld } from "../../decorator/TemporarilyFreezeWorld";
import { getMetadataArgsStorage } from "typeorm";
import { EntityTarget } from "typeorm/common/EntityTarget";
import { ContentBase } from "../../ContentBase";
import { contentEntityMap } from "../../contentEntityMap";
import { Repository } from "typeorm";
import { isParentEntity } from "../../contentEntityMap";

export class CampaignService {
    /**
     * Copies all world content into the campaign database for the given campaign ID.
     * Processes entities entity-by-entity in batches.
     */
    @TemporarilyFreezeWorld("worldId")
    public async loadWorldContentIntoCampaign(
        worldId: string,
        campaignId: string,
        batchSize: number = 100
    ): Promise<void> {
        // Iterate over all parent entities
        for (const [entityName, EntityClass] of Object.entries(contentEntityMap)) {
            if (!isParentEntity(EntityClass)) continue; // Skip child entities

            await this._copyEntityContentToCampaign(EntityClass, worldId, campaignId, batchSize);
        }

        console.log(`All content for world ${worldId} has been copied to campaign ${campaignId}.`);
    }

    /**
     * Deletes all campaign data related to the given campaign ID.
     */
    public static async deleteCampaign(campaignId: string): Promise<void> {
        for (const EntityClass of Object.values(contentEntityMap)) {
            if (!isParentEntity(EntityClass)) continue; // Skip child entities

            const campaignRepository = CampaignDataSource.getRepository(EntityClass);
            await campaignRepository.delete({ campaignId });
        }

        console.log(`All content for campaign ${campaignId} has been deleted.`);
    }

    /**
     * Copies content for a specific entity from the world database to the campaign database in batches.
     */
    private async _copyEntityContentToCampaign(
        EntityClass: EntityTarget<ContentBase>,
        worldId: string,
        campaignId: string,
        batchSize: number
    ): Promise<void> {
        const worldRepository: Repository<ContentBase> = WorldDataSource.getRepository(EntityClass);
        const campaignRepository: Repository<ContentBase> = CampaignDataSource.getRepository(EntityClass);

        let offset = 0;
        let batch: ContentBase[];

        do {
            // Fetch a batch of content for this entity
            batch = await worldRepository.find({
                where: { world: { id: worldId } },
                skip: offset,
                take: batchSize,
            });

            if (batch.length === 0) break; // No more content to copy

            // Clone content and prepare for insertion into the campaign database
            const campaignContent = batch.map((content) => {
                const clonedContent = campaignRepository.create({ ...content });
                clonedContent.campaignId = campaignId;
                delete clonedContent.id; // Avoid ID conflicts
                return clonedContent;
            });

            // Save the batch into the campaign database
            await campaignRepository.save(campaignContent);

            // Update offset for the next batch
            offset += batchSize;
        } while (batch.length === batchSize);
    }

}
