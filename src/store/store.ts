import { configureStore } from "@reduxjs/toolkit";
import movieReducer from './movieSlice';
import userReducer from './userSlice';

export const store = configureStore({
    reducer: {
        favorites: movieReducer,
        users: userReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch