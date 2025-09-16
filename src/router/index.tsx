import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Home from "../pages/HomePage/Home.tsx";
import Favorites from "../pages/FavoritesPage/Favorites.tsx";
import Login from "../pages/LoginPage/Login.tsx";
import Movie from "../pages/MoviePage/Movie.tsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/favorites',
                element: <Favorites />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/movie/:id',
                element: <Movie />
            }
        ]
    }
]);