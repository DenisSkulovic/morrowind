import { Resolver, Query, Args } from '@nestjs/graphql';
import { ContentService } from './content.service';
import { ContentBase } from '../../ContentBase';
import { SearchContentResult } from '../../class/search/graphql/SearchContentResult';
import { SearchContentInput } from '../../class/search/graphql/SearchContentInput';


@Resolver()
export class ContentResolver {
    constructor(private readonly contentService: ContentService<ContentBase>) { }

    @Query(() => [SearchContentResult], { name: 'searchContent' })
    async searchContent(
        @Args('input', { type: () => [SearchContentInput] }) input: SearchContentInput[],
    ): Promise<SearchContentResult[]> {
        return this.contentService.searchGraphQL(input);
    }
}