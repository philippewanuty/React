
import { ThemeButton } from '../../Components/Button';
import { useDarkMode}  from '../../styles/DarkModeProvider';
import { Container } from './styles';







function App() {

	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
	
				<Container>
					<div className='App'>
						<h1>Olá React</h1>
						<ThemeButton
							title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
							onClick={toggleDarkMode}
						/>
					</div>
				</Container>
	);
}

export default App;
