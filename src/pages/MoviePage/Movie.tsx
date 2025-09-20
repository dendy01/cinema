import classNames from "classnames";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Title from "../../components/Title/Title";
import styles from './Movie.module.css';

function Movie()
{
    const movie = useLoaderData();

    return (
        <Suspense>
            <Await resolve={ movie.movie.data }>
                {
                    (movie) => {
                        return (
                            <div className={ classNames(styles['movie']) }>
                                <Title>{ movie.short.name }</Title>
                            </div>
                        );
                    }
                }
            </Await>
        </Suspense>
    );
}

export default Movie;