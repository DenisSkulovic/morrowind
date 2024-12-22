import 'reflect-metadata';

const SERIALIZABLE_FIELDS_KEY = Symbol('serializable_fields');

export function Serializable(
    options?: {
        dtoKey?: string;
        strategy?: 'id' | 'full';
        serialize?: (value: any) => any;
        deserialize?: (value: any) => any;
        getDTOInstance?: () => any;
        getArrDTOInstance?: () => any;
    }) {
    return (target: any, propertyKey: string) => {
        const existingFields = Reflect.getMetadata(SERIALIZABLE_FIELDS_KEY, target) || [];
        Reflect.defineMetadata(SERIALIZABLE_FIELDS_KEY, [
            ...existingFields,
            {
                propertyKey,
                dtoKey: options?.dtoKey || propertyKey, // Use propertyKey by default
                strategy: options?.strategy,
                serialize: options?.serialize,
                deserialize: options?.deserialize,
                getDTOInstance: options?.getDTOInstance,
                getArrDTOInstance: options?.getArrDTOInstance
            },
        ], target);
    };
}



export function getSerializableFields(target: any): {
    propertyKey: string;
    dtoKey: string;
    strategy: 'id' | 'full';
    serialize?: (value: any) => any;
    deserialize?: (value: any) => any;
    getDTOInstance?: () => any;
    getArrDTOInstance?: () => any;
}[] {
    return Reflect.getMetadata(SERIALIZABLE_FIELDS_KEY, target) || [];
}