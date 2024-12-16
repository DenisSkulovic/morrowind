import React from 'react';
import { FormControl, InputLabel, TextField } from '@mui/material';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';

interface NumberFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: number | undefined;
    onChange: (newValue: number | undefined) => void;
}

const NumberField: React.FC<NumberFieldProps> = ({
    formFieldDefinition,
    value,
    onChange
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
        <FormControl fullWidth required={formFieldDefinition.required}>
            <InputLabel>{formFieldDefinition.label}</InputLabel>
            <TextField
                type="number"
                value={value ?? ''}
                onChange={handleChange}
                placeholder={formFieldDefinition.placeholder}
                fullWidth
            />
        </FormControl>
    );
};

export default NumberField;
