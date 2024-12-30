import React from 'react';
import { FormControlLabel, Checkbox, Box } from '@mui/material';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';
import { ErrorComp } from '../../DynamicForm/ErrorComp';

interface CheckboxFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: boolean;
    onChange: (newValue: boolean) => void;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
    formFieldDefinition,
    value,
    onChange,
    error,
    readOnly
}) => {
    if (error && typeof error === 'object') throw new Error('Received error as object. CheckboxField does not support nested errors.');
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
                        disabled={formFieldDefinition.disabled || readOnly}
                        sx={{ mr: 1 }}
                    />
                }
                label={formFieldDefinition.label}
            />
            <ErrorComp text={error} />
        </Box>
    );
};

export default CheckboxField;
