import { Repository } from "typeorm";
import { World } from "../../entities/World";
import { ContentBase } from "../../entities/ContentBase";
import { WorldDataSource } from "../../data-source"; // Import your configured data source
import { EntityConstructor, entityMap } from "../../entityMap";

export class ItemBlueprintService {

    public static getContentRepository(targetEntity: string) {
        const entity: EntityConstructor<ContentBase> = entityMap[targetEntity]
        const blueprintRepository = WorldDataSource.getRepository(entity);
        return blueprintRepository
    }


    public static async upsertBlueprint(
        worldId: string,
        blueprintData: Partial<ContentBase>
    ): Promise<ContentBase> {
        // Validate input data
        if (!blueprintData.id) throw new Error("Blueprint must have an ID.");
        if (!blueprintData.targetEntity) throw new Error("'targetEntity' was not present on the imported blueprint.");
    
        // Fetch the world and validate existence
        const worldRepository = WorldDataSource.getRepository(World);
        const world = await worldRepository.findOne({ where: { id: worldId } });
        if (!world) throw new Error(`World with ID ${worldId} not found.`);
    
        // Get the appropriate repository for the target entity
        const blueprintRepository: Repository<ContentBase> = this.getContentRepository(blueprintData.targetEntity);
    
        // Check for an existing blueprint in the repository
        const existingBlueprint = await blueprintRepository.findOne({ where: { id: blueprintData.id } });
        const existingBlueprintString = JSON.stringify(existingBlueprint) || ""
        const isPreexisting = !!existingBlueprint;
    
        // Create or update the blueprint entity
        const blueprintToSave = isPreexisting
            ? Object.assign(existingBlueprint!, blueprintData) // Update existing blueprint
            : blueprintRepository.create(blueprintData); // Create a new blueprint
    
        // Check if the blueprint has changed
        const isChanged = isPreexisting && JSON.stringify(blueprintToSave) !== existingBlueprintString
    
        // If nothing has changed and the blueprint already exists, return it as-is
        if (isPreexisting && !isChanged) return blueprintToSave;
    
        // Save the new or updated blueprint to the database
        return await blueprintRepository.save(blueprintToSave);
    }



    public static async deleteBlueprint(
        blueprintId: string,
        targetEntity: string
    ): Promise<void> {
        const blueprintRepository: Repository<ContentBase> = this.getContentRepository(targetEntity)
        const blueprint = await blueprintRepository.findOne({ where: { id: blueprintId } });
        if (!blueprint) {
            throw new Error(`Blueprint with ID ${blueprintId} not found`);
        }

        await blueprintRepository.remove(blueprint);
    }


    // TODO "searchBlueprints" needs reshaping, this is just stuff from the servant
    public static async searchBlueprints(
        targetEntity: string,
        worldId: string,
        searchCriteria: Partial<ContentBase>,
        page: number,
        limit: number
    ): Promise<ContentBase[]> {
        const blueprintRepository: Repository<ContentBase> = this.getContentRepository(targetEntity)
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
