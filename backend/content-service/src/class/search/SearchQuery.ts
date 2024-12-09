import { SearchQueryDTO } from "../../proto/common";
import { QueryFilter } from "./QueryFilter";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serializer";

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

    public static fromDTO(dto: SearchQueryDTO): SearchQuery {
        return new SearchQuery(
            dto.page || 0,
            dto.pageSize || 10,
            dto.filters?.map(QueryFilter.fromDTO) || [],
            dto.sortBy ? {
                field: dto.sortBy.field,
                direction: dto.sortBy.direction as 'asc' | 'desc'
            } : undefined
        );
    }

    public toDTO(): SearchQueryDTO {
        const dto: SearchQueryDTO = {
            filters: this.filters?.map(Serializer.toDTO) || [],
            sortBy: this.sortBy ? {
                field: this.sortBy.field,
                direction: this.sortBy.direction
            } : undefined,
            page: this.page,
            pageSize: this.pageSize
        };

        return dto;
    }
}
