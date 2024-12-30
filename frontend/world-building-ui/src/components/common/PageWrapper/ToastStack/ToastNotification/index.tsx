import React from 'react';
import { Box, Typography, IconButton, Paper, Fade, Link, Button } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import WarningIcon from '@mui/icons-material/Warning';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import CloseIcon from '@mui/icons-material/Close';
import { PopupTypeEnum } from '../../../../../enum/PopupTypeEnum';
import { ToastTextSegment } from '../../../../../store/slices/uiSlice';

// Mapping of icon names to components
const iconMap: Record<string, React.ElementType> = {
    error: ErrorIcon,
    warning: WarningIcon,
    success: CheckCircleIcon,
    info: InfoIcon,
};

const DynamicIcon = ({ iconName, sx }: { iconName: string, sx?: Record<string, any> }) => {
    const IconComponent = iconMap[iconName.toLowerCase()];
    return IconComponent ? <IconComponent sx={sx} /> : null;
};

interface ToastNotificationProps {
    title: ToastTextSegment[];
    description?: ToastTextSegment[];
    type: PopupTypeEnum;
    onClose: () => void;
    index?: number;
}

const TOAST_COLORS = {
    ERROR: {
        background: '#FEF2F2',
        border: '#DC2626',
        icon: '#DC2626',
        title: '#991B1B',
        text: '#7F1D1D'
    },
    WARNING: {
        background: '#FFFBEB',
        border: '#D97706',
        icon: '#D97706',
        title: '#92400E',
        text: '#78350F'
    },
    SUCCESS: {
        background: '#F0FDF4',
        border: '#16A34A',
        icon: '#16A34A',
        title: '#166534',
        text: '#14532D'
    },
    INFO: {
        background: '#EFF6FF',
        border: '#2563EB',
        icon: '#2563EB',
        title: '#1E40AF',
        text: '#1E3A8A'
    }
};

const getToastStyles = (type: PopupTypeEnum) => TOAST_COLORS[type.toUpperCase() as keyof typeof TOAST_COLORS];

const getToastText = (segments: ToastTextSegment[]) => {
    return segments.map((segment, index) => {
        const commonProps = {
            key: index,
            color: segment.color || 'primary',
            sx: {
                ...segment.sx
            },
        };

        if (segment.href) {
            return (
                <Button
                    {...commonProps}
                    component={Link}
                    href={segment.href}
                    sx={{
                        textDecoration: 'underline',
                        ...segment.sx
                    }}
                >
                    {segment.text}
                </Button>
            );
        }

        return (
            <Box
                {...commonProps}
                component="span"
            >
                {segment.text}
            </Box>
        );
    });
}

const ToastNotification: React.FC<ToastNotificationProps> = ({
    title,
    description,
    type,
    onClose,
    index = 0
}) => {
    const styles = getToastStyles(type);

    return (
        <Fade in={true}>
            <Paper
                elevation={6}
                sx={{
                    position: 'fixed',
                    bottom: `${24 + (index * 88)}px`,
                    right: 24,
                    width: 400,
                    zIndex: 9000 + index,
                    backgroundColor: styles.background,
                    borderLeft: `4px solid ${styles.border}`
                }}
            >
                <Box sx={{ p: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Box sx={{ flex: 1 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mr: 2, width: '100%' }}>
                                <DynamicIcon iconName={type} sx={{ color: styles.icon, fontSize: '2rem', mr: 1 }} />
                                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: styles.title }}>
                                    {getToastText(title)}
                                </Typography>
                            </Box>
                            {description && (
                                <Typography variant="body2" sx={{ mt: 0.5, color: styles.text }}>
                                    {getToastText(description)}
                                </Typography>
                            )}
                        </Box>
                        <IconButton
                            size="small"
                            onClick={onClose}
                            sx={{ ml: 1, mt: -0.5 }}
                        >
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>
            </Paper>
        </Fade>
    );
};

export default ToastNotification;
