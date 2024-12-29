import React from 'react';
import { FormControl, InputLabel, Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';

interface DateFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: string | null;
    onChange: (newValue: string | null) => void;
    error: string | undefined;
}

const DateField: React.FC<DateFieldProps> = ({
    formFieldDefinition,
    value,
    onChange,
    error
}) => {
    const handleChange = (date: Date | null) => {
        onChange(date ? date.toISOString() : null);
    };

    return (
        <Box sx={{ mt: 2, mb: 2 }}>
            <FormControl fullWidth required={formFieldDefinition.required} disabled={formFieldDefinition.disabled}>
                <InputLabel sx={{ backgroundColor: 'white', px: 1 }}>{formFieldDefinition.label}</InputLabel>
                <DatePicker
                    value={value ? new Date(value) : null}
                    onChange={handleChange}
                    slotProps={{
                        textField: {
                            error: !!error,
                            helperText: error,
                            placeholder: formFieldDefinition.placeholder,
                            fullWidth: true,
                            sx: { mt: 1 }
                        }
                    }}
                />
            </FormControl>
        </Box>
    );
};

export default DateField;
