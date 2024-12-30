import React from 'react';
import { FormControl, InputLabel, TextField, Box, FormHelperText } from '@mui/material';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';
import { ErrorComp } from '../../DynamicForm/ErrorComp';

interface TextAreaFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: string;
    onChange: (newValue: string) => void;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
    formFieldDefinition,
    value,
    onChange,
    error,
    readOnly
}) => {
    if (error && typeof error === 'object') throw new Error('Received error as object. TextAreaField does not support nested errors.');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <>
            <Box sx={{ mt: 2, mb: 2 }}>
                <FormControl fullWidth required={formFieldDefinition.required} disabled={readOnly}>
                    <InputLabel shrink>{formFieldDefinition.label}</InputLabel>
                    <TextField
                        multiline
                        rows={4}
                        value={value}
                        onChange={handleChange}
                        placeholder={formFieldDefinition.placeholder}
                        fullWidth
                        variant="outlined"
                        sx={{ mt: 1 }}
                        disabled={readOnly}
                    />
                </FormControl>
            </Box>
            <ErrorComp text={error} />
        </>
    );
};

export default TextAreaField;
