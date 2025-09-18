import classNames from "classnames";
import Title from "../Title/Title";
import styles from './Error.module.css';

function Error()
{
    return (
        <div className={ classNames(styles['error']) }>
            <Title>Упс... Ничего не найдено</Title>
            <p className={ classNames(styles['error-text']) }>Попробуйте изменить запрос или ввести более точное <br /> название фильма</p>
        </div>
    );
}

export default Error;