import { DataSourceEnum } from '../../../enum/DataSourceEnum';
import { EntitySearchQueryInput } from './EntitySearchQueryInput';


export class SearchContentInput {
    entityName!: string;
    query!: EntitySearchQueryInput;
    source?: DataSourceEnum;

    static validate(body: any): void {
        // Validate mandatory fields
        if (!body.entityName) throw new Error('Entity name is required');
        if (!body.query) throw new Error('Query is required');

        // Validate types
        if (typeof body.entityName !== 'string') throw new Error('Entity name must be a string');
        if (typeof body.source !== 'string') throw new Error('Source must be a string');
    }

    static build(body: any): SearchContentInput {
        SearchContentInput.validate(body);
        const input = new SearchContentInput();
        input.entityName = body.entityName;
        input.query = EntitySearchQueryInput.build(body.query);
        input.source = body.source;
        return input;
    }
}
