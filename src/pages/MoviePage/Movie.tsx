import classNames from "classnames";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from './Movie.module.css';

type EntityKeys = '&apos;' | '&quot;' | '&amp;' | '&lt;' | '&gt;' | '&nbsp;';
type HtmlEntitiesMap = Record<EntityKeys, string>;

function Movie()
{
    const movie = useLoaderData();

    const decodeHTMLEntities = (text: string): string =>
    {
        const entities: HtmlEntitiesMap = {
            '&apos;': "'",
            '&quot;': '"',
            '&amp;': '&',
            '&lt;': '<',
            '&gt;': '>',
            '&nbsp;': ' '
        };
        
        return text.replace(/&[^;]+;/g, entity => entities[entity as EntityKeys] || entity);
    };

    const decodeTimeDuration = (time: string): string => {
        console.log(time);
        
        if (time.startsWith('PT')) {
            const hoursMatch = time.match(/(\d+)H/);
            const minutesMatch = time.match(/(\d+)M/);
            const secondsMatch = time.match(/(\d+)S/);
            
            const hours = hoursMatch ? parseInt(hoursMatch[1]) : 0;
            const minutes = minutesMatch ? parseInt(minutesMatch[1]) : 0;
            const seconds = secondsMatch ? parseInt(secondsMatch[1]) : 0;
            
            const totalMinutes = hours * 60 + minutes + Math.round(seconds / 60);
            
            return `${totalMinutes} мин`;
        }
        
        return time;
    };

    return (
        <Suspense>
            <Await resolve={ movie.movie.data }>
                {
                    (movie) => {
                        return (
                            <div className={ classNames(styles['movie']) }>
                                <div className={ classNames(styles['movie-title']) }>
                                    <p className={ classNames(styles['movie-title__paragraph']) }>Поиск фильмов</p>
                                    <h1 className={ classNames(styles['movie-title__heading']) }>{ movie.short.name }</h1>
                                </div>

                                <div className={ classNames(styles['movie-card']) }>
                                    <div className={ classNames(styles['movie-card__image']) }>
                                        <img
                                            src={ movie.short.image }
                                            alt={ movie.short.name }
                                            className={ classNames(styles['image']) }
                                        />
                                    </div>
                                    <div className={ classNames(styles['movie-card__info']) }>
                                        <p className={ classNames(styles['info-description']) }>{ movie.short.description }</p>
                                        <div className={ classNames(styles['info-rating']) }>
                                            <span className={ classNames(styles['rating']) }>
                                                <img
                                                    className={ classNames(styles['stars-icon']) }
                                                    src="/icons/star-icon.svg"
                                                    alt="star"
                                                />
                                                { movie.short.aggregateRating.ratingValue }
                                            </span>
                                            <Button
                                                icon={ '/icons/like-icon.svg' }
                                                buttonClass={ 'button-favorites' }
                                            >
                                                В избранное
                                            </Button>
                                        </div>

                                        <ul className={ classNames(styles['info-list']) }>
                                            <li className={ classNames(styles['info-list__type']) }>
                                                <p className={ classNames(styles['type-subtitle']) }>Тип</p>
                                                <p className={ classNames(styles['type-title']) }>{ movie.short.review.itemReviewed['@type'] }</p>
                                            </li>
                                            <li className={ classNames(styles['info-list__type']) }>
                                                <p className={ classNames(styles['type-subtitle']) }>Дата выхода</p>
                                                <p className={ classNames(styles['type-title']) }>{ movie.short.datePublished }</p>
                                            </li>
                                            <li className={ classNames(styles['info-list__type']) }>
                                                <p className={ classNames(styles['type-subtitle']) }>Длительность</p>
                                                <p className={ classNames(styles['type-title']) }>{ decodeTimeDuration(movie.short.trailer.duration) }</p>
                                            </li>
                                            <li className={ classNames(styles['info-list__type']) }>
                                                <p className={ classNames(styles['type-subtitle']) }>Жанр</p>
                                                <p className={ classNames(styles['type-title']) }>{ movie.short.genre.join(', ') }</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className={ classNames(styles['movie-review']) }>
                                    <p className={ classNames(styles['movie-review__subtitle']) }>Отзывы</p>
                                    <div className={ classNames(styles['movie-review__description']) }>
                                        <div className={ classNames(styles['movie-review__head']) }>
                                            <h2 className={ classNames(styles['head-title']) }>{ movie.short.review.name }</h2>
                                            <p className={ classNames(styles['head-date']) }>{ movie.short.review.dateCreated }</p>
                                        </div>
                                        <p className={ classNames(styles['movie-review__footer']) }>{ decodeHTMLEntities(movie.short.review.reviewBody) }</p>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                }
            </Await>
        </Suspense>
    );
}

export default Movie;