import GlobalStyles from './assets/styles/Global';
import { DarkModeProvider } from './assets/styles/DarkModeProvider';
import Home from './Pages/home';

export function App({}) {
	return (
		<>
			<DarkModeProvider>
				<GlobalStyles />
				<Home /> 
			</DarkModeProvider>
		</>
	);
}

//no Home será incluso o futuro Routes
