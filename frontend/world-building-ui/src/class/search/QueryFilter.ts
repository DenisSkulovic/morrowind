import { Serializable } from "../../decorator/serializable.decorator";
import { QueryFilterValueDTO } from "../../proto/common_pb";

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

    @Serializable()
    public operator!: QueryFilterOperatorEnum;

    @Serializable({
        serialize: serializeQueryFilterValue,
        deserialize: deserializeQueryFilterValue
    })
    public value!: string | number | boolean;

    public static build(data: { [key: string]: any }): QueryFilter {

        const filter = new QueryFilter();
        Object.assign(filter, data);
        return filter;
    }
}

function serializeQueryFilterValue(value: string | number | boolean): QueryFilterValueDTO {
    const dto = new QueryFilterValueDTO();
    if (typeof value === 'string') dto.setStringvalue(value);
    if (typeof value === 'number') dto.setNumbervalue(value);
    if (typeof value === 'boolean') dto.setBoolvalue(value);
    return dto;
}

function deserializeQueryFilterValue(dto: QueryFilterValueDTO): string | number | boolean {
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