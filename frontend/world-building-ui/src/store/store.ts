import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './slices/accountSlice';
import contentReducer from './slices/contentSlice';
import generatorReducer from './slices/generatorSlice';
import uiReducer from './slices/uiSlice';
import worldReducer from './slices/worldSlice';
import dashboardReducer from './slices/dashboardSlice';
import dialogueReducer from './slices/dialogueSlice';

const store = configureStore({
    reducer: {
        account: accountReducer,
        content: contentReducer,
        generator: generatorReducer,
        ui: uiReducer,
        worlds: worldReducer,
        dashboard: dashboardReducer,
        dialogue: dialogueReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;