import React from 'react';
import { FormControl, InputLabel, Box, Button, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { getFormFields, FormFieldDefinition } from '../../../../decorator/form-field.decorator';
import DynamicForm, { DynamicFormFieldProps } from '../../DynamicForm';
import { LooseObject } from '../../../../types';

interface NestedFormFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: LooseObject[];
    onChange: (value: LooseObject[]) => void;
    key: string;
}

const NestedFormField: React.FC<NestedFormFieldProps> = ({
    formFieldDefinition,
    value = [],
    onChange,
    key
}) => {
    const nestedClass = formFieldDefinition.nestedClass;
    if (!nestedClass) throw new Error('"nestedClass" is required in NestedFormField');
    const fields = getFormFields(nestedClass.prototype);

    const handleAddItem = () => {
        const newItem = new nestedClass();
        onChange([...value, newItem]);
    };

    const handleRemoveItem = (index: number) => {
        const newValue = [...value];
        newValue.splice(index, 1);
        onChange(newValue);
    };

    const handleFormChange = (index: number, formData: LooseObject) => {
        const newValue = [...value];
        newValue[index] = {
            ...newValue[index],
            ...formData
        };
        onChange(newValue);
    };

    return (
        <FormControl fullWidth required={formFieldDefinition.required}>
            <InputLabel>{formFieldDefinition.label}</InputLabel>
            <Box sx={{ mt: 2 }}>
                {value.map((item, index) => (
                    <Box
                        key={`${key}-${index}`}
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
                        <DynamicForm
                            fields={fields}
                            initialValues={item}
                            onSubmit={(formData) => handleFormChange(index, formData)}
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
    );
};

export default NestedFormField;
