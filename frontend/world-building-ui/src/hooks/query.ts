import { useState, useEffect } from "react";
import { EntityEnum } from "../enum/EntityEnum";
import { ParsedUrlQuery } from "querystring";

export enum PathParamEnum {
    ENTITY = 'entity',
    ENTITY_ID = 'entity_id',
    WORLD_ID = 'world_id'
}

export const useEntityName = (query: ParsedUrlQuery): EntityEnum | null => {
    const [name, setName] = useState<EntityEnum | null>(null);
    useEffect(() => {
        if (typeof query[PathParamEnum.ENTITY] === 'string') {
            if (!Object.keys(EntityEnum).includes(query[PathParamEnum.ENTITY])) {
                throw new Error(`Entity name ${query[PathParamEnum.ENTITY]} not found in EntityEnum`);
            }
            setName(query[PathParamEnum.ENTITY] as EntityEnum);
        }
    }, [query]);
    return name
};

export const useEntityId = (query: ParsedUrlQuery): string | null => {
    const [id, setId] = useState<string | null>(null);
    useEffect(() => {
        if (typeof query[PathParamEnum.ENTITY_ID] === 'string') {
            setId(query[PathParamEnum.ENTITY_ID]);
        }
    }, [query]);
    return id;
};

export const useWorldId = (query: ParsedUrlQuery): string | null => {
    const [id, setId] = useState<string | null>(null);
    useEffect(() => {
        if (typeof query[PathParamEnum.WORLD_ID] === 'string') {
            setId(query[PathParamEnum.WORLD_ID]);
        }
    }, [query]);
    return id;
};
