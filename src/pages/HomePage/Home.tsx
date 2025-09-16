import Title from "../../components/Title/Title";
import Paragraph from "../../components/Paragraph/Paragraph";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import MovieCards from "../../components/MovieCards/MovieCards";
import classNames from "classnames";
import styles from './Home.module.css';
import { useRef } from "react";
import { cards } from "../../model/Cards";

function Home()
{
    const buttonRef = useRef<HTMLButtonElement>(null);

    return (
        <div>
            <div className={ classNames(styles['home-serch']) }>
                <Title>Поиск</Title>
                <Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
                <div className={ classNames(styles['home-serch__form']) }>
                    <Input
                        placeholder={ 'Введите название' }
                        inputType={ 'serch' }
                        isIcon={ true }
                    />
                    <Button ref={ buttonRef }
                    >
                        Искать
                    </Button>
                </div>
            </div>
            <MovieCards cards={ cards }/>
        </div>
    );
}

export default Home;