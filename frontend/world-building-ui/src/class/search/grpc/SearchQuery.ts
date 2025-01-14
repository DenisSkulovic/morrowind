import { QueryFilter } from "./QueryFilter";
import { Serializable } from "../../../decorator/serializable.decorator";
import { QueryFilterDTO, QueryFiltersDTO, SearchQueryDTO, SortByDTO } from "../../../proto/entities_pb";
import { SortBy } from "./SortBy";
import Serializer, { SerializeStrategyEnum } from "../../../serialize/serializer";
import { LooseObject } from "../../../types";

export type SearchQueryPlain = LooseObject;

export class SearchQuery {
    @Serializable()
    public page!: number;

    @Serializable()
    public pageSize!: number;

    @Serializable({ strategy: SerializeStrategyEnum.FULL, internalClass: QueryFilter, dtoClass: QueryFilterDTO, dtoArrClass: QueryFiltersDTO })
    public filters?: QueryFilter[];

    @Serializable({ strategy: SerializeStrategyEnum.FULL, internalClass: SortBy, dtoClass: SortByDTO })
    public sortBy?: SortBy;

    public static build(data: { [key: string]: any }): SearchQuery {
        const query = new SearchQuery();
        Object.assign(query, data);
        return query;
    }

    public toDTO(): SearchQueryDTO {
        return Serializer.toDTO(this, new SearchQueryDTO());
    }

    public static fromDTO(dto: SearchQueryDTO): SearchQuery {
        return Serializer.fromDTO(dto, new SearchQuery());
    }

    toPlainObj(): SearchQueryPlain {
        return JSON.parse(JSON.stringify(this));
    }
}
