import {
    InputType as GQLInputType,
    Field as GQLField,
} from '@nestjs/graphql';
import { QueryFilterOperatorEnum } from '../../../enum/QueryFilterOperatorEnum';

@GQLInputType()
export class SearchFilterInput {
    @GQLField()
    field!: string;

    @GQLField()
    operator!: QueryFilterOperatorEnum;

    @GQLField()
    value!: string;

    static validate(body: any): void {
        // Validate mandatory fields
        if (!body.field) throw new Error('Field is required');
        if (!body.operator) throw new Error('Operator is required');
        if (!body.value) throw new Error('Value is required');

        // Validate types
        if (typeof body.field !== 'string') throw new Error('Field must be a string');
        if (!Object.values(QueryFilterOperatorEnum).includes(body.operator)) throw new Error('Operator must be a valid QueryFilterOperatorEnum value');
        if (typeof body.value !== 'string') throw new Error('Value must be a string');
    }

    static build(body: any): SearchFilterInput {
        const input = new SearchFilterInput();
        input.field = body.field;
        input.operator = body.operator;
        input.value = body.value;
        return input;
    }
}