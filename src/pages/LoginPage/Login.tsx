import classNames from "classnames";
import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import { UserContext } from "../../context/user.context";
import styles from './Login.module.css';

function Login()
{
    const inputRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

    const { users, setUsers, setCurrentUser } = useContext(UserContext);

    const login = () =>
	{
		if (!inputRef.current?.value)
		{
			inputRef.current?.focus();
		}
		else
		{
			const userStore = users.find((user) => user.userName === inputRef.current?.value);

			if (userStore)
			{
				const updateUsers = users.map((user) => {
					return { ...user, isLogined: user.userName === userStore.userName };
				});

				setUsers([ ...updateUsers ]);
			}
			else
			{
				const updateUsers = users.map((user) => {
					return { ...user, isLogined: false };
				});

				setUsers([ ...updateUsers, {
					userName: inputRef.current.value,
					isLogined: true
				} ]);
			}

			setCurrentUser(inputRef.current.value);
			inputRef.current.value = '';

			navigate('/');
		}
	};

    return (
        <div className={ classNames(styles['login']) }>
            <Title>Вход</Title>

            <div className={ classNames(styles['login-form']) }>
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
    );
}

export default Login;