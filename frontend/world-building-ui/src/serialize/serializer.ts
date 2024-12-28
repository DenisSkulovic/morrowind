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
        console.log('[Serializer] toDTO', instance, protoDTO);
        const fields = getSerializableFields(instance.constructor.prototype);

        fields.forEach(({ propertyKey, dtoKey, strategy, serialize, dtoClass, dtoArrClass, internalEnum, protoEnum }) => {
            const value = instance[propertyKey];

            const processDtoArray = (arr: any[], dtoArrClass: any) => {
                if (!([SerializeStrategyEnum.ID, SerializeStrategyEnum.FULL].includes(strategy))) throw new Error(`dtoArrClass was provided, but strategy is not "${SerializeStrategyEnum.FULL}" or "${SerializeStrategyEnum.ID}"; class: ${instance.constructor.name}; propertyKey: ${propertyKey}; dtoKey: ${dtoKey}`);
                if (!dtoClass) throw new Error(`dtoClass is not defined when strategy is "${SerializeStrategyEnum.FULL}"; class: ${instance.constructor.name}; propertyKey: ${propertyKey}; dtoKey: ${dtoKey}`);
                const dtoArr = new dtoArrClass();
                if (!dtoArr.setArrList) throw new Error(`setArrList is not defined in dtoArrClass; class: ${dtoArrClass.name}`);
                const dtoArrList: any[] = arr.map(item => Serializer.toDTO(item, new dtoClass()));
                dtoArr.setArrList(dtoArrList);
                return dtoArr;
            }
            const processArray = (arr: any[]) => {
                if (!arr.length) return [];
                return arr.map(processOne);
            }
            const processOne = (item: any) => {
                if (typeof item === "undefined" || item === null) return undefined;
                if (strategy === SerializeStrategyEnum.DATE) return item.getTime();
                if (strategy === SerializeStrategyEnum.ID) return item?.id || "";
                if (strategy === SerializeStrategyEnum.ENUM) return serializeEnum(internalEnum, protoEnum, item);
                if (strategy === SerializeStrategyEnum.FULL) {
                    if (!dtoClass) throw new Error(`dtoClass is not defined when strategy is "${SerializeStrategyEnum.FULL}"; class: ${instance.constructor.name}; propertyKey: ${propertyKey}; dtoKey: ${dtoKey}`);
                    const subDto = new dtoClass();
                    return item?.toDTO ? Serializer.toDTO(item, subDto) : item;
                }
                return item;
            };

            const { setter, isArray } = Serializer.getSetterFuncName(protoDTO, dtoKey);
            const isDTOArray: boolean = !!dtoArrClass;
            if (serialize) {
                protoDTO[setter](serialize(value))
            } else if (isDTOArray) {
                protoDTO[setter](processDtoArray(value, dtoArrClass));
            } else if (isArray) {
                protoDTO[setter](processArray(value));
            } else {
                protoDTO[setter](processOne(value));
            }
        });
        return protoDTO;
    }

    static fromDTO(protoDTO: any, instance: any): any {
        console.log('[Serializer] fromDTO', protoDTO, instance);
        const fields = getSerializableFields(instance.constructor.prototype);

        fields.forEach(({ propertyKey, dtoKey, strategy, deserialize, internalEnum, protoEnum }) => {

            const processArray = (arr: any[]) => {
                return arr.map(processOne);
            }

            const processOne = (item: any) => {
                if (strategy === SerializeStrategyEnum.DATE) return item ? new Date(item) : undefined;
                if (strategy === SerializeStrategyEnum.ID) return item?.id ? { id: item.id } : null;
                if (strategy === SerializeStrategyEnum.ENUM) return deserializeEnum(protoEnum, internalEnum, item);
                if (strategy === SerializeStrategyEnum.FULL) return Serializer.fromDTO(protoDTO, new instance.constructor());
                return item;
            };

            const { getter, isArray } = Serializer.getGetterFuncName(protoDTO, dtoKey);
            const value = protoDTO[getter]() || [];
            if (deserialize) {
                instance[propertyKey] = deserialize(value);
            } else if (isArray) {
                instance[propertyKey] = processArray(value)
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