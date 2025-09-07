import classNames from 'classnames';
import type { MovieCardProps } from '../MovieCard/MovieCard.props.ts';
import MovieCard from '../MovieCard/MovieCard.tsx';
import styles from './MovieCards.module.css';

interface MovieCards
{
	cards: MovieCardProps[];
}

function MovieCards({ cards }: MovieCards) {
	return(
		<div className={ classNames(styles['movie-cards']) }>
			{
				cards.map((card) => {
					return(
						<MovieCard
							key={ card.id }
							title={ card.title }
							stars={ card.stars }
							image={ card.image }
							inFavorites={ card.inFavorites }
						/>
					);
				})
			}
		</div>
	);
}

export default MovieCards;