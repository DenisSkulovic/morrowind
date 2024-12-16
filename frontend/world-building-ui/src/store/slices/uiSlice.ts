import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RequestStatusEnum } from "../../enum/RequestStatusEnum";

interface OptionsState {
    data: { id: string; label: string }[];
    status: RequestStatusEnum;
    error: string | null;
}

interface UiState {
    status: RequestStatusEnum;
    options: {
        [key: string]: OptionsState;
    };
}

const initialState: UiState = {
    status: RequestStatusEnum.IDLE,
    options: {},
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
    },
});

export const { setOptionsLoading, setOptionsSuccess, setOptionsError } = uiSlice.actions;

export default uiSlice.reducer;