import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import { EntityConstructor } from "../types";
import { contentEntityMap as cEM } from "../contentEntityMap";
import { ContentBase } from "../ContentBase";
import { PresetEnum } from "../enum/PresetEnum";

export class PresetLoader {
    private static basePath = "./world_presets"; // Base folder for presets

    /**
     * Loads all blueprints from a given preset folder and fills the database.
     */
    public static async loadPreset(
        preset: PresetEnum
    ): Promise<Record<string, Record<string, ContentBase>>> {
        const presetPath = join(__dirname, this.basePath, preset);
        const files = this._getJSONFiles(presetPath);

        const allBlueprints: Record<string, Record<string, ContentBase>> = {};

        for (const file of files) {
            const entities = this._loadBlueprintsFromFile(presetPath, file);

            for (const [targetEntity, entityMap] of Object.entries(entities)) {
                if (!allBlueprints[targetEntity]) allBlueprints[targetEntity] = {};
                Object.assign(allBlueprints[targetEntity], entityMap);
            }
        }

        return allBlueprints;
    }

    /**
     * Reads all JSON files in the given directory.
     */
    private static _getJSONFiles(path: string): string[] {
        return readdirSync(path).filter((file) => file.endsWith(".json"));
    }

    /**
     * Loads blueprints from a single JSON file.
     */
    private static _loadBlueprintsFromFile(
        presetPath: string,
        file: string
    ): Record<string, Record<string, ContentBase>> {
        const path = join(presetPath, file);
        const fileContent = readFileSync(path, "utf-8");
        const blueprintsRaw: Array<{ targetEntity: string; [key: string]: any }> = JSON.parse(fileContent);

        const entitiesByType: Record<string, Record<string, ContentBase>> = {};

        for (const blueprintRaw of blueprintsRaw) {
            const { targetEntity, ...props } = blueprintRaw;

            if (!targetEntity) throw new Error(`Missing targetEntity in file: ${file}`);

            const EntityClass: EntityConstructor<ContentBase> = this._getBlueprintEntity(targetEntity);
            const entity: ContentBase = new EntityClass();

            // Populate entity properties
            for (const [propKey, propValue] of Object.entries(props)) {
                if (propKey in entity) {
                    (entity as any)[propKey] = propValue;
                }
            }

            // Group entities by their target type
            if (!entitiesByType[targetEntity]) entitiesByType[targetEntity] = {};
            entitiesByType[targetEntity][blueprintRaw.blueprint_id] = entity;
        }

        return entitiesByType;
    }

    /**
     * Retrieves the constructor for the target entity.
     */
    private static _getBlueprintEntity(targetEntity: string): EntityConstructor<ContentBase> {
        const EntityClass: EntityConstructor<ContentBase> | undefined = cEM[targetEntity];
        if (!EntityClass) throw new Error(`Unknown targetEntity: ${targetEntity}`);
        return EntityClass;
    }
}
