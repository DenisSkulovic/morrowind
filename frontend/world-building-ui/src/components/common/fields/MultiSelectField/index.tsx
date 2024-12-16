import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, InputLabel, Select, MenuItem, Chip, Box, CircularProgress } from '@mui/material';
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
}

const MultiSelectField: React.FC<MultiSelectFieldProps> = ({
    formFieldDefinition,
    value = [],
    onChange,
    fetchFn,
    filter,
    reduxKey
}) => {
    if (!reduxKey) throw new Error('Redux key is required in MultiSelectField');
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

    const handleChange = (event: SelectChangeEvent<string[]>) => {
        const newValue = event.target.value;
        onChange(typeof newValue === 'string' ? newValue.split(',') : newValue);
    };

    const { label, required = false, disabled = false } = formFieldDefinition;

    return (
        <FormControl fullWidth required={required} disabled={disabled}>
            <InputLabel>{label}</InputLabel>
            <Select
                multiple
                value={value}
                onChange={handleChange}
                label={label}
                error={!!error}
                renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={options.find(opt => opt.id === value)?.label || value} />
                        ))}
                    </Box>
                )}
            >
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
                    options.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.label}
                        </MenuItem>
                    ))
                )}
            </Select>
        </FormControl>
    );
};

export default MultiSelectField;
