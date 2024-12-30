import 'reflect-metadata';
import { SerializeStrategyEnum } from '../serialize/serializer';
const SERIALIZABLE_FIELDS_KEY = Symbol('serializable_fields');

const defaultRequired = false; // if "required" was not set, this will be used

export class SerializableFieldOptions {
    dtoKey!: string;
    strategy?: SerializeStrategyEnum;
    internalEnum?: any;
    protoEnum?: any;
    serialize?: (value: any) => any;
    deserialize?: (value: any) => any;
    internalClass?: any;
    dtoClass?: any;
    dtoArrClass?: any;
    required?: boolean;

    static build(body: Partial<SerializableFieldOptions>) {
        const options = new SerializableFieldOptions();
        Object.assign(options, body);
        return options;
    }
}

export class SerializableField extends SerializableFieldOptions {
    propertyKey!: string;

    static build(body: Partial<SerializableField>) {
        const field = new SerializableField();
        Object.assign(field, body);
        return field;
    }
}

export function Serializable(
    options?: Partial<SerializableFieldOptions>
) {
    return (target: any, propertyKey: string) => {
        const existingFields = Reflect.getMetadata(SERIALIZABLE_FIELDS_KEY, target) || [];
        const field: SerializableField = SerializableField.build({
            propertyKey,
            dtoKey: options?.dtoKey || propertyKey, // Use propertyKey by default
            strategy: options?.strategy,
            internalEnum: options?.internalEnum,
            protoEnum: options?.protoEnum,
            serialize: options?.serialize,
            deserialize: options?.deserialize,
            internalClass: options?.internalClass,
            dtoClass: options?.dtoClass,
            dtoArrClass: options?.dtoArrClass,
            required: options?.required || defaultRequired,
        })
        Reflect.defineMetadata(SERIALIZABLE_FIELDS_KEY, [...existingFields, field], target);
    };
}



export function getSerializableFields(target: any): SerializableField[] {
    return Reflect.getMetadata(SERIALIZABLE_FIELDS_KEY, target) || [];
}