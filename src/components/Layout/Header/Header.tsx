import classNames from 'classnames';
import { useContext } from 'react';
import { UserContext } from '../../../context/user.context.ts';
import styles from './Header.module.css';
import type { HeaderProps } from './Header.props.ts';

function Header({ logout, switchOpenLogin }: HeaderProps)
{
	const { user } = useContext(UserContext);

	return (
		<header className={ classNames(styles['header']) }>
			<img
				className={ classNames(styles['logo']) }
				src="/icons/logo-icon.svg"
				alt="logo"
			/>

			<div className={ classNames(styles['links']) }>
				<a
					className={ classNames(styles['link']) }
					href="#"
				>
					Поиск фильмов
				</a>
				<a 
					className={ classNames(styles['link']) }
					href="#"
				>
					Мои фильмы
				</a>

				{
					user ? <>
						<a
							className={ classNames(styles['link']) }
							href="#"
						>
							{ user }
							<img
								className={ classNames(styles['login']) }
								src="/icons/user-icon.svg"
								alt="user"
							/>
						</a>
						<a
							className={ classNames(styles['link']) }
							href="#"
							onClick={ logout }
						>
							Выйти
						</a>
					</> : <>
						<a
							className={ classNames(styles['link']) }
							href="#"
							onClick={ switchOpenLogin }
						>
                    		Войти
							<img
								className={ classNames(styles['login']) }
								src="/icons/login-icon.svg"
								alt="login"
							/>
						</a>
					</>
				}
			</div>
		</header>
	);
}

export default Header;