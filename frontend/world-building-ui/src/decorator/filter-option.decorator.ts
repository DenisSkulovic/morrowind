export interface FilterOptionOptions {
    displayName?: string;
    getValue?: (entity: any) => any;
}

export function FilterOption(options: FilterOptionOptions = {}) {
    return function (target: any, propertyKey: string) {
        const filterOptions = Reflect.getMetadata('filterOptions', target.constructor) || [];
        filterOptions.push({ ...options, field: propertyKey });
        Reflect.defineMetadata('filterOptions', filterOptions, target.constructor);
    };
}
