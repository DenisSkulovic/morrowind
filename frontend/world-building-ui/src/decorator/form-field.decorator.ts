import 'reflect-metadata';
import { FormSelectOption } from '../class/FormSelectOption';
import { FieldComponentEnum } from '../enum/FieldComponentEnum';

const FORM_FIELDS_KEY = Symbol('form_fields');

interface FormFieldOptions {
    component: FieldComponentEnum;
    label?: string;
    placeholder?: string;
    required?: boolean;
    search?: (filter?: { [key: string]: any }) => Promise<FormSelectOption[]>;
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
