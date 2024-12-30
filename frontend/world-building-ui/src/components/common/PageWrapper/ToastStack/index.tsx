import { FC } from 'react';
import ToastNotification from './ToastNotification';
import { useToastStack } from '../../../../hooks/useToastStack';

interface ToastStackProps { }

const ToastStack: FC<ToastStackProps> = ({ }) => {
    const { toasts, removeToast } = useToastStack();

    const handleClose = (id: string) => {
        removeToast(id);
    }

    return (
        <>
            {Object.values(toasts).map((toast, index) => (
                <ToastNotification
                    key={toast.id}
                    title={toast.title}
                    description={toast.description}
                    type={toast.type}
                    onClose={() => handleClose(toast.id)}
                    index={index}
                />
            ))}
        </>
    )
};

export default ToastStack;