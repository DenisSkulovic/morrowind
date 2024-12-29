import React from 'react';
import { FormControlLabel, Checkbox, Box, FormHelperText } from '@mui/material';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';

interface CheckboxFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: boolean;
    onChange: (newValue: boolean) => void;
    error?: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
    formFieldDefinition,
    value,
    onChange,
    error
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <Box sx={{ my: 1 }}>
            <FormControlLabel
                sx={{ ml: 0 }}
                control={
                    <Checkbox
                        checked={value as boolean}
                        onChange={handleChange}
                        disabled={formFieldDefinition.disabled}
                        sx={{ mr: 1 }}
                    />
                }
                label={formFieldDefinition.label}
            />
            {error && <FormHelperText>{error}</FormHelperText>}
        </Box>
    );
};

export default CheckboxField;
