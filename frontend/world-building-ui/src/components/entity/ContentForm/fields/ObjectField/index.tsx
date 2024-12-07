import React, { useState } from 'react';
import { FormControl, InputLabel, Box, Button, IconButton, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

type ValueType = 'string' | 'number' | 'boolean';

interface ValueRestriction {
    type: ValueType;
    min?: number; // For number type
    max?: number; // For number type
    pattern?: RegExp; // For string type
}

interface ObjectFieldProps {
    label: string;
    value: { [key: string]: any };
    onChange: (value: { [key: string]: any }) => void;
    placeholder?: string;
    required?: boolean;
    // Restrictions
    allowNewKeys?: boolean; // If false, only existing keys can be modified
    allowedKeys?: string[]; // If provided, new keys must be from this list
    valueRestrictions?: { [key: string]: ValueRestriction }; // Per-key value restrictions
    defaultValueRestriction?: ValueRestriction; // Default restriction for keys without specific restrictions
}

const ObjectField: React.FC<ObjectFieldProps> = ({
    label,
    value = {},
    onChange,
    placeholder,
    required = false,
    allowNewKeys = false,
    allowedKeys,
    valueRestrictions = {},
    defaultValueRestriction
}) => {
    const [newKey, setNewKey] = useState('');
    const [newValue, setNewValue] = useState('');
    const [error, setError] = useState<string | null>(null);

    const validateValue = (key: string, val: string): { isValid: boolean; parsedValue: any } => {
        const restriction = valueRestrictions[key] || defaultValueRestriction;
        if (!restriction) {
            return { isValid: true, parsedValue: val };
        }

        switch (restriction.type) {
            case 'number':
                const num = Number(val);
                if (isNaN(num)) {
                    return { isValid: false, parsedValue: null };
                }
                if (restriction.min !== undefined && num < restriction.min) {
                    return { isValid: false, parsedValue: null };
                }
                if (restriction.max !== undefined && num > restriction.max) {
                    return { isValid: false, parsedValue: null };
                }
                return { isValid: true, parsedValue: num };

            case 'boolean':
                const lower = val.toLowerCase();
                if (lower !== 'true' && lower !== 'false') {
                    return { isValid: false, parsedValue: null };
                }
                return { isValid: true, parsedValue: lower === 'true' };

            case 'string':
                if (restriction.pattern && !restriction.pattern.test(val)) {
                    return { isValid: false, parsedValue: null };
                }
                return { isValid: true, parsedValue: val };

            default:
                return { isValid: true, parsedValue: val };
        }
    };

    const handleAddField = () => {
        if (!allowNewKeys) {
            setError('Adding new keys is not allowed');
            return;
        }

        if (allowedKeys && !allowedKeys.includes(newKey)) {
            setError('This key is not allowed');
            return;
        }

        const { isValid, parsedValue } = validateValue(newKey, newValue);
        if (!isValid) {
            setError('Invalid value for the specified type');
            return;
        }

        const updatedValue = {
            ...value,
            [newKey]: parsedValue
        };
        onChange(updatedValue);
        setNewKey('');
        setNewValue('');
        setError(null);
    };

    const handleRemoveField = (key: string) => {
        if (!allowNewKeys) {
            setError('Removing fields is not allowed');
            return;
        }
        const updatedValue = { ...value };
        delete updatedValue[key];
        onChange(updatedValue);
    };

    const handleValueChange = (key: string, newVal: string) => {
        const { isValid, parsedValue } = validateValue(key, newVal);
        if (!isValid) {
            setError('Invalid value for the specified type');
            return;
        }

        const updatedValue = {
            ...value,
            [key]: parsedValue
        };
        onChange(updatedValue);
        setError(null);
    };

    return (
        <FormControl fullWidth required={required}>
            <InputLabel>{label}</InputLabel>
            <Box sx={{ mt: 2 }}>
                {Object.entries(value).map(([key, val]) => (
                    <Box
                        key={key}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            mb: 1
                        }}
                    >
                        <TextField
                            disabled
                            value={key}
                            label="Key"
                            size="small"
                            sx={{ flexBasis: '40%' }}
                        />
                        <TextField
                            value={val.toString()}
                            onChange={(e) => handleValueChange(key, e.target.value)}
                            label="Value"
                            size="small"
                            sx={{ flexBasis: '60%' }}
                            error={!!error}
                            helperText={error}
                        />
                        {allowNewKeys && (
                            <IconButton
                                size="small"
                                onClick={() => handleRemoveField(key)}
                                color="error"
                            >
                                <DeleteIcon />
                            </IconButton>
                        )}
                    </Box>
                ))}
                {allowNewKeys && (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
                        <TextField
                            value={newKey}
                            onChange={(e) => setNewKey(e.target.value)}
                            label="New Key"
                            size="small"
                            sx={{ flexBasis: '40%' }}
                            placeholder={placeholder}
                            select={!!allowedKeys}
                            SelectProps={{ native: true }}
                        >
                            {allowedKeys && [
                                <option key="" value=""></option>,
                                ...allowedKeys.map(key => (
                                    <option key={key} value={key}>{key}</option>
                                ))
                            ]}
                        </TextField>
                        <TextField
                            value={newValue}
                            onChange={(e) => setNewValue(e.target.value)}
                            label="New Value"
                            size="small"
                            sx={{ flexBasis: '60%' }}
                            error={!!error}
                            helperText={error}
                        />
                        <Button
                            startIcon={<AddIcon />}
                            onClick={handleAddField}
                            variant="outlined"
                            disabled={!newKey || !newValue}
                            size="small"
                        >
                            Add
                        </Button>
                    </Box>
                )}
            </Box>
        </FormControl>
    );
};

export default ObjectField;
