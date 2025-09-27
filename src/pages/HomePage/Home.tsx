import axios from "axios";
import classNames from "classnames";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/Button/Button";
import Error from "../../components/Error/Error";
import Input from "../../components/Input/Input";
import Loader from "../../components/Loader/Loader";
import { type MovieCardProps } from "../../components/MovieCard/MovieCard.props";
import Paragraph from "../../components/Paragraph/Paragraph";
import Title from "../../components/Title/Title";
import { PREFIX } from "../../helpers/API";
import { initializeFavorites } from "../../store/movieSlice";
import type { RootState } from "../../store/store";
import styles from './Home.module.css';

function Home()
{
    const MovieCards = lazy(() => import('../../components/MovieCards/MovieCards'));

    const buttonRef = useRef<HTMLButtonElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.favorites.favorites);
    const currentUser = useSelector((state: RootState) => state.users.currentUser);
    
    const [cards, setCards] = useState<MovieCardProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);

    useEffect(() => {
        getMovie();
    }, []);

    useEffect(() => {
        if (!currentUser)
        {
            return;
        }

        const localFavorites = localStorage.getItem(`${currentUser} favorites`);
        
        if (!localFavorites)
        {
            if (favorites.length > 0)
            {
                dispatch(initializeFavorites([]));
            }
            return;
        }

        const parsedFavorites = JSON.parse(localFavorites);
        
        if (JSON.stringify(parsedFavorites) !== JSON.stringify(favorites))
        {
            dispatch(initializeFavorites(parsedFavorites));
        }
    }, [currentUser]);

    const getMovie = async () =>
    {
        try
        {
            setIsLoading(true);

            const response = await axios.get(`${ PREFIX }/?q=Advancer'`);

            if (!response.data.description.length)
            {
                setIsError(true);
                setCards(response.data.description);
                
                return;
            }

            setCards(response.data.description);
            setIsLoading(false);
        }
        catch (error)
        {
            setIsLoading(false);
            setIsError(true);

            console.error(error);
            return;
        }
    };

    const serchMovie = async () =>
    {
        try
        {
            setIsLoading(true);
            const response = await axios.get(`${ PREFIX }/?q=${ inputRef.current?.value }`);

            if (!response.data.description.length)
            {
                setIsError(true);
                setCards(response.data.description);
                
                return;
            }

            setCards(response.data.description);
            setIsLoading(false);
        }
        catch (error)
        {
            setIsError(true);
            setIsLoading(false);

            console.error(error);
            return;
        }
        finally
        {
            if (inputRef.current)
            {
                inputRef.current.value = '';
            }
        }
    };

    return (
        <div>
            <div className={ classNames(styles['home-serch']) }>
                <Title>Поиск</Title>
                <Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
                <div className={ classNames(styles['home-serch__form']) }>
                    <Input
                        ref={ inputRef }
                        placeholder={ 'Введите название' }
                        inputType={ 'serch' }
                        isIcon={ true }
                    />
                    <Button
                        ref={ buttonRef }
                        onClick={ serchMovie }
                    >
                        Искать
                    </Button>
                </div>
            </div>

            <Suspense fallback={ <Loader /> }>
                { isLoading && <Loader />}
                { (!isLoading && !isError) && <MovieCards cards={ cards }/> }
                { (!isLoading && isError) && <Error /> }
            </Suspense>
        </div>
    );
}

export default Home;