import classNames from 'classnames';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context.ts';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import Button from '../../components/Button/Button.tsx';

function Header()
{
	const { users, setUsers, currentUser, setCurrentUser } = useContext(UserContext);

	const logout = () =>
	{
		const updateUsers = users.map((user) => {
			return { ...user, isLogined: false };
		});

		setUsers([...updateUsers]);
		setCurrentUser('');
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
					to={ '/home' }
					className={ classNames(styles['link']) }
				>
					Поиск фильмов
				</NavLink>
				<NavLink
					to={ '/favorites' }
					className={ classNames(styles['link']) }
				>
					Мои фильмы
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
							className={ classNames(styles['link']) }
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