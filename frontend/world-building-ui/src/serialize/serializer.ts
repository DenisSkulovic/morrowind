import { getSerializableFields } from "../decorator/serializable.decorator";
import { deserializeEnum, serializeEnum } from "../enum/util";

export type GeneratedProtoDTO = { [key: string]: any }

export enum SerializeStrategyEnum {
    ID = 'id',
    FULL = 'full',
    ENUM = 'enum',
    DATE = 'date'
}

class Serializer {
    static toDTO(instance: any, protoDTO: GeneratedProtoDTO): any {
        if (!instance) throw new Error(`[Serializer - toDTO] instance cannot be undefined`);
        if (!protoDTO) throw new Error(`[Serializer - toDTO] protoDTO cannot be undefined`);
        const className = instance.constructor.name;
        // console.log(`[Serializer - toDTO - ${className}] instance`, instance, protoDTO);
        const fields = getSerializableFields(instance.constructor.prototype);

        fields.forEach(({ propertyKey, dtoKey, strategy, serialize, dtoClass, dtoArrClass, internalEnum, protoEnum, required }) => {
            // console.log(`[Serializer - toDTO - ${className}] propertyKey: ${propertyKey}, dtoKey: ${dtoKey}, strategy: ${strategy}, serialize: ${!!serialize}, dtoClass: ${dtoClass}, dtoArrClass: ${dtoArrClass}, internalEnum: ${internalEnum}, protoEnum: ${protoEnum}`);
            const value: any | undefined = instance[propertyKey];

            // check if required field is undefined
            if (required && typeof value === 'undefined') throw new Error(`[Serializer - toDTO - ${className}] Required field is undefined; class: ${className}; propertyKey: ${propertyKey}; dtoKey: ${dtoKey}; strategy: ${strategy}; value: ${value}; instance: ${JSON.stringify(instance)}`);
            // Return early if value is null/undefined and not required
            if (!required && (value === null || typeof value === 'undefined')) return;

            const processDtoArray = (arr: any[], dtoArrClass: any) => {
                if (!arr) return undefined;
                if (!strategy || !([SerializeStrategyEnum.ID, SerializeStrategyEnum.FULL].includes(strategy))) throw new Error(`[Serializer - toDTO - ${className}] dtoArrClass was provided, but strategy is not "${SerializeStrategyEnum.FULL}" or "${SerializeStrategyEnum.ID}"; class: ${className}; propertyKey: ${propertyKey}; dtoKey: ${dtoKey}`);
                if (!dtoClass) throw new Error(`[Serializer - toDTO - ${className}] dtoClass is not defined when strategy is "${SerializeStrategyEnum.FULL}"; class: ${className}; propertyKey: ${propertyKey}; dtoKey: ${dtoKey}`);
                const dtoArr = new dtoArrClass();
                if (!dtoArr.setArrList) throw new Error(`[Serializer - toDTO - ${className}] setArrList is not defined in dtoArrClass; class: ${dtoArrClass.name}`);
                const dtoArrList: any[] = arr.filter(item => item != null).map(item => Serializer.toDTO(item, new dtoClass()));
                dtoArr.setArrList(dtoArrList);
                return dtoArr;
            }
            const processArray = (arr: any[]) => {
                if (!arr || !arr.length) return undefined;
                return arr.filter(item => item != null).map(processOne);
            }
            const processOne = (item: any) => {
                if (item === null || typeof item === 'undefined') return undefined;
                if (strategy === SerializeStrategyEnum.DATE) return item ? item.getTime() : undefined;
                if (strategy === SerializeStrategyEnum.ID) return item?.id || "";
                if (strategy === SerializeStrategyEnum.ENUM) return item ? serializeEnum(internalEnum, protoEnum, item) : undefined;
                if (strategy === SerializeStrategyEnum.FULL) {
                    if (!dtoClass) throw new Error(`[Serializer - toDTO - ${className}] dtoClass is not defined when strategy is "${SerializeStrategyEnum.FULL}"; class: ${className}; propertyKey: ${propertyKey}; dtoKey: ${dtoKey}`);
                    return item ? Serializer.toDTO(item, new dtoClass()) : undefined;
                }
                return item;
            };

            const { setter, isArray } = Serializer.getSetterFuncName(protoDTO, dtoKey);
            const isDTOArray: boolean = !!dtoArrClass;

            let processedValue;
            if (serialize) {
                processedValue = serialize(value);
            } else if (isDTOArray) {
                processedValue = processDtoArray(value, dtoArrClass);
            } else if (isArray) {
                processedValue = processArray(value);
            } else {
                processedValue = processOne(value);
            }

            if (processedValue !== undefined) {
                protoDTO[setter](processedValue);
            }
        });
        return protoDTO;
    }

