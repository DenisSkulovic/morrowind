import { ApolloError, useQuery } from "@apollo/client";
import { SMART_SEARCH_CONTENT, SmartSearchResponse } from "../graphql/queries/SMART_SEARCH_CONTENT";
import { smartSearchConfig } from '../config/smartSearch';
import { useEffect, useState } from "react";
import { SearchContentInput } from "../class/search/graphql/SearchContentInput";
import { EntitySearchQueryInput } from "../class/search/graphql/EntitySearchQueryInput";
import { DataSourceEnum } from "../enum/DataSourceEnum";
import { SearchFilterInput } from "../class/search/graphql/SearchFilterInput";

export const useSmartSearch = (searchTerm: string, source: DataSourceEnum): {
    data: SmartSearchResponse | null,
    loading: boolean,
    error: ApolloError | undefined
} => {
    const [queryOptions, setQueryOptions] = useState<SearchContentInput[] | null>(null);

    useEffect(() => {
        const queryOptions: SearchContentInput[] = smartSearchConfig.itemsToSearch.map(item => {
            return SearchContentInput.build({
                entityName: item.entityName,
                query: EntitySearchQueryInput.build({
                    page: 1,
                    pageSize: item.resultsPerPage,
                    filters: item.filters.map(filter => {
                        return SearchFilterInput.build({
                            field: filter.field,
                            operator: filter.operator,
                            value: searchTerm
                        })
                    })
                }),
                source
            })
        });
        setQueryOptions(queryOptions);
    }, [searchTerm]);

    const { data, loading, error } = useQuery(SMART_SEARCH_CONTENT, {
        variables: {
            input: queryOptions
        },
    });
    const smartSearchResponse = SmartSearchResponse.build(data);

    return { data: smartSearchResponse, loading, error };
};
