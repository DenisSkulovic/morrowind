import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem, Chip, Box, CircularProgress, FormHelperText } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { AppDispatch, RootState } from '../../../../store/store';
import { setOptionsLoading, setOptionsSuccess, setOptionsError } from '../../../../store/slices/uiSlice';
import { DynamicFormFieldProps } from '../../DynamicForm';
import { RequestStatusEnum } from '../../../../enum/RequestStatusEnum';
import { FormFieldDefinition } from '../../../../decorator/form-field.decorator';

interface MultiSelectFieldProps extends DynamicFormFieldProps {
    formFieldDefinition: FormFieldDefinition;
    value: string[];
    onChange: (newValue: string[]) => void;
    fetchFn: (filter: string) => Promise<any[]>;
    filter: string;
    reduxKey: string;
    error?: string;
}

const MultiSelectField: React.FC<MultiSelectFieldProps> = ({
    formFieldDefinition,
    value = [],
    onChange,
    fetchFn,
    filter,
    reduxKey,
    error
}) => {
    if (!reduxKey) throw new Error('Redux key is required in MultiSelectField');
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

    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const newValue = event.target.value;
        onChange(typeof newValue === 'string' ? newValue.split(',') : newValue);
    };

    const { label, required = false, disabled = false } = formFieldDefinition;

    return (
        <>
            <FormControl fullWidth required={required} disabled={disabled} sx={{ mb: 2 }}>
                <InputLabel>{label}</InputLabel>
                <Select
                    multiple
                    value={value}
                    onChange={handleChange}
                    label={label}
                    error={!!optionsError}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, p: 0.5 }}>
                            {selected.map((value) => (
                                <Chip
                                    key={value}
                                    label={options.find(opt => opt.id === value)?.label || value}
                                    sx={{ m: 0.25 }}
                                />
                            ))}
                        </Box>
                    )}
                    MenuProps={{
                        PaperProps: {
                            style: {
                                maxHeight: 250
                            }
                        }
                    }}
                >
                    {optionsStatus === RequestStatusEnum.LOADING ? (
                        <MenuItem disabled sx={{ p: 2 }}>
                            <CircularProgress size={20} sx={{ mr: 1 }} />
                            Loading...
                        </MenuItem>
                    ) : optionsError ? (
                        <MenuItem disabled sx={{ p: 2 }}>
                            Error: {optionsError}
                        </MenuItem>
                    ) : (
                        options.map((option) => (
                            <MenuItem key={option.id} value={option.id} sx={{ py: 1 }}>
                                {option.label}
                            </MenuItem>
                        ))
                    )}
                </Select>
            </FormControl>
            {error && <FormHelperText>{error}</FormHelperText>}
        </>
    );
};

export default MultiSelectField;
