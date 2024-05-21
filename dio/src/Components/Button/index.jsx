import { MyButton } from './styles';

export function ThemeButton({ title, onClick }) {
	return (
		<>
			<MyButton onClick={onClick}>
				{title}
			</MyButton>
		</>
	);
}
