import React from 'react';
import { FormControl, InputLabel, RadioGroup, FormControlLabel, Radio, Box, FormHelperText } from '@mui/material';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';
import { ErrorComp } from '../../DynamicForm/ErrorComp';

interface RadioFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: string;
    onChange: (newValue: string) => void;
}

const RadioField: React.FC<RadioFieldProps> = ({
    formFieldDefinition,
    value,
    onChange,
    error,
    readOnly
}) => {
    if (error && typeof error === 'object') throw new Error('Received error as object. RadioField does not support nested errors.');
    const radioOptions: { value: string; label: string }[] | undefined = formFieldDefinition.radioOptions;
    if (!radioOptions) throw new Error('radioOptions is required in RadioField');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <>
            <FormControl fullWidth required={formFieldDefinition.required} disabled={readOnly} sx={{ mt: 1, mb: 1 }}>
                <InputLabel sx={{ mb: 1 }}>{formFieldDefinition.label}</InputLabel>
                <RadioGroup
                    value={value}
                    onChange={handleChange}
                    sx={{ mt: 3 }} // Add margin top to prevent overlap with label
                >
                    {radioOptions.map((option) => (
                        <FormControlLabel
                            key={option.value}
                            value={option.value}
                            control={<Radio />}
                            label={option.label}
                            sx={{ mb: 0.5 }} // Add spacing between radio options
                        />
                    ))}
                </RadioGroup>
            </FormControl>
            <ErrorComp text={error} />
        </>
    );
};

export default RadioField;
