import { MyButton } from './styles';
import { useDarkMode } from '../../styles/DarkModeProvider';

export function ThemeButton({ title, onClick }) {

	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<>
			<MyButton onClick={toggleDarkMode}>
				{title}
			</MyButton>
		</>
	);
}
