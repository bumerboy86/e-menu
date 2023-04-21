import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products.slice';

export const store = configureStore({
    reducer: {
        magazine: productsSlice,
    },
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;