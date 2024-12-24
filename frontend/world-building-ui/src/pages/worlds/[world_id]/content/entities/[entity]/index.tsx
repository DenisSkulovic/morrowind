import { useState } from 'react';
import { Box, Container, Typography, Paper, debounce } from '@mui/material';
import { EntityListActions } from '../../../../../../components/entities/EntityListActions';
import { EntityListFilters } from '../../../../../../components/entities/EntityListFilters';
import { EntityListTable } from '../../../../../../components/entities/EntityListTable';
import { useDispatch } from 'react-redux';
import { CONTENT_ENTITY_MAP } from '../../../../../../CONTENT_ENTITY_MAP';
import { ClassConstructor } from '../../../../../../types';
import { ContentBase } from '../../../../../../class/ContentBase';
import { EntityEnum } from '../../../../../../enum/EntityEnum';
import { useRouter } from 'next/router';
import { sanitizeEntityName, sanitizeWorldId } from '../../../../../../utils/sanitize';
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
import { ContentPlain, createContent, deleteContent, deleteContentBulk, searchContent, setSearchResult } from '../../../../../../store/slices/contentSlice';
import { User } from '../../../../../../class/entities/User';
import { Account } from '../../../../../../class/entities/Account';
import { useAccount } from '../../../../../../hooks/useAccount';
import { Context } from '../../../../../../class/Context';
import { World } from '../../../../../../class/entities/World';
import { QueryFilter } from '../../../../../../class/search/QueryFilter';

const resultsPerPageOptions: number[] = [10, 25, 50, 100];
const defaultResultsPerPage: number = resultsPerPageOptions[0];


const EntityListPage = <T extends ContentBase>() => {
    const router = useRouter();
    const entityName: EntityEnum = sanitizeEntityName(router.query.entity);
    const worldId: string = sanitizeWorldId(router.query.world_id);

    const account: Account | null = useAccount();

    const context: Context = Context.build({
        world: { id: worldId } as World,
        user: { id: account?.user } as User
    });

    const dispatch = useDispatch<AppDispatch>();

    const getInitialSearchQuery = (): SearchQuery => {
        const query = new SearchQuery();
        query.page = 1;
        query.pageSize = defaultResultsPerPage;
        query.sortBy = SortBy.build({ field: 'createdAt', direction: SortByDirectionEnum.DESC });
        query.filters = [];
        return query;
    };

    const [searchQuery, setSearchQuery] = useState<SearchQuery>(getInitialSearchQuery());
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

    const { result } = useEntityList<T>(entityName, searchQuery, worldId);
    const { array, map, status, error, totalResults, totalPages, currentPage } = result;

    const entityClass: ClassConstructor<ContentBase> = CONTENT_ENTITY_MAP[entityName].entity;
    const displayConfig: EntityDisplayConfig = getEntityDisplayConfig(entityClass);
    const displayFields: DisplayFieldConfig[] = getDisplayFieldConfig(entityClass);
    const filterOptions: FilterOptionConfig[] = getFilterOptionConfig(entityClass);

    const handleSearch = debounce(() => {
        dispatch(searchContent({ entityName, query: searchQuery, context }));
    }, 300);

    const handleSearchTerm = (searchTerm: string) => {
        searchQuery.filters = searchTerm ? [QueryFilter.build({ field: 'name', value: searchTerm })] : [];
        setSearchQuery(searchQuery);
    };

    const handleFilterChange = (newFilters: any) => {
        searchQuery.filters = newFilters;
        setSearchQuery(searchQuery);
    };

    const handleSelectionChange = (selectedIds: Set<string>) => {
        setSelectedIds(selectedIds);
    };

    const handleEntityEdit = (entity: T) => {
        router.push(routes.contentDetail(worldId, entityName, entity.id, PageModeEnum.EDIT));
    };

    const handleEntityDeleteBulk = (ids: Set<string>) => {
        dispatch(deleteContentBulk({
            entityName,
            ids,
            context
        }));
        // update the result
        result.array = result.array.filter((item: ContentPlain) => !ids.has(item.id));
        result.map = Object.fromEntries(Object.entries(result.map).filter(([id]) => !ids.has(id)));
        dispatch(setSearchResult({
            entityName,
            query: searchQuery,
            results: result
        }));
    };

    const handleEntityDelete = (entity: T) => {
        dispatch(deleteContent({
            entityName,
            id: entity.id,
            context
        }));
        // update the result
        result.array = result.array.filter((item: ContentPlain) => item.id !== entity.id);
        delete result.map[entity.id];
        dispatch(setSearchResult({
            entityName,
            query: searchQuery,
            results: result
        }));
    };

    const handleEntityDuplicate = (entity: T) => {
        dispatch(createContent({
            entityName,
            contentBody: entity,
            context
        }));
        router.push(routes.contentDetail(worldId, entityName, entity.id, PageModeEnum.VIEW));
    };

    const handleSetPage = (page: number) => {
        searchQuery.page = page;
        setSearchQuery(searchQuery);
    };

    const handleSetRowsPerPage = (rowsPerPage: number) => {
        searchQuery.pageSize = rowsPerPage;
        setSearchQuery(searchQuery);
    };

    const handleEntityExport = (ids: Set<string>) => {
        throw new Error('Not implemented');
    };

    const customBreadcrumbs: BreadcrumbItem[] = [
        BreadcrumbItem.build({ label: 'Worlds', path: routes.worlds() }),
        BreadcrumbItem.build({ label: displayConfig.title })
    ];
    return (
        <PageWrapper customBreadcrumbs={customBreadcrumbs}>
            <Container maxWidth="xl">
                <Box sx={{ py: 4 }}>
                    <Typography variant="h4" sx={{ mb: 3 }}>
                        {displayConfig.title}
                    </Typography>

                    <Paper sx={{ p: 2, mb: 3 }}>
                        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                            <EntityListFilters
                                filterConfigs={filterOptions}
                                filters={searchQuery.filters || []}
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

                    <EntityListTable
                        query={searchQuery}
                        onSetPage={handleSetPage}
                        onSetRowsPerPage={handleSetRowsPerPage}
                        resultsPerPageOptions={resultsPerPageOptions}
                        result={result}
                        onEdit={handleEntityEdit}
                        onDelete={handleEntityDelete}
                        onDuplicate={handleEntityDuplicate}
                        onExport={handleEntityExport}
                        columns={displayFields}
                        onSelectionChange={handleSelectionChange}
                    />
                </Box>
            </Container>
        </PageWrapper>
    );
};

export default EntityListPage;
