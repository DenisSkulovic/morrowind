import { SearchQueryDTO } from "../../proto/common";
import { QueryFilter } from "./QueryFilter";
import { Serializable } from "../../../../common/decorator/serializable.decorator";
import { Serializer, SerializeStrategyEnum } from "../serializer/serializer";

export class SearchQuery {
    @Serializable()
    public page!: number;

    @Serializable()
    public pageSize!: number;

    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: QueryFilter })
    public filters?: QueryFilter[];

    @Serializable()
    public sortBy?: {
        field: string;
        direction: 'asc' | 'desc';
    };

    static build(body: Partial<SearchQuery>): SearchQuery {
        const query = new SearchQuery()
        Object.assign(query, body)
        return query
    }

    public static fromDTO(dto: SearchQueryDTO): SearchQuery {
        return Serializer.fromDTO(dto, new SearchQuery());
    }

    public toDTO(): SearchQueryDTO {
        return Serializer.toDTO(this);
    }
}
