import { useState } from 'react';
import { Box, TextField, InputAdornment, IconButton, List, ListItem, ListItemText, ListItemIcon, Paper } from '@mui/material';
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material';

interface SearchResult {
    id: string;
    type: 'character' | 'item' | 'faction' | 'trait' | 'religion';
    title: string;
    subtitle?: string;
}

export const GlobalSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isSearching, setIsSearching] = useState(false);

    const handleSearch = async (term: string) => {
        setSearchTerm(term);

        if (!term) {
            setResults([]);
            return;
        }

        setIsSearching(true);

        // TODO: Implement actual search logic using ContentService
        // This is just mock data for now
        const mockResults: SearchResult[] = [
            { id: '1', type: 'character', title: 'John Doe', subtitle: 'Human Warrior' },
            { id: '2', type: 'item', title: 'Excalibur', subtitle: 'Legendary Sword' },
            { id: '3', type: 'faction', title: 'Thieves Guild', subtitle: 'Criminal Organization' }
        ];

        setResults(mockResults);
        setIsSearching(false);
    };

    const clearSearch = () => {
        setSearchTerm('');
        setResults([]);
    };

    return (
        <Box sx={{ position: 'relative', width: '100%' }}>
            <TextField
                fullWidth
                placeholder="Search across all content..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon color="action" />
                        </InputAdornment>
                    ),
                    endAdornment: searchTerm && (
                        <InputAdornment position="end">
                            <IconButton onClick={clearSearch} size="small">
                                <ClearIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 2
                    }
                }}
            />

            {results.length > 0 && (
                <Paper
                    sx={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        mt: 1,
                        zIndex: 1000,
                        maxHeight: 400,
                        overflow: 'auto'
                    }}
                >
                    <List>
                        {results.map((result) => (
                            <ListItem
                                key={result.id}
                                component="li"
                                onClick={() => {
                                    // TODO: Implement navigation to entity
                                    console.log(`Navigate to ${result.type} ${result.id}`);
                                }}
                            >
                                <ListItemText
                                    primary={result.title}
                                    secondary={result.subtitle}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            )}
        </Box>
    );
};
