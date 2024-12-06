import { configureStore } from '@reduxjs/toolkit';
import worldReducer from './slices/worldSlice';
import contentReducer from './slices/contentSlice';
import generatorReducer from './slices/generatorSlice';
const store = configureStore({
    reducer: {
        worlds: worldReducer,
        content: contentReducer,
        generator: generatorReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;