import { QueryFilterDTO, QueryFilterOperatorEnumDTO, QueryFilterValueDTO } from "../../../proto/entities";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import { QueryFilterOperatorEnum } from "../../../enum/QueryFilterOperatorEnum";


export class QueryFilter {

    @Serializable()
    public field!: string;

    @Serializable({ strategy: SerializeStrategyEnum.ENUM, internalEnum: QueryFilterOperatorEnum, protoEnum: QueryFilterOperatorEnumDTO })
    public operator!: QueryFilterOperatorEnum;

    @Serializable({
        serialize: (value: string | number | boolean) => {
            if (typeof value === 'string') return { stringValue: value };
            if (typeof value === 'number') return { numberValue: value };
            if (typeof value === 'boolean') return { boolValue: value };
            throw new Error('QueryFilterDTO must have a value');
        },
        deserialize: (dto: QueryFilterValueDTO | undefined) => {
            if (dto?.stringValue !== undefined) return dto.stringValue;
            if (dto?.numberValue !== undefined) return dto.numberValue;
            if (dto?.boolValue !== undefined) return dto.boolValue;
            throw new Error('QueryFilterDTO must have a value');
        }
    })
    public value!: string | number | boolean;

    static build(body: Partial<QueryFilter>): QueryFilter {
        const filter = new QueryFilter()
        Object.assign(filter, body)
        return filter
    }

    public static fromDTO(dto: QueryFilterDTO): QueryFilter {
        return Serializer.fromDTO(dto, new QueryFilter());
    }

    public toDTO(): QueryFilterDTO {
        return Serializer.toDTO(this);
    }
}