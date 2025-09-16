import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import styles from './Movie.module.css';
import classNames from "classnames";

function Movie()
{
    const { id } = useParams();

    return (
        <div className={ classNames(styles['movie']) }>
            <Title>{ id }</Title>
        </div>
    );
}

export default Movie;