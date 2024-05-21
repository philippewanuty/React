
import { createContext, useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			<ThemeProvider theme={isDarkMode ? theme.dark : theme.light}>{children}</ThemeProvider>
		</DarkModeContext.Provider>
	);
};

export const useDarkMode = () => useContext(DarkModeContext);
