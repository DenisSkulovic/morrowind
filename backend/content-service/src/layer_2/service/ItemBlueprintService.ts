// This service handles CRUD operations for blueprints of an existing World

import { World } from "../../entities/World";
import { ContentBase } from "../../entities/ContentBase";
import { WorldDataSource } from "../../data-source"; // Import your configured data source

export class ItemBlueprintService {




    public static async upsertBlueprint(
        worldId: string,
        blueprintData: Partial<ContentBase>
    ): Promise<ContentBase> {
        const worldRepository = WorldDataSource.getRepository(World);
        const world = await worldRepository.findOne({ where: { id: worldId } });
        if (!world) {
            throw new Error(`World with ID ${worldId} not found`);
        }

        const blueprintRepository = WorldDataSource.getRepository(ContentBase);


        let existingBlueprint = blueprintData.id
            ? await this._contentRepository.findOne({ where: { id: blueprintData.id } })
            : undefined;
        if (existingBlueprint) {
            // Update existing blueprint
            Object.assign(existingBlueprint, blueprintData);
        } else {
            // Create new blueprint
            existingBlueprint = this._contentRepository.create({ ...blueprintData, world });
        }

        return this._contentRepository.save(existingBlueprint);
    }



    public static async deleteBlueprint(
        blueprintId: string
    ): Promise<void> {
        const blueprint = await this._contentRepository.findOne({ where: { id: blueprintId } });
        if (!blueprint) {
            throw new Error(`Blueprint with ID ${blueprintId} not found`);
        }

        await this._contentRepository.remove(blueprint);
    }



    public static async searchBlueprints(
        worldId: string,
        searchCriteria: Partial<ContentBase>,
        page: number,
        limit: number
    ): Promise<ContentBase[]> {
        const queryBuilder = this._contentRepository.createQueryBuilder("content")
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
