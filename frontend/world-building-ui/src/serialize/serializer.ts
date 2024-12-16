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
            console.log(`[Serializer] fromDTO propertyKey`, propertyKey)
            console.log(`[Serializer] fromDTO dtoKey`, dtoKey)
            console.log(`[Serializer] fromDTO strategy`, strategy)
            console.log(`[Serializer] fromDTO deserialize`, deserialize)
            console.log(`[Serializer] fromDTO getDTOInstance`, getDTOInstance)
            const getter = `get${dtoKey.charAt(0).toUpperCase() + dtoKey.slice(1)}`;
            if (typeof dto[getter] === "function") {
                const value = dto[getter]();
                console.log(`value`, value)
                const processOne = (val: any) => {
                    if (deserialize) return deserialize(val);
                    else if (strategy === 'id') return val?.id ? { id: val.id } : null;
                    else if (strategy === 'full') {
                        if (!getDTOInstance) throw new Error('getDTOInstance is not defined when strategy is "full"');
                        return Serializer.fromDTO(val, getDTOInstance());
                    }
                    else return val;
                };

                if (Array.isArray(value)) {
                    console.log(`[Serializer] fromDTO processing array`, value)
                    entity[propertyKey] = value.map(processOne);
                } else {
                    console.log(`[Serializer] fromDTO processing value`, value)
                    entity[propertyKey] = processOne(value);
                }
            } else {
                console.warn(`Getter not found for field: ${dtoKey}`);
            }
        });

        console.log(`[Serializer] fromDTO entity`, entity)
        return entity;
    }
}
