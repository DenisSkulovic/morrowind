
import { SearchFilterInput } from './SearchFilterInput';
import { NestedFilterInput } from './NestedFilterInput';


export class EntitySearchQueryInput {
    filters?: SearchFilterInput[];
    nestedFilters?: NestedFilterInput[];
    relations?: string[];
    page!: number;
    pageSize!: number;

    static validate(body: any): void {
        // Validate mandatory fields
        if (!body.page) throw new Error('Page is required');
        if (!body.pageSize) throw new Error('Page size is required');

        // Validate types
        if (body.filters) {
            if (!Array.isArray(body.filters)) throw new Error('Filters must be an array');
            body.filters.forEach((filter: any) => {
                if (typeof filter !== 'object' || !filter.field || !filter.operator || !filter.value) throw new Error('Filter must be an object with field, operator, and value');
            });
        }
        if (body.nestedFilters) {
            if (!Array.isArray(body.nestedFilters)) throw new Error('Nested filters must be an array');
            body.nestedFilters.forEach((nestedFilter: any) => {
                if (typeof nestedFilter !== 'object' || !nestedFilter.relation || !nestedFilter.filters) throw new Error('Nested filter must be an object with relation and filters');
            });
        }
        if (body.relations) {
            if (!Array.isArray(body.relations)) throw new Error('Relations must be an array');
            body.relations.forEach((relation: any) => {
                if (typeof relation !== 'string') throw new Error('Relation must be a string');
            });
        }
        if (typeof body.page !== 'number') throw new Error('Page must be a number');
        if (typeof body.pageSize !== 'number') throw new Error('Page size must be a number');
    }

    static build(body: any): EntitySearchQueryInput {
        EntitySearchQueryInput.validate(body);
        const input = new EntitySearchQueryInput();
        input.filters = body.filters.map((filter: any) => SearchFilterInput.build(filter));
        input.nestedFilters = body.nestedFilters.map((nestedFilter: any) => NestedFilterInput.build(nestedFilter));
        input.relations = body.relations;
        input.page = body.page;
        input.pageSize = body.pageSize;
        return input;
    }
}
