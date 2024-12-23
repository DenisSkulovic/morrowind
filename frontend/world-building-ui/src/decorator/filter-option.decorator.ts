import { EntityMetadataKeyEnum } from "../enum/EntityMetadataKeyEnum";

export interface FilterOptionOptions {
    displayName?: string;
    getValue?: (entity: any) => any;
}

export interface FilterOptionConfig extends FilterOptionOptions {
    field: string;
}

export function FilterOption(options: FilterOptionOptions = {}) {
    return function (target: any, propertyKey: string) {
        const fields = Reflect.getMetadata(EntityMetadataKeyEnum.FILTER_OPTION, target.constructor) || [];
        const field: FilterOptionConfig = { ...options, field: propertyKey };
        fields.push(field);
        Reflect.defineMetadata(EntityMetadataKeyEnum.FILTER_OPTION, fields, target.constructor);
    };
}

export const getFilterOptionConfig = (target: any): FilterOptionConfig[] => {
    return Reflect.getMetadata(EntityMetadataKeyEnum.FILTER_OPTION, target.constructor) || [] as FilterOptionConfig[];
}