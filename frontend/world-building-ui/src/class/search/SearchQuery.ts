import { QueryFilter } from "./QueryFilter";
import { Serializable } from "../../decorator/serializable.decorator";
import { QueryFilterDTO, SearchQueryDTO, SortByDTO } from "../../proto/common_pb";
import { SortBy } from "./SortBy";
import { Serializer } from "../../serialize/serializer";


export class SearchQuery {
    @Serializable()
    public page!: number;

    @Serializable()
    public pageSize!: number;

    @Serializable({ strategy: 'full', getDTOInstance: () => new QueryFilterDTO() })
    public filters?: QueryFilter[];

    @Serializable({ strategy: 'full', getDTOInstance: () => new SortByDTO() })
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
}
