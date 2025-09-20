import axios from "axios";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import Error from "../components/Error/Error.tsx";
import { PREFIX } from "../helpers/API.ts";
import RequireAuth from "../helpers/RequireAuth.tsx";
import Favorites from "../pages/FavoritesPage/Favorites.tsx";
import Login from "../pages/LoginPage/Login.tsx";

const Home = lazy(() => import("../pages/HomePage/Home.tsx"));
const Movie = lazy(() => import("../pages/MoviePage/Movie.tsx"));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <RequireAuth><Home /></RequireAuth>
            },
            {
                path: '/favorites',
                element: <RequireAuth><Favorites /></RequireAuth>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/movie/:id',
                element: <RequireAuth><Movie /></RequireAuth>,
                errorElement: <Error />,
                loader: async ({ params }) => {
                    return {
                        movie: await axios.get(`${ PREFIX }/?tt=${ params.id }`)
                    }
                }
            }
        ]
    }
]);