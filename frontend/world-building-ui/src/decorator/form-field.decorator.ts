import 'reflect-metadata';
import { FormSelectOption } from '../class/FormSelectOption';

const FORM_FIELDS_KEY = Symbol('form_fields');

interface FormFieldOptions {
    component: string; // Field component type
    label?: string; // Label for the field
    placeholder?: string; // Placeholder for basic fields
    required?: boolean; // Is the field required
    search?: (filter?: { [key: string]: any }) => Promise<FormSelectOption[]>;
    customConfig?: any; // Additional configuration for custom fields
}

export function FormField(options: FormFieldOptions) {
    return (target: any, propertyKey: string) => {
        const existingFields = Reflect.getMetadata(FORM_FIELDS_KEY, target) || [];
        Reflect.defineMetadata(FORM_FIELDS_KEY, [...existingFields, { propertyKey, options }], target);
    };
}

export function getFormFields(target: any): { propertyKey: string; options: FormFieldOptions }[] {
    return Reflect.getMetadata(FORM_FIELDS_KEY, target) || [];
}
