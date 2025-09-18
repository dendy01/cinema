import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Button from '../Button/Button.tsx';
import styles from './MovieCard.module.css';
import type { MovieCardProps } from './MovieCard.props.ts';

function MovieCard({ card }: { card: MovieCardProps }) {
	return (
		<Link to={ `/movie/${card['#IMDB_ID']}` }>
			<div className={ classNames(styles['movie-card']) }>
				<p className={ classNames(styles['movie-card__stars']) }>
					<img
						className={ classNames(styles['stars-icon']) }
						src="/icons/star-icon.svg"
						alt="star"
					/>
					<span className={ classNames(styles['srars-count']) }>{ card['#RANK'] }</span>
				</p>
				<img
					className={ classNames(styles['movie-card__image']) }
					src={ card['#IMG_POSTER'] }
					alt={ card['#TITLE'] }
				/>
				<h2 className={ classNames(styles['movie-card__title']) }>{ card['#TITLE'] }</h2>
				<Button
					icon={ '/icons/like-icon.svg' }
					buttonClass={ 'button-favorites' }
				>
					В избранное
				</Button>
			</div>
		</Link>
	);
}

export default MovieCard;