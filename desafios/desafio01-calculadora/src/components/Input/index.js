import { Container } from "./styles";

export function Input({ value }) {
	
	return (
		<Container>
			<input
				disabled
				value={value}
			/>
		</Container>
	);
}
