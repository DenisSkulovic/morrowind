// the purpose of this service is to take the blueprints and load them to the World Database for a specific world.

import { join } from "path";
import { readFileSync } from "fs";
import { BlueprintKind } from "../../layer_1/types";
import { entityMap } from "../entityMap"
import { ContentBase } from "../../entities/ContentBase";

const path_to_blueprints = "../../layer_1/blueprints"


export class BlueprintPopulationService {

    public static loadBlueprintJSON(kind: BlueprintKind): Record<string, any> {
        const path = this._blueprintPath(kind);
        const fileContent = readFileSync(path, "utf-8");
        const blueprints = JSON.parse(fileContent);

        const entities: Record<string, any> = {};

        for (const [key, blueprint] of Object.entries(blueprints)) {
            const { targetEntity, ...props } = blueprint as any;

            if (!targetEntity) {
                throw new Error(`Missing targetEntity for blueprint: ${key}`);
            }

            const entity = this._getEntityInstance(targetEntity);

            // Populate entity properties from blueprint
            for (const [propKey, propValue] of Object.entries(props)) {
                if (propKey in entity) { // this skips extra fields like "targetEntity"
                    (entity as any)[propKey] = propValue;
                }
            }

            entities[key] = entity;
        }

        return entities;
    }

    private static _blueprintPath(kind: BlueprintKind): string {
        return join(__dirname, path_to_blueprints, `${kind}.json`);
    }

    private static _getEntityInstance(targetEntity: string): ContentBase {
        const EntityClass = entityMap[targetEntity];
        if (!EntityClass) {
            throw new Error(`Unknown targetEntity: ${targetEntity}`);
        }
        return new EntityClass();
    }

}
