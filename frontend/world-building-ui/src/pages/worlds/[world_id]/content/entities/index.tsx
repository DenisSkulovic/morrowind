import { useState } from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { EntityListSearch } from '../../../../../components/entities/EntityListSearch';
import { EntityListActions } from '../../../../../components/entities/EntityListActions';
import { EntityListFilters } from '../../../../../components/entities/EntityListFilters';
import EntityListTable from '../../../../../components/entities/EntityListTable';
import { useDispatch } from 'react-redux';
import { CONTENT_ENTITY_MAP } from '../../../../../CONTENT_ENTITY_MAP';
import { ClassConstructor } from '../../../../../types';
import { ContentBase } from '../../../../../class/ContentBase';
import { EntityEnum } from '../../../../../enum/EntityEnum';
import { useRouter } from 'next/router';
import { setEntityNameInPath } from '../../../../../store/slices/contentSlice';
import { sanitizeEntityName } from '../../../../../utils/sanitizeEntityName';
import { DisplayFieldConfig, getDisplayFieldConfig } from '../../../../../decorator/display-field.decorator';
import { EntityDisplayConfig, getEntityDisplayConfig } from '../../../../../decorator/entity-display.decorator';
import { FilterOptionConfig, getFilterOptionConfig } from '../../../../../decorator/filter-option.decorator';

const EntityListPage = () => {
    const router = useRouter();
    const { entity } = router.query;
    const entityName: EntityEnum = sanitizeEntityName(entity);

    const dispatch = useDispatch();

    dispatch(setEntityNameInPath(entityName));

    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({});
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const entityClass: ClassConstructor<ContentBase> = CONTENT_ENTITY_MAP[entityName].entity;
    const displayConfig: EntityDisplayConfig = getEntityDisplayConfig(entityClass);
    const displayFields: DisplayFieldConfig[] = getDisplayFieldConfig(entityClass);
    const filterOptions: FilterOptionConfig[] = getFilterOptionConfig(entityClass);

    const handleSearch = (query: string) => {
        setSearchQuery(query);
    };

    const handleFilterChange = (newFilters: any) => {
        setFilters(newFilters);
    };

    const handleSelectionChange = (selectedIds: string[]) => {
        setSelectedItems(selectedIds);
    };

    return (
        <Container maxWidth="xl">
            <Box sx={{ py: 4 }}>
                <Typography variant="h4" sx={{ mb: 3 }}>
                    {displayConfig.title}
                </Typography>

                <Paper sx={{ p: 2, mb: 3 }}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                        <EntityListSearch
                            onSearch={handleSearch}
                            placeholder={`Search ${displayConfig.title.toLowerCase()}...`}
                        />
                        <EntityListActions
                            entityName={entityName}
                            selectedIds={selectedItems}
                            onCreateNew={() => { }}
                            onDelete={() => { }}
                            onDuplicate={() => { }}
                            onExport={() => { }}
                        />
                    </Box>

                    <EntityListFilters
                        searchTerm={searchQuery}
                        onSearchChange={handleSearch}
                        selectedTags={[]}
                        onTagsChange={() => { }}
                        availableTags={filterOptions}
                    />
                </Paper>

                <EntityListTable
                    entities={[]} // TODO: Add entities from state/API
                    onEdit={(entity) => { }} // TODO: Add edit handler
                    onDelete={(entity) => { }} // TODO: Add delete handler
                    columns={displayFields}
                    onSelectionChange={handleSelectionChange}
                />
            </Box>
        </Container>
    );
};

export default EntityListPage;
