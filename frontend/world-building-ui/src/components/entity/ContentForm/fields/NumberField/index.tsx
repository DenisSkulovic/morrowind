import React from 'react';
import { FormControl, InputLabel, TextField } from '@mui/material';

interface NumberFieldProps {
    label: string;
    value: number | undefined;
    onChange: (value: number | undefined) => void;
    placeholder?: string;
    required?: boolean;
}

const NumberField: React.FC<NumberFieldProps> = ({
    label,
    value,
    onChange,
    placeholder,
    required = false
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        if (newValue === '') {
            onChange(undefined);
        } else {
            const numberValue = parseFloat(newValue);
            if (!isNaN(numberValue)) {
                onChange(numberValue);
            }
        }
    };

    return (
        <FormControl fullWidth required={required}>
            <InputLabel>{label}</InputLabel>
            <TextField
                type="number"
                value={value ?? ''}
                onChange={handleChange}
                placeholder={placeholder}
                fullWidth
            />
        </FormControl>
    );
};

export default NumberField;
