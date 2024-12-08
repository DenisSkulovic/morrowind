import { useState } from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { EntityListSearch } from '../../../../../components/entities/EntityListSearch';
import { EntityListActions } from '../../../../../components/entities/EntityListActions';
import { EntityListFilters } from '../../../../../components/entities/EntityListFilters';
import EntityListTable from '../../../../../components/entities/EntityListTable';

const EntityListPage = () => {
    const dispatch = useAppDispatch();
    const [selectedEntityType, setSelectedEntityType] = useState('characters');
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({});
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    const entityClass = getEntityClass(selectedEntityType);
    const displayConfig = Reflect.getMetadata('entityDisplay', entityClass);
    const displayFields = Reflect.getMetadata('displayFields', entityClass) || [];
    const filterOptions = Reflect.getMetadata('filterOptions', entityClass) || [];

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
                            entityType={selectedEntityType}
                            selectedItems={selectedItems}
                        />
                    </Box>

                    <EntityListFilters
                        filterOptions={filterOptions}
                        onChange={handleFilterChange}
                    />
                </Paper>

                <EntityListTable
                    entityType={selectedEntityType}
                    columns={displayFields}
                    filters={filters}
                    searchQuery={searchQuery}
                    onSelectionChange={handleSelectionChange}
                />
            </Box>
        </Container>
    );
};

export default EntityListPage;
