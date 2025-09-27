import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import { UserContextProvider } from './context/user.context.tsx';
import Header from './Layout/Header/Header.tsx';

function App()
{
	return (
		<UserContextProvider>
			<div className={ classNames(styles['container']) }>
				<Header></Header>

				<div>
					<Outlet />
				</div>
			</div>
		</UserContextProvider>
	);
}

export default App;
