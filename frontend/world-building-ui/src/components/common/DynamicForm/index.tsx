import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import FIELD_COMPONENTS from '../fields/FIELD_COMPONENTS';
import { FormFieldDefinition, validateField } from '../../../decorator/form-field.decorator';
import { fieldsThatNeedFetch, getDefaultValue } from '../../../config/dynamicFormConfig';
import { cloneDeep } from 'lodash';

export type DynamicFormErrors = { [key: string]: string | DynamicFormErrors }; // recursive type for nested errors

interface DynamicFormProps {
    fields: FormFieldDefinition[];
    initialValues?: { [key: string]: any };
    onSubmit?: (data: { [key: string]: any }) => void;
    onChange?: (data: { [key: string]: any }) => void;
    readOnly?: boolean;
    asFormComponent?: boolean;
    showErrors?: boolean;
    errors?: DynamicFormErrors;
}

export interface DynamicFormFieldProps {
    key: string;
    formFieldDefinition: FormFieldDefinition;
    value: any;
    onChange: (value: any) => void;
    fetchFn?: (filter?: any) => Promise<{ id: string; label: string }[]>;
    filter?: any;
    reduxKey?: string;
    error?: string;
    readOnly?: boolean;
}

const DynamicForm: React.FC<DynamicFormProps> = ({
    fields,
    initialValues = {},
    onSubmit,
    onChange,
    readOnly = false,
    asFormComponent = true,
    showErrors = false
}) => {
    const [formData, setFormData] = useState<{ [key: string]: any }>(cloneDeep(initialValues));

    const validateForm = (): { [key: string]: string } | void => {
        const newErrors: { [key: string]: string } = {};
        let isValid = true;

        fields.forEach(field => {
            const error = validateField(field, formData[field.field]);
            if (error) {
                newErrors[field.field] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);
        return isValid;
    };

    const handleFieldValueChange = (key: string, value: any) => {
        if (readOnly) throw new Error('readOnly prop is true but something was edited; did you forget to disable the inputs?');

        const newFormData = { ...formData, [key]: value };
        setFormData(newFormData);
        if (onChange) onChange(newFormData);

        if (!showErrors) return
        const field = fields.find(f => f.field === key);
        if (field) {
            const error = validateField(field, value);
            setErrors(prev => ({
                ...prev,
                [key]: error || ''
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!onSubmit) throw new Error('onSubmit prop is required when clicking submit button');
        if (readOnly) throw new Error('readOnly prop is true when clicking submit button; did you forget to disable/hide the submit button?');

        const isValid: boolean = validateForm();
        if (isValid) onSubmit(formData);
    };

    const renderField = (formFieldDefinition: FormFieldDefinition) => {
        const Component = FIELD_COMPONENTS[formFieldDefinition.component as keyof typeof FIELD_COMPONENTS];
        if (!Component) return null;

        const defaultValue = getDefaultValue(formFieldDefinition.component);

        const commonProps: DynamicFormFieldProps = {
            key: formFieldDefinition.field,
            formFieldDefinition,
            value: formData[formFieldDefinition.field] ?? defaultValue,
            onChange: (value: any) => handleFieldValueChange(formFieldDefinition.field, value),
            readOnly,
            error: showErrors ? errors[formFieldDefinition.field] : undefined
        };

        const isNeedsFetch = fieldsThatNeedFetch.includes(formFieldDefinition.component);
        if (isNeedsFetch) {
            Object.assign(commonProps, {
                reduxKey: formFieldDefinition.field,
                fetchFn: formFieldDefinition.search
            });
        }

        return <Component {...commonProps} />;
    };

    return (
        <Box component={asFormComponent ? "form" : "div"} onSubmit={asFormComponent ? handleSubmit : undefined}>
            {fields.map((field) => (
                <Box mb={2} key={field.field}>
                    {renderField(field)}
                </Box>
            ))}
            {!readOnly && !!onSubmit && asFormComponent && (
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            )}
        </Box>
    );
};

export default DynamicForm;
