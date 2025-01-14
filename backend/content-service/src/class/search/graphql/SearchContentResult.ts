import {
    Field as GQLField,
    ObjectType as GQLObjectType,
} from '@nestjs/graphql';
import { ContentBase } from '../../../ContentBase';
import { ContentUnion } from './ContentUnion';
import { ContentEntityMapService } from '../../../CONTENT_ENTITY_MAP';



@GQLObjectType()
export class SearchContentResult {
    @GQLField()
    entityName!: string;

    @GQLField(() => [ContentUnion])
    items!: ContentBase[];

    static validate(body: any): void {
        // Validate mandatory fields
        if (!body.entityName) throw new Error('Entity name is required');
        if (!body.items) throw new Error('Items are required');

        // Validate types
        if (typeof body.entityName !== 'string') throw new Error('Entity name must be a string');
        if (!Array.isArray(body.items)) throw new Error('Items must be an array');
        body.items.forEach((item: any) => {
            if (typeof item !== 'object' || item === null) throw new Error('Items must be an array of objects');
        });
    }

    static build(body: any): SearchContentResult {
        const result = new SearchContentResult();
        result.entityName = body.entityName;
        result.items = body.items.map((item: any) => {
            const entityName = item.targetEntity
            const entityConstructor = ContentEntityMapService.getEntityConstructor(entityName)
            return entityConstructor.build(item)
        });
        return result;
    }
}