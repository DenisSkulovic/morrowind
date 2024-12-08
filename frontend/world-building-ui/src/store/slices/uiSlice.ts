import { createSlice } from "@reduxjs/toolkit";

interface UiState {
    isLoading: boolean;
}

const initialState: UiState = {
    isLoading: false,
};

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {},
});

export default uiSlice.reducer;