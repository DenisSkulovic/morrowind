import React from 'react';
import { FormControl, InputLabel, TextField, Box, FormHelperText } from '@mui/material';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';
import { ErrorComp } from '../../DynamicForm/ErrorComp';

interface NumberFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: number | undefined;
    onChange: (newValue: number | undefined) => void;
}

const NumberField: React.FC<NumberFieldProps> = ({
    formFieldDefinition,
    value,
    onChange,
    error,
    readOnly
}) => {
    if (error && typeof error === 'object') throw new Error('Received error as object. NumberField does not support nested errors.');
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
                <FormControl fullWidth required={formFieldDefinition.required} disabled={readOnly}>
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
            <ErrorComp text={error} />
        </>
    );
};

export default NumberField;
