import React from 'react';
import { FormControl, InputLabel, TextField, Box, FormHelperText } from '@mui/material';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';

interface NumberFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: number | undefined;
    onChange: (newValue: number | undefined) => void;
    error?: string;
}

const NumberField: React.FC<NumberFieldProps> = ({
    formFieldDefinition,
    value,
    onChange,
    error
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
        <>
            <Box sx={{ mt: 2, mb: 2 }}>
                <FormControl fullWidth required={formFieldDefinition.required}>
                    <InputLabel shrink>{formFieldDefinition.label}</InputLabel>
                    <TextField
                        type="number"
                        value={value ?? ''}
                        onChange={handleChange}
                        placeholder={formFieldDefinition.placeholder}
                        fullWidth
                        variant="outlined"
                        sx={{ mt: 1 }}
                    />
                </FormControl>
            </Box>
            {error && <FormHelperText>{error}</FormHelperText>}
        </>
    );
};

export default NumberField;
