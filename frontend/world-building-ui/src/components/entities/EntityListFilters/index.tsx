import React, { useState, useEffect } from 'react';
import { Box, TextField, FormControl, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { QueryFilter, QueryFilterOperatorEnum } from '../../../class/search/QueryFilter';
import { FilterOptionConfig } from '../../../decorator/filter-option.decorator';

interface EntityListFiltersProps {
    filterConfigs: FilterOptionConfig[];
    filters: QueryFilter[];
    onFiltersChange: (filters: QueryFilter[]) => void;
    onSearch: (filters: QueryFilter[]) => void;
}

export const EntityListFilters: React.FC<EntityListFiltersProps> = ({
    filterConfigs,
    filters,
    onFiltersChange,
    onSearch
}) => {
    const theme = useTheme();
    const [currentFilters, setCurrentFilters] = useState<QueryFilter[]>([]);

    useEffect(() => {
        // Clone filters on mount/update
        setCurrentFilters(filters.map(f => QueryFilter.build({ ...f })));
    }, [filters]);

    const handleFilterChange = (field: string, value: any) => {
        const newFilters = currentFilters.map(filter => {
            if (filter.field === field) {
                return QueryFilter.build({
                    ...filter,
                    value: value,
                    operator: typeof value === 'string' ? QueryFilterOperatorEnum.CONTAINS : QueryFilterOperatorEnum.EQUAL
                });
            }
            return filter;
        });

        // If no filter exists for this field yet, create one
        if (!currentFilters.find(f => f.field === field)) {
            newFilters.push(QueryFilter.build({
                field,
                value,
                operator: typeof value === 'string' ? QueryFilterOperatorEnum.CONTAINS : QueryFilterOperatorEnum.EQUAL
            }));
        }

        setCurrentFilters(newFilters);
        onFiltersChange(newFilters);
    };

    const getFilterValue = (field: string): any => {
        const filter = currentFilters.find(f => f.field === field);
        return filter ? filter.value : '';
    };

    const handleSearch = () => {
        onSearch(currentFilters);
    };

    return (
        <Box sx={{ display: 'flex', gap: 2, p: 2, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {filterConfigs.map((config) => (
                <FormControl key={config.field} sx={{ minWidth: 200 }}>
                    <TextField
                        label={config.displayName || config.field}
                        variant="outlined"
                        value={getFilterValue(config.field)}
                        onChange={(e) => handleFilterChange(config.field, e.target.value)}
                        placeholder={`Filter by ${config.displayName || config.field}...`}
                    />
                </FormControl>
            ))}
            <Button variant="contained" color="primary" onClick={handleSearch}>
                Search
            </Button>
        </Box>
    );
};
