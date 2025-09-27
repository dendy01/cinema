import classNames from 'classnames';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addMovieInFavorites, removeMovieInFavorites } from '../../store/movieSlice.ts';
import type { RootState } from '../../store/store.ts';
import Button from '../Button/Button.tsx';
import styles from './MovieCard.module.css';
import { type MovieCardProps } from './MovieCard.props.ts';

function MovieCard({ card }: { card: MovieCardProps })
{
	const movieCard = useRef(null);

	const dispatch = useDispatch();
	const [isFavorite, setIsFavorite] = useState<Boolean>(false);
	const currentUser = useSelector((state: RootState) => state.users.currentUser);

	return (
		<div
			ref={ movieCard }
			className={ classNames(styles['movie-card']) }
		>
			<Link to={ `/movie/${card['#IMDB_ID']}` }>
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
			</Link>
			{
				(!isFavorite && !card.isFavorite) ?
				<Button
					icon={ '/icons/like-icon.svg' }
					buttonClass={ 'button-favorites' }
					onClick={ () => {
						setIsFavorite(true);
						dispatch(addMovieInFavorites({
							card,
							currentUser,
							isFavorite: !isFavorite
						}));
					} }
				>
					В избранное
				</Button> :
				<Button
					icon={ '/icons/bookmark-icon.svg' }
					buttonClass={ 'button-favorites' }
					buttonActive={ 'button-favorites__active' }
					onClick={ () => {
						setIsFavorite(false);
						dispatch(removeMovieInFavorites({
							card,
							currentUser
						}));
					} }
				>
					В избранном
				</Button>
			}
		</div>
	);
}

export default MovieCard;