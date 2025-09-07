import classNames from 'classnames';
import { useContext, useEffect, useRef, useState } from 'react';
import styles from './App.module.css';
import Button from './components/Button/Button.tsx';
import Input from './components/Input/Input.tsx';
import Header from './components/Layout/Header/Header.tsx';
import MovieCards from './components/MovieCards/MovieCards.tsx';
import Paragraph from './components/Paragraph/Paragraph.tsx';
import Title from './components/Title/Title.tsx';
import { UserContext } from './context/user.context.ts';
import { cards } from './model/Cards.ts';

interface UserModel
{
	userName: string;
	isLogined: boolean;
}

function App() {
	const inputRef = useRef<HTMLInputElement>(null);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const [usersState, setUsersState] = useState<UserModel[]>([]);
	const [openState, setOpenState] = useState<boolean>(false);

	const { setUser } = useContext(UserContext);

	useEffect(() => {
		const users: UserModel[] = JSON.parse(localStorage.getItem('users') as string);

		if (users?.length)
		{
			const currentUser = users.find((item) => item.isLogined);
	
			setUser(currentUser?.userName || '');
			setUsersState(users);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('users', JSON.stringify(usersState));
	}, [usersState]);

	const login = () =>
	{
		if (!inputRef.current?.value)
		{
			inputRef.current?.focus();
		}
		else
		{
			const userStore = usersState.find((user) => user.userName === inputRef.current?.value);

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

			setOpenState(!openState);
			setUser(inputRef.current.value);
			inputRef.current.value = '';
		}
	};

	const logout = () =>
	{
		const updateUsers = usersState.map((user) => {
			return { ...user, isLogined: false };
		});

		setUsersState([...updateUsers]);
		setUser('');
	};

	const switchOpenLogin = () =>
	{
		setOpenState(!openState);
	};

	return (
		<div className={ classNames(styles['container']) }>
			<Header
				logout={ logout }
				switchOpenLogin={ switchOpenLogin }
			></Header>

			{
				openState ? <>
					<div className={ classNames(styles['app-login']) }>
						<Title>Вход</Title>
						<div className={ classNames(styles['app-login__form']) }>
							<Input
								placeholder={ 'Ваше имя' }
								inputType={ 'text' }
								isIcon={ false }
								ref={ inputRef }
							/>
							<Button onClick={ login }>
								Войти в профиль
							</Button>
						</div>
					</div>
				</> : <></>
			}

			<div className={ classNames(styles['app-serch']) }>
				<Title>Поиск</Title>
				<Paragraph>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</Paragraph>
				<div className={ classNames(styles['app-serch__form']) }>
					<Input
						placeholder={ 'Введите название' }
						inputType={ 'serch' }
						isIcon={ true }
					/>
					<Button ref={ buttonRef }
					>
						Искать
					</Button>
				</div>
			</div>
			<MovieCards cards={ cards }/>
		</div>
	);
}

export default App;
