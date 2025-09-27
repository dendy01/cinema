import classNames from "classnames";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { type MovieCardProps } from "../../components/MovieCard/MovieCard.props";
import MovieCards from "../../components/MovieCards/MovieCards";
import Title from "../../components/Title/Title";
import type { RootState } from "../../store/store";
import styles from './Favorites.module.css';

function Favorites()
{
    const [cards, setCards] = useState<MovieCardProps[]>([]);
    const currentUser = useSelector((state: RootState) => state.users.currentUser);

    useEffect(() => {
        const favoritesCards: MovieCardProps[] = JSON.parse(localStorage.getItem(`${currentUser} favorites`) as string);

        if (favoritesCards?.length > 0)
        {
            setCards(favoritesCards);
        }
    }, []);

    return (
        <div className={ classNames(styles['favorites']) }>
            <Title>Избранное</Title>

            <MovieCards cards={ cards }/>
        </div>
    );
}

export default Favorites;