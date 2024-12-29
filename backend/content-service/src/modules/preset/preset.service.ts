import { join } from "path";
import { readdirSync, readFileSync } from "fs";
import { Injectable } from "@nestjs/common";
import { ContentEntityMapService } from "../../CONTENT_ENTITY_MAP";
import { ContentBase } from "../../ContentBase";
import { PresetEnum } from "../../common/enum/entityEnums";
import { EntityConstructor } from "../../types";
import { EntityEnum } from "../../common/enum/EntityEnum";
import { sanitizeEntityName } from "../../util/sanitizeEntityName";

export class Preset {
    [entity: string]: {
        [blueprintId: string]: ContentBase
    }
}

export interface IPresetService {
    loadPreset(
        preset: PresetEnum,
        pathToPresetsFolder: string
    ): Promise<Preset>

}

@Injectable()
export class PresetService implements IPresetService {
    /**
     * Loads all blueprints from a given preset folder and fills the database.
     */
    public async loadPreset(
        preset: PresetEnum,
        pathToPresetsFolder: string
    ): Promise<Preset> {
        const presetPath = join(pathToPresetsFolder, preset.toString());
        const files: string[] = this._getJSONFiles(presetPath);

        const allBlueprints: Preset = {};

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
    private _getJSONFiles(path: string): string[] {
        const fileNames: string[] = readdirSync(path)
        console.log(`[PresetLoader - _getJSONFiles] fileNames`, fileNames)
        const jsonFileNames = fileNames.filter((file) => file.endsWith(".json"));
        return jsonFileNames
    }

    /**
     * Loads blueprints from a single JSON file.
     */
    private _loadBlueprintsFromFile<T extends ContentBase>(
        presetPath: string,
        file: string
    ): Record<string, Record<string, T>> { // TODO this reads ALL json files, so instead better use a generator method that spits out contents of each file one by one
        const path = join(presetPath, file);
        const fileContent = readFileSync(path, "utf-8");
        const blueprintsRaw: { targetEntity: string;[key: string]: any }[] = JSON.parse(fileContent);

        const entitiesByType: Record<string, Record<string, T>> = {};

        for (const blueprintRaw of blueprintsRaw) {
            const { targetEntity, ...props } = blueprintRaw;

            if (!targetEntity) throw new Error(`Missing targetEntity in file: ${file}`);
            const targetEntityEnum: EntityEnum = sanitizeEntityName(targetEntity)

            const EntityClass: EntityConstructor<T> = this._getBlueprintEntity(targetEntityEnum);
            const entity: T = new EntityClass();

            // Populate entity properties
            for (const [propKey, propValue] of Object.entries(props)) {
                // if (propKey in entity) {
                (entity as any)[propKey] = propValue;
                // }
            }

            // Group entities by their target type
            if (!entitiesByType[targetEntity]) entitiesByType[targetEntity] = {};
            entitiesByType[targetEntity][blueprintRaw.blueprintId] = entity;
            console.log(`[PresetLoader - _loadBlueprintsFromFile] targetEntity: ${targetEntity}; processed blueprintRaw.id: ${blueprintRaw.blueprintId};`)
        }

        return entitiesByType;
    }

    /**
     * Retrieves the constructor for the target entity.
     */
    private _getBlueprintEntity<T extends ContentBase>(targetEntity: EntityEnum): EntityConstructor<T> {
        const EntityClass: EntityConstructor<T> | undefined = ContentEntityMapService.getEntityConstructor<T>(targetEntity)
        if (!EntityClass) throw new Error(`Unknown targetEntity: ${targetEntity}`);
        return EntityClass;
    }
}
