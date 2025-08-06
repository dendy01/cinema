import './Header.css';

function Header()
{
	return (
		<header className='header'>
			<img className='logo' src="/icons/logo-icon.svg" alt="logo" />

			<div className='links'>
				<a className='link' href="#">Поиск фильмов</a>
				<a className='link' href="#">Мои фильмы</a>
				<a className='link' href="#">
                    Войти
					<img className='login' src="/icons/login-icon.svg" alt="login" />
				</a>
			</div>
		</header>
	);
}

export default Header;