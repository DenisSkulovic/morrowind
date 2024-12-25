import { getSerializableFields } from "../decorator/serializable.decorator";

export const getSetterFuncName = (dto: any, dtoKey: string): string => {
    const singleSetter: string = `set${dtoKey.charAt(0).toUpperCase() + dtoKey.slice(1).toLowerCase()}`;
    const listSetter: string = `${singleSetter}List`;
    if (typeof dto[singleSetter] === "function") return singleSetter
    if (typeof dto[listSetter] === "function") return listSetter
    throw new Error(`Setter not found for field: ${dtoKey}; setter: ${singleSetter} or ${listSetter}`);
}
export const getGetterFuncName = (dto: any, dtoKey: string): string => {
    const singleGetter: string = `get${dtoKey.charAt(0).toUpperCase() + dtoKey.slice(1).toLowerCase()}`;
    const listGetter: string = `${singleGetter}List`;
    if (typeof dto[singleGetter] === "function") return singleGetter
    if (typeof dto[listGetter] === "function") return listGetter
    throw new Error(`Getter not found for field: ${dtoKey}; getter: ${singleGetter} or ${listGetter}`);
}

export class Serializer {
    static toDTO(entity: any, dto: any): any {
        console.log('toDTO', entity, dto);
        const fields = getSerializableFields(entity.constructor.prototype);

        fields.forEach(({ propertyKey, dtoKey, strategy, serialize, getDTOInstance, getArrDTOInstance }) => {
            const value = entity[propertyKey];
            const processOne = (item: any) => {
                if (typeof item === "undefined" || item === null) return undefined;
                if (serialize) return serialize(item);
                if (strategy === 'id') return item?.id || "";
                if (strategy === 'full') {
                    if (!getDTOInstance) throw new Error('getDTOInstance is not defined when strategy is "full"');
                    const subDto = getDTOInstance();
                    return item?.toDTO ? Serializer.toDTO(item, subDto) : item;
                }
                return item;
            };

            const setter: string = getSetterFuncName(dto, dtoKey);
            const isArray = setter.endsWith('List');
            if (isArray) {
                dto[setter](value.length ? value.map(processOne) : []);
            } else {
                dto[setter](processOne(value));
            }
        });
        return dto;
    }

    static fromDTO(dto: any, entity: any): any {
        console.log('fromDTO', dto, entity);
        const fields = getSerializableFields(entity.constructor.prototype);

        fields.forEach(({ propertyKey, dtoKey, strategy, deserialize, getDTOInstance }) => {

            const processOne = (val: any) => {
                if (deserialize) return deserialize(val);
                else if (strategy === 'id') return val?.id ? { id: val.id } : null;
                else if (strategy === 'full') {
                    if (!getDTOInstance) throw new Error('getDTOInstance is not defined when strategy is "full"');
                    return Serializer.fromDTO(val, getDTOInstance());
                }
                else return val;
            };

            const getter: string = getGetterFuncName(dto, dtoKey);
            const isArray = getter.endsWith('List');
            if (isArray) {
                const value = dto[getter]() || [];
                entity[propertyKey] = value.map((val: any) => processOne(val));
            } else {
                const value = dto[getter]();
                entity[propertyKey] = processOne(value);
            }
        });

        return entity;
    }
}
