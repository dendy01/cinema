import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './assets/style.css';
import { UserContextProvider } from './context/user.context.jsx';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<UserContextProvider>
			<App />
		</UserContextProvider>
	</StrictMode>
);
