import React from 'react';
import { FormControl, InputLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';

interface RadioFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: string;
    onChange: (newValue: string) => void;
}

const RadioField: React.FC<RadioFieldProps> = ({
    formFieldDefinition,
    value,
    onChange
}) => {
    const radioOptions: { value: string; label: string }[] | undefined = formFieldDefinition.radioOptions;
    if (!radioOptions) throw new Error('radioOptions is required in RadioField');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <FormControl fullWidth required={formFieldDefinition.required}>
            <InputLabel>{formFieldDefinition.label}</InputLabel>
            <RadioGroup
                value={value}
                onChange={handleChange}
            >
                {radioOptions.map((option) => (
                    <FormControlLabel
                        key={option.value}
                        value={option.value}
                        control={<Radio />}
                        label={option.label}
                    />
                ))}
            </RadioGroup>
        </FormControl>
    );
};

export default RadioField;
