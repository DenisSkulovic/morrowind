import { common } from "../../proto/common";
import { Serializer } from "../../serialize/serializer";
import { QueryFilter } from "./QueryFilter";
import { Serializable } from "../../decorator/serializable.decorator";

export class SearchQuery {
    constructor(
        page: number,
        pageSize: number,
        filters?: QueryFilter[],
        sortBy?: {
            field: string;
            direction: 'asc' | 'desc';
        },
    ) {
        this.page = page;
        this.pageSize = pageSize;
        this.filters = filters;
        this.sortBy = sortBy;
    }

    @Serializable()
    public page: number;

    @Serializable()
    public pageSize: number;

    @Serializable({ strategy: 'full' })
    public filters?: QueryFilter[];

    @Serializable()
    public sortBy?: {
        field: string;
        direction: 'asc' | 'desc';
    };

    public toDTO(): common.SearchQueryDTO {
        return Serializer.toDTO(this);
    }

    public static fromDTO(dto: common.SearchQueryDTO): SearchQuery {
        const query = new SearchQuery(
            dto.page || 0,
            dto.pageSize || 10,
            dto.filters?.map(QueryFilter.fromDTO) || [],
            dto.sortBy ? {
                field: dto.sortBy.field,
                direction: dto.sortBy.direction as 'asc' | 'desc'
            } : undefined
        );
        return Serializer.fromDTO(dto, query);
    }
}
