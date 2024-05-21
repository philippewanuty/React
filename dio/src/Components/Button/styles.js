import styled from 'styled-components';


export const MyButton = styled.button`

background-color: ${({ theme }) => theme.COLORS.PRIMARY};
	border: 1px solid;
	padding: 10px 20px;
	cursor: pointer;
`;