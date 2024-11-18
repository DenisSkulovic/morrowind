// the purpose of this service is to take the blueprints and load them to the World Database for a specific world.

import { join } from "path";
import { readFileSync } from "fs";
import { ItemBlueprintKind, ItemJSONObj } from "./types";
import { EntityConstructor, entityMap } from "../../../entityMap"
import { BaseEntity } from "typeorm";

const path_to_blueprints = "../../layer_1/item_blueprints"


export class ItemLoader {

    public static getBlueprintsEntitiesFromJSON(kind: ItemBlueprintKind): Record<string, BaseEntity> {
        const path = this._blueprintPath(kind);
        const fileContent = readFileSync(path, "utf-8");
        const blueprintsRaw: ItemJSONObj[] = JSON.parse(fileContent);

        const blueprintsEntities: Record<string, BaseEntity> = {};

        for (const blueprintRaw of blueprintsRaw) {
            const { targetEntity, ...props } = blueprintRaw as any;

            if (!targetEntity) throw new Error(`Missing targetEntity for blueprint: ${blueprintRaw.id}`);

            const BlueprintEntityConstructor: EntityConstructor<BaseEntity> = this._getBlueprintEntity(targetEntity);
            const blueprintEntity: BaseEntity = new BlueprintEntityConstructor()

            // Populate entity properties from blueprint
            for (const [propKey, propValue] of Object.entries(props)) {
                if (!(propKey in blueprintEntity)) continue
                blueprintEntity[propKey] = propValue;
            }

            blueprintsEntities[blueprintRaw.id] = blueprintEntity;
        }

        return blueprintsEntities;
    }

    private static _blueprintPath(kind: ItemBlueprintKind): string {
        return join(__dirname, path_to_blueprints, `${kind}.json`);
    }

    private static _getBlueprintEntity(targetEntity: string): EntityConstructor<BaseEntity> {
        const EntityClass = entityMap[targetEntity];
        if (!EntityClass) {
            throw new Error(`Unknown targetEntity: ${targetEntity}`);
        }
        return EntityClass;
    }

}
