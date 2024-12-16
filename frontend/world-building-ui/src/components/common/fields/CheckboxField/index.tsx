import React from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';

interface CheckboxFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: boolean;
    onChange: (newValue: boolean) => void;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
    formFieldDefinition,
    value,
    onChange,
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };

    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={value as boolean}
                    onChange={handleChange}
                    disabled={formFieldDefinition.disabled}
                />
            }
            label={formFieldDefinition.label}
        />
    );
};

export default CheckboxField;
