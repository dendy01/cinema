import Title from "../../components/Title/Title";
import styles from './Favorites.module.css';
import classNames from "classnames";

function Favorites()
{
    return (
        <div className={ classNames(styles['favorites']) }>
            <Title>Избранное</Title>
        </div>
    );
}

export default Favorites;