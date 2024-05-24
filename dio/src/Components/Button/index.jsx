import { MyButton } from './styles';
import { useDarkMode } from '../../styles/DarkModeProvider';

export function ThemeButton({ title, onClick }) {

	const { isDarkMode, toggleDarkMode } = useDarkMode();

	return (
		<>
			<MyButton
				className='ThemeButton'
				onClick={toggleDarkMode}>
				{title}
			</MyButton>
		</>
	);
}
