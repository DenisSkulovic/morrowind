import 'reflect-metadata';

const SERIALIZABLE_FIELDS_KEY = Symbol('serializable_fields');

export function Serializable(
    options?: {
        dtoKey?: string;
        strategy?: 'id' | 'full';
        serialize?: (value: any) => any; // Custom serialization function
        deserialize?: (value: any) => any; // Custom deserialization function
    }) {
    return (target: any, propertyKey: string) => {
        const existingFields = Reflect.getMetadata(SERIALIZABLE_FIELDS_KEY, target) || [];
        Reflect.defineMetadata(SERIALIZABLE_FIELDS_KEY, [
            ...existingFields,
            {
                propertyKey,
                dtoKey: options?.dtoKey || propertyKey, // Use propertyKey by default
                strategy: options?.strategy || 'full', // Default strategy is full serialization
            },
        ], target);
    };
}

export function getSerializableFields(target: any): { propertyKey: string; dtoKey: string; strategy: 'id' | 'full' }[] {
    return Reflect.getMetadata(SERIALIZABLE_FIELDS_KEY, target) || [];
}