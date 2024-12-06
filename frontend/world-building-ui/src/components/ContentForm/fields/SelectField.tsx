import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';

interface SelectFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    fetchFn: (filter?: any) => Promise<{ id: string; label: string }[]>; // Async function to fetch options
    filter?: any; // Filter object for the fetch function
    reduxKey: string; // Unique key for caching options
}

const SelectField: React.FC<SelectFieldProps> = ({ label, value, onChange, fetchFn, filter, reduxKey }) => {
    const dispatch = useDispatch<AppDispatch>();
    const { data: options, loading, error } = useSelector((state: RootState) => state.options[reduxKey] || { data: [], loading: false, error: null });

    useEffect(() => {
        if (!options.length) {
            dispatch(fetchOptions({ key: reduxKey, fetchFn, filter }));
        }
    }, [dispatch, fetchFn, filter, options.length, reduxKey]);

    if (loading) return <p>Loading {label}...</p>;
    if (error) return <p>Error loading {label}: {error}</p>;

    return (
        <div>
            <label>{label}</label>
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                <option value="">Select {label}</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectField;
