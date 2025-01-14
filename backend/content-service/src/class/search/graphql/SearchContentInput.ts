import {
    InputType as GQLInputType,
    Field as GQLField,
} from '@nestjs/graphql';
import { EntitySearchQueryInput } from './EntitySearchQueryInput';
import { DataSourceEnum } from '../../../common/enum/DataSourceEnum';



@GQLInputType()
export class SearchContentInput {
    @GQLField()
    entityName!: string;

    @GQLField(() => EntitySearchQueryInput)
    query!: EntitySearchQueryInput;

    @GQLField(() => String, { nullable: true })
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
        const input = new SearchContentInput();
        input.entityName = body.entityName;
        input.query = EntitySearchQueryInput.build(body.query);
        input.source = body.source;
        return input;
    }
}
