import classNames from "classnames";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import Title from "../../components/Title/Title";
import type { RootState } from "../../store/store";
import { setUsers } from "../../store/userSlice";
import styles from './Login.module.css';

function Login()
{
    const inputRef = useRef<HTMLInputElement>(null);
	const navigate = useNavigate();

	const dispatchUsers = useDispatch();
	const users = useSelector((state: RootState) => state.users.users);

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

				dispatchUsers(setUsers([ ...updateUsers ]));
			}
			else
			{
				const updateUsers = users.map((user) => {
					return { ...user, isLogined: false };
				});

				dispatchUsers(setUsers([ ...updateUsers, {
					userName: inputRef.current.value,
					isLogined: true
				} ]));
			}

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