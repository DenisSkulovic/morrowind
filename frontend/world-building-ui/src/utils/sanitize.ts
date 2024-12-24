import { CONTENT_ENTITY_MAP } from "../CONTENT_ENTITY_MAP";
import { EntityEnum } from "../enum/EntityEnum";

export const sanitizeEntityName = (entityName: string | string[] | undefined): EntityEnum => {
    if (!entityName) throw new Error(`Entity name not found in query`);
    if (typeof entityName === 'string') {
        if (!Object.keys(CONTENT_ENTITY_MAP).includes(entityName)) {
            throw new Error(`Entity name ${entityName} not found in CONTENT_ENTITY_MAP`);
        }
        return entityName as EntityEnum;
    }
    throw new Error(`Entity name ${entityName} is not a string`);
};

export const sanitizeWorldId = (worldId: string | string[] | undefined): string => {
    if (!worldId) throw new Error(`World ID not found in query`);
    if (typeof worldId === 'string') {
        return worldId;
    }
    throw new Error(`World ID ${worldId} is not a string`);
};