import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './assets/style.css';
import { UserContextProvider } from './context/user.context.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<UserContextProvider>
			<App />
		</UserContextProvider>
	</StrictMode>
);
