import styled from "styled-components";

export const ButtonContainer = styled.button`

	font-size: 24px;

	border: 1px solid #cdcdcd;

	background-color: ${({ theme }) => theme.COLORS.BLUE};

	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

	cursor: pointer;
	
	transition: background-color 0.2s;

	&:hover {
		opacity: 0.6;
	}

	
`;
