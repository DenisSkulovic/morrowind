import { getSerializableFields } from './decorator/serializable.decorator';
import { serializeEnum, deserializeEnum } from './common/enum/util';

export enum SerializeStrategyEnum {
    ID = 'id',
    FULL = 'full',
    ENUM = 'enum',
    DATE = 'date'
}

export class Serializer {
    static toDTO(entityInstance: any): any {
        console.log('[Serializer] toDTO', entityInstance);
        const dtoInstance: any = {};
        const fields = getSerializableFields(entityInstance.constructor.prototype);

        fields.forEach(({ propertyKey, dtoKey, strategy, asDtoArray, serialize, internalClass, internalEnum, protoEnum }) => {
            const value = entityInstance[propertyKey];

            const processArray = (arr: any[]) => {
                if (!arr.length) return [];
                return arr.map(processOne);
            }

            const processOne = (item: any | undefined | null) => {
                if (typeof item === "undefined" || item === null) return undefined;
                if (strategy === SerializeStrategyEnum.DATE) return item?.getTime();
                if (strategy === SerializeStrategyEnum.ID) return item?.id || "";
                if (strategy === SerializeStrategyEnum.ENUM) return serializeEnum(internalEnum, protoEnum, item);
                if (strategy === SerializeStrategyEnum.FULL) return item ? Serializer.toDTO(item) : undefined;
                return item;
            };

            if (serialize) {
                dtoInstance[dtoKey] = serialize(value);
            } else if (Array.isArray(value)) {
                const res = processArray(value);
                if (asDtoArray) {
                    dtoInstance[dtoKey] = { arr: res };
                } else {
                    dtoInstance[dtoKey] = res;
                }
            } else {
                dtoInstance[dtoKey] = processOne(value);
            }
        });
        return dtoInstance;
    }

    static fromDTO(dtoInstance: any, entityInstance: any): any {
        console.log('[Serializer] fromDTO', dtoInstance);
        const fields = getSerializableFields(entityInstance.constructor.prototype);

        fields.forEach(({ propertyKey, dtoKey, strategy, asDtoArray, deserialize, internalClass, internalEnum, protoEnum }) => {
            const value = dtoInstance[dtoKey];

            const processDTOArray = (dtoArr: any) => {
                if (!dtoArr) return [];
                if (!dtoArr.arr) throw new Error('asDtoArray was set as true, but dto has no arr property');
                if (!dtoArr.arr.length) return [];
                return dtoArr.arr.map((item: any) => {
                    return processOne(item);
                });
            }
            const processArray = (arr: any[]) => {
                return arr.map(processOne);
            }
            const processOne = (item: any) => {
                if (strategy === SerializeStrategyEnum.DATE) return item ? new Date(item) : undefined;
                if (strategy === SerializeStrategyEnum.ID) return item?.id ? { id: item.id } : { id: item as string };
                if (strategy === SerializeStrategyEnum.ENUM) return deserializeEnum(protoEnum, internalEnum, item);
                if (strategy === SerializeStrategyEnum.FULL) {
                    if (!internalClass) throw new Error(`Internal class not set for ${propertyKey}`);
                    return Serializer.fromDTO(item, new internalClass());
                }
                return item;
            };

            const isDTOArray = asDtoArray;
            const isArray = Array.isArray(value);
            if (deserialize) {
                entityInstance[propertyKey] = deserialize(value);
            } else if (isDTOArray) {
                entityInstance[propertyKey] = processDTOArray(value);
            } else if (isArray) {
                entityInstance[propertyKey] = processArray(value);
            } else {
                entityInstance[propertyKey] = processOne(value);
            }
        });
        return entityInstance;
    }
}