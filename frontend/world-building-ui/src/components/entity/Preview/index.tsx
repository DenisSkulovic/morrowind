import React from 'react';
import { ContentBase } from '../../../class/ContentBase';

interface PreviewField {
    label: string;
    key: string;
    format?: (value: any) => string | null;
}

interface PreviewProps {
    entity: ContentBase;
    fields?: PreviewField[];
}

const defaultFormatters = {
    string: (value: string) => value,
    number: (value: number) => `${value}`,
    boolean: (value: boolean) => value ? 'Yes' : 'No',
    array: (value: any[]) => value?.join(', ') || '',
    object: (value: object) => JSON.stringify(value),
};

const getDefaultFormatter = (value: any): (value: any) => string => {
    if (Array.isArray(value)) return defaultFormatters.array;
    if (typeof value === 'boolean') return defaultFormatters.boolean;
    if (typeof value === 'number') return defaultFormatters.number;
    if (typeof value === 'object') return defaultFormatters.object;
    return defaultFormatters.string;
};

const Preview: React.FC<PreviewProps> = ({ entity, fields }) => {
    // If no fields provided, display all non-function properties
    const defaultFields: PreviewField[] = !fields ?
        Object.entries(entity)
            .filter(([_, value]) => typeof value !== 'function')
            .map(([key]) => ({
                label: key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1'),
                key,
            }))
        : fields;

    const renderField = (field: PreviewField) => {
        const value = (entity as any)[field.key];
        if (value === undefined || value === null || value === '') return null;

        const formatter = field.format || getDefaultFormatter(value);
        const displayValue = formatter(value);
        if (!displayValue) return null;

        return (
            <div key={field.key} className="preview-field">
                <span className="preview-label">{field.label}: </span>
                <span className="preview-value">{displayValue}</span>
            </div>
        );
    };

    return (
        <div className="entity-preview">
            {defaultFields.map(field => renderField(field))}
        </div>
    );
};

export default Preview;


