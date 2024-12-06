import { getSerializableFields } from "../decorator/serializable.decorator";

export class Serializer {
    static toDTO(entity: any): any {
        const dto: any = {};
        const fields = getSerializableFields(entity.constructor.prototype);
        fields.forEach(({ propertyKey, dtoKey, strategy, serialize }) => {
            const value = entity[propertyKey];

            const processOne = (item: any) => {
                if (typeof item === "undefined" || item === null) return undefined
                else if (serialize) return serialize(item)
                else if (strategy === 'id') return item?.id || ""
                else if (strategy === 'full') {
                    return item?.toDTO ? item.toDTO() : item
                }
                else return item
            }

            if (Array.isArray(value)) {
                const res = value.map((item) => processOne(item))
                if (strategy === "full") dto[dtoKey] = { arr: res }
                else dto[dtoKey] = res
            } else {
                dto[dtoKey] = processOne(value)
            }
        });
        return dto;
    }

    static fromDTO(dto: any, entity: any): any {
        const fields = getSerializableFields(entity.constructor.prototype);
        fields.forEach(({ propertyKey, dtoKey, deserialize }) => {
            const value = dto[dtoKey];
            const processOne = (item: any) => {
                if (deserialize) return deserialize(item)
                return item?.fromDTO ? item.fromDTO(item) : item
            }
            if (Array.isArray(value)) {
                entity[propertyKey] = value.map(item => processOne(item));
            } else {
                entity[propertyKey] = processOne(value)
            }
        });
        return entity;
    }
}