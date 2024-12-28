import 'reflect-metadata';
import { SerializeStrategyEnum } from '../serialize/serializer';
const SERIALIZABLE_FIELDS_KEY = Symbol('serializable_fields');

export function Serializable(
    options?: {
        dtoKey?: string;
        strategy?: SerializeStrategyEnum;
        internalEnum?: any;
        protoEnum?: any;
        serialize?: (value: any) => any;
        deserialize?: (value: any) => any;
        dtoClass?: any;
        dtoArrClass?: any;
    }) {
    return (target: any, propertyKey: string) => {
        const existingFields = Reflect.getMetadata(SERIALIZABLE_FIELDS_KEY, target) || [];
        Reflect.defineMetadata(SERIALIZABLE_FIELDS_KEY, [
            ...existingFields,
            {
                propertyKey,
                dtoKey: options?.dtoKey || propertyKey, // Use propertyKey by default
                strategy: options?.strategy,
                internalEnum: options?.internalEnum,
                protoEnum: options?.protoEnum,
                serialize: options?.serialize,
                deserialize: options?.deserialize,
                dtoClass: options?.dtoClass,
                dtoArrClass: options?.dtoArrClass,
            },
        ], target);
    };
}



export function getSerializableFields(target: any): {
    propertyKey: string;
    dtoKey: string;
    strategy: SerializeStrategyEnum;
    internalEnum?: any;
    protoEnum?: any;
    serialize?: (value: any) => any;
    deserialize?: (value: any) => any;
    dtoClass?: any;
    dtoArrClass?: any;
}[] {
    return Reflect.getMetadata(SERIALIZABLE_FIELDS_KEY, target) || [];
}