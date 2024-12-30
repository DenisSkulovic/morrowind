import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem, CircularProgress, Box, FormHelperText } from '@mui/material';
import { AppDispatch, RootState } from '../../../../store/store';
import { setOptionsLoading, setOptionsSuccess, setOptionsError } from '../../../../store/slices/uiSlice';
import { RequestStatusEnum } from '../../../../enum/RequestStatusEnum';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';
import { ErrorComp } from '../../DynamicForm/ErrorComp';

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
    reduxKey,
    error,
    readOnly
}) => {
    if (error && typeof error === 'object') throw new Error('Received error as object. SelectField does not support nested errors.');
    if (!reduxKey) throw new Error('Redux key is required in SelectField');
    const dispatch = useDispatch<AppDispatch>();
    const { data: options, status: optionsStatus, error: optionsError } = useSelector(
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
        <>
            <FormControl fullWidth required={required} disabled={disabled || readOnly} sx={{ my: 1 }}>
                <InputLabel>{label}</InputLabel>
                <Select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    label={label}
                    error={!!optionsError}
                >
                    {placeholder && (
                        <MenuItem value="">
                            <em>{placeholder}</em>
                        </MenuItem>
                    )}
                    {optionsStatus === RequestStatusEnum.LOADING ? (
                        <MenuItem disabled>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, py: 0.5 }}>
                                <CircularProgress size={20} />
                                Loading...
                            </Box>
                        </MenuItem>
                    ) : optionsError ? (
                        <MenuItem disabled>
                            <Box sx={{ py: 0.5 }}>
                                Error: {optionsError}
                            </Box>
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
            <ErrorComp text={error} />
        </>
    );
};

export default SelectField;
