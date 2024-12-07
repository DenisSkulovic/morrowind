import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem, CircularProgress } from '@mui/material';
import { AppDispatch, RootState } from '../../../../../store/store';
import { fetchOptions } from '../../../../../store/slices/optionsSlice';

interface SelectFieldProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
    fetchFn: (filter?: any) => Promise<{ id: string; label: string }[]>;
    filter?: any;
    reduxKey: string;
    required?: boolean;
    placeholder?: string;
    disabled?: boolean;
}

const SelectField: React.FC<SelectFieldProps> = ({
    label,
    value,
    onChange,
    fetchFn,
    filter,
    reduxKey,
    required = false,
    placeholder,
    disabled = false
}) => {
    const dispatch = useDispatch<AppDispatch>();
    const { data: options, loading, error } = useSelector(
        (state: RootState) => state.options[reduxKey] || { data: [], loading: false, error: null }
    );

    useEffect(() => {
        if (!options.length) {
            dispatch(fetchOptions({ key: reduxKey, fetchFn, filter }));
        }
    }, [dispatch, fetchFn, filter, options.length, reduxKey]);

    return (
        <FormControl fullWidth required={required} disabled={disabled}>
            <InputLabel>{label}</InputLabel>
            <Select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                label={label}
                placeholder={placeholder}
                error={!!error}
            >
                {placeholder && (
                    <MenuItem value="">
                        <em>{placeholder}</em>
                    </MenuItem>
                )}
                {loading ? (
                    <MenuItem disabled>
                        <CircularProgress size={20} />
                        Loading...
                    </MenuItem>
                ) : error ? (
                    <MenuItem disabled>
                        Error: {error}
                    </MenuItem>
                ) : (
                    options.map((option: { id: string; label: string }) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.label}
                        </MenuItem>
                    ))
                )}
            </Select>
        </FormControl>
    );
};

export default SelectField;
