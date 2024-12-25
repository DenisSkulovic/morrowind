import { EntityMetadataKeyEnum } from "../enum/EntityMetadataKeyEnum";
import { ClassConstructor } from "../types";

export interface DisplayFieldOptions {
    displayName?: string;
    getValue?: (entity: any) => any;
    width?: number;
    sortable?: boolean;
}

export interface DisplayFieldConfig extends DisplayFieldOptions {
    field: string;
}

export function DisplayField(options: DisplayFieldOptions) {
    return function (cls: any, propertyKey: string) {
        const fields = Reflect.getMetadata(EntityMetadataKeyEnum.DISPLAY_FIELD, cls.constructor) || [];
        const field: DisplayFieldConfig = { ...options, field: propertyKey };
        fields.push(field);
        Reflect.defineMetadata(EntityMetadataKeyEnum.DISPLAY_FIELD, fields, cls.constructor);
    };
}

export const getDisplayFieldConfig = (cls: ClassConstructor<any>): DisplayFieldConfig[] => {
    return Reflect.getMetadata(EntityMetadataKeyEnum.DISPLAY_FIELD, cls) || [] as DisplayFieldConfig[];
}
