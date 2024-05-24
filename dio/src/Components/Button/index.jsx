import { MyButton } from './styles';
import { useDarkMode } from '../../styles/DarkModeProvider';

export function ThemeButton({ title, onClick, className }) {

	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<>
			<MyButton
				className= {className}
				onClick={toggleDarkMode}>
				{title}
			</MyButton>
		</>
	);
}
