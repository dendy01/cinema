import { createSlice } from "@reduxjs/toolkit";
import { type MovieCardProps } from "../components/MovieCard/MovieCard.props";

export interface movieState {
    value: number,
    favorites: MovieCardProps[],
}

const initialState: movieState = {
    value: 0,
    favorites: []
}

export const movieSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addMovieInFavorites: (state, action) => {
            const { card, currentUser, isFavorite } = action.payload;

            state.value += 1;

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
            state.value = action.payload?.length || 0;
            state.favorites = action.payload;
        },
        resetFavorites: (state) => {
            state.value = 0;
            state.favorites = []
        }
    }
});

export const {
    addMovieInFavorites,
    removeMovieInFavorites,
    initializeFavorites,
    resetFavorites
} = movieSlice.actions;

export default movieSlice.reducer;