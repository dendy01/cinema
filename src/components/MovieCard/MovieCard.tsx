import classNames from 'classnames';
import Button from '../Button/Button.tsx';
import styles from './MovieCard.module.css';
import type { MovieCardProps } from './MovieCard.props.ts';

function MovieCard({ title, stars, image, inFavorites }: MovieCardProps) {
	return (
		<div className={ classNames(styles['movie-card']) }>
			<p className={ classNames(styles['movie-card__stars']) }>
				<img
					className={ classNames(styles['stars-icon']) }
					src="/icons/star-icon.svg"
					alt="star"
				/>
				<span className={ classNames(styles['srars-count']) }>{ stars }</span>
			</p>
			<img 
				className={ classNames(styles['movie-card__image']) }
				src={ image }
				alt={ title }
			/>
			<h2 className={ classNames(styles['movie-card__title']) }>{ title }</h2>
			<Button
				icon={ inFavorites ? '/icons/bookmark-icon.svg' : '/icons/like-icon.svg' }
				buttonClass={ 'button-favorites' }
				buttonActive={ inFavorites ? 'button-favorites__active' : '' }
			>
				{ inFavorites ? 'В избранном' : 'В избранное' }
			</Button>
		</div>
	);
}

export default MovieCard;