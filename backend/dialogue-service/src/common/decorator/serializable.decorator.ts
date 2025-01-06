import 'reflect-metadata';
import { SerializeStrategyEnum } from '../../modules/content/class/serializer/serializer';

const SERIALIZABLE_FIELDS_KEY = Symbol('serializable_fields');

export function Serializable(
    options?: {
        dtoKey?: string;
        strategy?: SerializeStrategyEnum;
        serialize?: (value: any) => any;
        deserialize?: (value: any) => any;
        internalEnum?: any;
        protoEnum?: any;
        asDtoArray?: boolean;
        internalClass?: any;
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
                internalEnum: options?.internalEnum,
                protoEnum: options?.protoEnum,
                asDtoArray: options?.asDtoArray,
                internalClass: options?.internalClass
            },
        ], target);
    };
}


export function getSerializableFields(target: any): {
    propertyKey: string;
    dtoKey: string;
    strategy: SerializeStrategyEnum;
    serialize?: (value: any) => any;
    deserialize?: (value: any) => any;
    internalEnum?: any;
    protoEnum?: any;
    asDtoArray?: boolean;
    internalClass?: any;
}[] {
    return Reflect.getMetadata(SERIALIZABLE_FIELDS_KEY, target) || [];
}