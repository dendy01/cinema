import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Header from './components/Layout/Header/Header';
import MovieCards from './components/MovieCards/MovieCards';
import Paragraph from './components/Paragraph/Paragraph';
import Title from './components/Title/Title';
import { cards } from './model/Cards';

function App() {
	const inputRef = useRef(null);
	const buttonRef = useRef(null);
	const [usersState, setUsersState] = useState([]);
	const [currentUserState, setCurrentUserState] = useState('');
	const [openState, setOpenState] = useState(false);

	useEffect(() => {
		const users = JSON.parse(localStorage.getItem('users'));

		if (users?.length)
		{
			const currentUser = users.find((item) => item.isLogined);

			setUsersState(users);
			setCurrentUserState(currentUser?.userName);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(usersState));
	}, [usersState]);

	const login = () =>
	{
		if (!inputRef.current.value)
		{
			inputRef.current.focus();
		}
		else
		{
			const userStore = usersState.find((user) => user.userName === inputRef.current.value);

			if (userStore)
			{
				const updateUsers = usersState.map((user) => {
					return { ...user, isLogined: user.userName === userStore.userName };
				});

				setUsersState([ ...updateUsers ]);
			}
			else
			{
				const updateUsers = usersState.map((user) => {
					return { ...user, isLogined: false };
				});

				setUsersState([ ...updateUsers, {
					userName: inputRef.current.value,
					isLogined: true
				} ]);
			}

			setCurrentUserState(inputRef.current.value);
			setOpenState(!openState);
			inputRef.current.value = '';
		}
	};

	const logout = () =>
	{
		const updateUsers = usersState.map((user) => {
			return { ...user, isLogined: false };
		});

		setUsersState([...updateUsers]);
		setCurrentUserState('');
	};

	const switchOpenLogin = () =>
	{
		setOpenState(!openState);
	};

	const handleClick = () =>
	{
		console.log(buttonRef.current);
	};

	return (
		<div className={ classNames(styles['container']) }>
			<Header
				user={ currentUserState }
				logout={ logout }
				switchOpenLogin={ switchOpenLogin }
			></Header>

			{
				openState ? <>
					<div className={ classNames(styles['app-login']) }>
						<Title text={ 'Вход' }/>
						<div className={ classNames(styles['app-login__form']) }>
							<Input
								placeholder={ 'Ваше имя' }
								inputType={ 'text' }
								isIcon={ false }
								ref={ inputRef }
							/>
							<Button
								text={ 'Войти в профиль' }
								onClick={ login }
							/>
						</div>
					</div>
				</> : <></>
			}

			<div className={ classNames(styles['app-serch']) }>
				<Title text={ 'Поиск' }/>
				<Paragraph text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}/>
				<div className={ classNames(styles['app-serch__form']) }>
					<Input
						placeholder={ 'Введите название' }
						inputType={ 'serch' }
						isIcon={ true }
					/>
					<Button
						text={ 'Искать' }
						ref={ buttonRef }
						onClick={ handleClick }
					/>
				</div>
			</div>
			<MovieCards cards={ cards }/>
		</div>
	);
}

export default App;
