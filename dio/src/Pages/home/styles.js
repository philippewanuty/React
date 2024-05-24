import styled from 'styled-components';



export const Container = styled.div`
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
	color: ${({ theme }) => theme.COLORS.PRIMARY};

	width: 100%;
	height: 100vh;

	padding: 20px;

  div:nth-child(1){

  display: flex;
  justify-content: space-between;

}

	div {
		padding-top: 20px;
	}

	h2 {
		margin: 20px;
	}

  p {
    margin: 5px;
  }

  li {
     margin: 5px;
     list-style: none;
  
  }

	.ThemeButton {

		border-radius: 9px;


	}
`;

