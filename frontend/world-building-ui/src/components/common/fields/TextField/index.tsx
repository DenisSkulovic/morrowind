import React from 'react';
import { FormControl, InputLabel, TextField as MuiTextField } from '@mui/material';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';

interface TextFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: string;
    onChange: (newValue: string) => void;
    error: string | undefined;
}

const TextField: React.FC<TextFieldProps> = ({
    formFieldDefinition,
    value,
    onChange,
    error
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <FormControl fullWidth required={formFieldDefinition.required} disabled={formFieldDefinition.disabled}>
            <InputLabel>{formFieldDefinition.label}</InputLabel>
            <MuiTextField
                value={value}
                onChange={handleChange}
                placeholder={formFieldDefinition.placeholder}
                error={!!error}
                helperText={error}
                fullWidth
            />
        </FormControl>
    );
};

export default TextField;
