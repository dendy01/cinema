import classNames from 'classnames';
import styles from './Header.module.css';

function Header()
{
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
				<a
					className={ classNames(styles['link']) }
					href="#"
				>
                    Войти
					<img
						className={ classNames(styles['login']) }
						src="/icons/login-icon.svg"
						alt="login"
					/>
				</a>
			</div>
		</header>
	);
}

export default Header;