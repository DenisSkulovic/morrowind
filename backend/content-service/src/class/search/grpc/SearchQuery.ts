import { SearchQueryDTO } from "../../../proto/entities";
import { QueryFilter } from "./QueryFilter";
import { Serializable } from "../../../decorator/serializable.decorator";
import { Serializer, SerializeStrategyEnum } from "../../../serializer";
import {
    Field as GQLField,
    ID as GQLID,
    ObjectType as GQLObjectType,
    InputType as GQLInputType,
} from '@nestjs/graphql';
import { SortBy } from "./SortBy";

@GQLInputType()
export class SearchQuery {
    @Serializable()
    @GQLField()
    public page!: number;

    @Serializable()
    @GQLField()
    public pageSize!: number;

    @Serializable({ strategy: SerializeStrategyEnum.FULL, asDtoArray: true, internalClass: QueryFilter })
    @GQLField(() => [QueryFilter], { nullable: true })
    public filters?: QueryFilter[];

    @Serializable({ strategy: SerializeStrategyEnum.FULL, internalClass: SortBy })
    @GQLField(() => SortBy, { nullable: true })
    public sortBy?: SortBy;

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
