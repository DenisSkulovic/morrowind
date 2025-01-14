import { createUnionType } from '@nestjs/graphql';
import { ContentEntityMapService } from '../../../CONTENT_ENTITY_MAP';
import { EntityEnum } from '../../../common/enum/EntityEnum';

const allEntities = Object.values(EntityEnum).map(entity => ContentEntityMapService.getEntityConstructor(entity))

export const ContentUnion = createUnionType({
    name: 'ContentUnion',
    types: () => allEntities,
    resolveType: (value) => {
        return ContentEntityMapService.getEntityConstructor(value.constructor.name)
    }
});