import React, { useState, useEffect } from 'react';
import { Box, TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { debounce } from 'lodash';

interface EntityListSearchProps {
    onSearch: (searchTerm: string) => void;
    placeholder?: string;
}

export const EntityListSearch: React.FC<EntityListSearchProps> = ({
    onSearch,
    placeholder = 'Search...'
}) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Debounce the search to avoid too many API calls
    const debouncedSearch = debounce((term: string) => {
        onSearch(term);
    }, 300);

    useEffect(() => {
        debouncedSearch(searchTerm);
        return () => {
            debouncedSearch.cancel();
        };
    }, [searchTerm]);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleClear = () => {
        setSearchTerm('');
        onSearch('');
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 600, mb: 2 }}>
            <TextField
                fullWidth
                variant="outlined"
                size="small"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder={placeholder}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon color="action" />
                        </InputAdornment>
                    ),
                    endAdornment: searchTerm && (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="clear search"
                                onClick={handleClear}
                                edge="end"
                                size="small"
                            >
                                <ClearIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
            />
        </Box>
    );
};
