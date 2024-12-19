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