import { useParams } from "react-router-dom";
import Title from "../../components/Title/Title";
import styles from './Movie.module.css';
import classNames from "classnames";

function Movie()
{
    const { title } = useParams();

    return (
        <div className={ classNames(styles['movie']) }>
            <Title>{ title }</Title>
        </div>
    );
}

export default Movie;