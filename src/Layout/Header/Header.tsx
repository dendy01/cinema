import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button.tsx';
import { resetFavorites } from '../../store/movieSlice.ts';
import { type RootState } from '../../store/store.ts';
import { setUsers } from '../../store/userSlice.ts';
import styles from './Header.module.css';

function Header()
{
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const countFavorites = useSelector((state: RootState) => state.favorites.value);

	const users = useSelector((state: RootState) => state.users.users);
	const currentUser = useSelector((state: RootState) => state.users.currentUser);

	const logout = () =>
	{
		const updateUsers = users.map((user) => {
			return { ...user, isLogined: false };
		});

		dispatch(setUsers([...updateUsers]));
		dispatch(resetFavorites());

		navigate('/login');
	};

	return (
		<header className={ classNames(styles['header']) }>
			<img
				className={ classNames(styles['logo']) }
				src="/icons/logo-icon.svg"
				alt="logo"
			/>

			<div className={ classNames(styles['links']) }>
				<NavLink
					to={ '/' }
					className={ ({ isActive }) => classNames(styles['link'], {
						[styles['active-link']]: isActive
					}) }
				>
					Поиск фильмов
				</NavLink>
				<NavLink
					to={ '/favorites' }
					className={ ({ isActive }) => classNames(styles['link'], {
						[styles['active-link']]: isActive
					}) }
				>
					<span>Мои фильмы</span>
					<span className={ classNames(styles['link-count']) }>{ countFavorites }</span>
				</NavLink>

				{
					currentUser ? <>
						<Button buttonClass='button-link'>
							{ currentUser }
							<img
								className={ classNames(styles['user-icon']) }
								src="/icons/user-icon.svg"
								alt="user"
							/>
						</Button>
						<Button
							buttonClass='button-link'
							onClick={ logout }
						>
							Выйти
						</Button>
					</> : <>
						<NavLink
							to={ '/login' }
							className={ ({ isActive }) => classNames(styles['link'], {
								[styles['active-link']]: isActive
							}) }
						>
                    		Войти
							<img
								className={ classNames(styles['login']) }
								src="/icons/login-icon.svg"
								alt="login"
							/>
						</NavLink>
					</>
				}
			</div>
		</header>
	);
}

export default Header;