import classNames from 'classnames';
import { Suspense } from 'react';
import type { MovieCardProps } from '../MovieCard/MovieCard.props.ts';
import MovieCard from '../MovieCard/MovieCard.tsx';
import styles from './MovieCards.module.css';

interface MovieCards
{
	cards: MovieCardProps[];
}

function MovieCards({ cards }: MovieCards)
{
	return(
		<Suspense fallback={ <div>Загрузка...</div> }>
			<div className={ classNames(styles['movie-cards']) }>
				{
					cards.map((card: MovieCardProps) => {
						return(
							<MovieCard
								key={ card['#IMDB_ID'] }
								card={ card }
							/>
						);
					})
				}
			</div>
		</Suspense>
	);
}

export default MovieCards;