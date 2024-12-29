import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { addLoadingKey, removeLoadingKey } from "../store/slices/uiSlice";

export const useLoading = () => {
    const dispatch = useDispatch<AppDispatch>();
    const loadingKeys: string[] = useSelector((state: RootState) => state.ui.loadingKeys);
    const isLoading = loadingKeys.length > 0;

    return {
        isLoading,
        addLoadingKey: (key: string) => dispatch(addLoadingKey(key)),
        removeLoadingKey: (key: string) => dispatch(removeLoadingKey(key)),
    }
}