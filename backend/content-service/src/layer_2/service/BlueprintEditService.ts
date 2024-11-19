import { Repository } from "typeorm";
import { World } from "../../entities/World";
import { ContentBase } from "../../entities/Content/ContentBase";
import { WorldDataSource } from "../../data-source";
import { ContentServiceBase, ContentServiceSettings } from "../../service/ContentServiceBase";
import { DataSourceEnum } from "../../enum/DataSourceEnum";
import { MakeSureWorldIsNotFrozen } from "../../decorator/MakeSureWorldIsNotFrozen";

export class BlueprintEditService extends ContentServiceBase {

    constructor(settings: ContentServiceSettings) {
        super(settings)
    }


    /**
     * Upserts a single blueprint into the database.
     */
    @MakeSureWorldIsNotFrozen("worldId", "source")
    public async upsertBlueprint(
        worldId: string,
        source: DataSourceEnum,
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
        const blueprintRepository: Repository<ContentBase> = this.getContentRepository(blueprintData.targetEntity, source);

        // Check for an existing blueprint in the repository
        const existingBlueprint = await blueprintRepository.findOne({ where: { id: blueprintData.id } });
        const existingBlueprintString = JSON.stringify(existingBlueprint) || "";
        const isPreexisting = !!existingBlueprint;

        // Create or update the blueprint entity
        const blueprintToSave = isPreexisting
            ? Object.assign(existingBlueprint!, blueprintData) // Update existing blueprint
            : blueprintRepository.create(blueprintData); // Create a new blueprint

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
        const blueprintRepository: Repository<ContentBase> = this.getContentRepository(targetEntity, source);
        const blueprint = await blueprintRepository.findOne({ where: { id: blueprintId } });
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
        const blueprintRepository: Repository<ContentBase> = this.getContentRepository(targetEntity, source);
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
