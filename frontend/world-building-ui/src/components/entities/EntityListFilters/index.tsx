import React from 'react';
import { Box, TextField, FormControl, InputLabel, Select, MenuItem, Chip, OutlinedInput } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { Theme, useTheme } from '@mui/material/styles';

interface EntityListFiltersProps {
    searchTerm: string;
    onSearchChange: (value: string) => void;
    selectedTags: string[];
    onTagsChange: (tags: string[]) => void;
    availableTags: string[];
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

function getStyles(tag: string, selectedTags: string[], theme: Theme) {
    return {
        fontWeight:
            selectedTags.indexOf(tag) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export const EntityListFilters: React.FC<EntityListFiltersProps> = ({
    searchTerm,
    onSearchChange,
    selectedTags,
    onTagsChange,
    availableTags
}) => {
    const theme = useTheme();

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(event.target.value);
    };

    const handleTagChange = (event: SelectChangeEvent<typeof selectedTags>) => {
        const {
            target: { value },
        } = event;
        onTagsChange(typeof value === 'string' ? value.split(',') : value);
    };

    return (
        <Box sx={{ display: 'flex', gap: 2, p: 2, alignItems: 'flex-start' }}>
            <TextField
                label="Search"
                variant="outlined"
                value={searchTerm}
                onChange={handleSearchChange}
                sx={{ minWidth: 200 }}
                placeholder="Search entities..."
            />

            <FormControl sx={{ minWidth: 200 }}>
                <InputLabel id="tag-filter-label">Tags</InputLabel>
                <Select
                    labelId="tag-filter-label"
                    id="tag-filter"
                    multiple
                    value={selectedTags}
                    onChange={handleTagChange}
                    input={<OutlinedInput label="Tags" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {selected.map((value) => (
                                <Chip key={value} label={value} />
                            ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {availableTags.map((tag) => (
                        <MenuItem
                            key={tag}
                            value={tag}
                            style={getStyles(tag, selectedTags, theme)}
                        >
                            {tag}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};
