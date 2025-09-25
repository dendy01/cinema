import classNames from 'classnames';
import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/user.context.ts';
import { addMovieInFavorites, removeMovieInFavorites } from '../../store/counterSlice.ts';
import Button from '../Button/Button.tsx';
import styles from './MovieCard.module.css';
import { type MovieCardProps } from './MovieCard.props.ts';

function MovieCard({ card }: { card: MovieCardProps })
{
	const dispatch = useDispatch();
	const [isFavorite, setIsFavorite] = useState<Boolean>(false);
	const { currentUser } = useContext(UserContext);

	return (
		<div className={ classNames(styles['movie-card']) }>
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
				!isFavorite ?
				<Button
					icon={ '/icons/like-icon.svg' }
					buttonClass={ 'button-favorites' }
					onClick={ () => {
						setIsFavorite(true);
						console.log(currentUser);
						dispatch(addMovieInFavorites({
							card,
							currentUser
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
						console.log(currentUser);
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