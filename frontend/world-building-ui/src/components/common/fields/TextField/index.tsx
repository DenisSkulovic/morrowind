import React from 'react';
import { FormControl, FormHelperText, InputLabel, TextField as MuiTextField } from '@mui/material';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';
import { ErrorComp } from '../../DynamicForm/ErrorComp';

interface TextFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: string;
    onChange: (newValue: string) => void;
}

const TextField: React.FC<TextFieldProps> = ({
    formFieldDefinition,
    value,
    onChange,
    error,
    readOnly
}) => {
    if (error && typeof error === 'object') throw new Error('Received error as object. TextField does not support nested errors.');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <>
            <FormControl
                fullWidth
                required={formFieldDefinition.required}
                disabled={formFieldDefinition.disabled || readOnly}
                sx={{ mt: 1, mb: 1 }}
            >
                <InputLabel shrink>{formFieldDefinition.label}</InputLabel>
                <MuiTextField
                    value={value}
                    onChange={handleChange}
                    placeholder={formFieldDefinition.placeholder}
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 1 }}
                    disabled={readOnly}
                />
            </FormControl>
            <ErrorComp text={error} />
        </>
    );
};

export default TextField;
