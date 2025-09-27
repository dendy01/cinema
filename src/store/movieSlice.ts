import { createSlice } from "@reduxjs/toolkit";
import { type MovieCardProps } from "../components/MovieCard/MovieCard.props";

export interface CounterState {
    value: number,
    favorites: MovieCardProps[],
}

const initialState = {
    value: 0,
    favorites: []
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addMovieInFavorites: (state, action) => {
            const { card, currentUser, isFavorite } = action.payload;

            state.value += 1;

            console.log(currentUser);

            state.favorites = [...state.favorites, {
                ...card,
                isFavorite
            }];
            localStorage.setItem(`${ currentUser } favorites`, JSON.stringify(state.favorites));
        },
        removeMovieInFavorites: (state, action) => {
            const { card, currentUser } = action.payload;

            state.value -= 1;

            state.favorites = state.favorites.filter((movie) => movie['#IMDB_ID'] !== card['#IMDB_ID']);
            localStorage.setItem(`${ currentUser } favorites`, JSON.stringify(state.favorites));
        },
        initializeFavorites: (state, action) => {
            console.log(action.payload);

            state.value = action.payload?.length || 0;
            state.favorites = action.payload;
        }
    }
});

export const {
    addMovieInFavorites,
    removeMovieInFavorites,
    initializeFavorites
} = counterSlice.actions;

export default counterSlice.reducer;