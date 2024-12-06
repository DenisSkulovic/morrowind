import { configureStore } from '@reduxjs/toolkit';
import worldReducer from './slices/worldSlice';
import contentReducer from './slices/contentSlice';

const store = configureStore({
    reducer: {
        worlds: worldReducer,
        content: contentReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;