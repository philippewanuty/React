import styled from "styled-components";


export const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;

	align-items: center;
	justify-content: center;
`;


export const Content = styled.div`

display: flex;
flex-direction: column;

background-color: #fafafa;

width: 400px;
height: 410px;


`;

export const ButtonsContainer = styled.div`

display: flex;
align-items: center;
justify-content: center;
`;


export const Numbers = styled.div`


	display: grid;
	grid-template-columns: repeat(3, 80px);
	grid-template-rows: repeat(4, 80px);
	

	Button:nth-child(10) {
		grid-column: 1/3;
	}
`;

export const Operators = styled.div`
	

	display: grid;
	grid-template-columns: repeat(2, 80px);
	grid-template-rows: repeat(4, 80px);
	

	Button:nth-child(6) {
		grid-row: 3/5;
		grid-column: 1/2 ;
	}

`;


