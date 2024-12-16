import React from 'react';
import { FormControl, InputLabel, TextField } from '@mui/material';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';

interface TextAreaFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: string;
    onChange: (newValue: string) => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
    formFieldDefinition,
    value,
    onChange
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <FormControl fullWidth required={formFieldDefinition.required}>
            <InputLabel>{formFieldDefinition.label}</InputLabel>
            <TextField
                multiline
                rows={4}
                value={value}
                onChange={handleChange}
                placeholder={formFieldDefinition.placeholder}
                fullWidth
            />
        </FormControl>
    );
};

export default TextAreaField;
