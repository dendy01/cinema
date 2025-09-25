import classNames from 'classnames';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button.tsx';
import { UserContext } from '../../context/user.context.ts';
import { type RootState } from '../../store/store.ts';
import styles from './Header.module.css';

function Header()
{
	const navigate = useNavigate();
	const { users, setUsers, currentUser, setCurrentUser } = useContext(UserContext);
	const count = useSelector((state: RootState) => state.counter.value);

	const logout = () =>
	{
		const updateUsers = users.map((user) => {
			return { ...user, isLogined: false };
		});

		setUsers([...updateUsers]);
		setCurrentUser('');

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
					<span className={ classNames(styles['link-count']) }>{ count }</span>
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