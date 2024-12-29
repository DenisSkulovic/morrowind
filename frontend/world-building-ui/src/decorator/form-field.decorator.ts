import 'reflect-metadata';
import { FormSelectOption } from '../class/FormSelectOption';
import { FieldComponentEnum } from '../enum/FieldComponentEnum';
import { Context } from '../class/Context';
import { SearchQuery } from '../class/search/SearchQuery';
import { ClassConstructor } from '../types';
import { EntityMetadataKeyEnum } from '../enum/EntityMetadataKeyEnum';


export interface FormFieldOptions {
    component: FieldComponentEnum;
    label?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    search?: (filter: SearchQuery, context: Context) => Promise<FormSelectOption[]>;
    nestedClass?: ClassConstructor<any>;
    validate?: (value: any) => void | Error;
    maxItems?: number;
    acceptTypes?: string[];
    listType?: string;
    allowedKeys?: string[];
    allowNewKeys?: boolean;
    radioOptions?: { value: string; label: string }[];
}
export interface FormFieldDefinition extends FormFieldOptions {
    field: string;
}

export function FormField(options: FormFieldOptions) {
    return (target: any, field: string) => {
        const existingFields = Reflect.getMetadata(EntityMetadataKeyEnum.FORM_FIELD, target) || [];
        const definition: FormFieldDefinition = { field, ...options }
        Reflect.defineMetadata(EntityMetadataKeyEnum.FORM_FIELD, [...existingFields, definition], target);
    };
}

export function getFormFields(cls: ClassConstructor<any>): FormFieldDefinition[] {
    return Reflect.getMetadata(EntityMetadataKeyEnum.FORM_FIELD, cls) || [];
}


export const validateField = (field: FormFieldDefinition, value: any): string | undefined => {
    // Check required field
    if (field.required && (value === undefined || value === null || value === '')) {
        return `${field.label || field.field} is required`;
    }

    // Run custom validation if provided
    if (field.validate) {
        try {
            const validationResult = field.validate(value);
            if (validationResult instanceof Error) {
                return validationResult.message;
            }
        } catch (error) {
            if (error instanceof Error) {
                return error.message;
            }
            return 'Validation error occurred';
        }
    }

    return undefined;
};