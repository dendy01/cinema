import classNames from 'classnames';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MovieCards.module.css';

function MovieCards({ cards }) {
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