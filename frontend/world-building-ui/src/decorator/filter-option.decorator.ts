import { Context } from "../class/Context";
import { FormSelectOption } from "../class/FormSelectOption";
import { SearchQuery } from "../class/search/grpc/SearchQuery";
import { EntityMetadataKeyEnum } from "../enum/EntityMetadataKeyEnum";
import { ClassConstructor } from "../types";

export enum FilterOptionTypeEnum {
    TEXT = 'text',
    SELECT = 'select',
    DATE = 'date',
    NUMBER_EXACT = 'number-exact',
    NUMBER_RANGE = 'number-range',
    BOOLEAN = 'boolean',
    MULTI_SELECT = 'multi-select',
}

type EnumType = Record<string, string> | { [key: string]: number } | { [key: number]: string };

export interface FilterOptionOptions {
    type: FilterOptionTypeEnum;
    min?: number;
    max?: number;
    enum?: EnumType;
    getSelectOptions?: (filter: SearchQuery, context: Context) => Promise<FormSelectOption[]>;
    displayName?: string;
    getValue?: (entity: any) => any;
}

export interface FilterOptionConfig extends FilterOptionOptions {
    field: string;
}

export function FilterOption(options: FilterOptionOptions) {
    return function (target: any, propertyKey: string) {
        const fields = Reflect.getMetadata(EntityMetadataKeyEnum.FILTER_OPTION, target.constructor) || [];
        const field: FilterOptionConfig = { ...options, field: propertyKey };
        fields.push(field);
        Reflect.defineMetadata(EntityMetadataKeyEnum.FILTER_OPTION, fields, target.constructor);
    };
}

export const getFilterOptionConfig = (cls: ClassConstructor<any>): FilterOptionConfig[] => {
    return Reflect.getMetadata(EntityMetadataKeyEnum.FILTER_OPTION, cls) || [] as FilterOptionConfig[];
}