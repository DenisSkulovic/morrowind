import { useState } from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { useAppDispatch } from '../../../store/hooks';
import { EntityListTable } from '../../../components/EntityListTable';
import { EntityListFilters } from '../../../components/EntityListFilters';
import { EntityListActions } from '../../../components/EntityListActions';
import { EntityListSearch } from '../../../components/EntityListSearch';
import { RequestStatus } from '../../../store/slices/contentSlice';

const EntityListPage = () => {
    const dispatch = useAppDispatch();
    const [selectedEntityType, setSelectedEntityType] = useState('characters');
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({});
    const [selectedItems, setSelectedItems] = useState<string[]>([]);

    // Map of entity types to their display configs
    const entityConfigs = {
        characters: {
            title: 'Characters',
            columns: ['name', 'race', 'gender', 'factions'],
            filterOptions: ['race', 'gender', 'faction', 'traits']
        },
        items: {
            title: 'Items',
            columns: ['name', 'type', 'rarity', 'value'],
            filterOptions: ['type', 'rarity', 'tags']
        },
        religions: {
            title: 'Religions',
            columns: ['name', 'description', 'rituals', 'tenets'],
            filterOptions: ['tags']
        },
        traits: {
            title: 'Traits',
            columns: ['name', 'description'],
            filterOptions: ['tags']
        }
    };

    const currentConfig = entityConfigs[selectedEntityType];

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
                    {currentConfig.title}
                </Typography>

                <Paper sx={{ p: 2, mb: 3 }}>
                    <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                        <EntityListSearch
                            onSearch={handleSearch}
                            placeholder={`Search ${currentConfig.title.toLowerCase()}...`}
                        />
                        <EntityListActions
                            entityType={selectedEntityType}
                            selectedItems={selectedItems}
                        />
                    </Box>

                    <EntityListFilters
                        filterOptions={currentConfig.filterOptions}
                        onChange={handleFilterChange}
                    />
                </Paper>

                <EntityListTable
                    entityType={selectedEntityType}
                    columns={currentConfig.columns}
                    filters={filters}
                    searchQuery={searchQuery}
                    onSelectionChange={handleSelectionChange}
                />
            </Box>
        </Container>
    );
};

export default EntityListPage;
