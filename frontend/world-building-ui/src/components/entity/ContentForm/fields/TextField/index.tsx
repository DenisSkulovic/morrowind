import React from 'react';
import { FormControl, InputLabel, TextField as MuiTextField } from '@mui/material';

interface TextFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    error?: string;
}

const TextField: React.FC<TextFieldProps> = ({
    label,
    value,
    onChange,
    placeholder,
    required = false,
    disabled = false,
    error
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <FormControl fullWidth required={required} disabled={disabled}>
            <InputLabel>{label}</InputLabel>
            <MuiTextField
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                error={!!error}
                helperText={error}
                fullWidth
            />
        </FormControl>
    );
};

export default TextField;
