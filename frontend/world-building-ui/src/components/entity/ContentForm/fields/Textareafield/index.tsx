import React from 'react';
import { FormControl, InputLabel, TextField } from '@mui/material';

interface TextAreaFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    rows?: number;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
    label,
    value,
    onChange,
    placeholder,
    required = false,
    rows = 4
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <FormControl fullWidth required={required}>
            <InputLabel>{label}</InputLabel>
            <TextField
                multiline
                rows={rows}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                fullWidth
            />
        </FormControl>
    );
};

export default TextAreaField;
