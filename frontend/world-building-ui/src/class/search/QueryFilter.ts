import { QueryFilterDTO } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";

type Operator = 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'contains' | 'regex';

export class QueryFilter {
    constructor(
        field: string,
        operator: Operator,
        value: string | number | boolean
    ) {
        this.field = field;
        this.operator = operator;
        this.value = value;
    }

    @Serializable()
    public field: string;

    @Serializable()
    public operator: Operator;

    @Serializable({
        serialize: (value: string | number | boolean) => {
            if (typeof value === 'string') return { stringValue: value };
            if (typeof value === 'number') return { numberValue: value };
            if (typeof value === 'boolean') return { boolValue: value };
            return {};
        },
        deserialize: (dto: any) => {
            if (dto.stringValue !== undefined) return dto.stringValue;
            if (dto.numberValue !== undefined) return dto.numberValue;
            if (dto.boolValue !== undefined) return dto.boolValue;
            throw new Error('QueryFilterDTO must have a value');
        }
    })
    public value: string | number | boolean;

    public static fromDTO(dto: QueryFilterDTO): QueryFilter {
        let value: string | number | boolean;
        if (dto.stringValue !== undefined) {
            value = dto.stringValue;
        } else if (dto.numberValue !== undefined) {
            value = dto.numberValue;
        } else if (dto.boolValue !== undefined) {
            value = dto.boolValue;
        } else {
            throw new Error('QueryFilterDTO must have a value');
        }
        return new QueryFilter(dto.field, dto.operator as Operator, value);
    }

    public toDTO(filter: QueryFilter): QueryFilterDTO {
        const dto: QueryFilterDTO = {
            field: filter.field,
            operator: filter.operator
        };

        if (typeof filter.value === 'string') {
            dto.stringValue = filter.value;
        } else if (typeof filter.value === 'number') {
            dto.numberValue = filter.value;
        } else if (typeof filter.value === 'boolean') {
            dto.boolValue = filter.value;
        }

        return dto;
    }
}