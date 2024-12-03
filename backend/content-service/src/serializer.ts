import { getSerializableFields } from './decorator/serializable.decorator';

export class Serializer {
    static toDTO(entity: any): any {
        const dto: any = {};
        const fields = getSerializableFields(entity.constructor.prototype);
        fields.forEach(({ propertyKey, dtoKey, strategy }) => {
            const value = entity[propertyKey];

            if (strategy === 'id') {
                // Serialize only the ID
                dto[dtoKey] = value?.id ?? value;
            } else {
                // Serialize the full object
                dto[dtoKey] = Array.isArray(value)
                    ? value.map(item => (item?.toDTO ? item.toDTO() : item))
                    : value?.toDTO ? value.toDTO() : value;
            }
        });
        return dto;
    }

    static fromDTO(dto: any, entity: any): any {
        const fields = getSerializableFields(entity.constructor.prototype);
        fields.forEach(({ propertyKey, dtoKey }) => {
            const value = dto[dtoKey];
            if (Array.isArray(value)) {
                entity[propertyKey] = value.map(item => (entity[propertyKey]?.fromDTO ? entity[propertyKey].fromDTO(item) : item));
            } else {
                entity[propertyKey] = value?.fromDTO ? value.fromDTO(value) : value;
            }
        });
        return entity;
    }
}