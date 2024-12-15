import { QueryFilterDTO, QueryFilterValueDTO } from "../../proto/common";
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
        deserialize: (dto: QueryFilterValueDTO | undefined) => {
            if (dto?.stringValue !== undefined) return dto.stringValue;
            if (dto?.numberValue !== undefined) return dto.numberValue;
            if (dto?.boolValue !== undefined) return dto.boolValue;
            throw new Error('QueryFilterDTO must have a value');
        }
    })
    public value: string | number | boolean;

    public static fromDTO(dto: QueryFilterDTO): QueryFilter {
        if (!dto.value) {
            throw new Error('QueryFilterDTO must have a value');
        }

        let value: string | number | boolean;
        if (dto.value.stringValue !== undefined) {
            value = dto.value.stringValue;
        } else if (dto.value.numberValue !== undefined) {
            value = dto.value.numberValue;
        } else if (dto.value.boolValue !== undefined) {
            value = dto.value.boolValue;
        } else {
            throw new Error('QueryFilterDTO must have a value');
        }
        return new QueryFilter(dto.field, dto.operator as Operator, value);
    }

    public toDTO(): QueryFilterDTO {
        const value: QueryFilterValueDTO = {};

        if (typeof this.value === 'string') {
            value.stringValue = this.value;
        } else if (typeof this.value === 'number') {
            value.numberValue = this.value;
        } else if (typeof this.value === 'boolean') {
            value.boolValue = this.value;
        }

        return {
            field: this.field,
            operator: this.operator,
            value
        };
    }
}