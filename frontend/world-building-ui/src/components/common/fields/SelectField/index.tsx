import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem, CircularProgress } from '@mui/material';
import { AppDispatch, RootState } from '../../../../store/store';
import { setOptionsLoading, setOptionsSuccess, setOptionsError } from '../../../../store/slices/uiSlice';
import { RequestStatusEnum } from '../../../../enum/RequestStatusEnum';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';

interface SelectFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: string;
    onChange: (newValue: string) => void;
    fetchFn: (filter: string) => Promise<any[]>;
    filter: string;
    reduxKey: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
    formFieldDefinition,
    value,
    onChange,
    fetchFn,
    filter,
    reduxKey
}) => {
    if (!reduxKey) throw new Error('Redux key is required in SelectField');
    const dispatch = useDispatch<AppDispatch>();
    const { data: options, status, error } = useSelector(
        (state: RootState) => state.ui.options[reduxKey] || { data: [], status: RequestStatusEnum.IDLE, error: null }
    );

    useEffect(() => {
        if (!options.length && fetchFn && reduxKey) {
            dispatch(setOptionsLoading({ key: reduxKey }));
            fetchFn(filter)
                .then(data => {
                    dispatch(setOptionsSuccess({ key: reduxKey, data }));
                })
                .catch(err => {
                    dispatch(setOptionsError({ key: reduxKey, error: err.message }));
                });
        }
    }, [dispatch, fetchFn, filter, options.length, reduxKey]);

    const { label, required = false, placeholder, disabled = false } = formFieldDefinition;

    return (
        <FormControl fullWidth required={required} disabled={disabled}>
            <InputLabel>{label}</InputLabel>
            <Select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                label={label}
                error={!!error}
            >
                {placeholder && (
                    <MenuItem value="">
                        <em>{placeholder}</em>
                    </MenuItem>
                )}
                {status === RequestStatusEnum.LOADING ? (
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
