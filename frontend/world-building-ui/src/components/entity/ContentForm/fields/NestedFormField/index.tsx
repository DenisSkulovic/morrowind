import React from 'react';
import { FormControl, InputLabel, Box, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { getFormFields } from '../../../../../decorator/form-field.decorator';
import SelectField from '../SelectField';
import MultiSelectField from '../MultiSelectField';
import TextField from '../TextField';
import { FieldComponentEnum } from '../../../../../enum/FieldComponentEnum';

interface NestedFormFieldProps {
    label: string;
    value: any[];
    onChange: (value: any[]) => void;
    entityClass: any;
    required?: boolean;
}

const FIELD_COMPONENTS = {
    [FieldComponentEnum.SELECT_FIELD]: SelectField,
    [FieldComponentEnum.MULTI_SELECT_FIELD]: MultiSelectField,
    [FieldComponentEnum.TEXT_FIELD]: TextField,
    // Add other field components as needed
};

const NestedFormField: React.FC<NestedFormFieldProps> = ({
    label,
    value = [],
    onChange,
    entityClass,
    required = false
}) => {
    const fields = getFormFields(entityClass.prototype);

    const handleAddItem = () => {
        const newItem = new entityClass();
        onChange([...value, newItem]);
    };

    const handleRemoveItem = (index: number) => {
        const newValue = [...value];
        newValue.splice(index, 1);
        onChange(newValue);
    };

    const handleFieldChange = (index: number, fieldName: string, fieldValue: any) => {
        const newValue = [...value];
        newValue[index] = {
            ...newValue[index],
            [fieldName]: fieldValue
        };
        onChange(newValue);
    };

    const renderField = (field: any, itemIndex: number) => {
        const { propertyKey, options } = field;
        const { component, label: fieldLabel, placeholder, required: fieldRequired, search } = options;

        const fieldValue = value[itemIndex]?.[propertyKey];
        const FieldComponent = FIELD_COMPONENTS[component] || TextField;

        const commonProps = {
            key: propertyKey,
            label: fieldLabel,
            value: component === FieldComponentEnum.MULTI_SELECT_FIELD ? (fieldValue || []) : (fieldValue || ''),
            onChange: (newValue: any) => handleFieldChange(itemIndex, propertyKey, newValue),
            placeholder,
            required: fieldRequired,
            fetchFn: search
        };

        return <FieldComponent {...commonProps} />;
    };

    return (
        <FormControl fullWidth required={required}>
            <InputLabel>{label}</InputLabel>
            <Box sx={{ mt: 2 }}>
                {value.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            p: 2,
                            mb: 2,
                            border: '1px solid #ccc',
                            borderRadius: 1,
                            position: 'relative'
                        }}
                    >
                        <IconButton
                            size="small"
                            onClick={() => handleRemoveItem(index)}
                            sx={{ position: 'absolute', right: 8, top: 8 }}
                        >
                            <DeleteIcon />
                        </IconButton>
                        {fields.map((field) => renderField(field, index))}
                    </Box>
                ))}
                <Button
                    startIcon={<AddIcon />}
                    onClick={handleAddItem}
                    variant="outlined"
                    fullWidth
                >
                    Add {label}
                </Button>
            </Box>
        </FormControl>
    );
};

export default NestedFormField;
