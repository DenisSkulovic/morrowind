import { RootState } from "../store/store";
import { useDispatch, useSelector } from 'react-redux';
import { addToast as addToastAction, removeToast as removeToastAction, ToastTextSegment, ToastData } from '../store/slices/uiSlice';
import { AppDispatch } from '../store/store';
import { PopupTypeEnum } from '../enum/PopupTypeEnum';


export const useToastStack = () => {
    const dispatch = useDispatch<AppDispatch>();
    const toasts = useSelector((state: RootState) => state.ui.toasts);

    const addToast = (title: ToastTextSegment[], description: ToastTextSegment[] | undefined, type: PopupTypeEnum) => {
        const newToast: ToastData = {
            id: Math.random().toString(36).substr(2, 9),
            title,
            description,
            type
        };
        dispatch(addToastAction(newToast));
    };

    const removeToast = (id: string) => {
        dispatch(removeToastAction(id));
    };

    // Convenience methods for different toast types
    const addError = (title: ToastTextSegment[], description?: ToastTextSegment[]) => addToast(title, description, PopupTypeEnum.ERROR);
    const addWarning = (title: ToastTextSegment[], description?: ToastTextSegment[]) => addToast(title, description, PopupTypeEnum.WARNING);
    const addSuccess = (title: ToastTextSegment[], description?: ToastTextSegment[]) => addToast(title, description, PopupTypeEnum.SUCCESS);
    const addInfo = (title: ToastTextSegment[], description?: ToastTextSegment[]) => addToast(title, description, PopupTypeEnum.INFO);

    return {
        addToast,
        addError,
        addWarning,
        addSuccess,
        addInfo,
        removeToast,
        toasts
    };
};