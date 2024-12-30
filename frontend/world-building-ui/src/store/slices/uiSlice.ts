import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
import { RequestStatusEnum } from "../../enum/RequestStatusEnum";
import { PopupTypeEnum } from "../../enum/PopupTypeEnum";

enableMapSet();

interface OptionsState {
    data: { id: string; label: string }[];
    status: RequestStatusEnum;
    error: string | null;
}

export interface ToastTextSegment {
    text: string;
    href?: string; // Optional URL for making this segment clickable
    color?: 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'; // MUI color options
    sx?: Record<string, any>; // Custom styles using MUI's sx prop format
}

export interface ToastData {
    id: string;
    title: ToastTextSegment[]; // Array of text segments for the title
    description?: ToastTextSegment[]; // Array of text segments for the description
    type: PopupTypeEnum;
}

interface UiState {
    status: RequestStatusEnum;
    options: {
        [key: string]: OptionsState;
    };
    isPresetDialogOpen: boolean;
    loadingKeys: string[];
    toasts: {
        [key: string]: ToastData;
    };
}

const initialState: UiState = {
    status: RequestStatusEnum.IDLE,
    options: {},
    isPresetDialogOpen: false,
    loadingKeys: [],
    toasts: {},
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setOptionsLoading: (state, action: PayloadAction<{ key: string }>) => {
            state.options[action.payload.key] = {
                ...state.options[action.payload.key],
                status: RequestStatusEnum.LOADING,
                error: null
            };
        },
        setOptionsSuccess: (state, action: PayloadAction<{
            key: string;
            data: { id: string; label: string }[];
        }>) => {
            state.options[action.payload.key] = {
                data: action.payload.data,
                status: RequestStatusEnum.SUCCEEDED,
                error: null
            };
        },
        setOptionsError: (state, action: PayloadAction<{ key: string; error: string }>) => {
            state.options[action.payload.key] = {
                ...state.options[action.payload.key],
                status: RequestStatusEnum.FAILED,
                error: action.payload.error
            };
        },
        setIsPresetDialogOpen: (state, action: PayloadAction<boolean>) => {
            state.isPresetDialogOpen = action.payload;
        },
        addLoadingKey: (state, action: PayloadAction<string>) => {
            if (!state.loadingKeys.includes(action.payload)) {
                state.loadingKeys.push(action.payload);
            }
        },
        removeLoadingKey: (state, action: PayloadAction<string>) => {
            state.loadingKeys = state.loadingKeys.filter(key => key !== action.payload);
        },
        addToast: (state, action: PayloadAction<ToastData>) => {
            state.toasts[action.payload.id] = action.payload;
        },
        removeToast: (state, action: PayloadAction<string>) => {
            delete state.toasts[action.payload];
        },
    },
});

export const {
    addLoadingKey,
    removeLoadingKey,
    setOptionsLoading,
    setOptionsSuccess,
    setOptionsError,
    setIsPresetDialogOpen,
    addToast,
    removeToast
} = uiSlice.actions;

export default uiSlice.reducer;