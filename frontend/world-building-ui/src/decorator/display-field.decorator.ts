import { EntityMetadataKeyEnum } from "../enum/EntityMetadataKeyEnum";

export interface DisplayFieldOptions {
    order: number;
    displayName?: string;
    getValue?: (entity: any) => any;
}

export interface DisplayFieldConfig extends DisplayFieldOptions {
    field: string;
}

export function DisplayField(options: DisplayFieldOptions) {
    return function (target: any, propertyKey: string) {
        const fields = Reflect.getMetadata(EntityMetadataKeyEnum.DISPLAY_FIELD, target.constructor) || [];
        const field: DisplayFieldConfig = { ...options, field: propertyKey };
        fields.push(field);
        Reflect.defineMetadata(EntityMetadataKeyEnum.DISPLAY_FIELD, fields, target.constructor);
    };
}

export const getDisplayFieldConfig = (target: any): DisplayFieldConfig[] => {
    return Reflect.getMetadata(EntityMetadataKeyEnum.DISPLAY_FIELD, target.constructor) || [] as DisplayFieldConfig[];
}