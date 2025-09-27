import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import styles from './App.module.css';
import Header from './Layout/Header/Header.tsx';

function App()
{
	return (
		<div className={ classNames(styles['container']) }>
			<Header></Header>

			<div>
				<Outlet />
			</div>
		</div>
	);
}

export default App;
