import Button from '../Button/Button';
import './MovieCard.css';

function MovieCard({ title, stars, image, inFavorites }) {
	return (
		<div className='movie-card'>
			<p className='movie-card__stars'>
				<img
					className='stars-icon'
					src="/icons/star-icon.svg"
					alt="star"
				/>
				<span className='srars-count'>{ stars }</span>
			</p>
			<img 
				className='movie-card__image'
				src={ image }
				alt={ title }
			/>
			<h2 className='movie-card__title'>{ title }</h2>
			<Button 
				text={ inFavorites ? 'В избранном' : 'В избранное' }
				icon={ inFavorites ? '/icons/bookmark-icon.svg' : '/icons/like-icon.svg' }
				buttonClass={ inFavorites ? 'button-favorites button-favorites__active' : 'button-favorites' }
			/>
		</div>
	);
}

export default MovieCard;