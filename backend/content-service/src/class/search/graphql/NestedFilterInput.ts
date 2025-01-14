import {
    InputType as GQLInputType,
    Field as GQLField,
} from '@nestjs/graphql';
import { SearchFilterInput } from './SearchFilterInput';


@GQLInputType()
export class NestedFilterInput {
    @GQLField()
    relation!: string;

    @GQLField(() => [SearchFilterInput])
    filters!: SearchFilterInput[];

    static validate(body: any): void {
        // Validate mandatory fields
        if (!body.relation) throw new Error('Relation is required');
        if (!body.filters) throw new Error('Filters are required');

        // Validate types
        if (typeof body.relation !== 'string') throw new Error('Relation must be a string');
        if (!Array.isArray(body.filters)) throw new Error('Filters must be an array');
    }

    static build(body: any): NestedFilterInput {
        const input = new NestedFilterInput();
        input.relation = body.relation;
        input.filters = body.filters.map((filter: any) => SearchFilterInput.build(filter));
        return input;
    }
}
