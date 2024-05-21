import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import theme from './styles/theme';
import GlobalStyles from './styles/Global';
import { ThemeProvider } from 'styled-components';
import App from './Pages/home/App';
import { DarkModeProvider } from './styles/DarkModeProvider';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<DarkModeProvider>
			<GlobalStyles />
        <App />
    </DarkModeProvider>
	</React.StrictMode>
);

