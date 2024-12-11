import { common } from "../../proto/common";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serialize/serializer";

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

    public toDTO(): common.QueryFilterDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.QueryFilterDTO): QueryFilter {
        const filter = new QueryFilter(
            dto.field,
            dto.operator as Operator,
            dto.value.stringValue ?? dto.value.numberValue ?? dto.value.boolValue ?? ''
        );
        return Serializer.fromDTO(dto, filter);
    }
}