import { getSerializableFields } from "../decorator/serializable.decorator";

export class Serializer {
    static toDTO(entity: any): any {
        const dto: any = {};
        const fields = getSerializableFields(entity.constructor.prototype);
        fields.forEach(({ propertyKey, dtoKey, strategy, serialize }) => {
            const value = entity[propertyKey];
            const processOne = (item: any) => {
                if (typeof item === "undefined" || item === null) return undefined;
                if (item.toObject) return item.toObject();
                if (serialize) return serialize(item);
                if (strategy === 'id') return item?.id || "";
                if (strategy === 'full') return item?.toDTO ? item.toDTO() : item;
                return item;
            };
            if (Array.isArray(value)) {
                dto[dtoKey] = value.map((item) => processOne(item));
            } else {
                dto[dtoKey] = processOne(value);
            }
        });
        return dto;
    }

    static fromDTO(dto: any, entity: any): any {
        const fields = getSerializableFields(entity.constructor.prototype);
        fields.forEach(({ propertyKey, dtoKey, deserialize }) => {
            const value = dto[dtoKey];
            const processOne = (item: any) => {
                if (deserialize) return deserialize(item);
                if (item.fromObject) return item.fromObject(item);
                return item;
            };
            if (Array.isArray(value)) {
                entity[propertyKey] = value.map(item => processOne(item));
            } else {
                entity[propertyKey] = processOne(value);
            }
        });
        return entity;
    }
}