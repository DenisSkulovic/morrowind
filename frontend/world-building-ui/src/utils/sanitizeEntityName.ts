import { EntityEnum } from "../enum/EntityEnum"

export function sanitizeEntityName(entityName: string): EntityEnum {
    if (!Object.values(EntityEnum).includes(entityName as EntityEnum)) throw new Error(`unrecognized entityName: "${entityName}"`)
    return entityName as EntityEnum
}