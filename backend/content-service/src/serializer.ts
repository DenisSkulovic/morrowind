import { getSerializableFields } from './decorator/serializable.decorator';


export class Serializer {
    static toDTO(entityInstance: any): any {
        const dtoInstance: any = {};
        const fields = getSerializableFields(entityInstance.constructor.prototype);
        fields.forEach(({ propertyKey, dtoKey, strategy, serialize }) => {
            const value = entityInstance[propertyKey];

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
                if (strategy === "full") dtoInstance[dtoKey] = { arr: res }
                else dtoInstance[dtoKey] = res
            } else {
                dtoInstance[dtoKey] = processOne(value)
            }
        });
        return dtoInstance;
    }

    static fromDTO(dtoInstance: any, entityInstance: any): any {
        const fields = getSerializableFields(entityInstance.constructor.prototype);
        fields.forEach(({ propertyKey, dtoKey, strategy, deserialize }) => {
            const value = dtoInstance[dtoKey];
            const processOne = (item: any) => {
                if (deserialize) return deserialize(item)
                else if (strategy === 'id') {
                    if (item?.id) {
                        return { id: item.id }
                    } else {
                        return { id: item as string }
                    }
                }
                else if (strategy === 'full') return Serializer.fromDTO(item, new entityInstance.constructor())
                else return item
            }
            if (Array.isArray(value)) {
                entityInstance[propertyKey] = value.map(item => processOne(item));
            } else {
                entityInstance[propertyKey] = processOne(value)
            }
        });
        return entityInstance;
    }
}