    static fromDTO(protoDTO: any, instance: any): any {
        if (!protoDTO) throw new Error(`[Serializer - fromDTO] protoDTO cannot be undefined`);
        if (!instance) throw new Error(`[Serializer - fromDTO] instance cannot be undefined`);
        const className = instance.constructor.name;
        console.log(`[Serializer - fromDTO - ${className}] protoDTO`, protoDTO, instance);
        const fields = getSerializableFields(instance.constructor.prototype);

        fields.forEach(({ propertyKey, dtoKey, strategy, deserialize, internalClass, dtoArrClass, internalEnum, protoEnum }) => {
            // console.log(`[Serializer - fromDTO - ${className}] propertyKey: ${propertyKey}, dtoKey: ${dtoKey}, strategy: ${strategy}, received deserialize: ${!!deserialize}, internalEnum: ${internalEnum}, protoEnum: ${protoEnum}`);

            const processOne = (item: any) => {
                if (typeof item === "undefined" || item === null) return undefined;
                if (strategy === SerializeStrategyEnum.DATE) return item ? new Date(item) : undefined;
                if (strategy === SerializeStrategyEnum.ID) return item?.id ? { id: item.id } : null;
                if (strategy === SerializeStrategyEnum.ENUM) return item ? deserializeEnum(protoEnum, internalEnum, item) : undefined;
                if (strategy === SerializeStrategyEnum.FULL) {
                    if (!internalClass) throw new Error(`[Serializer - fromDTO - ${className}] internalClass is not defined when strategy is "${SerializeStrategyEnum.FULL}"; class: ${className}; propertyKey: ${propertyKey}; dtoKey: ${dtoKey}`);
                    return item ? Serializer.fromDTO(item, new internalClass()) : undefined;
                }
                return item;
            };

            const { getter, isArray } = Serializer.getGetterFuncName(protoDTO, dtoKey);
            const value = protoDTO[getter]();

            if (dtoArrClass) {
                return value ? value.getArrList().map(processOne) : undefined;
            } else if (deserialize) {
                instance[propertyKey] = deserialize(value);
            } else if (isArray) {
                instance[propertyKey] = value?.map(processOne);
            } else {
                instance[propertyKey] = processOne(value);
            }
        });

        return instance;
    }

    static getSetterFuncName(protoDTO: any, dtoKey: string): { setter: string, isArray: boolean } {
        const res = {
            setter: '',
            isArray: false
        }
        const singleSetter: string = `set${dtoKey.charAt(0).toUpperCase() + dtoKey.slice(1).toLowerCase()}`;
        const listSetter: string = `${singleSetter}List`;
        if (typeof protoDTO[singleSetter] === "function") {
            res.setter = singleSetter;
            res.isArray = false;
        }
        if (typeof protoDTO[listSetter] === "function") {
            res.setter = listSetter;
            res.isArray = true;
        }
        if (!res.setter) throw new Error(`Setter not found for field: ${dtoKey}; setter: ${singleSetter} or ${listSetter}`);
        return res;
    }

    static getGetterFuncName(protoDTO: any, dtoKey: string): { getter: string, isArray: boolean } {
        const res = {
            getter: '',
            isArray: false
        }
        const singleGetter: string = `get${dtoKey.charAt(0).toUpperCase() + dtoKey.slice(1).toLowerCase()}`;
        const listGetter: string = `${singleGetter}List`;
        if (typeof protoDTO[singleGetter] === "function") {
            res.getter = singleGetter;
            res.isArray = false;
        }
        if (typeof protoDTO[listGetter] === "function") {
            res.getter = listGetter;
            res.isArray = true;
        }
        if (!res.getter) throw new Error(`Getter not found for field: ${dtoKey}; getter: ${singleGetter} or ${listGetter}`);
        return res;
    }
}

export default Serializer;