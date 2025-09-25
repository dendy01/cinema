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
            const { card, currentUser } = action.payload;

            state.value += 1;

            console.log(currentUser);

            state.favorites = [...state.favorites, card];
            localStorage.setItem(`${ currentUser } favorites`, JSON.stringify(state.favorites));
        },
        removeMovieInFavorites: (state, action) => {
            const { card, currentUser } = action.payload;

            state.value -= 1;

            state.favorites = state.favorites.filter((movie) => movie['#IMDB_ID'] !== card['#IMDB_ID']);
            localStorage.setItem(`${ currentUser } favorites`, JSON.stringify(state.favorites));
        }
    }
});

export const {
    addMovieInFavorites,
    removeMovieInFavorites
} = counterSlice.actions;

export default counterSlice.reducer;