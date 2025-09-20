import { useEffect, useState } from 'react';
import { UserContext } from './user.context.ts';
import type { UserModel, UserProps } from './user.props.ts';

export function UserContextProvider({ children }: UserProps)
{
    const [users, setUsers] = useState<UserModel[]>([]);
    const [currentUser, setCurrentUser] = useState<string>('');

    useEffect(() => {
        const usersStore: UserModel[] = JSON.parse(localStorage.getItem('users') || '[]');

        if (usersStore?.length)
        {
            const currentUser = usersStore.find((item) => item.isLogined);
    
            setCurrentUser(currentUser?.userName || '');
            setUsers(usersStore);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('users', JSON.stringify(users));
    }, [users]);

    return (
        <UserContext.Provider value={{ users, setUsers, currentUser, setCurrentUser }}>
            { children }
        </UserContext.Provider>
    );
}