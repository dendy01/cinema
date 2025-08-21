import MovieCard from '../MovieCard/MovieCard';
import './MovieCards.css';

function MovieCards({ cards }) {
	return(
		<div className='movie-cards'>
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