import { SearchQueryDTO } from "../../proto/common";
import { QueryFilter } from "./QueryFilter";
import { Serializable } from "../../decorator/serializable.decorator";
import { Serializer } from "../../serializer";

export class SearchQuery {
    @Serializable()
    public page!: number;

    @Serializable()
    public pageSize!: number;

    @Serializable({ strategy: 'full' })
    public filters?: QueryFilter[];

    @Serializable()
    public sortBy?: {
        field: string;
        direction: 'asc' | 'desc';
    };

    static build(body: any): SearchQuery {
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
