import React from 'react';
import SelectField from './fields/SelectField';
import { getFormFields } from '../../decorator/form-field.decorator';

const ContentForm: React.FC<{ entityClass: any; onSubmit: (data: any) => void }> = ({ entityClass, onSubmit }) => {
    const fields = getFormFields(entityClass.prototype);

    const handleChange = (key: string, value: any) => {
        // Update form state (managed locally or through Redux if needed)
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(/* Form data */);
    };

    return (
        <form onSubmit={handleSubmit}>
            {fields.map(({ propertyKey, options }) => {
                const { component, label, options: fetchFn } = options;
                if (component === 'SelectField') {
                    return (
                        <SelectField
                            key={propertyKey}
                            label={label}
                            value={/* Current field value */}
                            onChange={(value) => handleChange(propertyKey, value)}
                            fetchFn={fetchFn}
                            reduxKey={propertyKey}
                        />
                    );
                }
                return null; // Handle other components like TextField, etc.
            })}
            <button type="submit">Save</button>
        </form>
    );
};

export default ContentForm;
