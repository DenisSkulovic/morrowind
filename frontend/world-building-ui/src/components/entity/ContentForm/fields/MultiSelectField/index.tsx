import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Chip, Box } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

interface MultiSelectFieldProps {
    label: string;
    value: string[];
    onChange: (value: string[]) => void;
    options?: string[];
    placeholder?: string;
    required?: boolean;
    fetchFn?: () => Promise<any[]>;
}

const MultiSelectField: React.FC<MultiSelectFieldProps> = ({
    label,
    value = [],
    onChange,
    options = [],
    placeholder,
    required = false,
    fetchFn
}) => {
    const [availableOptions, setAvailableOptions] = React.useState<string[]>(options);

    React.useEffect(() => {
        const loadOptions = async () => {
            if (fetchFn) {
                try {
                    const results = await fetchFn();
                    setAvailableOptions(results.map(r => r.id || r.name));
                } catch (error) {
                    console.error('Error fetching options:', error);
                }
            }
        };

        loadOptions();
    }, [fetchFn]);

    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const newValue = event.target.value;
        onChange(typeof newValue === 'string' ? newValue.split(',') : newValue);
    };

    return (
        <FormControl fullWidth required={required}>
            <InputLabel>{label}</InputLabel>
            <Select
                multiple
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                    </Box>
                )}
            >
                {availableOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default MultiSelectField;
