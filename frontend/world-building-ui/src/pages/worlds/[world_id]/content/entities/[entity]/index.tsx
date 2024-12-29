import { useEffect, useState } from 'react';
import { Box, Container, Typography, Paper, debounce } from '@mui/material';
import { EntityListActions } from '../../../../../../components/entities/EntityListActions';
import { EntityListFilters } from '../../../../../../components/entities/EntityListFilters';
import { EntityListTable } from '../../../../../../components/entities/EntityListTable';
import { useDispatch } from 'react-redux';
import { ContentEntityMapService } from '../../../../../../CONTENT_ENTITY_MAP';
import { ContentBase, ContentBaseStatic } from '../../../../../../class/ContentBase';
import { EntityEnum } from '../../../../../../enum/EntityEnum';
import { useRouter } from 'next/router';
import { useEntityName, useWorldId } from '../../../../../../hooks/query';
import { DisplayFieldConfig, getDisplayFieldConfig } from '../../../../../../decorator/display-field.decorator';
import { EntityDisplayConfig, getEntityDisplayConfig } from '../../../../../../decorator/entity-display.decorator';
import { FilterOptionConfig, getFilterOptionConfig } from '../../../../../../decorator/filter-option.decorator';
import { BreadcrumbItem } from '../../../../../../components/common/PageWrapper/Breadcrumbs';
import { PageModeEnum, routes } from '../../../../../../routes';
import PageWrapper from '../../../../../../components/common/PageWrapper';
import { AppDispatch } from '../../../../../../store/store';
import { SearchQuery } from '../../../../../../class/search/SearchQuery';
import { SortBy, SortByDirectionEnum } from '../../../../../../class/search/SortBy';
import { useEntityList } from '../../../../../../hooks/useEntityList';
import { ContentPlain, deleteContent, deleteContentBulk, setSearchResult } from '../../../../../../store/slices/contentSlice';
import { User } from '../../../../../../class/entities/User';
import { Account } from '../../../../../../class/entities/Account';
import { useAccount } from '../../../../../../hooks/useAccount';
import { Context } from '../../../../../../class/Context';
import { World } from '../../../../../../class/entities/World';
import { cloneDeep } from 'lodash';

const resultsPerPageOptions: number[] = [10, 25, 50, 100];
const defaultResultsPerPage: number = resultsPerPageOptions[0];


