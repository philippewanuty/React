import { MyButton } from './styles';
import { useDarkMode } from '../../assets/styles/DarkModeProvider';

export function ThemeButton({ title, className }) {
	const { toggleDarkMode } = useDarkMode();

	return (
		<>
			<MyButton
				className={className}
				onClick={toggleDarkMode}>
				{title}
			</MyButton>
		</>
	);
}
