import React, { useState } from 'react';
import { Box, Button, TextField, IconButton, FormHelperText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';
import { LooseObject } from '../../../../types';
import { ErrorComp } from '../../DynamicForm/ErrorComp';

interface ObjectFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: LooseObject;
    onChange: (newValue: LooseObject) => void;
}

const RecursiveObjectField: React.FC<ObjectFieldProps> = ({
    value = {},
    formFieldDefinition,
    onChange,
    error,
    readOnly
}) => {
    if (error && typeof error === 'object') throw new Error('Received error as object. ObjectField does not support nested errors.');
    const allowNewKeys: boolean | undefined = formFieldDefinition.allowNewKeys || false;
    const allowedKeys: string[] | undefined = formFieldDefinition.allowedKeys;
    if (allowNewKeys && !allowedKeys) throw new Error('allowNewKeys and allowedKeys are required in ObjectField');
    const [newKey, setNewKey] = useState('');
    const [newValue, setNewValue] = useState('');

    const handleAddField = () => {
        if (!allowNewKeys || (allowedKeys && !allowedKeys.includes(newKey))) {
            return;
        }
        const updatedValue = { ...value, [newKey]: newValue };
        onChange(updatedValue);
        setNewKey('');
        setNewValue('');
    };

    const handleRemoveField = (key: string) => {
        const updatedValue = { ...value };
        delete updatedValue[key];
        onChange(updatedValue);
    };

    const handleValueChange = (key: string, newVal: any) => {
        const updatedValue = { ...value, [key]: newVal };
        onChange(updatedValue);
    };

    return (
        <>
            <Box sx={{ p: 1 }}>
                {Object.entries(value).map(([key, val]) => (
                    <Box key={key} sx={{ display: 'flex', alignItems: 'center', mb: 2, gap: 1 }}>
                        <TextField
                            disabled={readOnly}
                            value={key}
                            label="Key"
                            size="small"
                            sx={{ flexBasis: '40%' }}
                        />
                        {typeof val === 'object' ? (
                            <RecursiveObjectField
                                key={key}
                                value={val}
                                onChange={(newVal) => handleValueChange(key, newVal)}
                                formFieldDefinition={formFieldDefinition}
                                readOnly={readOnly}
                            />
                        ) : (
                            <TextField
                                disabled={readOnly}
                                value={val}
                                onChange={(e) => handleValueChange(key, e.target.value)}
                                label="Value"
                                size="small"
                                sx={{ flexBasis: '60%' }}
                            />
                        )}
                        <IconButton
                            size="small"
                            onClick={() => handleRemoveField(key)}
                            color="error"
                            sx={{ ml: 1 }}
                        >
                            <DeleteIcon />
                        </IconButton>
                    </Box>
                ))}
                {allowNewKeys && (
                    <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, gap: 1 }}>
                        <TextField
                            disabled={readOnly}
                            value={newKey}
                            onChange={(e) => setNewKey(e.target.value)}
                            label="New Key"
                            size="small"
                            sx={{ flexBasis: '40%' }}
                        />
                        <TextField
                            disabled={readOnly}
                            value={newValue}
                            onChange={(e) => setNewValue(e.target.value)}
                            label="New Value"
                            size="small"
                            sx={{ flexBasis: '60%' }}
                        />
                        <Button
                            startIcon={<AddIcon />}
                            onClick={handleAddField}
                            variant="outlined"
                            size="small"
                            disabled={!newKey || !newValue || readOnly}
                            sx={{ ml: 1 }}
                        >
                            Add
                        </Button>
                    </Box>
                )}
            </Box>
            <ErrorComp text={error} />
        </>
    );
};

export default RecursiveObjectField;