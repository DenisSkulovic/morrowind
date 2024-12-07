import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

interface CheckboxFieldProps {
    label: string;
    value: boolean;
    onChange: (value: boolean) => void;
    disabled?: boolean;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
    label,
    value,
    onChange,
    disabled = false
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={value}
                    onChange={handleChange}
                    disabled={disabled}
                />
            }
            label={label}
        />
    );
};

export default CheckboxField;
