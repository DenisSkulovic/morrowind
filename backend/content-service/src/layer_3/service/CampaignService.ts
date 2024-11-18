import { WorldDataSource, CampaignDataSource } from "../../data-source";
import { ContentBase } from "../../entities/ContentBase";
import { Repository } from "typeorm";
import { WorldService } from "../../layer_2/service/WorldService";

export class CampaignService {
    private static worldRepository: Repository<ContentBase> = WorldDataSource.getRepository(ContentBase);
    private static campaignRepository: Repository<ContentBase> = CampaignDataSource.getRepository(ContentBase);

    // TODO this needs to be delegated to a worker (RabbitMQ, Bull.js (Redis) and related)
    /**
     * Copies all world content into the campaign database for the given campaign ID.
     */
    public static async loadWorldContentIntoCampaign(
        worldId: string,
        campaignId: string,
        batchSize: number = 100
    ): Promise<void> {
        const worldRepository = WorldDataSource.getRepository(ContentBase);
        const campaignRepository = CampaignDataSource.getRepository(ContentBase);

        // Mark the world as frozen
        await WorldService.setWorldFrozen(worldId, true);

        try {
            let offset = 0;
            let batch;

            do {
                // Fetch a batch of world content
                batch = await worldRepository.find({
                    where: { world: { id: worldId } },
                    skip: offset,
                    take: batchSize,
                });

                // Map world content to campaign content
                const campaignContent = batch.map((content) => {
                    const clonedContent = campaignRepository.create({ ...content });
                    clonedContent.campaignId = campaignId;
                    delete clonedContent.id; // Avoid ID conflicts
                    return clonedContent;
                });

                // Save the batch into the campaign database
                await campaignRepository.save(campaignContent);

                // Update the offset for the next batch
                offset += batchSize;
            } while (batch.length === batchSize); // Stop when the last batch is smaller than batchSize
        } catch (error) {
            throw new Error(`Failed to load world content into campaign: ${error.message}`);
        } finally {
            // Unfreeze the world regardless of success or failure
            await WorldService.setWorldFrozen(worldId, false);
        }
    }


    /**
     * Deletes all campaign data related to the given campaign ID.
     */
    public static async deleteCampaign(campaignId: string): Promise<void> {
        // Delete all content related to the campaign ID
        await this.campaignRepository.delete({ campaignId });
    }
}
