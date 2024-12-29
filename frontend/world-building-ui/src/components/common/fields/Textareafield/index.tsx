import React from 'react';
import { FormControl, InputLabel, TextField, Box, FormHelperText } from '@mui/material';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';

interface TextAreaFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: string;
    onChange: (newValue: string) => void;
    error?: string;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
    formFieldDefinition,
    value,
    onChange,
    error
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <>
            <Box sx={{ mt: 2, mb: 2 }}>
                <FormControl fullWidth required={formFieldDefinition.required}>
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
                    />
                </FormControl>
            </Box>
            {error && <FormHelperText>{error}</FormHelperText>}
        </>
    );
};

export default TextAreaField;
