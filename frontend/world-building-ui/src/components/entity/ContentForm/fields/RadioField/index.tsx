import React from 'react';
import { FormControl, InputLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface RadioFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
    required?: boolean;
}

const RadioField: React.FC<RadioFieldProps> = ({
    label,
    value,
    onChange,
    options,
    required = false
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <FormControl fullWidth required={required}>
            <InputLabel>{label}</InputLabel>
            <RadioGroup
                value={value}
                onChange={handleChange}
            >
                {options.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default RadioField;
