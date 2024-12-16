import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import { FieldComponentEnum } from '../../../enum/FieldComponentEnum';
import FIELD_COMPONENTS from '../fields/FIELD_COMPONENTS';
import { FormFieldDefinition } from '../../../decorator/form-field.decorator';
import { LooseObject } from '../../../types';

interface DynamicFormProps {
    fields: FormFieldDefinition[];
    initialValues?: { [key: string]: any };
    onSubmit: (data: { [key: string]: any }) => void;
    readOnly?: boolean;
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

const fieldsThatNeedFetch = [
    FieldComponentEnum.OBJECT_FIELD,
    FieldComponentEnum.SELECT_FIELD,
    FieldComponentEnum.MULTI_SELECT_FIELD
];

type DefaultValue = string | number | boolean | LooseObject | LooseObject[];
const getDefaultValue = (component: FieldComponentEnum): DefaultValue => {
    switch (component) {
        case FieldComponentEnum.NUMBER_FIELD:
            return 0;
        case FieldComponentEnum.CHECKBOX_FIELD:
            return false;
        case FieldComponentEnum.MULTI_SELECT_FIELD:
        case FieldComponentEnum.ITEM_LIST_FIELD:
            return [];
        case FieldComponentEnum.NESTED_FORM:
            return {};
        default:
            return '';
    }
};

const DynamicForm: React.FC<DynamicFormProps> = ({ fields, initialValues = {}, onSubmit, readOnly = false }) => {
    const [formData, setFormData] = useState<{ [key: string]: any }>(initialValues);

    const handleChange = (key: string, value: any) => {
        if (readOnly) return;
        setFormData(prev => ({
            ...prev,
            [key]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!readOnly) {
            onSubmit(formData);
        }
    };

    const renderField = (formFieldDefinition: FormFieldDefinition) => {
        const Component = FIELD_COMPONENTS[formFieldDefinition.component as keyof typeof FIELD_COMPONENTS];
        if (!Component) return null;

        const defaultValue = getDefaultValue(formFieldDefinition.component);

        const commonProps: DynamicFormFieldProps = {
            key: formFieldDefinition.field,
            formFieldDefinition,
            value: formData[formFieldDefinition.field] ?? defaultValue,
            onChange: (value: any) => handleChange(formFieldDefinition.field, value),
            readOnly
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
        <Box component="form" onSubmit={handleSubmit}>
            {fields.map((field) => (
                <Box mb={2} key={field.field}>
                    {renderField(field)}
                </Box>
            ))}
            {!readOnly && (
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            )}
        </Box>
    );
};

export default DynamicForm;
