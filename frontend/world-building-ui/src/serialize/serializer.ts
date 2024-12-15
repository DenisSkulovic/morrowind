import { getSerializableFields } from "../decorator/serializable.decorator";

export class Serializer {
    static toDTO(entity: any, message: any): any {
        const fields = getSerializableFields(entity.constructor.prototype);

        fields.forEach(({ propertyKey, dtoKey, strategy, serialize, getDTOInstance }) => {
            const value = entity[propertyKey];
            const processOne = (item: any) => {
                if (typeof item === "undefined" || item === null) return undefined;
                if (serialize) return serialize(item);
                if (strategy === 'id') return item?.id || "";
                if (strategy === 'full') {
                    if (!getDTOInstance) throw new Error('getDTOInstance is not defined when strategy is "full"');
                    const submessage = getDTOInstance();
                    return item?.toDTO ? Serializer.toDTO(item, submessage) : item;
                }
                return item;
            };

            const setter = `set${dtoKey.charAt(0).toUpperCase() + dtoKey.slice(1)}`;
            if (typeof message[setter] === "function") {
                if (Array.isArray(value)) {
                    message[setter](value.map(processOne));
                } else {
                    message[setter](processOne(value));
                }
            } else {
                console.warn(`Setter not found for field: ${dtoKey}`);
            }
        });

        return message;
    }

    static fromDTO(dto: any, entity: any): any {
        const fields = getSerializableFields(entity.constructor.prototype);

        fields.forEach(({ propertyKey, dtoKey, strategy, deserialize, getDTOInstance }) => {
            const getter = `get${dtoKey.charAt(0).toUpperCase() + dtoKey.slice(1)}`;
            if (typeof dto[getter] === "function") {
                const value = dto[getter]();
                const processOne = (item: any) => {
                    if (deserialize) return deserialize(item);
                    if (strategy === 'id') return item?.id ? { id: item.id } : null;
                    if (strategy === 'full') {
                        if (!getDTOInstance) throw new Error('getDTOInstance is not defined when strategy is "full"');
                        return Serializer.fromDTO(item, getDTOInstance());
                    }
                    return item;
                };

                if (Array.isArray(value)) {
                    entity[propertyKey] = value.map(processOne);
                } else {
                    entity[propertyKey] = processOne(value);
                }
            } else {
                console.warn(`Getter not found for field: ${dtoKey}`);
            }
        });

        return entity;
    }
}
