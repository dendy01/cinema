import classNames from "classnames";
import { useContext, useEffect, useState } from "react";
import { type MovieCardProps } from "../../components/MovieCard/MovieCard.props";
import MovieCards from "../../components/MovieCards/MovieCards";
import Title from "../../components/Title/Title";
import { UserContext } from "../../context/user.context";
import styles from './Favorites.module.css';

function Favorites()
{
    const [cards, setCards] = useState<MovieCardProps[]>([]);
    const { currentUser } = useContext(UserContext);

    useEffect(() => {
        const favoritesCards: MovieCardProps[] = JSON.parse(localStorage.getItem(`${currentUser} favorites`));

        if (favoritesCards.length > 0)
        {
            setCards(favoritesCards);
        }

        console.log(cards);
    }, []);

    return (
        <div className={ classNames(styles['favorites']) }>
            <Title>Избранное</Title>

            <MovieCards cards={ cards }/>
        </div>
    );
}

export default Favorites;