export interface DisplayFieldOptions {
    order: number;
    displayName?: string;
    getValue?: (entity: any) => any;
}

export function DisplayField(options: DisplayFieldOptions) {
    return function (target: any, propertyKey: string) {
        const fields = Reflect.getMetadata('displayFields', target.constructor) || [];
        fields.push({ ...options, field: propertyKey });
        Reflect.defineMetadata('displayFields', fields, target.constructor);
    };
}