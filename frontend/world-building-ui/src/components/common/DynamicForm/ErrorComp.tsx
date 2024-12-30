import React from 'react';
import { FormHelperText } from '@mui/material';

interface ErrorProps {
    text?: string;
}

export const ErrorComp: React.FC<ErrorProps> = ({ text }) => {
    if (!text) return null;

    return (
        <FormHelperText error>{text}</FormHelperText>
    );
};
