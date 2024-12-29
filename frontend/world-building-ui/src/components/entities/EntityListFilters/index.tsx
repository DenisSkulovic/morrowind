import React, { useState, useEffect } from 'react';
import { Box, TextField, FormControl, Button, MenuItem, Select, InputLabel } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { QueryFilter, QueryFilterOperatorEnum } from '../../../class/search/QueryFilter';
import { FilterOptionConfig, FilterOptionTypeEnum } from '../../../decorator/filter-option.decorator';
import { SearchQuery } from '../../../class/search/SearchQuery';
import { Context } from '../../../class/Context';

interface EntityListFiltersProps {
    filterConfigs: FilterOptionConfig[];
    filters: QueryFilter[];
    onFiltersChange: (filters: QueryFilter[]) => void;
    onSearch: (filters: QueryFilter[]) => void;
    context: Context;
}

export const EntityListFilters: React.FC<EntityListFiltersProps> = ({
    filterConfigs,
    filters,
    onFiltersChange,
    onSearch,
    context,
}) => {
    const theme = useTheme();
    const [currentFilters, setCurrentFilters] = useState<QueryFilter[]>([]);
    const [selectOptions, setSelectOptions] = useState<{ [key: string]: any[] }>({});

    useEffect(() => {
        // Clone filters on mount/update
        setCurrentFilters(filters.map(f => QueryFilter.build({ ...f })));
    }, [filters]);

    useEffect(() => {
        // Load select options for any configs that need them
        filterConfigs.forEach(async (config) => {
            if (config.type === FilterOptionTypeEnum.SELECT && config.getSelectOptions) {
                const query = SearchQuery.build({ page: 1, pageSize: 100 });
                const options = await config.getSelectOptions(query, context);
                setSelectOptions(prev => ({
                    ...prev,
                    [config.field]: options
                }));
            }
        });
    }, [filterConfigs, currentFilters]);

    const handleFilterChange = (config: FilterOptionConfig, value: any) => {
        const getOperator = (config: FilterOptionConfig) => {
            if (config.enum) return QueryFilterOperatorEnum.EQUAL;
            return typeof value === 'string' ? QueryFilterOperatorEnum.CONTAINS : QueryFilterOperatorEnum.EQUAL;
        }
        // First handle updating existing filters
        const newFilters: QueryFilter[] = currentFilters.map(filter => {
            if (filter.field === config.field) {

                return QueryFilter.build({
                    ...filter,
                    value: value,
                    operator: getOperator(config)
                });
            }
            return filter;
        });

        // If no filter exists for this field yet and value is not empty, create one
        if (!currentFilters.find(f => f.field === config.field) && value !== '') {
            newFilters.push(QueryFilter.build({
                field: config.field,
                value,
                operator: getOperator(config)
            }));
        }

        // Remove any filters with empty values
        const nonEmptyFilters = newFilters.filter(filter =>
            filter.value !== '' && filter.value !== null && filter.value !== undefined
        );

        setCurrentFilters(nonEmptyFilters);
        onFiltersChange(nonEmptyFilters);
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
            {filterConfigs.map((config) => {
                switch (config.type) {
                    case FilterOptionTypeEnum.SELECT:
                        return (
                            <FormControl key={config.field} sx={{ minWidth: 200 }}>
                                <InputLabel>{config.displayName || config.field}</InputLabel>
                                <Select
                                    label={config.displayName || config.field}
                                    value={getFilterValue(config.field)}
                                    onChange={(e) => handleFilterChange(config, e.target.value)}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {config.enum ? (
                                        Object.values(config.enum).map((value: string | number) => (
                                            <MenuItem key={value} value={value}>
                                                {value}
                                            </MenuItem>
                                        ))
                                    ) : (
                                        selectOptions[config.field]?.map((option) => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option.label}
                                            </MenuItem>
                                        ))
                                    )}
                                </Select>
                            </FormControl>
                        );
                    case FilterOptionTypeEnum.NUMBER_EXACT:
                        return (
                            <FormControl key={config.field} sx={{ minWidth: 200 }}>
                                <TextField
                                    type="number"
                                    label={config.displayName || config.field}
                                    variant="outlined"
                                    value={getFilterValue(config.field)}
                                    onChange={(e) => handleFilterChange(config, Number(e.target.value))}
                                    placeholder={`Filter by ${config.displayName || config.field}...`}
                                />
                            </FormControl>
                        );
                    case FilterOptionTypeEnum.NUMBER_RANGE:
                        return (
                            <FormControl key={config.field} sx={{ minWidth: 400 }}>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <TextField
                                        type="number"
                                        label={`Min ${config.displayName || config.field}`}
                                        variant="outlined"
                                        value={getFilterValue(config.field)?.min || ''}
                                        onChange={(e) => handleFilterChange(config, {
                                            ...getFilterValue(config.field),
                                            min: Number(e.target.value)
                                        })}
                                        placeholder={`Min ${config.displayName || config.field}...`}
                                    />
                                    <TextField
                                        type="number"
                                        label={`Max ${config.displayName || config.field}`}
                                        variant="outlined"
                                        value={getFilterValue(config.field)?.max || ''}
                                        onChange={(e) => handleFilterChange(config, {
                                            ...getFilterValue(config.field),
                                            max: Number(e.target.value)
                                        })}
                                        placeholder={`Max ${config.displayName || config.field}...`}
                                    />
                                </Box>
                            </FormControl>
                        );
                    case FilterOptionTypeEnum.TEXT:
                    default:
                        return (
                            <FormControl key={config.field} sx={{ minWidth: 200 }}>
                                <TextField
                                    label={config.displayName || config.field}
                                    variant="outlined"
                                    value={getFilterValue(config.field)}
                                    onChange={(e) => handleFilterChange(config, e.target.value)}
                                    placeholder={`Filter by ${config.displayName || config.field}...`}
                                />
                            </FormControl>
                        );
                }
            })}
            <Button variant="contained" color="primary" onClick={handleSearch}>
                Search
            </Button>
        </Box>
    );
};
