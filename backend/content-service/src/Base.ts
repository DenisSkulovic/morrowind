import { BaseEntity } from "typeorm";
import { Context } from "./types";

export abstract class Base extends BaseEntity {
    public static serializeEntityArray<T extends BaseEntity>(
        entities: T[] | undefined,
        mapToDTO: (entity: T) => any
    ): { arr: any[] } | undefined {
        if (!entities) return undefined;
        return { arr: entities.map(mapToDTO) }
    }

    public static serializeEntity<T extends BaseEntity>(
        entity: T | undefined,
        mapToDTO: (entity: T) => any
    ): any | undefined {
        if (!entity) return undefined;
        return mapToDTO(entity);
    }

    public static deserializeEntityArray<T extends BaseEntity>(
        dtoArray: { arr: any[] } | undefined,
        mapFromDTO: (dto: any) => T
    ): T[] {
        if (!dtoArray?.arr) throw new Error(`array of entities as defined in proto must have key "arr" for the repeated field`)
        return dtoArray.arr.map(mapFromDTO);
    }
}