const EntityListPage = <T extends ContentBase>() => {
    const router = useRouter();
    const entityName: EntityEnum | null = useEntityName(router.query);
    const worldId: string | null = useWorldId(router.query);

    const account: Account | null = useAccount();

    const [context, setContext] = useState<Context | null>(null);
    useEffect(() => {
        if (!worldId || !account?.user) return;
        setContext(Context.build({
            world: { id: worldId } as World,
            user: { id: account?.user } as User
        }));
    }, [worldId, account?.user]);

    const dispatch = useDispatch<AppDispatch>();

    const getInitialSearchQuery = (): SearchQuery => {
        const query = new SearchQuery();
        query.page = 1;
        query.pageSize = defaultResultsPerPage;
        query.sortBy = SortBy.build({ field: 'createdAt', direction: SortByDirectionEnum.DESC });
        query.filters = [];
        return query;
    };
    const [query, setQuery] = useState<SearchQuery>(getInitialSearchQuery()); // change in query will trigger a search

    const { result, forceSearch } = useEntityList<T>(entityName, query, worldId);

    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

    const [displayConfig, setDisplayConfig] = useState<EntityDisplayConfig | null>(null);
    const [displayFields, setDisplayFields] = useState<DisplayFieldConfig[]>([]);
    const [filterOptions, setFilterOptions] = useState<FilterOptionConfig[]>([]);

    useEffect(() => {
        const entClass: ContentBaseStatic<ContentBase> | null = entityName ? ContentEntityMapService.getEntityConstructor<ContentBase>(entityName) as ContentBaseStatic<ContentBase> : null;
        setDisplayConfig(entClass ? getEntityDisplayConfig(entClass) : null);
        setDisplayFields(entClass ? getDisplayFieldConfig(entClass) : []);
        setFilterOptions(entClass ? getFilterOptionConfig(entClass) : []);
    }, [entityName]);


    const handleSearch = debounce(() => {
        forceSearch(); // need to force search because the query is the same when button is just clicked
    }, 300);

    const handleSort = (sortBy: SortBy) => {
        query.sortBy = sortBy;
        setQuery(cloneDeep(query));
    };

    const handleFilterChange = (newFilters: any) => {
        query.filters = newFilters;
        setQuery(cloneDeep(query));
    };

    const handleSelectionChange = (selectedIds: Set<string>) => {
        setSelectedIds(selectedIds);
    };

    const handleEntityEdit = (entity: T) => {
        router.push(routes.contentDetail(worldId || '', entityName || '', entity.id, PageModeEnum.EDIT));
    };

    const handleEntityDeleteBulk = (ids: Set<string>) => {
        if (!context) throw new Error('Context not found');
        dispatch(deleteContentBulk({
            entityName,
            ids,
            context: context.toPlainObj()
        }));
        // update the result
        if (!result) return;
        result.array = result.array.filter((item: ContentPlain) => !ids.has(item.id));
        result.map = Object.fromEntries(Object.entries(result.map).filter(([id]) => !ids.has(id)));
        dispatch(setSearchResult({
            entityName,
            query: query.toPlainObj(),
            results: result.toPlainObj()
        }));
    };

    const handleEntityDelete = (entity: T) => {
        if (!context) throw new Error('Context not found');
        dispatch(deleteContent({
            entityName,
            id: entity.id,
            context: context.toPlainObj()
        }));
        // update the result
        if (!result) return;
        result.array = result.array.filter((item: ContentPlain) => item.id !== entity.id);
        delete result.map[entity.id];
        dispatch(setSearchResult({
            entityName,
            query: query.toPlainObj(),
            results: result.toPlainObj()
        }));
    };

    const handleSetPage = (page: number) => {
        console.log('handleSetPage', page);
        query.page = page;
        setQuery(cloneDeep(query));
    };

    const handleSetRowsPerPage = (rowsPerPage: number) => {
        console.log('handleSetRowsPerPage', rowsPerPage);
        query.pageSize = rowsPerPage;
        setQuery(cloneDeep(query));
    };

    const handleEntityExport = (ids: Set<string>) => {
        throw new Error('Not implemented');
    };

    const [customBreadcrumbs, setCustomBreadcrumbs] = useState<BreadcrumbItem[]>([])
    useEffect(() => {
        setCustomBreadcrumbs([
            BreadcrumbItem.build({ label: 'Home', path: routes.home() }),
            BreadcrumbItem.build({ label: 'Worlds', path: routes.worlds() }),
            BreadcrumbItem.build({ label: `${worldId}`, path: routes.worldDetail(worldId || '') }),
            BreadcrumbItem.build({ label: displayConfig?.title || entityName || 'PLACEHOLDER' })
        ]);
    }, [worldId, entityName]);

    return (
        <PageWrapper customBreadcrumbs={customBreadcrumbs} accountId={account?.id} worldId={worldId || ''}>
            <Container maxWidth="xl">
                <Box sx={{ py: 4 }}>
                    <Typography variant="h4" sx={{ mb: 3 }}>
                        {displayConfig?.title || ''}
                    </Typography>

                    <Paper sx={{ p: 2, mb: 3 }}>
                        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                            <EntityListFilters
                                filterConfigs={filterOptions}
                                filters={query.filters || []}
                                onFiltersChange={handleFilterChange}
                                onSearch={handleSearch}
                            />
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                            <EntityListActions
                                entityName={entityName}
                                selectedIds={selectedIds}
                                onCreateNew={() => { }}
                                onDelete={handleEntityDeleteBulk}
                                onExport={handleEntityExport}
                            />
                        </Box>
                    </Paper>

                    <EntityListTable<T>
                        page={query.page}
                        pageSize={query.pageSize}
                        resultsPerPageOptions={resultsPerPageOptions}
                        result={result}
                        onEdit={handleEntityEdit}
                        onDelete={handleEntityDelete}
                        columns={displayFields}
                        onSelectionChange={handleSelectionChange}
                        onSort={handleSort}
                        onSetPage={handleSetPage}
                        onSetRowsPerPage={handleSetRowsPerPage}
                    />
                </Box>
            </Container>
        </PageWrapper>
    );
};

export default EntityListPage;
