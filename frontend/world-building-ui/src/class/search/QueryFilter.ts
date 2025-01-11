import { Serializable } from "../../decorator/serializable.decorator";
import { deserializeEnum } from "../../enum/util";
import { serializeEnum } from "../../enum/util";
import { QueryFilterDTO, QueryFilterOperatorEnumDTO, QueryFilterValueDTO } from "../../proto/entities_pb";
import Serializer, { SerializeStrategyEnum } from "../../serialize/serializer";

export enum QueryFilterOperatorEnum {
    EQUAL = 'eq',
    NOT_EQUAL = 'neq',
    GREATER_THAN = 'gt',
    GREATER_THAN_OR_EQUAL = 'gte',
    LESS_THAN = 'lt',
    LESS_THAN_OR_EQUAL = 'lte',
    CONTAINS = 'contains',
    REGEX = 'regex'
}


export class QueryFilter {
    @Serializable()
    public field!: string;

    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: QueryFilterOperatorEnum, protoEnum: QueryFilterOperatorEnumDTO })
    public operator!: QueryFilterOperatorEnum;

    @Serializable({
        serialize: (value: string | number | boolean): QueryFilterValueDTO => {
            const dto = new QueryFilterValueDTO();
            if (typeof value === 'string') dto.setStringvalue(value);
            else if (typeof value === 'number') dto.setNumbervalue(value);
            else if (typeof value === 'boolean') dto.setBoolvalue(value);
            else throw new Error('QueryFilterDTO must have a value');
            return dto;
        },
        deserialize: (dto: QueryFilterValueDTO): string | number | boolean => {
            switch (dto.getValueCase()) {
                case QueryFilterValueDTO.ValueCase.STRINGVALUE:
                    return dto.getStringvalue();
                case QueryFilterValueDTO.ValueCase.NUMBERVALUE:
                    return dto.getNumbervalue();
                case QueryFilterValueDTO.ValueCase.BOOLVALUE:
                    return dto.getBoolvalue();
                default:
                    throw new Error('QueryFilterValueDTO must have a value');
            }
        }
    })
    public value!: string | number | boolean;

    public static build(data: { [key: string]: any }): QueryFilter {
        const filter = new QueryFilter();
        Object.assign(filter, data);
        return filter;
    }

    public toDTO(): QueryFilterDTO {
        return Serializer.toDTO(this, new QueryFilterDTO());
    }

    public static fromDTO(dto: QueryFilterDTO): QueryFilter {
        return Serializer.fromDTO(dto, new QueryFilter());
    }
}
