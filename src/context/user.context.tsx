import { useState } from 'react';
import { UserContext } from './user.context.ts';
import type { UserProps } from './user.props.ts';

export function UserContextProvider({ children }: UserProps)
{
	const [user, setUser] = useState<string>('');

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{ children }
	    </UserContext.Provider>
	);
}