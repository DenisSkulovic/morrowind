import React from 'react';
import { FormControl, InputLabel, Box, Button, IconButton, FormHelperText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { getFormFields, FormFieldDefinition } from '../../../../decorator/form-field.decorator';
import DynamicForm, { DynamicFormFieldProps } from '../../DynamicForm';
import { LooseObject } from '../../../../types';

interface NestedFormFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: LooseObject[] | null;
    onChange: (value: LooseObject[] | null) => void;
    key: string;
    error?: string;
}

const NestedFormField: React.FC<NestedFormFieldProps> = ({
    formFieldDefinition,
    value = [],
    onChange,
    key,
    error
}) => {
    if (value && !Array.isArray(value)) throw new Error('Value in NestedFormField must be an array');
    const nestedClass = formFieldDefinition.nestedClass;
    if (!nestedClass) throw new Error('"nestedClass" is required in NestedFormField');
    const fields: FormFieldDefinition[] = getFormFields(nestedClass.prototype);

    const handleAddItem = () => {
        const newItem = new nestedClass();
        const newValue = value ? [...value, newItem] : [newItem];
        onChange(newValue);
    };

    const handleRemoveItem = (index: number) => {
        if (!value) throw new Error('Value cannot be null when removing item from nested form');
        const newValue = [...value];
        newValue.splice(index, 1);
        onChange(newValue);
    };

    const handleFormChange = (index: number, formData: LooseObject) => {
        const newValue = value ? [...value] : [];
        newValue[index] = {
            ...newValue[index],
            ...formData
        };
        onChange(newValue);
    };

    return (
        <>
            <Box sx={{ mt: 3, mb: 2 }}>
                <FormControl fullWidth required={formFieldDefinition.required}>
                    <InputLabel sx={{ position: 'relative', transform: 'none', mb: 1 }}>
                        {formFieldDefinition.label}
                    </InputLabel>
                    <Box>
                        {value?.map((item, index) => (
                            <Box
                                key={`${key}-${index}`}
                                sx={{
                                    p: 3,
                                    mb: 2,
                                    border: '1px solid #ccc',
                                    borderRadius: 1,
                                    position: 'relative',
                                    '&:last-child': {
                                        mb: 3
                                    }
                                }}
                            >
                                <IconButton
                                    size="small"
                                    onClick={() => handleRemoveItem(index)}
                                    sx={{
                                        position: 'absolute',
                                        right: 8,
                                        top: 8,
                                        zIndex: 1
                                    }}
                                >
                                    <DeleteIcon />
                                </IconButton>
                                <DynamicForm
                                    asFormComponent={false}
                                    fields={fields}
                                    initialValues={item}
                                    onChange={(formData) => handleFormChange(index, formData)}
                                />
                            </Box>
                        ))}
                        <Button
                            startIcon={<AddIcon />}
                            onClick={handleAddItem}
                            variant="outlined"
                            fullWidth
                        >
                            Add {formFieldDefinition.label}
                        </Button>
                    </Box>
                </FormControl>
            </Box>
            {error && <FormHelperText>{error}</FormHelperText>}
        </>
    );
};

export default NestedFormField;
