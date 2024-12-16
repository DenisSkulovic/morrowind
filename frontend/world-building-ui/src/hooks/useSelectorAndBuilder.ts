import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useSelectorAndBuilder = <T>(
    selector: (state: RootState) => any | null,
    builder: (obj: any) => T
): T | null => {
    const raw = useSelector(selector);
    if (!raw) return null;
    return builder(raw);
};