import { useEffect, useState } from 'react';
import { UserContext } from './user.context.js';

export function UserContextProvider({ children })
{
	const [user, setUser] = useState('');

	useEffect(() => {
		const users = JSON.parse(localStorage.getItem('users'));

		if (users?.length)
		{
			const currentUser = users.find((item) => item.isLogined);

			setUser(currentUser?.userName);
		}
	}, []);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{ children }
	    </UserContext.Provider>
	);
}