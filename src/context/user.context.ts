import { createContext } from 'react';
import type { UserModel } from './user.props';

export const UserContext = createContext({
	users: [] as UserModel[],
	setUsers: (users: UserModel[]) => {},
	currentUser: '',
	setCurrentUser: (user: string) => {}
});